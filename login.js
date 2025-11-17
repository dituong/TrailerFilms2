document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
    }

    // Lưu thông tin đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Đăng nhập thành công!");
    window.location.href = "index2.html";
});
