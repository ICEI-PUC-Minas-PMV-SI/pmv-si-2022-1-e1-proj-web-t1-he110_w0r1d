# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

## Guia do Git

### Requisitos:

- RF-001 - Disponibilizaruma página com os primeiros passos para um programador

Ao clicar na opção `Primeiros Passos/Guia do Git` na `nav-bar` o usuário será levado à página abaixo, ela foi desenvolvida para atender ao RF-001.

![Guia do Git](img/guia-do-git.png) <br/>

A página contém conteúdo relevante para informar o usuário sobre o git, chaves ssh e como usar seu terminal num fluxo de trabalho diário.

Dentro da seção `Chaves SSH`, possui uma coluna com 2 bõtoes que redirecionam o usuário para a documentação do github sobre as chaves e como gerá-las e vincular elas a sua conta.

Ela também conta com uma playlist de vídeos do Willian Justen [@willianjusten](https://github.com/willianjusten) ensinando passo a passo como usar o git.

![botoes-git](img/botoes-git.png) <br/>

## Ferramentas

### Requisitos:

- RF-005 - Disponibilizar uma página com dicas e ferramentas

A página `Ferramentas` agrega um conteúdo popular entre desenvolvedores para as seguintes funcionalidades:
- Prototipagem
- API e Telemtria
- Planejamento

Ela possui um formato de fácil consumo, estruturando o conteúdo em pequenas **seções de conteúdo** com texto e vídeo sobre a ferramenta.

Cada **seção de conteúdo** possui o **título da ferramenta** e uma breve descrição ou introdução, uma breve recomendação em negrito e **botões de redirecionamento** do usuário, seja para a `Página da Ferramenta`, `Documentação` ou `Download` se disponível.

![Ferramentas](img/ferramentas.png) <br/>

## Editores de Código

### Requisitos:

- RF-005 - Disponibilizar uma página com dicas e ferramentas

A página `Guia de IDE` segue o formato da página `Ferramentas`, com seções de conteúdo e botões de redirecionamento.

Nela está um breve comparativo entre IDEs e Editores de Código, um redirecionamento para um artigo na Alura explicando mais a fundo e um vídeo comparando `Sublime`, `Atom` e `VSCode`.

*n.b. - Atom será arquivado pelo Github em Dezembro de 2022*

![Guia de IDE](img/guia-de-ide.png) <br/>

## Ajuda/Suporte

### Requisitos:

- RF-007 - Disponibilizar uma página para obter suporte sobre o sistema

A página `Ajuda` permite que o usuário envie uma mensagem de contato para a equipe de desenvolvimento através de um formulário simples feito em `HTML` e usando a API do `EmailJS` para realizar os envios seguindo um template que a ferramenta mesmo proporciona.

No `src/help.html` no final tem um snippet para dar entrada a API key pública usando a função `emailjs.init('<yv5IegctYrD0NW6Rq>');` sendo `yv5IegctYrD0NW6Rq` a chave pública.

*n.b. imagem com css ainda não formatado - será atualizado em breve*

![Ajuda](img/ajuda.png) <br/>

### Código HTML e JavaScript

Para realizar o envio, é necessário usar um snippet do EmailJS com os dados necessários.

Para isso, foi usado um javascript básico que puxa os dados inseridos no formulário e aciona um gatilho quando o botão de enviar é clicado.

É necessário importar o CDN do EmailJS no HTML
```
<head>
...
  <!-- CDN EmailJS -->
  <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
  </script>
  <script type="text/javascript">
    (function () {
      emailjs.init('<yv5IegctYrD0NW6Rq>');
    })();
  </script>
</head>
```
Abaixo segue o código js usado para enviar os dados. Veja a [documentação](https://www.emailjs.com/docs/) do EmailJS.
```
// criando as vars q vão receber os dados do formulario html e botao de envio
const btn = document.getElementById('enviar');
const form = document.getElementById('form');

// gatilho para o botão e nele acionamos a função de envio de formulario do EmailJS
btn.addEventListener('click', function (e){
    e.preventDefault();

    // servico registrado, nesse caso o email do projeto pmvsihw@gmail.com
    const serviceID = "service_gej7skl";
    
    // template criado no serviço, veja na imagem abaixo o exemplo
    const templateID = "template_o7l66aa";
    
    // chave publica da api
    const publicKEY = "yv5IegctYrD0NW6Rq";

    // função sendForm com entrada dos dados da var 'form' declarada acima
    emailjs.sendForm(serviceID,templateID, form, publicKEY)
        .then((res) => {
            // se tudo der certo, a página faz um alert
            alert('Mensagem enviada!');
        }, (error) => {
            // no caso de erros, checar o console
            console.log('FAILED...', error.text);
        });
});
```
Observe que no código `HTML` os itens do formulário possuem a mesma definição que o template.
Sendo o item Nome contendo `name = nome` dentro da tag `<input type="text" name="nome">`.

![Template EmailJS](img/template-emailjs.png)

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)