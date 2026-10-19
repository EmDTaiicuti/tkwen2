/**
 * Dữ liệu bài học và bài tập khóa học Thiết Kế Web (Chương 4 - Chương 9)
 * Tác giả: Chuyên gia Phát triển Web & Giảng viên Lập trình
 */

const COURSE_DATA = {
  courseTitle: "Ôn Tập Thiết Kế Web Toàn Diện",
  courseSubtitle: "HTML, HTML5, CSS, CSS3, JavaScript & DOM Tương Tác",
  chapters: [
    {
      id: "ch4",
      number: 4,
      title: "Chương 4: Ngôn ngữ HTML",
      shortTitle: "Ngôn ngữ HTML",
      icon: "🌐",
      description: "Nền tảng cốt lõi của Web: Thẻ cấu trúc, văn bản, liên kết, hình ảnh, bảng và biểu mẫu (Form).",
      lessons: [
        {
          id: "ch4-1",
          title: "1. HTML là gì & Cú pháp thẻ",
          tag: "Khái niệm cốt lõi",
          duration: "5 phút",
          theory: `
            <h4>HTML (HyperText Markup Language) là gì?</h4>
            <p>HTML là <strong>ngôn ngữ đánh dấu siêu văn bản</strong> dùng để mô tả cấu trúc và nội dung trang web. Nó nói cho trình duyệt biết phần nào là tiêu đề, đoạn văn, danh sách, hình ảnh hay nút bấm.</p>
            <div class="note-box tip">
              <span class="icon">💡</span>
              <div><strong>Quy tắc vàng:</strong> HTML chỉ đảm nhận phần <em>nội dung và cấu trúc</em> (Content & Structure). CSS sẽ trang trí làm đẹp, còn JavaScript sẽ điều khiển tương tác.</div>
            </div>
            <h4>Cấu trúc một phần tử HTML</h4>
            <p>Phần tử HTML thường gồm 3 phần: <strong>Thẻ mở</strong> (Opening tag), <strong>Nội dung</strong> (Content), và <strong>Thẻ đóng</strong> (Closing tag).</p>
            <p>Một số thẻ đặc biệt là <strong>thẻ tự đóng (Self-closing / Void elements)</strong>, không cần thẻ đóng vì không chứa nội dung văn bản bên trong, ví dụ: <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>.</p>
          `,
          code: `<!-- Cú pháp thẻ tiêu chuẩn có nội dung -->
<p class="highlight">Học lập trình web từ số 0.</p>

<!-- Thẻ tự đóng (void element) -->
<hr>
<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" alt="Màu sắc trừu tượng">
<br>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; color: #1e293b; background: #fff; }
              .highlight { color: #0284c7; font-size: 1.15rem; font-weight: 600; padding: 10px; background: #e0f2fe; border-left: 4px solid #0284c7; border-radius: 4px; }
              img { border-radius: 8px; margin-top: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 100%; height: auto; }
            </style>
            <p class="highlight">Học lập trình web từ số 0.</p>
            <hr>
            <p style="margin: 6px 0; color: #64748b; font-size: 0.9rem;">Thẻ hình ảnh tự đóng:</p>
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" alt="Màu sắc trừu tượng">
          `
        },
        {
          id: "ch4-2",
          title: "2. Khung trang HTML chuẩn (HTML Skeleton)",
          tag: "Cấu trúc trang",
          duration: "7 phút",
          theory: `
            <h4>Các thành phần chuẩn của một tài liệu HTML</h4>
            <ul>
              <li><code>&lt;!doctype html&gt;</code>: Khai báo với trình duyệt đây là chuẩn tài liệu HTML5 hiện đại.</li>
              <li><code>&lt;html lang="vi"&gt;</code>: Phần tử gốc bao bọc toàn bộ trang web, thuộc tính <code>lang</code> chỉ định ngôn ngữ.</li>
              <li><code>&lt;head&gt;</code>: Chứa metadata (thông tin cấu hình), mã hóa ký tự UTF-8, viewport hỗ trợ điện thoại, CSS và thẻ tiêu đề trang.</li>
              <li><code>&lt;body&gt;</code>: Chứa toàn bộ nội dung mà người dùng thực sự nhìn thấy trên màn hình.</li>
            </ul>
            <div class="note-box alert">
              <span class="icon">⚠️</span>
              <div><strong>Lưu ý:</strong> Thẻ <code>&lt;title&gt;</code> nằm trong <code>&lt;head&gt;</code>, xuất hiện trên tab trình duyệt và kết quả tìm kiếm Google, không hiện trực tiếp trong trang.</div>
            </div>
          `,
          code: `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trang Học Tập Của Tôi</title>
  </head>
  <body>
    <h1>Xin chào thế giới Web!</h1>
    <p>Nội dung trang web hiển thị tại đây.</p>
  </body>
</html>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; background: #fafafa; }
              .browser-frame { border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .tab-bar { background: #f1f5f9; padding: 8px 12px; border-bottom: 1px solid #cbd5e1; display: flex; align-items: center; gap: 8px; font-size: 13px; color: #475569; }
              .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
              .dot.red { background: #ef4444; } .dot.yellow { background: #f59e0b; } .dot.green { background: #10b981; }
              .tab-title { background: #fff; padding: 4px 12px; border-radius: 6px; font-weight: 500; border: 1px solid #e2e8f0; margin-left: 10px; }
              .viewport { padding: 24px; }
              h1 { color: #1e293b; margin-top: 0; }
              p { color: #64748b; line-height: 1.6; }
            </style>
            <div class="browser-frame">
              <div class="tab-bar">
                <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                <span class="tab-title">Trang Học Tập Của Tôi</span>
              </div>
              <div class="viewport">
                <h1>Xin chào thế giới Web!</h1>
                <p>Nội dung trang web hiển thị tại đây bên trong thẻ &lt;body&gt;.</p>
              </div>
            </div>
          `
        },
        {
          id: "ch4-3",
          title: "3. Văn bản, Phân cấp & Ký tự đặc biệt (Entities)",
          tag: "Văn bản",
          duration: "6 phút",
          theory: `
            <h4>Phân cấp tiêu đề (Heading) & Định dạng</h4>
            <ul>
              <li><code>&lt;h1&gt;</code> đến <code>&lt;h6&gt;</code>: Thể hiện thứ bậc từ to đến nhỏ. Mỗi trang web chỉ nên có 1 thẻ <code>&lt;h1&gt;</code> cho tiêu đề chính.</li>
              <li><code>&lt;p&gt;</code>: Tạo một đoạn văn riêng biệt.</li>
              <li><code>&lt;strong&gt;</code>: Nhấn mạnh tầm quan trọng (in đậm).</li>
              <li><code>&lt;em&gt;</code>: Nhấn giọng (in nghiêng).</li>
            </ul>
            <h4>HTML Entities (Ký tự đặc biệt)</h4>
            <p>Trình duyệt coi <code>&lt;</code> và <code>&gt;</code> là thẻ HTML. Để hiển thị đúng ký tự này dưới dạng văn bản, bạn cần dùng mã thực thể (entity):</p>
            <ul>
              <li><code>&amp;lt;</code> hiển thị dấu bé hơn (<code>&lt;</code> - less than)</li>
              <li><code>&amp;gt;</code> hiển thị dấu lớn hơn (<code>&gt;</code> - greater than)</li>
              <li><code>&amp;amp;</code> hiển thị dấu và (<code>&amp;</code>)</li>
              <li><code>&amp;nbsp;</code> khoảng trắng không ngắt dòng (non-breaking space)</li>
            </ul>
          `,
          code: `<h1>Lập trình Web Cơ bản</h1>
<h2>1. Giới thiệu thẻ định dạng</h2>
<p>Học HTML rất <strong>quan trọng</strong> và <em>thú vị</em>.</p>

<p>Ký tự thẻ mở đoạn văn viết là: &amp;lt;p&amp;gt;</p>

<ul>
  <li>Mục danh sách không thứ tự (ul - li)</li>
  <li>Mục thứ hai</li>
</ul>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; line-height: 1.6; color: #334155; }
              h1 { color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0; font-size: 1.5rem; }
              h2 { color: #2563eb; font-size: 1.2rem; }
              code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; color: #e11d48; }
            </style>
            <h1>Lập trình Web Cơ bản</h1>
            <h2>1. Giới thiệu thẻ định dạng</h2>
            <p>Học HTML rất <strong>quan trọng</strong> và <em>thú vị</em>.</p>
            <p>Ký tự thẻ mở đoạn văn viết là: <code>&lt;p&gt;</code></p>
            <ul>
              <li>Mục danh sách không thứ tự (ul - li)</li>
              <li>Mục thứ hai</li>
            </ul>
          `
        },
        {
          id: "ch4-4",
          title: "4. Hình ảnh, Âm thanh & Liên kết (Anchor)",
          tag: "Media & Link",
          duration: "8 phút",
          theory: `
            <h4>Thẻ hình ảnh <code>&lt;img&gt;</code></h4>
            <p>Gồm 2 thuộc tính bắt buộc phải có:</p>
            <ul>
              <li><code>src</code>: Đường dẫn tới tệp ảnh (URL online hoặc đường dẫn tệp tương đối).</li>
              <li><code>alt</code>: Văn bản mô tả thay thế khi ảnh lỗi tải, và hỗ trợ người khiếm thị dùng trình đọc màn hình (Screen Reader).</li>
            </ul>
            <h4>Thẻ liên kết <code>&lt;a&gt;</code> (Anchor)</h4>
            <ul>
              <li>Thuộc tính <code>href</code> chỉ định đích đến (URL ngoài, tệp HTML khác, hoặc <code>#id</code> nhảy tới vị trí trong cùng trang).</li>
              <li><code>target="_blank"</code> mở liên kết trong tab mới.</li>
            </ul>
          `,
          code: `<!-- Liên kết mở tab mới -->
<a href="https://developer.mozilla.org" target="_blank" rel="noopener">
  Tài liệu MDN Web Docs ↗
</a>

<br><br>

<!-- Hình ảnh có alt -->
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=320" 
     alt="Laptop hiển thị mã nguồn lập trình" width="300">`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; color: #334155; }
              a { display: inline-block; background: #eff6ff; color: #2563eb; font-weight: 600; text-decoration: none; padding: 8px 14px; border-radius: 6px; border: 1px solid #bfdbfe; transition: all 0.2s; }
              a:hover { background: #2563eb; color: #fff; }
              img { border-radius: 8px; margin-top: 12px; display: block; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
            </style>
            <a href="https://developer.mozilla.org" target="_blank">
              Tài liệu MDN Web Docs ↗
            </a>
            <br>
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=320" 
                 alt="Laptop hiển thị mã nguồn lập trình" width="280">
          `
        },
        {
          id: "ch4-5",
          title: "5. Bảng dữ liệu (Table)",
          tag: "Cấu trúc dữ liệu",
          duration: "7 phút",
          theory: `
            <h4>Cấu trúc thẻ Table chuẩn ngữ nghĩa</h4>
            <p>Bảng dùng để trình bày dữ liệu dạng lưới 2 chiều (hàng & cột), <em>không được dùng để dựng bố cục giao diện</em>.</p>
            <ul>
              <li><code>&lt;table&gt;</code>: Thẻ bao bọc toàn bộ bảng.</li>
              <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>: Nhóm tiêu đề đầu bảng, thân bảng và chân bảng.</li>
              <li><code>&lt;tr&gt;</code>: Một hàng (Table Row).</li>
              <li><code>&lt;th&gt;</code>: Ô tiêu đề cột (in đậm, căn giữa).</li>
              <li><code>&lt;td&gt;</code>: Ô dữ liệu (Table Data).</li>
              <li><code>colspan</code>: Gộp nhiều cột lại với nhau.</li>
              <li><code>rowspan</code>: Gộp nhiều hàng lại với nhau.</li>
            </ul>
          `,
          code: `<table border="1">
  <thead>
    <tr>
      <th>Môn học</th>
      <th>Số tín chỉ</th>
      <th>Điểm số</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML & CSS</td>
      <td>3</td>
      <td>9.5</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>3</td>
      <td>9.0</td>
    </tr>
  </tbody>
</table>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; color: #1e293b; }
              table { width: 100%; border-collapse: collapse; margin-top: 8px; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
              th { background: #f8fafc; color: #475569; font-weight: 600; text-align: left; padding: 10px 12px; border-bottom: 2px solid #e2e8f0; }
              td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
              tr:hover td { background: #f8fafc; }
            </style>
            <table>
              <thead>
                <tr>
                  <th>Môn học</th>
                  <th>Số tín chỉ</th>
                  <th>Điểm số</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML & CSS</td>
                  <td>3</td>
                  <td><span style="color: #16a34a; font-weight: bold;">9.5</span></td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>3</td>
                  <td><span style="color: #16a34a; font-weight: bold;">9.0</span></td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          id: "ch4-6",
          title: "6. Biểu mẫu (Form) & Nhập liệu",
          tag: "Tương tác người dùng",
          duration: "10 phút",
          theory: `
            <h4>Vai trò của Form</h4>
            <p>Form nhận dữ liệu từ người dùng gửi về máy chủ. Hai phương thức chính:</p>
            <ul>
              <li><strong>GET</strong>: Đưa tham số lên URL (phù hợp tìm kiếm, lọc dữ liệu). Không dùng cho mật khẩu!</li>
              <li><strong>POST</strong>: Gói dữ liệu vào thân gói tin (Request Body), an toàn hơn, dùng khi đăng nhập, gửi bài.</li>
            </ul>
            <h4>Cặp bài trùng <code>&lt;label&gt;</code> và <code>&lt;input&gt;</code></h4>
            <p>Luôn nối <code>label for="id_cua_input"</code> với <code>input id="id_cua_input"</code> để khi người dùng bấm vào dòng chữ label thì con trỏ tự nhảy vào ô nhập.</p>
          `,
          code: `<form action="/gui-thong-tin" method="post">
  <fieldset>
    <legend>Thông tin học viên</legend>

    <label for="fullname">Họ tên:</label>
    <input type="text" id="fullname" name="fullname" placeholder="Nguyễn Văn A" required>

    <br><br>
    <label for="course">Chọn khóa học:</label>
    <select id="course" name="course">
      <option value="fe">Frontend Web</option>
      <option value="be">Backend Node.js</option>
    </select>

    <br><br>
    <button type="submit">Đăng ký ngay</button>
  </fieldset>
</form>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; color: #1e293b; }
              fieldset { border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; background: #f8fafc; }
              legend { font-weight: bold; color: #0f172a; padding: 0 8px; }
              label { display: block; margin-bottom: 4px; font-size: 13px; font-weight: 500; color: #475569; }
              input[type="text"], select { width: 100%; box-sizing: border-box; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; background: #fff; }
              input[type="text"]:focus, select:focus { outline: none; border-color: #3b82f6; ring: 2px solid #bfdbfe; }
              button { background: #2563eb; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; transition: background 0.2s; }
              button:hover { background: #1d4ed8; }
            </style>
            <form onsubmit="event.preventDefault(); alert('Đã gửi thông tin: ' + document.getElementById('fullname').value);">
              <fieldset>
                <legend>Thông tin học viên</legend>
                <label for="fullname">Họ tên:</label>
                <input type="text" id="fullname" placeholder="Nguyễn Văn A" required>
                <br><br>
                <label for="course">Chọn khóa học:</label>
                <select id="course">
                  <option value="fe">Frontend Web</option>
                  <option value="be">Backend Node.js</option>
                </select>
                <br><br>
                <button type="submit">Đăng ký ngay</button>
              </fieldset>
            </form>
          `
        }
      ],
      exercises: [
        {
          id: "ex-ch4-1",
          title: "Thẻ tiêu đề cấp 1",
          question: "Điền thẻ mở và thẻ đóng cho tiêu đề cấp cao nhất trong HTML:",
          codeSnippet: `<{{b1}}>Khóa Học Lập Trình Web</{{b2}}>`,
          blanks: [
            { id: "b1", answer: ["h1"], placeholder: "thẻ mở", hint: "Tiêu đề bậc 1 cao nhất (Heading 1)" },
            { id: "b2", answer: ["h1"], placeholder: "thẻ đóng", hint: "Thẻ đóng tương ứng với thẻ mở" }
          ],
          explanation: "Thẻ <h1> biểu thị tiêu đề cấp cao nhất và quan trọng nhất trên trang."
        },
        {
          id: "ex-ch4-2",
          title: "Thẻ đoạn văn bản",
          question: "Điền tên thẻ biểu thị một đoạn văn thông thường:",
          codeSnippet: `<{{b1}}>Nội dung một đoạn văn bản kiến thức.</{{b2}}>`,
          blanks: [
            { id: "b1", answer: ["p"], placeholder: "thẻ mở", hint: "Chữ cái đầu của từ 'Paragraph'" },
            { id: "b2", answer: ["p"], placeholder: "thẻ đóng", hint: "Tên thẻ đóng tương ứng" }
          ],
          explanation: "<p> viết tắt của Paragraph, đại diện cho đoạn văn bản."
        },
        {
          id: "ex-ch4-3",
          title: "Thẻ ngắt xuống dòng",
          question: "Điền thẻ tự đóng dùng để ngắt dòng văn bản ngay lập tức:",
          codeSnippet: `<p>Dòng thứ nhất<{{b1}}>Dòng thứ hai tiếp theo</p>`,
          blanks: [
            { id: "b1", answer: ["br", "br/"], placeholder: "thẻ", hint: "Viết tắt của 'Break line'" }
          ],
          explanation: "<br> (Break) là thẻ rỗng (void element) làm con trỏ nhảy xuống dòng mới."
        },
        {
          id: "ex-ch4-4",
          title: "Khai báo tài liệu HTML5",
          question: "Điền từ khóa khai báo chuẩn tài liệu HTML hiện đại:",
          codeSnippet: `<!{{b1}} html>`,
          blanks: [
            { id: "b1", answer: ["doctype", "DOCTYPE"], placeholder: "từ khóa", hint: "Bắt đầu bằng doc... type" }
          ],
          explanation: "<!doctype html> giúp trình duyệt biết cần dựng trang theo chuẩn HTML5 hiện đại."
        },
        {
          id: "ex-ch4-5",
          title: "Thuộc tính nguồn hình ảnh",
          question: "Điền tên thuộc tính quy định đường dẫn file của thẻ img:",
          codeSnippet: `<img {{b1}}="avatar.jpg" alt="Ảnh đại diện">`,
          blanks: [
            { id: "b1", answer: ["src"], placeholder: "thuộc tính", hint: "Viết tắt của chữ 'Source'" }
          ],
          explanation: "Thuộc tính 'src' (Source) cung cấp đường dẫn ảnh tới trình duyệt."
        },
        {
          id: "ex-ch4-6",
          title: "Văn bản thay thế cho ảnh",
          question: "Điền thuộc tính mô tả ảnh cho người khiếm thị hoặc khi ảnh lỗi:",
          codeSnippet: `<img src="logo.png" {{b1}}="Logo học viện">`,
          blanks: [
            { id: "b1", answer: ["alt"], placeholder: "thuộc tính", hint: "Viết tắt của 'Alternative text'" }
          ],
          explanation: "'alt' (Alternative) cung cấp văn bản thay thế rất quan trọng cho SEO và Accessibility."
        },
        {
          id: "ex-ch4-7",
          title: "Địa chỉ liên kết thẻ Anchor",
          question: "Điền thuộc tính chứa đường dẫn trang đích của thẻ <a>:",
          codeSnippet: `<a {{b1}}="https://google.com">Tìm kiếm</a>`,
          blanks: [
            { id: "b1", answer: ["href"], placeholder: "thuộc tính", hint: "Viết tắt của Hypertext Reference" }
          ],
          explanation: "Thuộc tính 'href' định nghĩa địa chỉ đích mà liên kết sẽ trỏ tới."
        },
        {
          id: "ex-ch4-8",
          title: "Mã ký tự đặc biệt Entity",
          question: "Điền entity để hiển thị dấu mở thẻ '<' trên trang:",
          codeSnippet: `<p>Mã thẻ đoạn văn là: {{b1}}p&gt;</p>`,
          blanks: [
            { id: "b1", answer: ["&lt;", "lt;"], placeholder: "mã entity", hint: "Bắt đầu bằng dấu & tiếp theo là lt (less than)" }
          ],
          explanation: "&lt; (less than) là HTML entity để hiển thị dấu '<'."
        },
        {
          id: "ex-ch4-9",
          title: "Hàng trong bảng dữ liệu",
          question: "Điền thẻ biểu diễn một hàng (Table Row) trong bảng:",
          codeSnippet: `<table>\n  <{{b1}}>\n    <td>Cột 1</td>\n  </{{b2}}>\n</table>`,
          blanks: [
            { id: "b1", answer: ["tr"], placeholder: "thẻ mở", hint: "Viết tắt của Table Row" },
            { id: "b2", answer: ["tr"], placeholder: "thẻ đóng", hint: "Đóng thẻ hàng" }
          ],
          explanation: "<tr> là viết tắt của Table Row, tạo ra một hàng trong thẻ <table>."
        },
        {
          id: "ex-ch4-10",
          title: "Phương thức gửi Form bảo mật",
          question: "Điền phương thức gửi form vào thân request thay vì lộ trên URL:",
          codeSnippet: `<form action="/login" method="{{b1}}">`,
          blanks: [
            { id: "b1", answer: ["post", "POST"], placeholder: "method", hint: "Ngược lại với GET, dùng để gửi dữ liệu bảo mật" }
          ],
          explanation: "Phương thức POST gửi dữ liệu ngầm trong HTTP Request Body, thích hợp cho dữ liệu nhạy cảm."
        }
      ]
    },

    {
      id: "ch5",
      number: 5,
      title: "Chương 5: HTML5 Hiện đại",
      shortTitle: "HTML5 Hiện đại",
      icon: "⚡",
      description: "Thẻ ngữ nghĩa (Semantic HTML), Form thông minh, Canvas, SVG, Video/Audio & Web Storage.",
      lessons: [
        {
          id: "ch5-1",
          title: "1. Tổng quan & Sự tiến hóa của HTML5",
          tag: "Kiến trúc",
          duration: "5 phút",
          theory: `
            <h4>Bước nhảy vọt của HTML5</h4>
            <p>HTML5 không chỉ đơn thuần là các thẻ mới, mà còn tích hợp các API mạnh mẽ phía trình duyệt, loại bỏ sự phụ thuộc vào các plugin bên ngoài như Flash.</p>
            <ul>
              <li><strong>Semantic tags</strong>: Giúp bộ máy tìm kiếm (SEO) và thiết bị trợ thính hiểu chính xác bố cục nội dung.</li>
              <li><strong>Rich Media</strong>: Hỗ trợ trực tiếp <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code> mà không cần Flash player.</li>
              <li><strong>Đồ họa</strong>: Tích hợp đồ họa bitmap (<code>&lt;canvas&gt;</code>) và vector (<code>&lt;svg&gt;</code>).</li>
              <li><strong>Lưu trữ client</strong>: Web Storage (<code>localStorage</code>, <code>sessionStorage</code>).</li>
            </ul>
          `,
          code: `<!-- Khai báo siêu ngắn gọn của HTML5 -->
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8">
    <title>HTML5 Hiện đại</title>
  </head>
  <body>
    <p>Chào mừng đến với kỷ nguyên HTML5!</p>
  </body>
</html>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; background: #f0fdf4; color: #166534; }
              .badge { display: inline-block; background: #22c55e; color: #fff; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold; margin-bottom: 8px; }
            </style>
            <div class="badge">Chuẩn HTML5</div>
            <h3>Mã nguồn tinh gọn - Tương thích vượt trội</h3>
            <p>Trình duyệt tự động kích hoạt chế độ dựng hình chuẩn (Standards Mode) chỉ với <code>&lt;!doctype html&gt;</code>.</p>
          `
        },
        {
          id: "ch5-2",
          title: "2. Semantic HTML & Bố cục ngữ nghĩa",
          tag: "Semantic",
          duration: "8 phút",
          theory: `
            <h4>Thay thế các thẻ <code>&lt;div class="..."&gt;</code> vô nghĩa</h4>
            <p>HTML5 đem lại các thẻ có ý nghĩa rõ ràng về mặt cấu trúc tài liệu:</p>
            <ul>
              <li><code>&lt;header&gt;</code>: Phần mở đầu trang hoặc tiêu đề của bài viết.</li>
              <li><code>&lt;nav&gt;</code>: Chứa danh sách các liên kết điều hướng chính.</li>
              <li><code>&lt;main&gt;</code>: Vùng chứa nội dung chính độc nhất của trang (mỗi trang chỉ có 1 thẻ main).</li>
              <li><code>&lt;article&gt;</code>: Một khối nội dung độc lập, hoàn chỉnh, có thể đem chia sẻ ở nơi khác (như bài viết tin tức, bài đăng blog).</li>
              <li><code>&lt;section&gt;</code>: Một chương hoặc phân đoạn theo chủ đề.</li>
              <li><code>&lt;aside&gt;</code>: Nội dung phụ, thanh bên (sidebar), ghi chú liên quan.</li>
              <li><code>&lt;footer&gt;</code>: Chân trang (bản quyền, thông tin liên hệ).</li>
            </ul>
          `,
          code: `<header>
  <h1>TechHub Blog</h1>
  <nav>
    <a href="#home">Trang chủ</a> | <a href="#articles">Bài viết</a>
  </nav>
</header>

<main>
  <article>
    <h2>Học Semantic HTML5</h2>
    <p>Semantic tags giúp Google hiểu rõ cấu trúc bài viết.</p>
  </article>
  <aside>
    <h3>Tin nổi bật</h3>
    <p>CSS3 Flexbox sắp có bài mới!</p>
  </aside>
</main>

<footer>
  <p>&copy; 2026 TechHub. All rights reserved.</p>
</footer>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; margin: 0; padding: 12px; font-size: 14px; background: #f8fafc; }
              header, main, footer, article, aside { border-radius: 6px; padding: 10px; margin-bottom: 8px; }
              header { background: #3b82f6; color: #fff; }
              header h1 { margin: 0 0 6px 0; font-size: 18px; }
              header a { color: #dbeafe; text-decoration: none; font-weight: 500; }
              main { display: flex; gap: 8px; padding: 0; }
              article { background: #fff; flex: 2; border: 1px solid #e2e8f0; }
              article h2 { margin-top: 0; font-size: 16px; color: #1e293b; }
              aside { background: #fef3c7; flex: 1; border: 1px solid #fde68a; color: #92400e; }
              aside h3 { margin-top: 0; font-size: 14px; }
              footer { background: #1e293b; color: #94a3b8; text-align: center; font-size: 12px; }
            </style>
            <header>
              <h1>TechHub Blog</h1>
              <nav><a href="#">Trang chủ</a> &bull; <a href="#">Bài viết</a></nav>
            </header>
            <main>
              <article>
                <h2>Học Semantic HTML5</h2>
                <p>Semantic tags giúp SEO và khả năng tiếp cận vượt trội.</p>
              </article>
              <aside>
                <h3>Tin phụ (aside)</h3>
                <p>Nội dung liên quan.</p>
              </aside>
            </main>
            <footer>&copy; 2026 TechHub. All rights reserved.</footer>
          `
        },
        {
          id: "ch5-3",
          title: "3. Form HTML5 & Validation Tự Động",
          tag: "Form thông minh",
          duration: "9 phút",
          theory: `
            <h4>Các kiểu <code>type</code> mới trong HTML5</h4>
            <p>Trình duyệt tự động hiển thị bàn phím phù hợp trên điện thoại và kiểm tra lỗi nhập liệu cơ bản mà không cần JavaScript:</p>
            <ul>
              <li><code>type="email"</code>: Yêu cầu định dạng email có chữ @ và tên miền.</li>
              <li><code>type="number"</code>: Chỉ cho nhập số, kết hợp với <code>min</code>, <code>max</code>, <code>step</code>.</li>
              <li><code>type="color"</code>: Mở bảng chọn màu trực quan.</li>
              <li><code>type="date"</code>: Mở lịch chọn ngày.</li>
              <li><code>type="range"</code>: Thanh trượt chọn giá trị.</li>
            </ul>
            <h4>Các thuộc tính kiểm tra dữ liệu quan trọng</h4>
            <p><code>required</code> (bắt buộc), <code>placeholder</code> (gợi ý mờ), <code>pattern</code> (biểu thức chính quy regex), <code>datalist</code> (danh sách tự động gợi ý giá trị).</p>
          `,
          code: `<form>
  <label for="user-email">Email của bạn:</label>
  <input type="email" id="user-email" placeholder="ten@vidu.com" required>

  <br><br>
  <label for="theme-color">Chọn màu sắc yêu thích:</label>
  <input type="color" id="theme-color" value="#3b82f6">

  <br><br>
  <label for="rating">Đánh giá (1-10):</label>
  <input type="range" id="rating" min="1" max="10" value="8">

  <br><br>
  <button type="submit">Gửi thông tin</button>
</form>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; color: #1e293b; }
              label { display: block; font-size: 13px; font-weight: 600; color: #475569; margin-bottom: 4px; }
              input[type="email"] { width: 100%; box-sizing: border-box; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; }
              input[type="color"] { border: none; width: 44px; height: 32px; cursor: pointer; border-radius: 4px; }
              button { background: #059669; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; }
            </style>
            <form onsubmit="event.preventDefault(); alert('Dữ liệu hợp lệ!');">
              <label for="uemail">Email (tự kiểm tra cú pháp):</label>
              <input type="email" id="uemail" placeholder="vd: sv@uit.edu.vn" required>
              <br><br>
              <label for="ucolor">Chọn màu theme:</label>
              <input type="color" id="ucolor" value="#059669">
              <br><br>
              <label for="urange">Mức độ hài lòng (range):</label>
              <input type="range" id="urange" min="1" max="10" value="9">
              <br><br>
              <button type="submit">Kiểm tra Form</button>
            </form>
          `
        },
        {
          id: "ch5-4",
          title: "4. Đồ họa Đỉnh Cao: Canvas & SVG",
          tag: "Đồ họa Web",
          duration: "8 phút",
          theory: `
            <h4>So sánh Canvas vs SVG</h4>
            <div class="note-box tip">
              <span class="icon">📊</span>
              <div>
                <strong>SVG (Scalable Vector Graphics):</strong> Đồ họa vector dạng XML. Phóng to mọi kích thước không bị mờ hay vỡ hạt. Thích hợp cho Logo, Icon, Biểu đồ thống kê.<br>
                <strong>Canvas:</strong> Vùng vẽ điểm ảnh (pixel/bitmap) được điều khiển hoàn toàn bằng JavaScript Context. Thích hợp cho Game 2D, xử lý hiệu ứng hạt, chỉnh sửa ảnh.
              </div>
            </div>
          `,
          code: `<!-- Đồ họa SVG với hình tròn và hình chữ nhật -->
<svg width="220" height="100" viewBox="0 0 220 100">
  <rect x="10" y="10" width="80" height="80" rx="10" fill="#3b82f6" />
  <circle cx="150" cy="50" r="40" fill="#ec4899" />
</svg>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; text-align: center; background: #fff; }
              svg { filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); }
            </style>
            <h4>Đồ họa Vector SVG sắc nét</h4>
            <svg width="220" height="100" viewBox="0 0 220 100">
              <rect x="10" y="10" width="80" height="80" rx="12" fill="#3b82f6" />
              <circle cx="160" cy="50" r="38" fill="#ec4899" />
              <text x="50" y="55" fill="#fff" font-size="12" text-anchor="middle" font-family="sans-serif">Rect</text>
              <text x="160" y="55" fill="#fff" font-size="12" text-anchor="middle" font-family="sans-serif">Circle</text>
            </svg>
          `
        },
        {
          id: "ch5-5",
          title: "5. Media (Video/Audio) & Web Storage",
          tag: "Lưu trữ & Đa phương tiện",
          duration: "10 phút",
          theory: `
            <h4>Audio và Video chuẩn HTML5</h4>
            <p>Sử dụng thuộc tính <code>controls</code> để hiển thị thanh play/pause/volume của trình duyệt.</p>
            <h4>Web Storage: localStorage vs sessionStorage</h4>
            <ul>
              <li><code>localStorage</code>: Lưu trữ theo dạng khóa-giá trị (Key - Value). <strong>Không bao giờ mất</strong> kể cả khi người dùng tắt trình duyệt và mở lại.</li>
              <li><code>sessionStorage</code>: Chỉ tồn tại trong tab làm việc hiện tại, đóng tab sẽ bị xóa sạch.</li>
              <li>Dữ liệu luôn lưu dạng chuỗi ký tự (String). Với Object hoặc Array, dùng <code>JSON.stringify()</code> khi lưu và <code>JSON.parse()</code> khi đọc lại!</li>
            </ul>
          `,
          code: `// Lưu trữ thông tin người dùng vào localStorage
localStorage.setItem("username", "NguyenVanA");

// Đọc lại dữ liệu
const user = localStorage.getItem("username");
console.log("Xin chào:", user);

// Lưu đối tượng phức tạp
const settings = { theme: "dark", fontSize: 16 };
localStorage.setItem("userSettings", JSON.stringify(settings));

// Đọc và chuyển ngược lại Object
const loadedSettings = JSON.parse(localStorage.getItem("userSettings"));`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; color: #1e293b; }
              input { padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 4px; }
              button { padding: 6px 12px; background: #6366f1; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
              .result { margin-top: 10px; padding: 10px; background: #eef2ff; border-radius: 6px; font-weight: 500; color: #3730a3; }
            </style>
            <h4>Demo tương tác Web Storage</h4>
            <input type="text" id="demo-name" placeholder="Nhập tên của bạn...">
            <button onclick="
              const val = document.getElementById('demo-name').value;
              localStorage.setItem('demo_learner', val);
              document.getElementById('demo-res').textContent = 'Đã lưu: ' + val + ' (thử F5 xem!)';
            ">Lưu vào localStorage</button>
            <div class="result" id="demo-res">Dữ liệu hiện tại: Chưa lưu</div>
            <script>
              const saved = localStorage.getItem('demo_learner');
              if (saved) document.getElementById('demo-res').textContent = 'Đã đọc từ bộ nhớ: ' + saved;
            </script>
          `
        }
      ],
      exercises: [
        {
          id: "ex-ch5-1",
          title: "Thẻ điều hướng Semantic",
          question: "Điền thẻ ngữ nghĩa dùng để gom các liên kết điều hướng website:",
          codeSnippet: `<{{b1}} aria-label="Menu chính">\n  <a href="/">Trang chủ</a>\n</{{b2}}>`,
          blanks: [
            { id: "b1", answer: ["nav"], placeholder: "thẻ mở", hint: "Viết tắt của Navigation" },
            { id: "b2", answer: ["nav"], placeholder: "thẻ đóng", hint: "Đóng thẻ điều hướng" }
          ],
          explanation: "<nav> là thẻ ngữ nghĩa HTML5 chỉ định phân vùng chứa liên kết điều hướng."
        },
        {
          id: "ex-ch5-2",
          title: "Thẻ bài viết độc lập",
          question: "Điền thẻ biểu thị một khối nội dung độc lập như bài blog:",
          codeSnippet: `<{{b1}}>\n  <h2>Tiêu đề bài viết</h2>\n  <p>Nội dung...</p>\n</{{b2}}>`,
          blanks: [
            { id: "b1", answer: ["article"], placeholder: "thẻ mở", hint: "Từ tiếng Anh nghĩa là 'bài báo/bài viết'" },
            { id: "b2", answer: ["article"], placeholder: "thẻ đóng", hint: "Đóng thẻ article" }
          ],
          explanation: "<article> đại diện cho một bài viết hoàn chỉnh có thể tái sử dụng độc lập."
        },
        {
          id: "ex-ch5-3",
          title: "Input kiểu chọn màu sắc",
          question: "Điền giá trị thuộc tính type để người dùng chọn mã màu HEX:",
          codeSnippet: `<input type="{{b1}}" id="brandColor" value="#ff0000">`,
          blanks: [
            { id: "b1", answer: ["color"], placeholder: "giá trị type", hint: "Từ tiếng Anh nghĩa là 'màu sắc'" }
          ],
          explanation: "type='color' mở bảng chọn màu trực quan của hệ điều hành."
        },
        {
          id: "ex-ch5-4",
          title: "Thuộc tính văn bản mờ gợi ý",
          question: "Điền thuộc tính tạo dòng chữ gợi ý mờ trong ô nhập liệu:",
          codeSnippet: `<input type="text" {{b1}}="Nhập số điện thoại...">`,
          blanks: [
            { id: "b1", answer: ["placeholder"], placeholder: "thuộc tính", hint: "Bắt đầu bằng place... holder" }
          ],
          explanation: "Thuộc tính 'placeholder' cung cấp hướng dẫn mờ biến mất khi người dùng gõ chữ."
        },
        {
          id: "ex-ch5-5",
          title: "Lưu dữ liệu bền vững",
          question: "Điền đối tượng Web Storage giữ dữ liệu không bị mất khi đóng trình duyệt:",
          codeSnippet: `{{b1}}.setItem("token", "xyz123");`,
          blanks: [
            { id: "b1", answer: ["localStorage"], placeholder: "đối tượng", hint: "Bộ nhớ local (viết camelCase)" }
          ],
          explanation: "localStorage cho phép lưu trữ dữ liệu bền vững theo từng domain không giới hạn thời gian."
        },
        {
          id: "ex-ch5-6",
          title: "Phương thức lưu trong Web Storage",
          question: "Điền tên phương thức lưu trữ một cặp key-value vào localStorage:",
          codeSnippet: `localStorage.{{b1}}("theme", "dark");`,
          blanks: [
            { id: "b1", answer: ["setItem"], placeholder: "phương thức", hint: "set... Item" }
          ],
          explanation: "setItem(key, value) dùng để lưu giá trị vào Web Storage."
        },
        {
          id: "ex-ch5-7",
          title: "Chuyển Object thành chuỗi JSON",
          question: "Điền phương thức chuyển đổi Object Javascript thành chuỗi JSON để lưu trữ:",
          codeSnippet: `const data = JSON.{{b1}}({ id: 1, name: "An" });`,
          blanks: [
            { id: "b1", answer: ["stringify"], placeholder: "phương thức", hint: "Chuyển thành string: string... ify" }
          ],
          explanation: "JSON.stringify() chuyển đối tượng thành chuỗi JSON dạng text."
        },
        {
          id: "ex-ch5-8",
          title: "Thẻ đồ họa Vector",
          question: "Điền thẻ biểu diễn đồ họa Vector không bao giờ vỡ hạt:",
          codeSnippet: `<{{b1}} width="100" height="100">\n  <circle cx="50" cy="50" r="40"/>\n</{{b2}}>`,
          blanks: [
            { id: "b1", answer: ["svg"], placeholder: "thẻ mở", hint: "Scalable Vector Graphics" },
            { id: "b2", answer: ["svg"], placeholder: "thẻ đóng", hint: "Đóng thẻ svg" }
          ],
          explanation: "<svg> tạo ra các hình đồ họa vector sắc nét ở mọi độ phân giải."
        },
        {
          id: "ex-ch5-9",
          title: "Thuộc tính điều khiển Media",
          question: "Điền thuộc tính để thẻ video hiển thị thanh điều khiển play, pause, volume:",
          codeSnippet: `<video src="clip.mp4" {{b1}} width="400"></video>`,
          blanks: [
            { id: "b1", answer: ["controls"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'các bộ điều khiển'" }
          ],
          explanation: "Thuộc tính boolean 'controls' kích hoạt giao diện điều khiển video/audio."
        },
        {
          id: "ex-ch5-10",
          title: "Thuộc tính bắt buộc nhập",
          question: "Điền thuộc tính HTML5 ngăn người dùng submit nếu để trống ô nhập liệu:",
          codeSnippet: `<input type="text" name="username" {{b1}}>`,
          blanks: [
            { id: "b1", answer: ["required"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'bắt buộc/yêu cầu'" }
          ],
          explanation: "Thuộc tính 'required' tự động chặn form submit khi trường chưa có nội dung."
        }
      ]
    },

    {
      id: "ch6",
      number: 6,
      title: "Chương 6: Ngôn ngữ CSS",
      shortTitle: "Ngôn ngữ CSS",
      icon: "🎨",
      description: "Cơ chế Cascade, Selector, Box Model chuẩn xác, Typography và Layout bố cục cơ bản.",
      lessons: [
        {
          id: "ch6-1",
          title: "1. Giới thiệu CSS & 3 Cách nhúng",
          tag: "Nhập môn CSS",
          duration: "6 phút",
          theory: `
            <h4>CSS (Cascading Style Sheets) là gì?</h4>
            <p>CSS quy định toàn bộ diện mạo của trang HTML: từ màu sắc, kích thước font chữ, khoảng cách đệm, tới bố cục chia cột.</p>
            <h4>3 Cách nhúng CSS vào trang web</h4>
            <ol>
              <li><strong>External (File riêng biệt)</strong>: Dùng thẻ <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>. Đây là cách chuẩn nhất giúp tái sử dụng và tối ưu bộ nhớ cache.</li>
              <li><strong>Internal (Trong thẻ style)</strong>: Viết trong thẻ <code>&lt;style&gt;</code> tại phần <code>&lt;head&gt;</code>.</li>
              <li><strong>Inline (Trực tiếp trên phần tử)</strong>: Dùng thuộc tính <code>style="..."</code> ngay tại thẻ. Khó bảo trì, chỉ dùng khi cần style động tạm thời.</li>
            </ol>
          `,
          code: `/* Cú pháp chuẩn của quy tắc CSS */
/* selector { property: value; } */
p {
  color: #1e293b;
  font-size: 16px;
  line-height: 1.6;
}

.highlight {
  background-color: #fef08a;
  padding: 4px 8px;
  border-radius: 4px;
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              p { color: #1e293b; font-size: 16px; line-height: 1.6; }
              .highlight { background-color: #fef08a; padding: 4px 8px; border-radius: 4px; font-weight: 600; color: #854d0e; }
            </style>
            <p>Đoạn văn này được định dạng bởi CSS.</p>
            <p>Từ này được <span class="highlight">đánh dấu nổi bật</span> nhờ class CSS.</p>
          `
        },
        {
          id: "ch6-2",
          title: "2. Bộ chọn CSS (Selectors) Đầy Đủ",
          tag: "Selectors",
          duration: "8 phút",
          theory: `
            <h4>Bảng tra cứu các loại Selector thường gặp</h4>
            <ul>
              <li><strong>Theo thẻ (Element)</strong>: <code>p</code>, <code>h1</code>, <code>div</code>.</li>
              <li><strong>Theo Class</strong>: <code>.button</code> (bắt đầu bằng dấu chấm).</li>
              <li><strong>Theo ID</strong>: <code>#header</code> (bắt đầu bằng dấu thăng).</li>
              <li><strong>Con trực tiếp (Child)</strong>: <code>nav &gt; a</code> (chỉ chọn thẻ a là con cấp 1 của nav).</li>
              <li><strong>Hậu duệ (Descendant)</strong>: <code>article p</code> (chọn mọi thẻ p nằm trong article, kể cả cháu chắt).</li>
              <li><strong>Trạng thái (Pseudo-class)</strong>: <code>a:hover</code> (rê chuột), <code>input:focus</code> (khi con trỏ nhấp vào).</li>
            </ul>
          `,
          code: `/* Chọn theo class */
.btn-primary {
  background-color: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

/* Pseudo-class hover khi rê chuột */
.btn-primary:hover {
  background-color: #1d4ed8;
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; }
              .btn-primary { background-color: #2563eb; color: white; padding: 10px 18px; border-radius: 6px; border: none; cursor: pointer; font-weight: 500; transition: background 0.2s; }
              .btn-primary:hover { background-color: #1d4ed8; }
            </style>
            <button class="btn-primary">Rê chuột vào tôi (Hover)</button>
          `
        },
        {
          id: "ch6-3",
          title: "3. Cascade, Độ Ưu Tiên & Trọng Số (Specificity)",
          tag: "Nguyên lý CSS",
          duration: "7 phút",
          theory: `
            <h4>Thang điểm độ ưu tiên (Specificity Hierarchy)</h4>
            <p>Khi có nhiều luật CSS cùng trỏ vào một phần tử, trình duyệt sẽ tính điểm để quyết định ai thắng:</p>
            <ol>
              <li><code>!important</code>: Thắng gần như tuyệt đối (hạn chế lạm dụng vì gây khó debug).</li>
              <li><strong>Inline Style</strong> (<code>style="..."</code>): 1000 điểm.</li>
              <li><strong>ID Selector</strong> (<code>#id</code>): 100 điểm.</li>
              <li><strong>Class, Attribute, Pseudo-class</strong> (<code>.class</code>, <code>:hover</code>): 10 điểm.</li>
              <li><strong>Element Selector</strong> (<code>p</code>, <code>div</code>): 1 điểm.</li>
            </ol>
            <p>Nếu bằng điểm nhau, luật nào khai báo <strong>ở vị trí sau</strong> trong file CSS sẽ ghi đè luật trước.</p>
          `,
          code: `/* 1 điểm */
p { color: gray; }

/* 10 điểm -> Thắng thẻ p */
.special { color: blue; }

/* 100 điểm -> Thắng cả class */
#unique-text { color: crimson; }`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              p { color: gray; }
              .special { color: #2563eb; font-weight: bold; }
              #unique-text { color: #e11d48; font-size: 1.1rem; }
            </style>
            <p>Thẻ p thông thường (màu xám - 1 điểm).</p>
            <p class="special">Thẻ p có class special (màu xanh - 10 điểm).</p>
            <p id="unique-text" class="special">Thẻ p vừa có class vừa có ID (màu đỏ - 100 điểm thắng!).</p>
          `
        },
        {
          id: "ch6-4",
          title: "4. Box Model: Trái Tim Của Bố Cục CSS",
          tag: "Box Model",
          duration: "9 phút",
          theory: `
            <h4>4 Lớp cấu tạo của một hộp phần tử</h4>
            <ul>
              <li><strong>Content</strong>: Phần chứa chữ hoặc hình ảnh bên trong.</li>
              <li><strong>Padding</strong>: Vùng đệm <em>bên trong</em> viền, ngăn cách nội dung với đường viền.</li>
              <li><strong>Border</strong>: Đường viền bao quanh phần tử.</li>
              <li><strong>Margin</strong>: Khoảng cách <em>bên ngoài</em> viền, ngăn cách phần tử này với các phần tử khác.</li>
            </ul>
            <div class="note-box tip">
              <span class="icon">🎯</span>
              <div><strong>Bí kíp thực chiến:</strong> Luôn đặt <code>* { box-sizing: border-box; }</code> ở đầu file CSS để chiều rộng <code>width</code> bao gồm cả Padding và Border, tránh tình trạng vỡ khung giao diện.</div>
            </div>
          `,
          code: `* {
  box-sizing: border-box;
}

.box {
  width: 240px;
  padding: 20px;            /* Đệm trong */
  border: 3px solid #3b82f6; /* Viền */
  margin: 16px auto;         /* Cách ngoài & căn giữa */
  background-color: #eff6ff;
  border-radius: 8px;
}`,
          previewHtml: `
            <style>
              * { box-sizing: border-box; }
              body { font-family: system-ui, sans-serif; padding: 10px; }
              .box-diagram { border: 2px dashed #f59e0b; background: #fffbeb; padding: 12px; text-align: center; border-radius: 8px; }
              .box-margin-label { font-size: 11px; color: #d97706; font-weight: bold; margin-bottom: 6px; }
              .box-border-visual { border: 3px solid #3b82f6; background: #eff6ff; padding: 14px; border-radius: 6px; }
              .box-content-visual { background: #dbeafe; padding: 10px; border-radius: 4px; font-weight: 600; color: #1e40af; }
            </style>
            <div class="box-diagram">
              <div class="box-margin-label">MARGIN (Khoảng cách ngoài)</div>
              <div class="box-border-visual">
                <div style="font-size: 11px; color: #2563eb; margin-bottom: 4px;">BORDER & PADDING (Viền & Đệm)</div>
                <div class="box-content-visual">CONTENT (Nội dung)</div>
              </div>
            </div>
          `
        },
        {
          id: "ch6-5",
          title: "5. Định Dạng Văn Bản & Bảng",
          tag: "Typography",
          duration: "6 phút",
          theory: `
            <h4>Thuộc tính chữ (Typography)</h4>
            <ul>
              <li><code>font-family</code>: Kiểu chữ, nên khai báo kèm font dự phòng như <code>system-ui, Arial, sans-serif</code>.</li>
              <li><code>font-size</code>: Kích cỡ chữ (px, rem, em).</li>
              <li><code>font-weight</code>: Độ đậm của chữ (400 bình thường, 700 đậm).</li>
              <li><code>text-align</code>: Căn lề văn bản (<code>left</code>, <code>center</code>, <code>right</code>, <code>justify</code>).</li>
              <li><code>text-decoration</code>: Trang trí chữ, ví dụ <code>none</code> để bỏ gạch chân liên kết.</li>
            </ul>
            <h4>Làm đẹp bảng dữ liệu</h4>
            <p><code>border-collapse: collapse;</code> gộp các đường viền đôi của bảng lại thành một đường viền đơn thanh lịch.</p>
          `,
          code: `body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: #0284c7;
}

table {
  border-collapse: collapse;
  width: 100%;
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; padding: 15px; }
              .sample-heading { font-size: 1.3rem; font-weight: 700; color: #0f172a; margin-top: 0; }
              .sample-link { text-decoration: none; color: #0284c7; font-weight: 600; border-bottom: 1px dashed #0284c7; }
              .sample-link:hover { color: #0369a1; }
            </style>
            <div class="sample-heading">Font chữ hiện đại (system-ui)</div>
            <p>Văn bản dễ đọc với độ giãn dòng line-height lý tưởng. Bấm vào <a href="#" class="sample-link">Liên kết bỏ gạch chân</a> để trải nghiệm.</p>
          `
        },
        {
          id: "ch6-6",
          title: "6. Display & Vị Trí Tương Đối/Tuyệt Đối (Position)",
          tag: "Layout & Position",
          duration: "9 phút",
          theory: `
            <h4>Thuộc tính <code>display</code></h4>
            <ul>
              <li><code>block</code>: Chiếm trọn 100% bề ngang, tự động xuống dòng (như <code>div</code>, <code>p</code>).</li>
              <li><code>inline</code>: Chỉ chiếm vừa vặn nội dung, không đặt được width/height (như <code>span</code>, <code>a</code>).</li>
              <li><code>inline-block</code>: Nằm cùng một dòng nhưng vẫn chỉnh được width và height!</li>
              <li><code>none</code>: Ẩn phần tử hoàn toàn khỏi trang web.</li>
            </ul>
            <h4>Cặp bài trùng <code>position: relative</code> và <code>absolute</code></h4>
            <p>Khi thẻ con đặt <code>position: absolute; top: 0; right: 0;</code>, nó sẽ định vị theo mép của thẻ cha gần nhất có <code>position: relative</code>!</p>
          `,
          code: `.badge-card {
  position: relative; /* Làm mốc tọa độ */
  width: 220px;
  padding: 16px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.hot-badge {
  position: absolute; /* Định vị theo thẻ cha */
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 9999px;
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 25px; background: #f8fafc; }
              .badge-card { position: relative; width: 200px; padding: 16px; background: white; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
              .hot-badge { position: absolute; top: -10px; right: -10px; background: #ef4444; color: white; font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 9999px; box-shadow: 0 2px 4px rgba(239,68,68,0.4); }
              h4 { margin: 0 0 6px 0; color: #1e293b; }
              p { margin: 0; color: #64748b; font-size: 13px; }
            </style>
            <div class="badge-card">
              <span class="hot-badge">HOT ⚡</span>
              <h4>Khóa Học Web</h4>
              <p>Position Absolute đặt huy hiệu ngay góc trên bên phải.</p>
            </div>
          `
        }
      ],
      exercises: [
        {
          id: "ex-ch6-1",
          title: "Liên kết file CSS bên ngoài",
          question: "Điền thẻ và thuộc tính rel để liên kết tệp CSS riêng biệt:",
          codeSnippet: `<{{b1}} {{b2}}="stylesheet" href="style.css">`,
          blanks: [
            { id: "b1", answer: ["link"], placeholder: "thẻ", hint: "Thẻ link liên kết tài nguyên" },
            { id: "b2", answer: ["rel"], placeholder: "thuộc tính", hint: "Viết tắt của Relationship" }
          ],
          explanation: "<link rel='stylesheet' href='...'> là cách chuẩn để nhúng file CSS rời vào tài liệu HTML."
        },
        {
          id: "ex-ch6-2",
          title: "Ký hiệu Class Selector",
          question: "Điền ký tự đại diện cho class selector khi viết quy tắc CSS:",
          codeSnippet: `{{b1}}button-primary {\n  background-color: blue;\n}`,
          blanks: [
            { id: "b1", answer: ["."], placeholder: "ký hiệu", hint: "Dấu chấm" }
          ],
          explanation: "Trong CSS, dấu chấm (.) đại diện cho bộ chọn Class."
        },
        {
          id: "ex-ch6-3",
          title: "Ký hiệu ID Selector",
          question: "Điền ký tự đại diện cho ID selector khi viết quy tắc CSS:",
          codeSnippet: `{{b1}}header-navbar {\n  width: 100%;\n}`,
          blanks: [
            { id: "b1", answer: ["#"], placeholder: "ký hiệu", hint: "Dấu thăng (hashtag)" }
          ],
          explanation: "Dấu thăng (#) dùng để chọn phần tử theo thuộc tính id duy nhất."
        },
        {
          id: "ex-ch6-4",
          title: "Khoảng cách đệm bên trong",
          question: "Điền tên thuộc tính Box Model tạo khoảng đệm giữa nội dung và đường viền:",
          codeSnippet: `.card {\n  {{b1}}: 16px;\n}`,
          blanks: [
            { id: "b1", answer: ["padding"], placeholder: "thuộc tính", hint: "Bắt đầu bằng pad... ding" }
          ],
          explanation: "Padding là khoảng đệm bên trong hộp, ngăn cách nội dung khỏi viền border."
        },
        {
          id: "ex-ch6-5",
          title: "Khoảng cách cách ngoài",
          question: "Điền thuộc tính Box Model tạo khoảng cách bên ngoài đường viền:",
          codeSnippet: `.container {\n  {{b1}}: 20px auto;\n}`,
          blanks: [
            { id: "b1", answer: ["margin"], placeholder: "thuộc tính", hint: "Bắt đầu bằng mar... gin" }
          ],
          explanation: "Margin là khoảng cách bên ngoài của phần tử đối với các phần tử xung quanh."
        },
        {
          id: "ex-ch6-6",
          title: "Box Sizing chuẩn",
          question: "Điền giá trị thuộc tính để width bao gồm cả padding và border:",
          codeSnippet: `* {\n  box-sizing: {{b1}};\n}`,
          blanks: [
            { id: "b1", answer: ["border-box"], placeholder: "giá trị", hint: "border-... box" }
          ],
          explanation: "box-sizing: border-box giữ cho kích thước của phần tử không bị phình to khi thêm padding hoặc border."
        },
        {
          id: "ex-ch6-7",
          title: "Ẩn phần tử trong CSS",
          question: "Điền giá trị thuộc tính display để ẩn hoàn toàn phần tử khỏi luồng trang:",
          codeSnippet: `.hidden-modal {\n  display: {{b1}};\n}`,
          blanks: [
            { id: "b1", answer: ["none"], placeholder: "giá trị", hint: "Từ tiếng Anh nghĩa là 'không có gì/không'" }
          ],
          explanation: "display: none ẩn hoàn toàn phần tử và không chiếm chỗ trong bố cục trang web."
        },
        {
          id: "ex-ch6-8",
          title: "Bộ chọn con trực tiếp",
          question: "Điền toán tử bộ chọn để chỉ chọn thẻ 'a' là con trực tiếp cấp 1 của 'nav':",
          codeSnippet: `nav {{b1}} a {\n  color: white;\n}`,
          blanks: [
            { id: "b1", answer: [">"], placeholder: "toán tử", hint: "Dấu lớn hơn" }
          ],
          explanation: "Dấu lớn hơn (>) là Child Combinator, chỉ chọn con trực tiếp."
        },
        {
          id: "ex-ch6-9",
          title: "Trạng thái rê chuột",
          question: "Điền pseudo-class áp dụng kiểu dáng khi người dùng di chuột lên nút:",
          codeSnippet: `button:{{b1}} {\n  background-color: darkblue;\n}`,
          blanks: [
            { id: "b1", answer: ["hover"], placeholder: "pseudo-class", hint: "Từ tiếng Anh nghĩa là 'lượn/rê chuột'" }
          ],
          explanation: ":hover kích hoạt khi con trỏ chuột nằm trên phần tử."
        },
        {
          id: "ex-ch6-10",
          title: "Làm mốc định vị tuyệt đối",
          question: "Điền giá trị position cho thẻ cha để làm mốc tọa độ cho thẻ con có position: absolute:",
          codeSnippet: `.parent {\n  position: {{b1}};\n}\n.child {\n  position: absolute;\n}`,
          blanks: [
            { id: "b1", answer: ["relative"], placeholder: "giá trị", hint: "Từ tiếng Anh nghĩa là 'tương đối'" }
          ],
          explanation: "position: relative giữ nguyên vị trí phần tử cha trong luồng nhưng biến nó thành mốc định vị cho con."
        }
      ]
    },

    {
      id: "ch7",
      number: 7,
      title: "Chương 7: Kỹ thuật CSS3 Nâng Cao",
      shortTitle: "CSS3 Nâng Cao",
      icon: "✨",
      description: "Bo góc, Đổ bóng mượt mà, Biến đổi 2D/3D (Transform), Hiệu ứng chuyển động (Animation) và Responsive.",
      lessons: [
        {
          id: "ch7-1",
          title: "1. Bo góc, Đổ bóng & Đường viền",
          tag: "Hiệu ứng thị giác",
          duration: "7 phút",
          theory: `
            <h4>Biến khối vuông thô cứng thành thẻ mềm mại</h4>
            <ul>
              <li><code>border-radius</code>: Bo tròn góc của hộp. Nếu đặt <code>50%</code> cho hình vuông, bạn sẽ có một hình tròn hoàn hảo!</li>
              <li><code>box-shadow: x y blur spread color</code>: Đổ bóng cho khối hộp, tạo cảm giác nổi khối 3D trên mặt bàn.</li>
              <li><code>border-image</code>: Dùng hoa văn hình ảnh để làm viền bao quanh phần tử.</li>
            </ul>
          `,
          code: `.modern-card {
  width: 260px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px; /* Bo góc mềm mại */
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 
              0 8px 10px -6px rgba(0, 0, 0, 0.1); /* Bóng mềm */
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 25px; background: #f1f5f9; display: flex; justify-content: center; }
              .card { width: 220px; padding: 20px; background: #fff; border-radius: 16px; box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.12); text-align: center; }
              .avatar { width: 64px; height: 64px; border-radius: 50%; margin: 0 auto 12px; background: linear-gradient(135deg, #6366f1, #a855f7); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px; }
              h4 { margin: 0 0 4px 0; color: #1e293b; }
              p { margin: 0; color: #64748b; font-size: 13px; }
            </style>
            <div class="card">
              <div class="avatar">UI</div>
              <h4>Modern Card</h4>
              <p>Bo góc 16px và bóng đổ đa tầng sang trọng.</p>
            </div>
          `
        },
        {
          id: "ch7-2",
          title: "2. Dải màu chuyển tiếp (Gradients) & Hiệu ứng chữ",
          tag: "Background & Chữ",
          duration: "7 phút",
          theory: `
            <h4>Dải màu nền không cần dùng hình ảnh</h4>
            <ul>
              <li><code>linear-gradient(góc_độ, màu_1, màu_2)</code>: Tạo dải màu chuyển tuyến tính siêu mượt, nhẹ hơn nhiều so với tải ảnh JPEG/PNG.</li>
              <li><code>radial-gradient</code>: Dải màu tỏa tròn từ tâm ra ngoài.</li>
              <li><code>text-shadow</code>: Đổ bóng cho văn bản, tăng độ tương phản khi chữ nằm đè lên hình ảnh phức tạp.</li>
            </ul>
          `,
          code: `.hero-banner {
  /* Dải màu chuyển từ tím sang xanh cyan */
  background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; }
              .hero { background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); color: white; padding: 24px; border-radius: 12px; text-align: center; box-shadow: 0 8px 16px rgba(79, 70, 229, 0.25); }
              .hero h2 { margin: 0 0 8px 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2); font-size: 1.5rem; }
              .hero p { margin: 0; opacity: 0.95; font-size: 14px; }
            </style>
            <div class="hero">
              <h2>Gradient Năng Động</h2>
              <p>Linear gradient 135deg kết hợp text-shadow sắc nét.</p>
            </div>
          `
        },
        {
          id: "ch7-3",
          title: "3. Biến đổi 2D & 3D (Transform)",
          tag: "Transform",
          duration: "8 phút",
          theory: `
            <h4>Thay đổi hình dáng và tọa độ không làm xô lệch bố cục</h4>
            <p>Thuộc tính <code>transform</code> được xử lý trực tiếp bởi GPU đồ họa máy tính, giúp chuyển động đạt chuẩn 60 khung hình/giây:</p>
            <ul>
              <li><code>translate(x, y)</code>: Dịch chuyển phần tử theo trục ngang và trục dọc.</li>
              <li><code>rotate(độ)</code>: Xoay phần tử (ví dụ: <code>rotate(45deg)</code>).</li>
              <li><code>scale(tỉ_lệ)</code>: Thu phóng to nhỏ (ví dụ: <code>scale(1.1)</code> là phóng to 110%).</li>
              <li><code>skew(độ)</code>: Kéo xiên lệch góc.</li>
            </ul>
          `,
          code: `.zoom-box {
  transition: transform 0.3s ease;
}

/* Khi rê chuột: Vừa nâng lên 5px vừa phóng to 5% */
.zoom-box:hover {
  transform: translateY(-5px) scale(1.05);
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 30px; display: flex; justify-content: center; }
              .interactive-btn { background: #10b981; color: white; font-weight: bold; padding: 14px 28px; border-radius: 10px; border: none; cursor: pointer; font-size: 15px; box-shadow: 0 4px 6px rgba(16,185,129,0.3); transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }
              .interactive-btn:hover { transform: translateY(-6px) scale(1.08) rotate(-1deg); background: #059669; }
            </style>
            <button class="interactive-btn">Rê chuột để bay lên 🚀</button>
          `
        },
        {
          id: "ch7-4",
          title: "4. Chuyển tiếp mượt (Transition) & Hoạt họa (Animation)",
          tag: "Chuyển động",
          duration: "10 phút",
          theory: `
            <h4>Transition (Chuyển tiếp giữa 2 trạng thái)</h4>
            <p><code>transition: property duration timing-function;</code> giúp màu sắc hoặc kích thước đổi từ từ thay vì giật cục tức thì.</p>
            <h4>Animation & @keyframes (Chuyển động phức tạp đa điểm)</h4>
            <p>Khi bạn cần chuyển động tự động lặp lại liên tục (vòng tròn quay vô tận, nút nhấp nháy), dùng <code>@keyframes</code> để định nghĩa từng mốc phần trăm thời gian 0%, 50%, 100%.</p>
          `,
          code: `/* Định nghĩa kịch bản nhịp đập */
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.pulsing-dot {
  width: 20px;
  height: 20px;
  background-color: #ef4444;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; }
              @keyframes pulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
                70% { transform: scale(1.1); box-shadow: 0 0 0 16px rgba(239, 68, 68, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
              }
              .live-badge { display: flex; align-items: center; gap: 8px; font-weight: bold; color: #dc2626; font-size: 14px; background: #fee2e2; padding: 6px 14px; border-radius: 9999px; }
              .dot { width: 12px; height: 12px; background: #dc2626; border-radius: 50%; animation: pulse 1.6s infinite; }
            </style>
            <div class="live-badge">
              <span class="dot"></span>
              ĐANG PHÁT TRỰC TIẾP
            </div>
          `
        },
        {
          id: "ch7-5",
          title: "5. Chia Đa Cột & Media Queries (Responsive Web)",
          tag: "Responsive",
          duration: "9 phút",
          theory: `
            <h4>Chia cột văn bản kiểu báo chí</h4>
            <p>Thuộc tính <code>column-count: 2;</code> tự động phân dòng văn bản thành 2 cột đọc mà không cần dùng thẻ div.</p>
            <h4>Media Queries: Thích ứng mọi kích thước màn hình</h4>
            <p>Trang web sẽ áp dụng các khối CSS đặc biệt khi độ rộng màn hình thỏa mãn điều kiện:</p>
            <ul>
              <li><code>@media (max-width: 768px)</code>: Áp dụng cho thiết bị máy tính bảng và điện thoại di động (chiều ngang từ 768px trở xuống).</li>
            </ul>
          `,
          code: `/* Mặc định trên máy tính: 3 cột */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Trên điện thoại (dưới 640px): tự co về 1 cột */
@media (max-width: 640px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              .demo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
              .grid-item { background: #e0e7ff; color: #3730a3; padding: 12px; text-align: center; border-radius: 6px; font-weight: 600; font-size: 13px; }
            </style>
            <div class="demo-grid">
              <div class="grid-item">Cột 1</div>
              <div class="grid-item">Cột 2</div>
              <div class="grid-item">Cột 3</div>
            </div>
            <p style="font-size: 12px; color: #64748b; margin-top: 10px;">Thử thu nhỏ cửa sổ trình duyệt để thấy sức mạnh responsive!</p>
          `
        }
      ],
      exercises: [
        {
          id: "ex-ch7-1",
          title: "Thuộc tính bo tròn góc",
          question: "Điền thuộc tính tạo góc bo tròn mềm mại cho thẻ:",
          codeSnippet: `.card {\n  {{b1}}: 12px;\n}`,
          blanks: [
            { id: "b1", answer: ["border-radius"], placeholder: "thuộc tính", hint: "border-... radius" }
          ],
          explanation: "border-radius bo tròn bốn góc của phần tử theo bán kính chỉ định."
        },
        {
          id: "ex-ch7-2",
          title: "Đổ bóng cho khối hộp",
          question: "Điền thuộc tính tạo bóng đổ cho thẻ div:",
          codeSnippet: `.modal {\n  {{b1}}: 0 4px 12px rgba(0,0,0,0.15);\n}`,
          blanks: [
            { id: "b1", answer: ["box-shadow"], placeholder: "thuộc tính", hint: "box-... shadow" }
          ],
          explanation: "box-shadow tạo hiệu ứng bóng đổ cho phần tử khối."
        },
        {
          id: "ex-ch7-3",
          title: "Dải màu chuyển tiếp tuyến tính",
          question: "Điền hàm tạo dải màu chuyển tiếp từ trái sang phải:",
          codeSnippet: `.banner {\n  background: {{b1}}(to right, red, yellow);\n}`,
          blanks: [
            { id: "b1", answer: ["linear-gradient"], placeholder: "hàm CSS", hint: "linear-... gradient" }
          ],
          explanation: "linear-gradient() tạo dải màu chuyển tuyến tính giữa nhiều gam màu."
        },
        {
          id: "ex-ch7-4",
          title: "Thuộc tính biến đổi hình học",
          question: "Điền thuộc tính áp dụng hiệu ứng xoay, co giãn, dịch chuyển:",
          codeSnippet: `.btn:hover {\n  {{b1}}: scale(1.1);\n}`,
          blanks: [
            { id: "b1", answer: ["transform"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'biến đổi'" }
          ],
          explanation: "transform cho phép biến đổi tọa độ, thu phóng, xoay không gian 2D/3D."
        },
        {
          id: "ex-ch7-5",
          title: "Hàm dịch chuyển trục Y",
          question: "Điền hàm dịch chuyển phần tử theo trục dọc hướng lên hoặc xuống:",
          codeSnippet: `.card:hover {\n  transform: {{b1}}(-5px);\n}`,
          blanks: [
            { id: "b1", answer: ["translateY"], placeholder: "hàm", hint: "translate + chữ cái Y viết hoa" }
          ],
          explanation: "translateY() dịch chuyển phần tử theo chiều thẳng đứng (trục Y)."
        },
        {
          id: "ex-ch7-6",
          title: "Chuyển tiếp hiệu ứng mượt mà",
          question: "Điền thuộc tính làm quá trình đổi kiểu dáng diễn ra từ từ trong 300ms:",
          codeSnippet: `.btn {\n  {{b1}}: all 300ms ease;\n}`,
          blanks: [
            { id: "b1", answer: ["transition"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'chuyển tiếp'" }
          ],
          explanation: "transition tạo sự biến đổi mượt mà giữa các giá trị thuộc tính CSS khi thay đổi trạng thái."
        },
        {
          id: "ex-ch7-7",
          title: "Từ khóa khai báo kịch bản Animation",
          question: "Điền từ khóa bắt đầu bằng dấu @ để định nghĩa các mốc hoạt họa:",
          codeSnippet: `{{b1}} spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}`,
          blanks: [
            { id: "b1", answer: ["@keyframes"], placeholder: "từ khóa @", hint: "@key... frames" }
          ],
          explanation: "@keyframes định nghĩa các mốc chuyển động cụ thể cho animation CSS."
        },
        {
          id: "ex-ch7-8",
          title: "Khai báo CSS Responsive",
          question: "Điền từ khóa truy vấn media để áp dụng kiểu dáng cho màn hình nhỏ hơn 768px:",
          codeSnippet: `{{b1}} (max-width: 768px) {\n  .sidebar { display: none; }\n}`,
          blanks: [
            { id: "b1", answer: ["@media"], placeholder: "từ khóa @", hint: "@ + media" }
          ],
          explanation: "@media cho phép viết các quy tắc CSS chỉ kích hoạt khi thiết bị khớp điều kiện kích thước."
        },
        {
          id: "ex-ch7-9",
          title: "Chia văn bản thành nhiều cột",
          question: "Điền thuộc tính chia văn bản thành 2 cột báo chí:",
          codeSnippet: `.newspaper-article {\n  {{b1}}: 2;\n}`,
          blanks: [
            { id: "b1", answer: ["column-count"], placeholder: "thuộc tính", hint: "column-... count" }
          ],
          explanation: "column-count chia đoạn văn dài thành số lượng cột tương ứng tự động ngắt dòng."
        },
        {
          id: "ex-ch7-10",
          title: "Bố cục lưới CSS Grid",
          question: "Điền giá trị thuộc tính display để kích hoạt mô hình bố cục lưới 2 chiều:",
          codeSnippet: `.gallery {\n  display: {{b1}};\n}`,
          blanks: [
            { id: "b1", answer: ["grid"], placeholder: "giá trị display", hint: "Từ tiếng Anh nghĩa là 'lưới'" }
          ],
          explanation: "display: grid kích hoạt hệ thống bố cục lưới hai chiều cực mạnh mẽ của CSS."
        }
      ]
    },

    {
      id: "ch8",
      number: 8,
      title: "Chương 8: Lập Trình JavaScript Căn Bản",
      shortTitle: "JavaScript Căn Bản",
      icon: "⚡",
      description: "Biến (let/const), Kiểu dữ liệu, Toán tử, Rẽ nhánh điều kiện, Vòng lặp, Hàm, Mảng & Object.",
      lessons: [
        {
          id: "ch8-1",
          title: "1. JavaScript Làm Gì & Cách Nhúng",
          tag: "Nhập môn JS",
          duration: "6 phút",
          theory: `
            <h4>Trái tim logic của ứng dụng Web</h4>
            <p>JavaScript là ngôn ngữ lập trình chạy trực tiếp trên trình duyệt, có nhiệm vụ xử lý phản hồi của người dùng, kiểm tra form, gọi API và cập nhật giao diện mà không cần tải lại trang.</p>
            <div class="note-box alert">
              <span class="icon">⚠️</span>
              <div><strong>Đính chính quan trọng:</strong> <em>JavaScript hoàn toàn khác với Java!</em> Đây là hai ngôn ngữ lập trình độc lập, cấu trúc và triết lý hoàn toàn khác biệt.</div>
            </div>
            <h4>Thuộc tính <code>defer</code> khi nhúng script</h4>
            <p>Luôn đặt <code>&lt;script src="app.js" defer&gt;&lt;/script&gt;</code> để trình duyệt tải xong cây HTML rồi mới thực thi mã script, tránh lỗi không tìm thấy phần tử HTML.</p>
          `,
          code: `// Ghi chú một dòng trong JavaScript
/* Ghi chú
   nhiều dòng */
console.log("Xin chào từ JavaScript Console!");`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; }
              .terminal { background: #0f172a; color: #38bdf8; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 13px; box-shadow: 0 4px 10px rgba(0,0,0,0.15); }
              .prompt { color: #4ade80; margin-right: 6px; }
            </style>
            <div class="terminal">
              <span class="prompt">&gt;</span> console.log("Xin chào từ JavaScript Console!");
              <div style="color: #f1f5f9; margin-top: 6px;">&rarr; Xin chào từ JavaScript Console!</div>
            </div>
          `
        },
        {
          id: "ch8-2",
          title: "2. Khai Báo Biến Hiện Đại: const & let",
          tag: "Biến & Hằng",
          duration: "7 phút",
          theory: `
            <h4>Từ bỏ từ khóa <code>var</code> thời xưa</h4>
            <p>Trong JavaScript hiện đại (ES6+), chúng ta chỉ sử dụng 2 từ khóa:</p>
            <ul>
              <li><code>const</code>: Dùng cho <strong>Hằng số</strong> (giá trị không thay đổi sau khi gán ban đầu). Luôn ưu tiên dùng <code>const</code> theo mặc định!</li>
              <li><code>let</code>: Dùng cho <strong>Biến số</strong> (giá trị cần gán lại sau này, ví dụ biến đếm vòng lặp, điểm số tăng dần).</li>
            </ul>
          `,
          code: `const COURSE_NAME = "Lập trình Web";
// COURSE_NAME = "Khác"; // Báo lỗi ngay! Không thể gán lại const

let studentScore = 8;
studentScore = studentScore + 1; // Hợp lệ, điểm số giờ là 9
console.log(studentScore);`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              .score-card { background: #eff6ff; border: 1px solid #bfdbfe; padding: 15px; border-radius: 8px; }
              button { background: #2563eb; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; }
            </style>
            <div class="score-card">
              <p>Khóa học: <strong>Lập trình Web (const)</strong></p>
              <p>Điểm số (let): <span id="current-score" style="font-size: 1.2rem; color: #2563eb; font-weight: bold;">8</span></p>
              <button onclick="
                let el = document.getElementById('current-score');
                el.textContent = parseInt(el.textContent) + 1;
              ">+1 Điểm số</button>
            </div>
          `
        },
        {
          id: "ch8-3",
          title: "3. Kiểu Dữ Liệu & Ép Kiểu (Type Conversion)",
          tag: "Data Types",
          duration: "8 phút",
          theory: `
            <h4>Các kiểu dữ liệu nguyên thủy (Primitive Types)</h4>
            <ul>
              <li><code>number</code>: Số nguyên hoặc số thực (<code>10</code>, <code>3.14</code>).</li>
              <li><code>string</code>: Chuỗi ký tự đặt trong dấu nháy kép <code>"..."</code>, nháy đơn <code>'...'</code> hoặc template literal <code>\`...\`</code>.</li>
              <li><code>boolean</code>: Chỉ có 2 giá trị <code>true</code> (đúng) hoặc <code>false</code> (sai).</li>
              <li><code>null</code>: Rỗng có chủ ý.</li>
              <li><code>undefined</code>: Biến đã khai báo nhưng chưa được gán giá trị.</li>
            </ul>
            <div class="note-box tip">
              <span class="icon">💡</span>
              <div><strong>Bẫy phổ biến khi đọc Form:</strong> Khi lấy dữ liệu <code>input.value</code>, trình duyệt luôn trả về dạng chuỗi (String). Nếu muốn tính toán cộng trừ, phải đổi sang số bằng <code>Number(chuoi)</code> hoặc <code>parseInt(chuoi)</code>!</div>
            </div>
          `,
          code: `const ageText = "20"; // Chuỗi ký tự
const ageNumber = Number(ageText); // Ép sang số: 20

console.log(typeof ageText);   // "string"
console.log(typeof ageNumber); // "number"

// Template literals (Backtick) cho phép nhúng biến cực tiện
const greeting = \`Năm nay bạn \${ageNumber} tuổi.\`;`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              input { padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; width: 80px; }
              button { padding: 6px 12px; background: #0284c7; color: white; border: none; border-radius: 4px; cursor: pointer; }
            </style>
            <div>
              <input type="text" id="num-a" value="10"> +
              <input type="text" id="num-b" value="20">
              <button onclick="
                let a = document.getElementById('num-a').value;
                let b = document.getElementById('num-b').value;
                let sumWrong = a + b; // Ghép chuỗi '1020'
                let sumRight = Number(a) + Number(b); // Số 30
                alert('Ghép chuỗi sai: ' + sumWrong + '\\nCộng số đúng (Number): ' + sumRight);
              ">Tính Tổng</button>
            </div>
          `
        },
        {
          id: "ch8-4",
          title: "4. Toán Tử So Sánh Tuyệt Đối (===) & Logic",
          tag: "Toán tử",
          duration: "7 phút",
          theory: `
            <h4>Tại sao luôn dùng <code>===</code> thay vì <code>==</code>?</h4>
            <ul>
              <li><code>==</code> (so sánh lỏng lẻo): Tự động ép kiểu ngầm, dẫn đến các tình huống kỳ quặc như <code>"5" == 5</code> là <code>true</code>.</li>
              <li><code>===</code> (so sánh nghiêm ngặt): So sánh <strong>cả giá trị lẫn kiểu dữ liệu</strong>. <code>"5" === 5</code> là <code>false</code>. Luôn luôn dùng <code>===</code>!</li>
            </ul>
            <h4>Toán tử Logic</h4>
            <ul>
              <li><code>&amp;&amp;</code> (AND): Tất cả điều kiện phải đúng.</li>
              <li><code>||</code> (OR): Chỉ cần 1 trong các điều kiện đúng.</li>
              <li><code>!</code> (NOT): Đảo ngược giá trị logic (phủ định).</li>
            </ul>
          `,
          code: `const score = 8.5;
const attendance = 90; // Điểm chuyên cần %

// Đạt loại Giỏi nếu điểm >= 8.0 VÀ chuyên cần >= 80%
const isExcellent = score >= 8.0 && attendance >= 80;
console.log("Đạt loại Giỏi:", isExcellent); // true`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; color: #1e293b; }
              .badge-pass { background: #dcfce7; color: #15803d; padding: 4px 10px; border-radius: 9999px; font-weight: bold; display: inline-block; }
            </style>
            <h4>Kiểm tra điều kiện logic:</h4>
            <p>Điểm: 8.5 | Chuyên cần: 90%</p>
            <div class="badge-pass">&check; Đạt loại Giỏi (score &gt;= 8.0 &amp;&amp; attendance &gt;= 80)</div>
          `
        },
        {
          id: "ch8-5",
          title: "5. Rẽ Nhánh Điều Kiện & Vòng Lặp",
          tag: "Điều khiển luồng",
          duration: "9 phút",
          theory: `
            <h4>Cấu trúc rẽ nhánh</h4>
            <ul>
              <li><code>if (dieu_kien) { ... } else { ... }</code>: Rẽ theo 2 nhánh.</li>
              <li><code>switch(gia_tri) { case ...: break; }</code>: Chọn 1 trong nhiều trường hợp cụ thể.</li>
            </ul>
            <h4>Các loại vòng lặp</h4>
            <ul>
              <li><code>for (let i = 0; i &lt; n; i++)</code>: Lặp khi biết trước số lần lặp.</li>
              <li><code>while (dieu_kien)</code>: Lặp khi điều kiện còn đúng.</li>
              <li><code>for...of</code>: Duyệt qua từng phần tử của một mảng cực kỳ ngắn gọn.</li>
            </ul>
          `,
          code: `const subjects = ["HTML", "CSS", "JavaScript"];

// Duyệt mảng bằng for...of hiện đại
for (const subject of subjects) {
  console.log("Môn học:", subject);
}

// Rẽ nhánh
const mark = 9;
if (mark >= 5) {
  console.log("Chúc mừng bạn đã qua môn!");
} else {
  console.log("Cố gắng ôn thi lại nhé.");
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              ul { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 25px; margin: 0; }
              li { color: #334155; margin: 4px 0; }
            </style>
            <h4>Kết quả duyệt mảng (Loop):</h4>
            <ul id="loop-output">
              <li>Môn học: HTML</li>
              <li>Môn học: CSS</li>
              <li>Môn học: JavaScript</li>
            </ul>
          `
        },
        {
          id: "ch8-6",
          title: "6. Hàm (Function), Mảng (Array) & Đối tượng (Object)",
          tag: "Cấu trúc dữ liệu",
          duration: "10 phút",
          theory: `
            <h4>Hàm gom nhóm logic</h4>
            <p>Hàm nhận tham số đầu vào và trả về giá trị thông qua từ khóa <code>return</code>.</p>
            <h4>Mảng (Array)</h4>
            <p>Mảng lưu danh sách thứ tự bắt đầu từ chỉ số <code>0</code>. Một số phương thức thường dùng: <code>push()</code> (thêm vào cuối), <code>pop()</code> (lấy ra phần tử cuối), <code>length</code> (số lượng phần tử).</p>
            <h4>Đối tượng (Object)</h4>
            <p>Lưu trữ dữ liệu theo cặp khóa - giá trị (Key - Value), biểu diễn thông tin của một thực thể trong đời thực.</p>
          `,
          code: `// Khai báo hàm tính tổng
function calculateAverage(score1, score2) {
  return (score1 + score2) / 2;
}

// Đối tượng sinh viên
const student = {
  name: "Nguyễn Văn A",
  scores: [8, 9, 10],
  isGraduated: false
};

console.log(student.name); // "Nguyễn Văn A"
console.log(student.scores[0]); // 8`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              .user-card { border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; background: #fff; max-width: 250px; }
              .user-card h4 { margin: 0 0 6px 0; color: #1e293b; }
            </style>
            <div class="user-card">
              <h4>👤 Nguyễn Văn A</h4>
              <p style="margin: 0; font-size: 13px; color: #64748b;">Mảng điểm: [8, 9, 10]</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: #16a34a; font-weight: bold;">Điểm trung bình: 9.0</p>
            </div>
          `
        },
        {
          id: "ch8-7",
          title: "7. Đối Tượng Dựng Sẵn & Hộp Thoại (Dialogs)",
          tag: "Built-in Objects",
          duration: "7 phút",
          theory: `
            <h4>Các đối tượng tích hợp sẵn tiện dụng</h4>
            <ul>
              <li><code>Math</code>: Các phép toán (<code>Math.round(3.6)</code> làm tròn thành 4, <code>Math.random()</code> sinh số ngẫu nhiên từ 0 đến cận 1).</li>
              <li><code>Date</code>: Làm việc với ngày tháng (<code>new Date()</code>).</li>
              <li><code>String</code>: Xử lý chuỗi (<code>.toUpperCase()</code>, <code>.includes()</code>, <code>.trim()</code>).</li>
            </ul>
            <h4>Hộp thoại trình duyệt</h4>
            <ul>
              <li><code>alert("Nội dung")</code>: Thông báo đơn giản.</li>
              <li><code>confirm("Bạn chắc chắn muốn xóa?")</code>: Trả về <code>true</code> nếu bấm OK, <code>false</code> nếu bấm Cancel.</li>
              <li><code>prompt("Nhập tên:")</code>: Cho người dùng gõ vào một chuỗi ký tự.</li>
            </ul>
          `,
          code: `const randomNum = Math.floor(Math.random() * 10) + 1; // Số từ 1 đến 10
console.log("Số may mắn:", randomNum);

const now = new Date();
console.log("Năm hiện tại:", now.getFullYear());`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              button { padding: 8px 14px; background: #8b5cf6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
            </style>
            <button onclick="
              const r = Math.floor(Math.random() * 100) + 1;
              document.getElementById('rand-display').textContent = 'Số may mắn của bạn: ' + r;
            ">Quay Số Ngẫu Nhiên (Math.random)</button>
            <p id="rand-display" style="font-weight: bold; color: #6d28d9; margin-top: 10px;">Chưa quay</p>
          `
        },
        {
          id: "ch8-8",
          title: "8. Sự Kiện (Events) & Lắng Nghe Sự Kiện",
          tag: "Sự kiện",
          duration: "8 phút",
          theory: `
            <h4>Sự kiện là gì?</h4>
            <p>Sự kiện là những hành động diễn ra trong trình duyệt: người dùng click chuột, gõ phím, cuộn trang, di chuyển chuột, hoặc trang tải xong.</p>
            <h4>Phương thức vàng: <code>addEventListener</code></h4>
            <p>Tách rời hoàn toàn mã logic JavaScript khỏi file HTML, không viết inline <code>onclick="..."</code> vào thẻ.</p>
            <ul>
              <li><code>click</code>: Bấm chuột.</li>
              <li><code>input</code>: Khi người dùng gõ vào ô nhập liệu (phản hồi theo thời gian thực).</li>
              <li><code>change</code>: Khi giá trị ô nhập hoặc dropdown thay đổi.</li>
            </ul>
          `,
          code: `const submitBtn = document.querySelector("#my-button");

submitBtn.addEventListener("click", function() {
  alert("Bạn vừa nhấn vào nút!");
});`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              #click-me { background: #0284c7; color: #fff; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: bold; }
            </style>
            <button id="click-me">Bấm tôi đi!</button>
            <p id="event-log" style="color: #64748b; font-size: 13px; margin-top: 8px;">Số lần bấm: 0</p>
            <script>
              let count = 0;
              document.getElementById('click-me').addEventListener('click', function() {
                count++;
                document.getElementById('event-log').textContent = 'Số lần bấm: ' + count;
              });
            </script>
          `
        }
      ],
      exercises: [
        {
          id: "ex-ch8-1",
          title: "Khai báo hằng số không gán lại",
          question: "Điền từ khóa khai báo biến hằng không thể gán lại giá trị:",
          codeSnippet: `{{b1}} PI = 3.14159;`,
          blanks: [
            { id: "b1", answer: ["const"], placeholder: "từ khóa", hint: "Viết tắt của Constant" }
          ],
          explanation: "const dùng để khai báo biến có giá trị không thể thay đổi sau khi khởi tạo."
        },
        {
          id: "ex-ch8-2",
          title: "Khai báo biến cho phép gán lại",
          question: "Điền từ khóa khai báo biến có thể thay đổi giá trị trong phạm vi block:",
          codeSnippet: `{{b1}} score = 0;\nscore = score + 10;`,
          blanks: [
            { id: "b1", answer: ["let"], placeholder: "từ khóa", hint: "Từ khóa 3 chữ cái thay thế cho var" }
          ],
          explanation: "let cho phép khai báo biến có phạm vi khối (block scope) và gán lại giá trị."
        },
        {
          id: "ex-ch8-3",
          title: "Thuộc tính hoãn thực thi script",
          question: "Điền thuộc tính giúp file script chỉ thực thi sau khi cây HTML đã dựng xong:",
          codeSnippet: `<script src="app.js" {{b1}}></script>`,
          blanks: [
            { id: "b1", answer: ["defer"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'hoãn lại'" }
          ],
          explanation: "defer đảm bảo tài liệu HTML được phân tích hoàn chỉnh trước khi chạy script."
        },
        {
          id: "ex-ch8-4",
          title: "So sánh nghiêm ngặt giá trị và kiểu",
          question: "Điền toán tử so sánh bằng cả giá trị lẫn kiểu dữ liệu:",
          codeSnippet: `if (role {{b1}} "admin") {\n  console.log("Cho phép truy cập");\n}`,
          blanks: [
            { id: "b1", answer: ["==="], placeholder: "toán tử", hint: "3 dấu bằng liên tiếp" }
          ],
          explanation: "=== so sánh nghiêm ngặt (Strict Equality) không tự ép kiểu dữ liệu."
        },
        {
          id: "ex-ch8-5",
          title: "Toán tử logic VÀ (AND)",
          question: "Điền toán tử logic yêu cầu cả 2 vế điều kiện đều phải đúng:",
          codeSnippet: `if (age >= 18 {{b1}} hasLicense === true) {\n  drive();\n}`,
          blanks: [
            { id: "b1", answer: ["&&"], placeholder: "toán tử", hint: "Hai ký tự &" }
          ],
          explanation: "&& là toán tử Logical AND, chỉ trả về true khi cả hai vế đều true."
        },
        {
          id: "ex-ch8-6",
          title: "Thêm phần tử vào cuối mảng",
          question: "Điền phương thức mảng dùng để thêm một giá trị mới vào vị trí cuối cùng:",
          codeSnippet: `const fruits = ["Cam", "Táo"];\nfruits.{{b1}}("Chuối");`,
          blanks: [
            { id: "b1", answer: ["push"], placeholder: "phương thức", hint: "Từ tiếng Anh nghĩa là 'đẩy vào'" }
          ],
          explanation: "push() thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới."
        },
        {
          id: "ex-ch8-7",
          title: "Làm tròn số học Math",
          question: "Điền phương thức làm tròn số theo quy tắc toán học (>= 0.5 lên, < 0.5 xuống):",
          codeSnippet: `const roundVal = Math.{{b1}}(4.6); // Kết quả: 5`,
          blanks: [
            { id: "b1", answer: ["round"], placeholder: "phương thức", hint: "Từ tiếng Anh nghĩa là 'tròn'" }
          ],
          explanation: "Math.round() làm tròn số thập phân tới số nguyên gần nhất."
        },
        {
          id: "ex-ch8-8",
          title: "Lắng nghe sự kiện phần tử",
          question: "Điền phương thức gắn sự kiện cho phần tử trong JavaScript:",
          codeSnippet: `btn.{{b1}}("click", handleClick);`,
          blanks: [
            { id: "b1", answer: ["addEventListener"], placeholder: "phương thức", hint: "add... Event... Listener" }
          ],
          explanation: "addEventListener gắn hàm xử lý sự kiện vào phần tử DOM chuẩn hiện đại."
        },
        {
          id: "ex-ch8-9",
          title: "Hộp thoại nhập chuỗi",
          question: "Điền hàm mở hộp thoại cho người dùng nhập một chuỗi văn bản:",
          codeSnippet: `const username = {{b1}}("Vui lòng nhập tên bạn:");`,
          blanks: [
            { id: "b1", answer: ["prompt"], placeholder: "hàm hộp thoại", hint: "Bắt đầu bằng chữ p... prompt" }
          ],
          explanation: "prompt() hiển thị hộp thoại với ô nhập văn bản và trả về chuỗi người dùng gõ."
        },
        {
          id: "ex-ch8-10",
          title: "Ép chuỗi thành kiểu số",
          question: "Điền hàm chuyển đổi tường minh một chuỗi số thành dạng Number:",
          codeSnippet: `const total = {{b1}}("150");`,
          blanks: [
            { id: "b1", answer: ["Number"], placeholder: "hàm/đối tượng", hint: "Chữ cái N viết hoa: Number" }
          ],
          explanation: "Number() chuyển đổi giá trị sang kiểu dữ liệu số một cách tường minh."
        },
        {
          id: "ex-ch8-11",
          title: "Độ dài của mảng hoặc chuỗi",
          question: "Điền thuộc tính lấy số lượng phần tử của một mảng:",
          codeSnippet: `const items = [10, 20, 30];\nconsole.log(items.{{b1}}); // 3`,
          blanks: [
            { id: "b1", answer: ["length"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'chiều dài'" }
          ],
          explanation: "length là thuộc tính trả về số phần tử của mảng hoặc số ký tự của chuỗi."
        },
        {
          id: "ex-ch8-12",
          title: "Định nghĩa hàm trả về kết quả",
          question: "Điền từ khóa gửi kết quả tính toán từ bên trong hàm ra ngoài:",
          codeSnippet: `function double(x) {\n  {{b1}} x * 2;\n}`,
          blanks: [
            { id: "b1", answer: ["return"], placeholder: "từ khóa", hint: "Từ tiếng Anh nghĩa là 'trả về'" }
          ],
          explanation: "return kết thúc thực thi hàm và chỉ định giá trị trả về cho nơi gọi hàm."
        }
      ]
    },

    {
      id: "ch9",
      number: 9,
      title: "Chương 9: JavaScript DOM & Tương Tác",
      shortTitle: "JavaScript DOM",
      icon: "🌳",
      description: "Cây DOM, Tìm phần tử (querySelector), Đọc/ghi textContent, classList, Tạo thẻ động & Form Events.",
      lessons: [
        {
          id: "ch9-1",
          title: "1. DOM (Document Object Model) Là Gì?",
          tag: "Khái niệm DOM",
          duration: "6 phút",
          theory: `
            <h4>Cây phả hệ của trang Web</h4>
            <p>Khi trình duyệt tải tài liệu HTML, nó chuyển đổi toàn bộ thẻ thành một <strong>Cây đối tượng (DOM Tree)</strong>. Mỗi thẻ, thuộc tính, và dòng chữ đều trở thành một Node.</p>
            <p>Nhờ cây DOM, JavaScript có toàn quyền kiểm soát trang web: thêm thẻ mới, xóa thẻ cũ, đổi màu sắc, thay đổi nội dung chữ theo thời gian thực.</p>
            <ul>
              <li><code>window</code>: Đại diện cho cửa sổ trình duyệt (toàn năng nhất).</li>
              <li><code>document</code>: Đại diện cho tài liệu HTML đang mở bên trong cửa sổ.</li>
            </ul>
          `,
          code: `// Kiểm tra tiêu đề trang thông qua đối tượng document
console.log("Tiêu đề hiện tại:", document.title);

// Đổi tiêu đề tab trình duyệt bằng JavaScript
document.title = "Tiêu đề mới vừa đổi!";`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              .dom-tree { border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; background: #f8fafc; font-family: monospace; font-size: 13px; line-height: 1.8; }
              .node-tag { color: #2563eb; font-weight: bold; }
              .node-text { color: #059669; }
            </style>
            <div class="dom-tree">
              <div>📦 <span class="node-tag">document</span></div>
              <div style="padding-left: 20px;">└── 📂 <span class="node-tag">&lt;html&gt;</span></div>
              <div style="padding-left: 40px;">├── 📂 <span class="node-tag">&lt;head&gt;</span> &rarr; &lt;title&gt;</div>
              <div style="padding-left: 40px;">└── 📂 <span class="node-tag">&lt;body&gt;</span></div>
              <div style="padding-left: 60px;">├── 📄 <span class="node-tag">&lt;h1&gt;</span>: <span class="node-text">"Xin chào"</span></div>
              <div style="padding-left: 60px;">└── 📄 <span class="node-tag">&lt;p&gt;</span>: <span class="node-text">"Nội dung"</span></div>
            </div>
          `
        },
        {
          id: "ch9-2",
          title: "2. Tìm Phần Tử Bằng querySelector Chuẩn Nhất",
          tag: "Tìm phần tử",
          duration: "8 phút",
          theory: `
            <h4>Hai phương thức hiện đại mạnh mẽ nhất</h4>
            <ul>
              <li><code>document.querySelector(selectorCSS)</code>: Tìm và trả về <strong>phần tử đầu tiên</strong> khớp với bộ chọn CSS (Class, ID, Thẻ).</li>
              <li><code>document.querySelectorAll(selectorCSS)</code>: Tìm và trả về <strong>tất cả</strong> các phần tử khớp (dưới dạng NodeList).</li>
            </ul>
            <p>Phương thức cũ: <code>getElementById("id")</code> (chỉ truyền tên id, không có dấu #).</p>
          `,
          code: `// Tìm theo ID
const heading = document.querySelector("#main-title");

// Tìm theo Class
const primaryButton = document.querySelector(".btn-submit");

// Tìm danh sách tất cả các thẻ li
const allItems = document.querySelectorAll("ul.menu > li");
console.log("Số lượng mục:", allItems.length);`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              .highlight-demo { padding: 8px 12px; background: #e0f2fe; border-radius: 6px; border-left: 4px solid #0284c7; color: #0369a1; font-weight: 500; }
            </style>
            <div id="target-element" class="highlight-demo">Phần tử mục tiêu: #target-element</div>
            <button onclick="
              let el = document.querySelector('#target-element');
              el.style.backgroundColor = '#fef08a';
              el.style.borderLeftColor = '#eab308';
              el.style.color = '#854d0e';
              el.textContent = 'Đã tìm thấy bằng document.querySelector()!';
            " style="margin-top: 10px; padding: 6px 12px; cursor: pointer;">Tìm và Đổi Màu</button>
          `
        },
        {
          id: "ch9-3",
          title: "3. Đọc & Cập Nhật Nội Dung: textContent vs innerHTML",
          tag: "Sửa nội dung",
          duration: "8 phút",
          theory: `
            <h4>Chọn đúng thuộc tính để bảo vệ trang web khỏi lỗ hổng XSS</h4>
            <ul>
              <li><code>textContent</code>: Đọc hoặc ghi <strong>văn bản thuần túy</strong>. An toàn 100%, không lo mã độc, tốc độ xử lý nhanh.</li>
              <li><code>innerHTML</code>: Đọc hoặc ghi nội dung kèm cả thẻ HTML (ví dụ: <code>&lt;strong&gt;Chữ đậm&lt;/strong&gt;</code>). <em>Chỉ dùng khi bạn hoàn toàn kiểm soát được nguồn dữ liệu!</em></li>
            </ul>
            <h4>Thao tác Class bằng <code>classList</code> (Chuẩn nhất)</h4>
            <p>Không nên ghi đè trực tiếp <code>style</code>, hãy dùng <code>classList</code> để tách biệt code CSS:</p>
            <ul>
              <li><code>el.classList.add("ten-class")</code>: Thêm class.</li>
              <li><code>el.classList.remove("ten-class")</code>: Xóa class.</li>
              <li><code>el.classList.toggle("ten-class")</code>: Nếu có thì xóa, nếu chưa có thì thêm vào (rất hay dùng cho nút bật/tắt dark mode).</li>
            </ul>
          `,
          code: `const titleEl = document.querySelector("#title");

// Cập nhật văn bản
titleEl.textContent = "Chào mừng bạn đã trở lại!";

// Thêm class 'active'
titleEl.classList.add("active");

// Bật/tắt class khi bấm nút
// titleEl.classList.toggle("dark-mode");`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              .box-styled { padding: 12px; border: 2px solid #cbd5e1; border-radius: 8px; transition: all 0.3s; }
              .box-styled.active-mode { border-color: #3b82f6; background: #eff6ff; color: #1d4ed8; font-weight: bold; }
              button { margin-top: 10px; padding: 6px 12px; cursor: pointer; }
            </style>
            <div id="demo-box" class="box-styled">Khối hộp nguyên bản</div>
            <button onclick="
              document.getElementById('demo-box').classList.toggle('active-mode');
            ">Toggle Class (Bật / Tắt)</button>
          `
        },
        {
          id: "ch9-4",
          title: "4. Bắt Sự Kiện Form & Đọc Dữ Liệu Input",
          tag: "Form Tương tác",
          duration: "9 phút",
          theory: `
            <h4>Đọc dữ liệu người dùng gõ vào</h4>
            <ul>
              <li><code>input.value</code>: Lấy chuỗi ký tự trong ô text, email, number, select.</li>
              <li><code>checkbox.checked</code>: Lấy trạng thái đánh dấu tích (trả về <code>true</code> hoặc <code>false</code>).</li>
            </ul>
            <h4>Ngăn chặn tải lại trang bằng <code>e.preventDefault()</code></h4>
            <p>Mặc định khi submit form, trình duyệt sẽ tải lại toàn bộ trang. Trong ứng dụng web hiện đại (Single Page App), ta bắt buộc gọi <code>e.preventDefault()</code> để giữ trang không bị reload!</p>
          `,
          code: `const myForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#username");

myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn trình duyệt reload trang!

  const enteredName = nameInput.value;
  console.log("Tên vừa nhập:", enteredName);
});`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              input[type="text"] { padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 4px; }
              button { padding: 6px 12px; background: #059669; color: white; border: none; border-radius: 4px; cursor: pointer; }
            </style>
            <form onsubmit="
              event.preventDefault();
              let val = document.getElementById('name-val').value;
              document.getElementById('live-feedback').textContent = 'Chào bạn: ' + val + ' (Trang không bị reload!)';
            ">
              <input type="text" id="name-val" placeholder="Nhập tên..." required>
              <button type="submit">Gửi</button>
            </form>
            <p id="live-feedback" style="margin-top: 10px; color: #047857; font-weight: 500;"></p>
          `
        },
        {
          id: "ch9-5",
          title: "5. Tạo & Chèn Node Động (createElement & appendChild)",
          tag: "DOM Động",
          duration: "9 phút",
          theory: `
            <h4>Quy trình 3 bước tạo thẻ động bằng JavaScript</h4>
            <ol>
              <li><strong>Bước 1 - Tạo thẻ</strong>: <code>const li = document.createElement("li");</code></li>
              <li><strong>Bước 2 - Gán nội dung / class</strong>: <code>li.textContent = "Công việc mới";</code></li>
              <li><strong>Bước 3 - Gắn vào cây DOM</strong>: <code>parentUl.appendChild(li);</code></li>
            </ol>
            <p>Xóa phần tử: Trong trình duyệt hiện đại, chỉ cần gọi <code>element.remove();</code> là phần tử sẽ tự biến mất!</p>
          `,
          code: `const todoList = document.querySelector("#todo-list");

// Hàm thêm việc cần làm
function addTodo(taskName) {
  const newItem = document.createElement("li");
  newItem.textContent = taskName;
  newItem.classList.add("todo-item");

  todoList.appendChild(newItem);
}`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              ul { list-style: none; padding: 0; margin: 10px 0 0; }
              li { background: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 10px; margin-bottom: 4px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; }
              input { padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; }
              button.add-btn { padding: 6px 12px; background: #6366f1; color: white; border: none; border-radius: 4px; cursor: pointer; }
              button.del-btn { background: #ef4444; color: white; border: none; border-radius: 3px; padding: 2px 6px; cursor: pointer; font-size: 11px; }
            </style>
            <div>
              <input type="text" id="task-input" placeholder="Việc cần làm...">
              <button class="add-btn" onclick="
                let inp = document.getElementById('task-input');
                if(!inp.value.trim()) return;
                let ul = document.getElementById('dynamic-list');
                let li = document.createElement('li');
                li.innerHTML = '<span>' + inp.value + '</span> <button class=\\'del-btn\\' onclick=\\'this.parentElement.remove()\\'>Xóa</button>';
                ul.appendChild(li);
                inp.value = '';
              ">Thêm Thẻ Mới</button>
              <ul id="dynamic-list">
                <li><span>Học JavaScript DOM</span> <button class="del-btn" onclick="this.parentElement.remove()">Xóa</button></li>
              </ul>
            </div>
          `
        },
        {
          id: "ch9-6",
          title: "6. Ứng Dụng Thực Tế: Color Picker & Bật Tắt Đèn",
          tag: "Dự án nhỏ",
          duration: "10 phút",
          theory: `
            <h4>Công thức kinh điển của mọi tương tác Web</h4>
            <div class="note-box tip">
              <span class="icon">🚀</span>
              <div>
                <strong>Công thức 3 bước:</strong><br>
                1. <strong>Tìm</strong> phần tử bằng <code>querySelector</code>.<br>
                2. <strong>Lắng nghe</strong> sự kiện bằng <code>addEventListener</code>.<br>
                3. <strong>Xử lý &amp; Cập nhật</strong>: Đọc dữ liệu, đổi class hoặc sửa nội dung DOM.
              </div>
            </div>
          `,
          code: `const picker = document.querySelector("#bg-color");
const card = document.querySelector("#preview-card");

// Lắng nghe sự kiện input thời gian thực
picker.addEventListener("input", function() {
  card.style.backgroundColor = picker.value;
});`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              .box-screen { width: 100%; height: 90px; border-radius: 8px; border: 2px dashed #94a3b8; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #334155; transition: background-color 0.2s; margin-top: 10px; }
              input[type="color"] { cursor: pointer; border: none; width: 40px; height: 30px; vertical-align: middle; }
            </style>
            <div>
              <label>Chọn màu trực tiếp: </label>
              <input type="color" id="color-box-picker" value="#93c5fd" oninput="
                document.getElementById('screen-box').style.backgroundColor = this.value;
              ">
              <div id="screen-box" class="box-screen" style="background-color: #93c5fd;">
                Màu sắc đổi tức thì khi bạn chọn!
              </div>
            </div>
          `
        },
        {
          id: "ch9-7",
          title: "7. Phối Hợp Mảng Dữ Liệu & Render Giao Diện",
          tag: "Kiến trúc dữ liệu",
          duration: "9 phút",
          theory: `
            <h4>Tư duy Data-Driven UI</h4>
            <p>Trong lập trình web hiện đại (kể cả với React hay Vue sau này), dữ liệu luôn nằm trong Mảng các Đối tượng (Array of Objects). DOM chỉ là nơi hiển thị dữ liệu đó ra màn hình bằng vòng lặp <code>forEach()</code> hoặc <code>map()</code>.</p>
          `,
          code: `const students = [
  { name: "An", score: 9 },
  { name: "Bình", score: 8 },
  { name: "Chi", score: 10 }
];

const listEl = document.querySelector("#student-list");

students.forEach(student => {
  const item = document.createElement("li");
  item.textContent = \`\${student.name} - \${student.score} điểm\`;
  listEl.appendChild(item);
});`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 15px; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #cbd5e1; padding: 6px 10px; font-size: 13px; }
              th { background: #f1f5f9; }
            </style>
            <h4>Bảng điểm sinh viên từ Mảng dữ liệu:</h4>
            <table>
              <thead><tr><th>Họ Tên</th><th>Điểm</th><th>Xếp loại</th></tr></thead>
              <tbody>
                <tr><td>Nguyễn Văn An</td><td>9.0</td><td>Giỏi</td></tr>
                <tr><td>Trần Thị Bình</td><td>8.0</td><td>Khá</td></tr>
                <tr><td>Lê Hoàng Chi</td><td>10.0</td><td>Xuất sắc</td></tr>
              </tbody>
            </table>
          `
        }
      ],
      exercises: [
        {
          id: "ex-ch9-1",
          title: "Đối tượng tài liệu HTML",
          question: "Điền đối tượng gốc đại diện cho tài liệu HTML đang mở:",
          codeSnippet: `const pageTitle = {{b1}}.title;`,
          blanks: [
            { id: "b1", answer: ["document"], placeholder: "đối tượng", hint: "Từ tiếng Anh nghĩa là 'tài liệu'" }
          ],
          explanation: "document là đối tượng gốc cung cấp các API để truy xuất và sửa đổi DOM."
        },
        {
          id: "ex-ch9-2",
          title: "Tìm phần tử đầu tiên theo Selector CSS",
          question: "Điền phương thức tìm phần tử đầu tiên khớp bộ chọn CSS:",
          codeSnippet: `const btn = document.{{b1}}(".btn-submit");`,
          blanks: [
            { id: "b1", answer: ["querySelector"], placeholder: "phương thức", hint: "query... Selector" }
          ],
          explanation: "querySelector() trả về phần tử đầu tiên khớp với bộ chọn CSS."
        },
        {
          id: "ex-ch9-3",
          title: "Tìm tất cả phần tử khớp",
          question: "Điền phương thức tìm toàn bộ danh sách các phần tử khớp:",
          codeSnippet: `const allCards = document.{{b1}}(".card");`,
          blanks: [
            { id: "b1", answer: ["querySelectorAll"], placeholder: "phương thức", hint: "query... Selector... All" }
          ],
          explanation: "querySelectorAll() trả về một NodeList chứa tất cả các phần tử khớp bộ chọn."
        },
        {
          id: "ex-ch9-4",
          title: "Đọc/ghi văn bản thuần túy",
          question: "Điền thuộc tính an toàn dùng để thay đổi văn bản thuần túy:",
          codeSnippet: `heading.{{b1}} = "Khóa học 2026";`,
          blanks: [
            { id: "b1", answer: ["textContent"], placeholder: "thuộc tính", hint: "text... Content" }
          ],
          explanation: "textContent lấy hoặc gán văn bản thuần mà không phân tích cú pháp HTML, tránh mã độc."
        },
        {
          id: "ex-ch9-5",
          title: "Thêm class vào phần tử",
          question: "Điền phương thức thêm một class mới vào danh sách classList:",
          codeSnippet: `box.classList.{{b1}}("highlight");`,
          blanks: [
            { id: "b1", answer: ["add"], placeholder: "phương thức", hint: "Từ tiếng Anh nghĩa là 'thêm vào'" }
          ],
          explanation: "classList.add('className') thêm class vào phần tử nếu chưa tồn tại."
        },
        {
          id: "ex-ch9-6",
          title: "Bật/tắt class linh hoạt",
          question: "Điền phương thức bật/tắt (nếu có thì xóa, nếu chưa có thì thêm) class:",
          codeSnippet: `body.classList.{{b1}}("dark-theme");`,
          blanks: [
            { id: "b1", answer: ["toggle"], placeholder: "phương thức", hint: "Từ tiếng Anh nghĩa là 'bật/tắt công tắc'" }
          ],
          explanation: "classList.toggle('className') tự động thêm hoặc gỡ bỏ class tùy trạng thái hiện tại."
        },
        {
          id: "ex-ch9-7",
          title: "Đọc giá trị ô nhập liệu",
          question: "Điền thuộc tính lấy giá trị người dùng vừa gõ vào ô input:",
          codeSnippet: `const userEmail = inputEmail.{{b1}};`,
          blanks: [
            { id: "b1", answer: ["value"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'giá trị'" }
          ],
          explanation: "Thuộc tính 'value' lưu giá trị chuỗi hiện tại của ô nhập liệu form."
        },
        {
          id: "ex-ch9-8",
          title: "Kiểm tra ô checkbox",
          question: "Điền thuộc tính kiểm tra xem checkbox có đang được tích chọn hay không:",
          codeSnippet: `if (agreeCheckbox.{{b1}} === true) {\n  submitBtn.disabled = false;\n}`,
          blanks: [
            { id: "b1", answer: ["checked"], placeholder: "thuộc tính", hint: "Từ tiếng Anh nghĩa là 'đã kiểm tra/đã tích'" }
          ],
          explanation: "checked là thuộc tính boolean cho biết checkbox/radio có đang được chọn hay không."
        },
        {
          id: "ex-ch9-9",
          title: "Ngăn chặn tải lại trang khi submit",
          question: "Điền phương thức ngăn hành vi mặc định (reload trang) của sự kiện submit:",
          codeSnippet: `form.addEventListener("submit", function(e) {\n  e.{{b1}}();\n});`,
          blanks: [
            { id: "b1", answer: ["preventDefault"], placeholder: "phương thức", hint: "prevent... Default" }
          ],
          explanation: "preventDefault() chặn hành vi mặc định của trình duyệt đối với sự kiện."
        },
        {
          id: "ex-ch9-10",
          title: "Tạo thẻ HTML mới trong bộ nhớ",
          question: "Điền phương thức tạo một phần tử HTML mới:",
          codeSnippet: `const newDiv = document.{{b1}}("div");`,
          blanks: [
            { id: "b1", answer: ["createElement"], placeholder: "phương thức", hint: "create... Element" }
          ],
          explanation: "createElement('tagName') tạo một node phần tử HTML mới trong bộ nhớ RAM."
        },
        {
          id: "ex-ch9-11",
          title: "Gắn thẻ con vào thẻ cha",
          question: "Điền phương thức chèn node con vào vị trí cuối cùng trong node cha:",
          codeSnippet: `parentContainer.{{b1}}(newDiv);`,
          blanks: [
            { id: "b1", answer: ["appendChild"], placeholder: "phương thức", hint: "append... Child" }
          ],
          explanation: "appendChild(childNode) chèn node con vào cuối danh sách con của node cha."
        },
        {
          id: "ex-ch9-12",
          title: "Xóa phần tử khỏi cây DOM",
          question: "Điền phương thức hiện đại xóa trực tiếp phần tử khỏi DOM:",
          codeSnippet: `const alertBox = document.querySelector(".alert");\nalertBox.{{b1}}();`,
          blanks: [
            { id: "b1", answer: ["remove"], placeholder: "phương thức", hint: "Từ tiếng Anh nghĩa là 'gỡ bỏ/xóa'" }
          ],
          explanation: "element.remove() xóa phần tử khỏi cây DOM trực tiếp mà không cần gọi qua thẻ cha."
        }
      ]
    },

    {
      id: "summary",
      number: 10,
      title: "Tổng kết: Phối Hợp HTML, CSS & JavaScript",
      shortTitle: "Tổng Kết & Thực Chiến",
      icon: "🎯",
      description: "Quy trình kết hợp 3 trụ cột: Tạo cấu trúc HTML, Làm đẹp bằng CSS và Thổi hồn sống bằng JavaScript DOM.",
      lessons: [
        {
          id: "summary-1",
          title: "1. Bức Tranh Toàn Cảnh & Bảng Tra Cứu Vai Trò",
          tag: "Tổng kết",
          duration: "8 phút",
          theory: `
            <h4>Bảng so sánh vai trò của bộ 3 công nghệ Web</h4>
            <div class="note-box tip">
              <span class="icon">🏆</span>
              <div>
                <strong>1. HTML (Khung xương & Nội dung):</strong> Cung cấp các thẻ ngữ nghĩa, tiêu đề, form, bảng, liên kết.<br>
                <strong>2. CSS (Diện mạo & Cảm xúc):</strong> Quy định màu sắc, font chữ, bố cục lưới Grid/Flexbox, bo góc, bóng đổ và responsive.<br>
                <strong>3. JavaScript (Trí não & Tương tác):</strong> Xử lý dữ liệu, lắng nghe sự kiện người dùng, tương tác API.<br>
                <strong>4. DOM (Cầu nối vàng):</strong> Cung cấp giao diện để JavaScript đọc và thay đổi cây HTML theo thời gian thực!
              </div>
            </div>
            <h4>Quy trình xây dựng tính năng Web chuẩn mực:</h4>
            <ol>
              <li>Dựng khung phần tử trong HTML với <code>id</code> hoặc <code>class</code> rõ ràng.</li>
              <li>Tạo kiểu dáng trong CSS cho trạng thái mặc định và trạng thái kích hoạt (active/hidden).</li>
              <li>Dùng <code>document.querySelector</code> để lấy phần tử trong JavaScript.</li>
              <li>Gắn lắng nghe sự kiện bằng <code>addEventListener</code>.</li>
              <li>Bên trong hàm xử lý, thay đổi <code>textContent</code>, giá trị <code>value</code> hoặc bật tắt <code>classList</code>.</li>
            </ol>
          `,
          code: `<!-- 1. HTML -->
<p id="msg">Chưa bấm nút</p>
<button id="btn">Bấm thử</button>

<!-- 2. CSS -->
<style>
  #msg.active { color: #16a34a; font-weight: bold; }
</style>

<!-- 3. JavaScript -->
<script>
  const msg = document.querySelector("#msg");
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    msg.textContent = "Nút đã được bấm thành công!";
    msg.classList.add("active");
  });
</script>`,
          previewHtml: `
            <style>
              body { font-family: system-ui, sans-serif; padding: 20px; }
              #msg { font-size: 16px; color: #64748b; margin-bottom: 12px; }
              #msg.active { color: #16a34a; font-weight: bold; }
              #demo-btn { background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; }
              #demo-btn:hover { background: #1d4ed8; }
            </style>
            <p id="msg">Chưa bấm nút</p>
            <button id="demo-btn">Bấm thử</button>
            <script>
              const msg = document.querySelector('#msg');
              const btn = document.querySelector('#demo-btn');
              btn.addEventListener('click', () => {
                msg.textContent = '🎉 Tuyệt vời! Bạn đã nắm vững bộ ba HTML, CSS & JavaScript!';
                msg.classList.add('active');
              });
            </script>
          `
        }
      ],
      exercises: [
        {
          id: "ex-sum-1",
          title: "Bộ ba trụ cột công nghệ Web",
          question: "Điền 3 công nghệ cốt lõi theo thứ tự: Nội dung - Trình bày - Logic:",
          codeSnippet: `1. Cấu trúc & Nội dung: {{b1}}\n2. Định dạng & Giao diện: {{b2}}\n3. Tương tác & Hành vi: {{b3}}`,
          blanks: [
            { id: "b1", answer: ["HTML", "html"], placeholder: "công nghệ 1", hint: "HyperText Markup Language" },
            { id: "b2", answer: ["CSS", "css"], placeholder: "công nghệ 2", hint: "Cascading Style Sheets" },
            { id: "b3", answer: ["JavaScript", "javascript", "JS", "js"], placeholder: "công nghệ 3", hint: "Ngôn ngữ lập trình web" }
          ],
          explanation: "HTML, CSS và JavaScript là 3 ngôn ngữ nền tảng của mọi trang web hiện đại."
        },
        {
          id: "ex-sum-2",
          title: "Cầu nối giữa HTML và JavaScript",
          question: "Điền từ viết tắt của mô hình biểu diễn tài liệu HTML thành cây đối tượng:",
          codeSnippet: `Cầu nối để JavaScript đọc và sửa HTML là {{b1}} (Document Object Model).`,
          blanks: [
            { id: "b1", answer: ["DOM", "dom"], placeholder: "từ viết tắt", hint: "D... O... M" }
          ],
          explanation: "DOM là giao diện lập trình cho phép mã script truy cập và chỉnh sửa cấu trúc trang."
        },
        {
          id: "ex-sum-3",
          title: "Trình tự bắt sự kiện và cập nhật",
          question: "Điền tên các phương thức để: Tìm nút -> Nghe click -> Đổi class:",
          codeSnippet: `const btn = document.{{b1}}("#submit");\nbtn.{{b2}}("click", () => {\n  btn.classList.{{b3}}("done");\n});`,
          blanks: [
            { id: "b1", answer: ["querySelector"], placeholder: "tìm phần tử", hint: "query... Selector" },
            { id: "b2", answer: ["addEventListener"], placeholder: "lắng nghe", hint: "add... Event... Listener" },
            { id: "b3", answer: ["add"], placeholder: "thêm class", hint: "add" }
          ],
          explanation: "Chu trình chuẩn: querySelector -> addEventListener -> classList.add."
        }
      ]
    }
  ]
};
