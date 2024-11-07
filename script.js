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
