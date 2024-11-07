// Тексты для перевода
const translations = {
    ru: {
        title: "ShiftCode с Ключом",
        labelKey: "Ключ:",
        keyPlaceholder: "Введите ключ или нажмите 'Сгенерировать'",
        generateKeyButton: "Сгенерировать ключ",
        labelText: "Текст:",
        textPlaceholder: "Введите текст для шифровки/дешифровки...",
        encryptButton: "Зашифровать",
        decryptButton: "Расшифровать",
        labelOutput: "Результат:",
        outputPlaceholder: "Результат...",
        createdBy: "Создано ktnpls"
    },
    en: {
        title: "ShiftCode with Key",
        labelKey: "Key:",
        keyPlaceholder: "Enter a key or click 'Generate'",
        generateKeyButton: "Generate Key",
        labelText: "Text:",
        textPlaceholder: "Enter text for encryption/decryption...",
        encryptButton: "Encrypt",
        decryptButton: "Decrypt",
        labelOutput: "Result:",
        outputPlaceholder: "Result...",
        createdBy: "Created by ktnpls"
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("labelKey").textContent = translations[lang].labelKey;
    document.getElementById("keyInput").placeholder = translations[lang].keyPlaceholder;
    document.getElementById("generateKeyButton").textContent = translations[lang].generateKeyButton;
    document.getElementById("labelText").textContent = translations[lang].labelText;
    document.getElementById("inputText").placeholder = translations[lang].textPlaceholder;
    document.getElementById("encryptButton").textContent = translations[lang].encryptButton;
    document.getElementById("decryptButton").textContent = translations[lang].decryptButton;
    document.getElementById("labelOutput").textContent = translations[lang].labelOutput;
    document.getElementById("outputText").placeholder = translations[lang].outputPlaceholder;
    document.querySelector(".created-by").textContent = translations[lang].createdBy;
}

// Инициализация перевода
setLanguage(currentLang);
