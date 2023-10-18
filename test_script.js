doAlert();

function doAlert() {
    const text = document.createElement('div');
    text.innerText = 'Test Script executed!';
    document.body.appendChild(text);
}