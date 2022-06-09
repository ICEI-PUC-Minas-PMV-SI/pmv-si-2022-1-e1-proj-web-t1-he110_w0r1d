const btn = document.getElementById('enviar');
const form = document.getElementById('form');

btn.addEventListener('click', function (e){
    e.preventDefault();

    var itens = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    const serviceID = "service_gej7skl";
    const templateID = "template_o7l66aa";
    const publicKEY = "yv5IegctYrD0NW6Rq";


    emailjs.sendForm(serviceID,templateID, form, publicKEY)
        .then(function(response) {
            console.log('Enviado!', response.status, response.text);
        }, function(err) {
            console.log('Error...', err);
        });
});