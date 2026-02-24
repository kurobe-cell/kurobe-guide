const data = {
    'en': { title: "Kurobe Dam Guide", text: "Kurobe Dam is Japan's tallest dam, standing at 186 meters.", audio: "assets/audio/en.mp3" },
    'zh': { title: "黑部水坝指南", text: "黑部水坝是日本最高的水坝，高度为186米。", audio: "assets/audio/kurobe_zh.mp3" },
    'tw': { title: "黑部水壩指南", text: "黑部水壩是日本最高的水壩，高度為186公尺。", audio: "assets/audio/kurobe_tw.mp3" },
    'ko': { title: "쿠로베 댐 안내", text: "쿠로베 댐은 높이 186m로 일본에서 가장 높은 댐입니다.", audio: "assets/audio/kurobe_ko.mp3" },
    'th': { title: "คำแนะนำเขื่อนคุโรเบะ", text: "เขื่อนคุโรเบะเป็นเขื่อนที่สูงที่สุดในญี่ปุ่น ด้วยความสูง 186 เมตร", audio: "assets/audio/kurobe_th.mp3" },
    'id': { title: "Panduan Bendungan Kurobe", text: "Bendungan Kurobe adalah bendungan tertinggi di Jepang, dengan tinggi 186 meter.", audio: "assets/audio/kurobe_id.mp3" },
    'vi': { title: "Hướng dẫn đập Kurobe", text: "Đập Kurobe là con đập cao nhất Nhật Bản với độ cao 186 mét.", audio: "assets/audio/kurobe_vi.mp3" },
    'ms': { title: "Panduan Empangan Kurobe", text: "Empangan Kurobe merupakan empangan tertinggi di Jepun dengan ketinggian 186 meter.", audio: "assets/audio/kurobe_ms.mp3" }
};

let currentAudio = document.getElementById('audio-player');

function selectLang(lang) {
    const info = data[lang];
    if (info) {
        document.getElementById('guide-title').innerText = info.title;
        document.getElementById('guide-text').innerText = info.text;
        currentAudio.src = info.audio;
        document.getElementById('guide-area').style.display = 'block';
        // 言語を切り替えたら一度音声を止める処理
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

document.getElementById('play-btn').onclick = function() {
    currentAudio.play();
};
