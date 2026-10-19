/**
 * Core Application Logic - Website Học Tập Tương Tác Thiết Kế Web
 * Tác giả: Chuyên gia Phát triển Web & Giảng viên Lập trình
 */

// Trạng thái ứng dụng toàn cục
const AppState = {
  currentChapterId: "ch4",
  currentLessonId: "ch4-1",
  currentViewMode: "lesson", // 'lesson' | 'exercise'
  previewDevice: "desktop", // 'desktop' | 'tablet' | 'mobile'
  theme: localStorage.getItem("web_course_theme") || "light",
  userProgress: JSON.parse(localStorage.getItem("web_course_progress") || "{}"),
  // Cấu trúc progress: { "ch4": { completedLessons: ["ch4-1"], completedExercises: ["ex-ch4-1"] } }
};

// Khởi tạo ứng dụng khi DOM tải xong
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSidebar();
  setupEventListeners();
  loadLesson(AppState.currentLessonId);
  updateOverallProgress();
});

/* ==========================================================================
   1. QUẢN LÝ GIAO DIỆN DARK / LIGHT THEME
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute("data-theme", AppState.theme);
  updateThemeIcon();
}

function toggleTheme() {
  AppState.theme = AppState.theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", AppState.theme);
  localStorage.setItem("web_course_theme", AppState.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById("theme-toggle-btn");
  if (!btn) return;
  btn.innerHTML = AppState.theme === "light" ? "🌙" : "☀️";
  btn.title = AppState.theme === "light" ? "Chuyển sang Giao diện Tối" : "Chuyển sang Giao diện Sáng";
}

/* ==========================================================================
   2. RENDER MENU SIDEBAR ĐIỀU HƯỚNG
   ========================================================================== */
function renderSidebar() {
  const container = document.getElementById("sidebar-nav-container");
  if (!container) return;

  container.innerHTML = "";

  COURSE_DATA.chapters.forEach((chapter) => {
    const isCurrentChapter = chapter.id === AppState.currentChapterId;
    const chapProgress = AppState.userProgress[chapter.id] || { completedLessons: [], completedExercises: [] };
    const totalItems = chapter.lessons.length + (chapter.exercises ? chapter.exercises.length : 0);
    const completedItems = chapProgress.completedLessons.length + chapProgress.completedExercises.length;
    const isFullyDone = totalItems > 0 && completedItems === totalItems;

    const groupEl = document.createElement("div");
    groupEl.className = `chapter-group ${isCurrentChapter ? "open" : ""}`;
    groupEl.id = `group-${chapter.id}`;

    // Nút gập mở chương
    groupEl.innerHTML = `
      <button class="chapter-toggle" onclick="toggleChapterAccordion('${chapter.id}')">
        <div class="chapter-title-wrap">
          <span class="chapter-icon">${chapter.icon}</span>
          <span>${chapter.shortTitle || chapter.title}</span>
        </div>
        <span class="chapter-chevron">▶</span>
      </button>
      <ul class="lesson-list">
        ${chapter.lessons.map(lesson => {
          const isDone = chapProgress.completedLessons.includes(lesson.id);
          const isActive = lesson.id === AppState.currentLessonId && AppState.currentViewMode === "lesson";
          return `
            <li class="lesson-item">
              <a href="javascript:void(0)" 
                 class="lesson-link ${isActive ? 'active' : ''}" 
                 id="link-${lesson.id}"
                 onclick="selectLesson('${lesson.id}', '${chapter.id}')">
                <span>${lesson.title}</span>
                ${isDone ? '<span class="lesson-badge-completed" title="Đã hoàn thành">✓</span>' : ''}
              </a>
            </li>
          `;
        }).join("")}
        ${chapter.exercises && chapter.exercises.length > 0 ? `
          <li class="lesson-item exercise-link-item">
            <a href="javascript:void(0)" 
               class="exercise-nav-link ${AppState.currentViewMode === 'exercise' && AppState.currentChapterId === chapter.id ? 'active' : ''}"
               id="link-ex-${chapter.id}"
               onclick="selectExercises('${chapter.id}')">
              <span>✍️ Bài tập đục lỗ (${chapter.exercises.length} câu)</span>
              ${chapProgress.completedExercises.length === chapter.exercises.length ? '<span style="color:#22c55e">✓</span>' : ''}
            </a>
          </li>
        ` : ''}
      </ul>
    `;

    container.appendChild(groupEl);
  });
}

