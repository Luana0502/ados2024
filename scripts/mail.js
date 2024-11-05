document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        country: document.getElementById('country').value,
        select: document.getElementById('select').value,
        social_1: document.getElementById('social_1').value,
        social_2: document.getElementById('social_2').value,
        social_3: document.getElementById('social_3').value,
        option_1: document.getElementById('option_1').checked ? 'Short-Form' : '',
        option_2: document.getElementById('option_2').checked ? 'Long-Form' : '',
        option_3: document.getElementById('option_3').checked ? 'Webdesign' : '',
        message: document.getElementById('message').value,
    };

    emailjs.send('service_85ksc1m', 'template_48iatbi', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you! Form sent successfully!');
            document.getElementById('form').reset();
        }, function (error) {
            console.log('FAILED...', error);
            alert('An error occurred while sending this form.');
        });
});