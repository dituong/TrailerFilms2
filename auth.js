document.addEventListener("DOMContentLoaded", function () {
    console.log("auth.js loaded");

    let user = null;
    try {
        user = JSON.parse(localStorage.getItem("currentUser"));
    } catch (err) {
        localStorage.removeItem("currentUser");
        user = null;
    }

    const guestMenu = document.getElementById("guestMenu");
    const userMenu = document.getElementById("userMenu");
    const usernameDisplay = document.getElementById("usernameDisplay");
    const logoutBtn = document.getElementById("logoutBtn");

    console.log("currentUser =", user);

    if (user) {
        // đã login → hiện userMenu, ẩn guestMenu
        if (guestMenu) guestMenu.style.display = "none";
        if (userMenu) userMenu.style.display = "flex";

        if (usernameDisplay) {
            usernameDisplay.textContent = "👤 " + (user.fullname || user.email);
        }
    } else {
        // chưa login → hiện guestMenu, ẩn userMenu
        if (guestMenu) guestMenu.style.display = "flex";
        if (userMenu) userMenu.style.display = "none";
    }

    // logout
    if (logoutBtn) {
        logoutBtn?.addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
});

    }
});