function toggleChapterAccordion(chapterId) {
  const groupEl = document.getElementById(`group-${chapterId}`);
  if (groupEl) {
    groupEl.classList.toggle("open");
  }
}

/* ==========================================================================
   3. ĐIỀU HƯỚNG BÀI HỌC VÀ CHẾ ĐỘ XEM
   ========================================================================== */
function selectLesson(lessonId, chapterId) {
  AppState.currentChapterId = chapterId;
  AppState.currentLessonId = lessonId;
  AppState.currentViewMode = "lesson";

  // Mở accordion tương ứng
  document.querySelectorAll(".chapter-group").forEach(el => el.classList.remove("open"));
  const group = document.getElementById(`group-${chapterId}`);
  if (group) group.classList.add("open");

  // Đổi active link
  updateActiveLinks();

  // Đổi view
  switchViewMode("lesson");

  // Tải nội dung
  loadLesson(lessonId);

  // Đóng sidebar trên mobile
  closeMobileSidebar();
}

function selectExercises(chapterId) {
  AppState.currentChapterId = chapterId;
  AppState.currentViewMode = "exercise";

  // Mở accordion tương ứng
  document.querySelectorAll(".chapter-group").forEach(el => el.classList.remove("open"));
  const group = document.getElementById(`group-${chapterId}`);
  if (group) group.classList.add("open");

  updateActiveLinks();
  switchViewMode("exercise");
  renderChapterExercises(chapterId);

  closeMobileSidebar();
}

function switchViewMode(mode) {
  AppState.currentViewMode = mode;
  const lessonView = document.getElementById("lesson-view-container");
  const exercisesView = document.getElementById("exercises-view-container");
  const tabTheory = document.getElementById("tab-mode-theory");
  const tabExercise = document.getElementById("tab-mode-exercise");

  if (mode === "lesson") {
    lessonView.style.display = "grid";
    exercisesView.classList.remove("active");
    if (tabTheory) tabTheory.classList.add("active");
    if (tabExercise) tabExercise.classList.remove("active");
  } else {
    lessonView.style.display = "none";
    exercisesView.classList.add("active");
    if (tabTheory) tabTheory.classList.remove("active");
    if (tabExercise) tabExercise.classList.add("active");
  }
}

function updateActiveLinks() {
  document.querySelectorAll(".lesson-link").forEach(l => l.classList.remove("active"));
  document.querySelectorAll(".exercise-nav-link").forEach(l => l.classList.remove("active"));

  if (AppState.currentViewMode === "lesson") {
    const curLink = document.getElementById(`link-${AppState.currentLessonId}`);
    if (curLink) curLink.classList.add("active");
  } else {
    const curExLink = document.getElementById(`link-ex-${AppState.currentChapterId}`);
    if (curExLink) curExLink.classList.add("active");
  }
}

/* ==========================================================================
   4. TẢI VÀ HIỂN THỊ NỘI DUNG BÀI HỌC (SPLIT VIEW)
   ========================================================================== */
function loadLesson(lessonId) {
  const chapter = COURSE_DATA.chapters.find(c => c.id === AppState.currentChapterId);
  if (!chapter) return;

  const lessonIndex = chapter.lessons.findIndex(l => l.id === lessonId);
  const lesson = chapter.lessons[lessonIndex];
  if (!lesson) return;

  // Cập nhật Breadcrumb
  document.getElementById("bc-chapter").textContent = chapter.title;
  document.getElementById("bc-lesson").textContent = lesson.title;

  // Cập nhật Cột trái (Lý thuyết & Code)
  document.getElementById("lesson-tag").textContent = lesson.tag || "Kiến thức trọng tâm";
  document.getElementById("lesson-time").textContent = `⏱️ ${lesson.duration || "7 phút"}`;
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-theory").innerHTML = lesson.theory;

  const codeArea = document.getElementById("code-editor-area");
  codeArea.value = lesson.code.trim();

  // Đánh dấu bài học này đã đọc
  markLessonCompleted(chapter.id, lesson.id);

  // Cập nhật Nút điều hướng trước / sau dưới chân bài
  renderLessonBottomNav(chapter, lessonIndex);

  // Cập nhật Cột phải (Live Preview Sandbox)
  updateLivePreview(lesson.previewHtml || generatePreviewFromCode(lesson.code));
}

