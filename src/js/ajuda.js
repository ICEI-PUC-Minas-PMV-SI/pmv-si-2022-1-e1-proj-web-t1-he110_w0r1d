const form = document.querySelector('.formulario');
const input = document.querySelectorAll('.nome, .email, .msg');

function enviarMsg(e){

  e.preventDefault();

  const name = document.querySelector('.nome'),
        email = document.querySelector('.email'),
        msg = document.querySelector('.msg');

  // função para enviar Email
  Email.send({
    SecureToken:'88e04528-7b01-4b95-a4a9-1f678182a1e5',
    To:'pmvsihw@gmail.com',
    From: 'pmvsihw@gmail.com',
    Subject: `Resposta do formulário`,
    Body: `${name.value}<br>${msg.value}<br>Enviado por ${email.value}`
  }).then(
    message => {
      if (message === 'OK'){
        alert('Enviado com sucesso');
      } else {
        alert(message);
      }
    }
  );

  input.forEach(input => {
    input.value = '';
  });
}

// trigger pro botão
form.addEventListener('submit', enviarMsg);
