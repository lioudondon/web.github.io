const memberData = [
    { username: "don", password: "don" },
    { username: "u1", password: "p1" },
    { username: "u2", password: "p2" },
];

function validateLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    for (const member of memberData) {
        if (usernameInput === member.username && passwordInput === member.password) {
            loginMessage.innerText = "登入成功！";
            // 根據用戶名重定向到相應用戶名的網頁
            window.location.href = `./pages/${usernameInput}.html`;
            return;
        }
    }

    loginMessage.innerText = "登入失敗，請檢查會員ID或密碼。";
    // 登入失敗時，重定向到 error.html
    window.location.href = "./pages/error.html";
}


document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", validateLogin);
});
//等待網頁內容載入完成，然後綁定一個事件監聽器，當使用者單擊 HTML ID "loginButton" 的按鈕時，執行validateLogin 的函數