function renderLessonBottomNav(chapter, lessonIndex) {
  const navContainer = document.getElementById("lesson-nav-bottom");
  if (!navContainer) return;

  const prevLesson = chapter.lessons[lessonIndex - 1];
  const nextLesson = chapter.lessons[lessonIndex + 1];

  let html = "";

  if (prevLesson) {
    html += `<button class="btn-nav-lesson" onclick="selectLesson('${prevLesson.id}', '${chapter.id}')">← Bài trước: ${prevLesson.title.substring(0, 18)}...</button>`;
  } else {
    html += `<div></div>`;
  }

  if (nextLesson) {
    html += `<button class="btn-nav-lesson primary" onclick="selectLesson('${nextLesson.id}', '${chapter.id}')">Bài tiếp theo: ${nextLesson.title.substring(0, 18)}... →</button>`;
  } else if (chapter.exercises && chapter.exercises.length > 0) {
    html += `<button class="btn-nav-lesson primary" onclick="selectExercises('${chapter.id}')">✍️ Làm bài tập đục lỗ Chương →</button>`;
  }

  navContainer.innerHTML = html;
}

/* ==========================================================================
   5. BỘ DỰNG LIVE PREVIEW TRỰC QUAN (SANDBOX IFRAME)
   ========================================================================== */
function updateLivePreview(customHtml) {
  const iframe = document.getElementById("live-preview-iframe");
  if (!iframe) return;

  const content = customHtml || generatePreviewFromCode(document.getElementById("code-editor-area").value);

  // Nhúng code vào iframe srcdoc an toàn
  iframe.srcdoc = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        * { box-sizing: border-box; }
        body { margin: 0; padding: 16px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
}

function generatePreviewFromCode(rawCode) {
  // Tự động phân tích code nếu người dùng tự sửa trong ô editor
  return rawCode;
}

function runUserCode() {
  const code = document.getElementById("code-editor-area").value;
  updateLivePreview(code);
}

function resetLessonCode() {
  const chapter = COURSE_DATA.chapters.find(c => c.id === AppState.currentChapterId);
  const lesson = chapter ? chapter.lessons.find(l => l.id === AppState.currentLessonId) : null;
  if (lesson) {
    document.getElementById("code-editor-area").value = lesson.code.trim();
    updateLivePreview(lesson.previewHtml);
  }
}

function copyCodeToClipboard() {
  const code = document.getElementById("code-editor-area").value;
  navigator.clipboard.writeText(code).then(() => {
    const copyBtn = document.getElementById("btn-copy-code");
    const oldText = copyBtn.innerHTML;
    copyBtn.innerHTML = "✓ Đã sao chép";
    setTimeout(() => { copyBtn.innerHTML = oldText; }, 2000);
  });
}

function setPreviewDevice(device) {
  AppState.previewDevice = device;
  const container = document.getElementById("preview-frame-container");
  if (!container) return;

  container.className = `preview-frame-container ${device}`;

  document.querySelectorAll(".device-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.device === device);
  });
}

/* ==========================================================================
   6. HỆ THỐNG BÀI TẬP ĐỤC LỖ TƯƠNG TÁC (FILL-IN-THE-BLANK)
   CÓ CHẤM ĐIỂM, ĐỔI MÀU, GỢI Ý & GIẢI THÍCH CHI TIẾT
   ========================================================================== */
