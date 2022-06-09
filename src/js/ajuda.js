//recebendo valores do html
const form = document.querySelector('.formulario');
// trigger do submit e declaro as vars q vão receber os valores do form
form.addEventListener('submit', e => {
  e.preventDefault();
  let nome = document.getElementById('nome').value,
      email = document.getElementById('email').value,
      msg = document.getElementById('message').value;

  enviarMsg(nome, email, msg); // chamo a funcção com os dados do form
  document.querySelector('#formulario').reset(); // limpar os campos
})
function enviarMsg(nome, email, msg){
  Email.send({
    SecureToken:'88e04528-7b01-4b95-a4a9-1f678182a1e5', // token do smtpjs
    To:'pmvsihw@gmail.com', // usado pra espelhar o form com os dados inseridos
    From: 'pmvsihw@gmail.com',
    Subject: `${nome} acabou de enviar uma mensagem`,
    Body: `Nome: ${nome}<br>Email: ${email}<br>Mensagem:<br>${msg}`
  }).then(
      message => {
        if (message === 'OK'){
          alert('Mensagem enviada com sucesso!');
        } else {
          alert(message);
        }
      }
  );
}