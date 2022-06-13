const btn = document.getElementById('enviar');
const form = document.getElementById('form');

btn.addEventListener('click', function (e){
    e.preventDefault();

    const serviceID = "service_gej7skl";
    const templateID = "template_o7l66aa";
    const publicKEY = "yv5IegctYrD0NW6Rq";

    emailjs.sendForm(serviceID,templateID, form, publicKEY)
        .then((res) => {
            alert('Mensagem enviada!');
        }, (error) => {
            console.log('FAILED...', error.text);
        });
});