function renderChapterExercises(chapterId) {
  const chapter = COURSE_DATA.chapters.find(c => c.id === chapterId);
  if (!chapter || !chapter.exercises) return;

  const container = document.getElementById("exercises-list-container");
  const titleEl = document.getElementById("ex-chapter-title");
  const countEl = document.getElementById("ex-score-display");

  titleEl.textContent = `Thực Hành Đục Lỗ — ${chapter.title}`;

  const chapProgress = AppState.userProgress[chapterId] || { completedLessons: [], completedExercises: [] };
  countEl.textContent = `${chapProgress.completedExercises.length} / ${chapter.exercises.length}`;

  container.innerHTML = "";

  chapter.exercises.forEach((ex, index) => {
    const isCompleted = chapProgress.completedExercises.includes(ex.id);

    // Chuyển template code thành HTML chứa các thẻ input đục lỗ
    let renderedCode = ex.codeSnippet;
    ex.blanks.forEach(blank => {
      const savedVal = isCompleted && blank.answer[0] ? blank.answer[0] : "";
      const inputHtml = `<input type="text" 
                               class="blank-input ${isCompleted ? 'input-correct' : ''}" 
                               data-ex-id="${ex.id}" 
                               data-blank-id="${blank.id}" 
                               placeholder="[ ? ]" 
                               value="${savedVal}" 
                               autocomplete="off" 
                               spellcheck="false"
                               onkeypress="handleBlankEnter(event, '${ex.id}')">`;
      renderedCode = renderedCode.replace(`{{${blank.id}}}`, inputHtml);
    });

    const card = document.createElement("div");
    card.className = `exercise-card ${isCompleted ? 'status-correct' : ''}`;
    card.id = `card-${ex.id}`;

    card.innerHTML = `
      <div class="ex-top">
        <span class="ex-badge">Câu ${index + 1} / ${chapter.exercises.length}: ${ex.title}</span>
        <div>
          <span class="ex-status-tag correct" id="status-correct-${ex.id}" style="${isCompleted ? 'display:inline-block' : 'display:none'}">✓ Chính xác</span>
          <span class="ex-status-tag wrong" id="status-wrong-${ex.id}">✗ Chưa đúng</span>
        </div>
      </div>
      <div class="ex-question">${ex.question}</div>
      <div class="blank-code-container">${renderedCode}</div>
      <div class="ex-actions">
        <button class="btn-check-ex" onclick="checkExerciseAnswer('${ex.id}', '${chapterId}')">
          <span>✓</span> Kiểm tra đáp án
        </button>
        <button class="btn-hint-ex" onclick="showExerciseHint('${ex.id}', '${chapterId}')">
          <span>💡</span> Xem gợi ý
        </button>
        <button class="btn-show-ans" onclick="revealExerciseAnswer('${ex.id}', '${chapterId}')">
          <span>👁️</span> Xem đáp án &amp; Giải thích
        </button>
        <button class="btn-reset-ex" onclick="resetExercise('${ex.id}', '${chapterId}')">
          Làm lại
        </button>
      </div>
      <div class="ex-feedback-box" id="feedback-${ex.id}"></div>
    `;

    container.appendChild(card);
  });
}

// Bấm phím Enter trong ô đục lỗ thì tự động chấm bài
function handleBlankEnter(e, exId) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkExerciseAnswer(exId, AppState.currentChapterId);
  }
}

/**
 * Kiểm tra đáp án đục lỗ:
 * Nếu đúng: Đổi màu xanh, thông báo đúng, lưu tiến độ, cộng điểm
 * Nếu sai: Đổi màu đỏ, Rung lắc, TỰ ĐỘNG HIỂN THỊ GIẢI THÍCH & HƯỚNG DẪN TƯ DUY!
 */
function checkExerciseAnswer(exId, chapterId) {
  const chapter = COURSE_DATA.chapters.find(c => c.id === chapterId);
  if (!chapter) return;
  const ex = chapter.exercises.find(e => e.id === exId);
  if (!ex) return;

  const card = document.getElementById(`card-${exId}`);
  const feedbackBox = document.getElementById(`feedback-${exId}`);
  const statusCorrect = document.getElementById(`status-correct-${exId}`);
  const statusWrong = document.getElementById(`status-wrong-${exId}`);

  let allCorrect = true;
  let wrongBlankHints = [];

  ex.blanks.forEach(blank => {
    const input = card.querySelector(`input[data-blank-id="${blank.id}"]`);
    if (!input) return;

    const userVal = input.value.trim().toLowerCase();
    const validAnswers = blank.answer.map(a => a.trim().toLowerCase());

    if (validAnswers.includes(userVal)) {
      input.classList.remove("input-wrong");
      input.classList.add("input-correct");
    } else {
      input.classList.remove("input-correct");
      input.classList.add("input-wrong");
      allCorrect = false;
      wrongBlankHints.push(`Ô trống "${blank.placeholder || blank.id}": ${blank.hint}`);
    }
  });

  if (allCorrect) {
    // XỬ LÝ KHI LÀM ĐÚNG
    card.classList.remove("status-wrong");
    card.classList.add("status-correct");
    statusWrong.style.display = "none";
    statusCorrect.style.display = "inline-block";

    feedbackBox.className = "ex-feedback-box show explanation-type";
    feedbackBox.innerHTML = `
      <div class="feedback-header" style="color: #16a34a;">
        <span>🎉</span> <strong>Chính xác tuyệt vời!</strong>
      </div>
      <p style="margin-top: 6px;">${ex.explanation}</p>
    `;

    markExerciseCompleted(chapterId, exId);
  } else {
    // XỬ LÝ KHI LÀM SAI (THEO YÊU CẦU: SAI PHẢI GIẢI THÍCH VÀ HƯỚNG DẪN NGAY)
    card.classList.add("status-wrong");
    statusCorrect.style.display = "none";
    statusWrong.style.display = "inline-block";

    feedbackBox.className = "ex-feedback-box show hint-type";
    feedbackBox.innerHTML = `
      <div class="feedback-header">
        <span>❌</span> <strong>Chưa chính xác! Dưới đây là giải thích và gợi ý tư duy:</strong>
      </div>
      <ul style="padding-left: 18px; margin: 6px 0;">
        ${wrongBlankHints.map(h => `<li>${h}</li>`).join("")}
      </ul>
      <p style="font-size: 12.5px; opacity: 0.9; margin-top: 4px;">
        💡 <em>Hãy đọc kỹ gợi ý phía trên và thử gõ lại, hoặc bấm <strong>"Xem đáp án &amp; Giải thích"</strong> nếu bạn muốn xem đáp án mẫu.</em>
      </p>
    `;
  }
}

