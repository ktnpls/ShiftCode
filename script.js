function generateKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 32; i++) { // Генерация ключа длиной 32 символа
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("keyInput").value = key;
}

function encryptText() {
    const text = document.getElementById("inputText").value;
    const key = document.getElementById("keyInput").value;
    if (!key) {
        alert("Введите ключ для шифрования!");
        return;
    }
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const keyChar = key[i % key.length];
        const shift = keyChar.charCodeAt(0) % 26;
        encryptedText += String.fromCharCode(char.charCodeAt(0) + shift);
    }

    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    const encryptedText = document.getElementById("inputText").value;
    const key = document.getElementById("keyInput").value;
    if (!key) {
        alert("Введите ключ для дешифровки!");
        return;
    }
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const char = encryptedText[i];
        const keyChar = key[i % key.length];
        const shift = keyChar.charCodeAt(0) % 26;
        decryptedText += String.fromCharCode(char.charCodeAt(0) - shift);
    }

    document.getElementById("outputText").value = decryptedText;
}

function toggleLanguage() {
    const toggle = document.getElementById('langToggle');
    toggle.classList.toggle('active');
    
    const isEnglish = toggle.classList.contains('active');
    const placeholders = {
        keyInput: isEnglish ? "Enter key or click 'Generate'" : "Введите ключ или нажмите 'Сгенерировать'",
        inputText: isEnglish ? "Enter text to encrypt/decrypt..." : "Введите текст для шифровки/дешифровки...",
        outputText: isEnglish ? "Result..." : "Результат..."
    };
    
    document.getElementById('keyInput').placeholder = placeholders.keyInput;
    document.getElementById('inputText').placeholder = placeholders.inputText;
    document.getElementById('outputText').placeholder = placeholders.outputText;
    
    document.querySelector('h1').textContent = isEnglish ? "ShiftCode with Key" : "ShiftCode с Ключом";
    document.querySelectorAll('button')[0].textContent = isEnglish ? "Generate key" : "Сгенерировать ключ";
    document.querySelectorAll('button')[1].textContent = isEnglish ? "Encrypt" : "Зашифровать";
    document.querySelectorAll('button')[2].textContent = isEnglish ? "Decrypt" : "Расшифровать";
}

function initializeLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage;
    const toggle = document.getElementById('langToggle');
    
    if (!userLanguage.startsWith('ru')) {
        toggle.classList.add('active');
        toggleLanguage();
    }
}

window.onload = function() {
    initializeLanguage();
};