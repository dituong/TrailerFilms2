document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Lấy danh sách user cũ
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check email trùng
    if (users.some(u => u.email === email)) {
        alert("Email đã tồn tại!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp!");
        return;
    }

    // Lưu user mới
    users.push({ fullname, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công! Đang chuyển sang trang đăng nhập...");
    window.location.href = "login.html";
});