/**
 * Hiển thị gợi ý khi bấm nút "Xem gợi ý"
 * Giải thích cặn kẽ bản chất câu hỏi để người học tự suy nghĩ
 */
function showExerciseHint(exId, chapterId) {
  const chapter = COURSE_DATA.chapters.find(c => c.id === chapterId);
  const ex = chapter ? chapter.exercises.find(e => e.id === exId) : null;
  if (!ex) return;

  const feedbackBox = document.getElementById(`feedback-${exId}`);
  feedbackBox.className = "ex-feedback-box show hint-type";

  const hintsList = ex.blanks.map((b, i) => `<li><strong>Ô ${i + 1} (${b.placeholder || 'Code'}):</strong> ${b.hint}</li>`).join("");

  feedbackBox.innerHTML = `
    <div class="feedback-header">
      <span>💡</span> <strong>Gợi ý chi tiết từ Giảng viên:</strong>
    </div>
    <ul style="padding-left: 18px; margin: 6px 0;">
      ${hintsList}
    </ul>
    <p style="font-size: 13px; margin-top: 6px; color: #92400e;">
      <strong>Gợi mở tư duy:</strong> ${ex.explanation.split('.')[0]}. Bạn hãy liên hệ với bài học lý thuyết tương ứng nhé!
    </p>
  `;
}

/**
 * Hiển thị đáp án chính xác và GIẢI THÍCH TOÀN BỘ CỐT LÕI
 */
function revealExerciseAnswer(exId, chapterId) {
  const chapter = COURSE_DATA.chapters.find(c => c.id === chapterId);
  const ex = chapter ? chapter.exercises.find(e => e.id === exId) : null;
  if (!ex) return;

  const card = document.getElementById(`card-${exId}`);
  const feedbackBox = document.getElementById(`feedback-${exId}`);

  // Điền đáp án chuẩn vào từng ô
  ex.blanks.forEach(blank => {
    const input = card.querySelector(`input[data-blank-id="${blank.id}"]`);
    if (input) {
      input.value = blank.answer[0];
      input.classList.remove("input-wrong");
      input.classList.add("input-correct");
    }
  });

  card.classList.remove("status-wrong");
  card.classList.add("status-correct");

  feedbackBox.className = "ex-feedback-box show explanation-type";
  feedbackBox.innerHTML = `
    <div class="feedback-header" style="color: #2563eb;">
      <span>📖</span> <strong>Đáp án chuẩn &amp; Giải thích chi tiết:</strong>
    </div>
    <div style="margin: 8px 0; padding: 8px 12px; background: #e0f2fe; border-radius: 6px; color: #0369a1; font-family: var(--font-mono); font-size: 13px;">
      ${ex.blanks.map((b, idx) => `Ô ${idx + 1}: <strong>${b.answer[0]}</strong>`).join(" &nbsp;|&nbsp; ")}
    </div>
    <p style="margin-top: 6px; line-height: 1.6;">${ex.explanation}</p>
  `;

  markExerciseCompleted(chapterId, exId);
}

function resetExercise(exId, chapterId) {
  const card = document.getElementById(`card-${exId}`);
  if (!card) return;

  card.querySelectorAll(".blank-input").forEach(input => {
    input.value = "";
    input.classList.remove("input-correct", "input-wrong");
  });

  card.classList.remove("status-correct", "status-wrong");
  document.getElementById(`status-correct-${exId}`).style.display = "none";
  document.getElementById(`status-wrong-${exId}`).style.display = "none";

  const feedbackBox = document.getElementById(`feedback-${exId}`);
  feedbackBox.className = "ex-feedback-box";
  feedbackBox.innerHTML = "";

  // Hủy đánh dấu hoàn thành nếu có
  const chapProgress = AppState.userProgress[chapterId];
  if (chapProgress) {
    chapProgress.completedExercises = chapProgress.completedExercises.filter(id => id !== exId);
    saveProgress();
    updateOverallProgress();
    const countEl = document.getElementById("ex-score-display");
    const chapter = COURSE_DATA.chapters.find(c => c.id === chapterId);
    if (countEl && chapter) {
      countEl.textContent = `${chapProgress.completedExercises.length} / ${chapter.exercises.length}`;
    }
  }
}

