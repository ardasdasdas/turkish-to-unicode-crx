document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convertButton").addEventListener("click", function() {
        convertAndDisplay();
    });
});

function convertToUnicode(inputText) {
    // Türkçe karakterleri Unicode ile değiştir
    inputText = inputText.replace(/ğ/g, '\\u011f'); // ğ
    inputText = inputText.replace(/Ğ/g, '\\u011e'); // Ğ
    inputText = inputText.replace(/ı/g, '\\u0131'); // ı
    inputText = inputText.replace(/İ/g, '\\u0130'); // İ
    inputText = inputText.replace(/ö/g, '\\u00f6'); // ö
    inputText = inputText.replace(/Ö/g, '\\u00d6'); // Ö
    inputText = inputText.replace(/ü/g, '\\u00fc'); // ü
    inputText = inputText.replace(/Ü/g, '\\u00dc'); // Ü
    inputText = inputText.replace(/ş/g, '\\u015f'); // ş
    inputText = inputText.replace(/Ş/g, '\\u015e'); // Ş
    inputText = inputText.replace(/ç/g, '\\u00e7'); // ç
    inputText = inputText.replace(/Ç/g, '\\u00c7'); // Ç

    return inputText;
}

function convertAndDisplay() {
    var inputText = document.getElementById("inputText").value;
    var convertedText = convertToUnicode(inputText);
    document.getElementById("outputContainer").innerText = convertedText;
}
