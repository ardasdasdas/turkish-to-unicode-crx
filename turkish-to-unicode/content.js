document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convertButton").addEventListener("click", function() {
        convertAndDisplay();
    });
});

function convertToUnicode(inputText, includeSpecialChars, specialChars) {
    const specialCharMap = {
        "’": '\\u0027', '+': '\\u002b', '%': '\\u0025', '!': '\\u0021',
        '"': '\\u0022', '#': '\\u0023', '$': '\\u0024', '&': '\\u0026',
        '(': '\\u0028', ')': '\\u0029', '*': '\\u002a', ',': '\\u002c',
        '-': '\\u002d', '.': '\\u002e', '/': '\\u002f', ':': '\\u003a',
        ';': '\\u003b', '<': '\\u003c', '=': '\\u003d', '>': '\\u003e',
        '?': '\\u003f', '@': '\\u0040', '[': '\\u005b', '\\': '\\u005c',
        ']': '\\u005d', '^': '\\u005e', '_': '\\u005f', '`': '\\u0060',
        '{': '\\u007b', '|': '\\u007c', '}': '\\u007d', '~': '\\u007e', "'": '\\u0027'
    };

    const turkishCharMap = {
        'ğ': '\\u011f', 'Ğ': '\\u011e', 'ı': '\\u0131', 'İ': '\\u0130',
        'ö': '\\u00f6', 'Ö': '\\u00d6', 'ü': '\\u00fc', 'Ü': '\\u00dc',
        'ş': '\\u015f', 'Ş': '\\u015e', 'ç': '\\u00e7', 'Ç': '\\u00c7'
    };

    // Kullanıcının belirttiği özel karakterleri set olarak saklayın
    const specialCharsSet = new Set(specialChars.split(''));

    let result = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];

        if (includeSpecialChars && specialCharsSet.has(char)) {
            // Eğer özel karakterler korunacaksa ve karakter belirtilmişse, bu karakteri değişmeden bırak
            result += char;
        } else {
            // Türkçe karakterleri ve diğer özel karakterleri dönüştür
            result += turkishCharMap[char] || (!includeSpecialChars ? char : specialCharMap[char] || char);
        }
    }

    return result;
}

function convertAndDisplay() {
    const inputText = document.getElementById("inputText").value;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    const specialChars = document.getElementById("specialChars").value;

    const convertedText = convertToUnicode(inputText, includeSpecialChars, specialChars);
    document.getElementById("outputContainer").innerText = convertedText;
}
