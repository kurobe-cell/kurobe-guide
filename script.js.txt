const data = {
    'ja': {
        title: "黒部ダムの解説",
        text: "ここは日本一の堤高を誇るダムです。",
        audio: "assets/audio/ja.mp3"
    },
    'en': {
        title: "Kurobe Dam Guide",
        text: "This is the highest dam in Japan.",
        audio: "assets/audio/en.mp3"
    }
};

let currentAudio = document.getElementById('audio-player');

function selectLang(lang) {
    const info = data[lang];
    document.getElementById('guide-title').innerText = info.title;
    document.getElementById('guide-text').innerText = info.text;
    currentAudio.src = info.audio;
    
    document.getElementById('guide-area').style.display = 'block';
}

document.getElementById('play-btn').onclick = function() {
    currentAudio.play();
};