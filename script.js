const data = {
    'en': { title: "Welcome", text: "Welcome to our tourist spot.", audio: "assets/audio/en.mp3" },
    'zh': { title: "欢迎", text: "欢迎来到黑部水坝。", audio: "assets/audio/kurobe_zh.mp3" },
    'tw': { title: "歡迎", text: "歡迎來到黑部水壩。", audio: "assets/audio/kurobe_tw.mp3" },
    'ko': { title: "환영합니다", text: "쿠로베 댐에 오신 것을 환영합니다.", audio: "assets/audio/kurobe_ko.mp3" },
    'th': { title: "ยินดีต้อนรับ", text: "ยินดีต้อนรับสู่เขื่อนคุโรเบะ", audio: "assets/audio/kurobe_th.mp3" },
    'id': { title: "Selamat Datang", text: "Selamat datang di Bendungan Kurobe.", audio: "assets/audio/kurobe_id.mp3" },
    'vi': { title: "Chào mừng", text: "Chào mừng đến với đập Kurobe.", audio: "assets/audio/kurobe_vi.mp3" },
    'ms': { title: "Selamat Datang", text: "Selamat datang ke Empangan Kurobe.", audio: "assets/audio/kurobe_ms.mp3" }
};

let currentAudio = document.getElementById('audio-player');

function selectLang(lang) {
    const info = data[lang];
    if (info) {
        document.getElementById('guide-title').innerText = info.title;
        document.getElementById('guide-text').innerText = info.text;
        currentAudio.src = info.audio;
        document.getElementById('guide-area').style.display = 'block';
    }
}

document.getElementById('play-btn').onclick = function() {
    currentAudio.play();
};
