let currentColorCode = '';

function generateColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    currentColorCode = randomCode;
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerHTML = randomCode;
}

document.getElementById("btn").addEventListener("click", generateColor);

document.getElementById("copy-code").addEventListener("click", function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentColorCode)
            .then(function () {
                alert('Color code copied to clipboard: ' + currentColorCode);
            })
            .catch(function (err) {
                console.error('Could not copy text: ', err);
            });
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = currentColorCode;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            alert('Color code copied to clipboard: ' + currentColorCode);
        } catch (err) {
            console.error('Could not copy text: ', err);
        }

        document.body.removeChild(textArea);
    }
});

generateColor(); 