document.addEventListener("DOMContentLoaded", () => {
    console.log("サイトが読み込まれました！");

    // Particles.jsの初期化
    if (document.getElementById("particles-js")) {
        particlesJS.load("particles-js", "assets/js/particles.json", () => {
            console.log("Particles.js 読み込み完了");
        });
    }

    // フォーム送信時のイベント
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("お問い合わせありがとうございます！");
            form.reset();
        });
    }
});