/* ==========================================================================
   7. THEO DÕI TIẾN ĐỘ HỌC TẬP (LOCALSTORAGE PERSISTENCE)
   ========================================================================== */
function markLessonCompleted(chapterId, lessonId) {
  if (!AppState.userProgress[chapterId]) {
    AppState.userProgress[chapterId] = { completedLessons: [], completedExercises: [] };
  }
  if (!AppState.userProgress[chapterId].completedLessons.includes(lessonId)) {
    AppState.userProgress[chapterId].completedLessons.push(lessonId);
    saveProgress();
    updateOverallProgress();
    renderSidebar();
  }
}

function markExerciseCompleted(chapterId, exId) {
  if (!AppState.userProgress[chapterId]) {
    AppState.userProgress[chapterId] = { completedLessons: [], completedExercises: [] };
  }
  if (!AppState.userProgress[chapterId].completedExercises.includes(exId)) {
    AppState.userProgress[chapterId].completedExercises.push(exId);
    saveProgress();
    updateOverallProgress();
    renderSidebar();

    const countEl = document.getElementById("ex-score-display");
    const chapter = COURSE_DATA.chapters.find(c => c.id === chapterId);
    if (countEl && chapter) {
      countEl.textContent = `${AppState.userProgress[chapterId].completedExercises.length} / ${chapter.exercises.length}`;
    }
  }
}

function saveProgress() {
  localStorage.setItem("web_course_progress", JSON.stringify(AppState.userProgress));
}

function updateOverallProgress() {
  let totalItems = 0;
  let completedItems = 0;

  COURSE_DATA.chapters.forEach(c => {
    totalItems += c.lessons.length;
    if (c.exercises) totalItems += c.exercises.length;

    const prog = AppState.userProgress[c.id];
    if (prog) {
      completedItems += (prog.completedLessons ? prog.completedLessons.length : 0);
      completedItems += (prog.completedExercises ? prog.completedExercises.length : 0);
    }
  });

  const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  const bar = document.getElementById("overall-progress-bar");
  const text = document.getElementById("overall-progress-text");

  if (bar) bar.style.width = `${percentage}%`;
  if (text) text.textContent = `${percentage}% hoàn thành`;
}

/* ==========================================================================
   8. TÌM KIẾM BÀI HỌC VÀ LẮNG NGHE SỰ KIỆN TOÀN CỤC
   ========================================================================== */
function setupEventListeners() {
  // Tìm kiếm bài học
  const searchInput = document.getElementById("sidebar-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      filterLessons(term);
    });
  }

  // Phím tắt bàn phím
  window.addEventListener("keydown", (e) => {
    // Ctrl + Enter để chạy code
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      runUserCode();
    }
  });
}

function filterLessons(searchTerm) {
  COURSE_DATA.chapters.forEach(chapter => {
    const groupEl = document.getElementById(`group-${chapter.id}`);
    if (!groupEl) return;

    if (!searchTerm) {
      groupEl.style.display = "block";
      groupEl.querySelectorAll(".lesson-item").forEach(li => li.style.display = "block");
      return;
    }

    let hasMatch = false;
    chapter.lessons.forEach(lesson => {
      const link = document.getElementById(`link-${lesson.id}`);
      if (!link) return;
      const match = lesson.title.toLowerCase().includes(searchTerm) || 
                    (lesson.tag && lesson.tag.toLowerCase().includes(searchTerm));
      link.parentElement.style.display = match ? "block" : "none";
      if (match) hasMatch = true;
    });

    groupEl.style.display = hasMatch ? "block" : "none";
    if (hasMatch) groupEl.classList.add("open");
  });
}

// Điều khiển Sidebar trên Mobile
function toggleMobileSidebar() {
  const sidebar = document.getElementById("main-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (sidebar && overlay) {
    sidebar.classList.toggle("mobile-open");
    overlay.classList.toggle("active");
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("main-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (sidebar && overlay) {
    sidebar.classList.remove("mobile-open");
    overlay.classList.remove("active");
  }
}
