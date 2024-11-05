
document.getElementById('name').addEventListener('keypress', function (event) {
    const key = String.fromCharCode(event.which);
    const pattern = /^[A-Za-z\s]+$/;
    if (!pattern.test(key)) {
        event.preventDefault();
        console.log('Invalid character for name:', key);
    }
});

document.getElementById('tel').addEventListener('keypress', function (event) {
    const key = String.fromCharCode(event.which);
    const pattern = /^[0-9]+$/;
    if (!pattern.test(key)) {
        event.preventDefault();
        console.log('Invalid character for phone:', key);
    }
});
