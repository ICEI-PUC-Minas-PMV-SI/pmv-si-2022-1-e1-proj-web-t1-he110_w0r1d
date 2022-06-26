# Plano de Testes de Software

## Resultados Esperados

Note que foi usado uma formatação específica para recursos que são repetidos em todo o projeto, evitando a poluição da tabela, tais como `navbar` que se refere a barra de navegação de todas as páginas e `vídeos embedded` a qual se refere a todas as mídias usadas do youtube no HTML através da tag `<iframe>`.

| Nº Teste | Local              | Cenário de teste                                                                                                                                                                                                                            |
|----------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TF-001   | `navbar`           | Ao clicar no menu de queda desejado, deverá ser apresentado as opções de páginas daquele menu para o usuário navegar entre as páginas de forma clara e sem atrasos.                                                                         |
| TF-002   | `navbar`           | O botão hambúrguer presente em dimensões de tela menores que `992px` de comprimento deverá funcionar corretamente de acordo com a responsividade esperada.                                                                                  |
| TF-003   | `videos embedded`  | Ao carregar a página, é esperado que todas as mídias usadas sejam apresentadas corretamente com suas devidas medidas responsivas sem erros.                                                                                                 |
| TF-004   | `videos embedded`  | Dado o play em qualquer mídia usada na página, é esprado que o controle de mídia esteja disponível para o usuário.                                                                                                                          |
| TF-005   | Editores de Código | Ao clicar no botão 'SITE OFICIAL'/'DOWNLOAD, o usuário deverá ser redirecionado para a 'Página Inicial' e 'Página de Download' respectivamente do artefato desejado.                                                                        | 
| TF-006   | Guia do GIT        | Ao clicar no botão 'Link Github' o usuário deverá ser redirecionado na mesma aba para a documentação do github referente ao parágrafo que se encontra.                                                                                      |
| TF-007   | Guia do GIT        | Ao clicar no link em texto 'Código fonte' no último parágrafo, o usuário deverá ser redirecionado corretamente para o link externo.                                                                                                         |
| TF-008   | Ferramentas        | Os botões 'SITE OFICIAL' deverão redirecionar o usuário para a página inicial do software desejado.                                                                                                                                         |
| TF-009   | Ferramentas        | Os botões 'DOWNLOAD' deverão redirecionar o usuário para a página de download do software desejado se disponível.                                                                                                                           |
| TF-010   | Ferramentas        | Os botões 'DOCS' deverão redirecionar o usuário para a página de documentação do software desejado se disponível.                                                                                                                           |
| TF-011   | Ajuda              | É esperado que ao clicar no botão `Enviar` os dados fornecidos pelo usuário no formulário, sejam enviados para o email do projeto corretamente, seguindo a formatação desejada.                                                             |
| TF-0012  | Eventos            | Ao abrir a pagina Eventos, é esperado que seja carregada a lista que contem todos os eventos disponíveis no site, bem como o filtro por categoria, o campo para ordenação, a topbar e a footbar.                                            |
| TF-013   | Eventos            | Ao clicar em 'selecione a categoria', é esperado que o usuário possa visualizar as opções de filtrar a lista de eventos por: 'todos os eventos', 'eventos online' e 'eventos presenciais'.                                                  |
| TF-014   | Eventos            | Ao clicar em qualquer uma das opções que o filtro 'selecione a categoria' oferece, é esperado que a filtragem seja realizada com sucesso e que o usuário receba a lista apenas com os eventos requisitados.                                 |
| TF-015   | Eventos            | Ao clicar em 'ordenar', é esperado que o usuário possa visualizar a opção de reorganizar a lista de eventos do primeiro evento do ano para o ultimo, e do ultimo evento do ano para o primeiro.                                             |
| TF-016   | Eventos            | Ao clicar em 'ordenar', e selecionar a forma de ordenação desejada, é esperado que o usuário receba a lista com os eventos reorganizados como solicitado.                                                                                   |   
| TF-017   | Eventos            | Ao clicar em qualquer um dos eventos é esperado que o usuário seja direcionado para a página de 'detalhes' do evento escolhido e visualize sua foto, sua descrição e o link que ao ser clicado o encaminhará para o site oficial do evento. |
| TF-018   | Eventos Detalhes   | Na pagina 'detalhes', ao clicar no link do site oficial do evento, é esperado que outra aba seja aberta no navegador do usuário, encaminhando o mesmo para o site oficial do evento.                                                        |
| TF-00    | Local              | && descrição &&                                                                                                                                                                                                                            |
|TF-019   | Notícias   | Ao clicar na página de notícias é esperado que a API carregue as notícias com suas descrições e links.|
|TF-020   | Podcasts   | Ao clicar no botão 'ouvir mais' no final dos cards dos podcasts é esperado que o usuário seja redirecionado à página do podcast escolhido.|

# Registro de Testes de Software

## Resultados Obtidos

| Nº Teste | Local              | Resultado do Teste                                                                                                                                                                                                                    | Bugs? |
|----------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| RTF-001  | `navbar`           | Todos os links presentes no menu de queda redirecionam corretamente para suas devidas páginas.                                                                                                                                        | Não   |
| RTF-002  | `navbar`           | O menu hambúrguer apresenta total responsividade nas principais dimensões de tela.                                                                                                                                                    | Não   |
| RTF-003  | `videos embedded`  | Todos os vídeos usados nas páginas estão carregando corretamente sem atrasos e apresentam responsividade para as principais dimensões de tela.                                                                                        | Não   |
| RTF-004  | `videos embedded`  | Todas as mídias usadas nas páginas estão apresentando seus devidos controles como esperado.                                                                                                                                           | Não   |
| RTF-005  | Editores de Código | Os botões 'SITE OFICIAL' e 'DOWNLOAD' estão redirecionando para seus devidos links externos como esperado                                                                                                                             | Não   |
| RTF-006  | Guia do GIT        | O botão 'Link Github' redireciona o usuário corretamente para a documentação referente a postagem em que se encontra.                                                                                                                 | Não   |
| RTF-007  | Guia do GIT        | O hyperlink 'Código fonte' está redirecionando o usuário como esperado para a página externa da plataforma "Código Fonte"                                                                                                             | Não   |
| RTF-008  | Ferramentas        | O botão 'SITE OFICIAL' redireciona o usuário corretamente para a página inicial do artefato desejado.                                                                                                                                 | Não   |
| RTF-009  | Ferramentas        | O botão 'DOWNLOAD' redireciona o usuário corretamente para a página de download do artefato desejado.                                                                                                                                 | Não   |
| RTF-010  | Ferramentas        | O botão 'DOCS' redireciona o usuário corretamente para a página com a documentação do artefato desejado.                                                                                                                              | Não   |
| RTF-011  | Ajuda              | O formulário se apresenta funcional como esperado, os dados estão sendo enviados corretamente com a formatação esperada no corpo do email.                                                                                            | Não   |
| RTF-012  | Eventos            | Foi carregada a lista de todos os eventos do site, bem como o filtro por categoria, campo de ordenação, topbar e footbar sem atraso.                                                                                                  | S/N?  |
| RTF-013  | Eventos            | Ao clicar em 'selecione a categoria' o usuário visualiza as opções de filtrar a lista de eventos por: 'eventos presenciais', 'eventos online' ou 'todos os eventos'.                                                                  | Não   |
| RTF-014  | Eventos            | Ao clicar em qualquer uma das opções que o filtro 'selecione a categoria' oferece, a filtragem é realizada com sucesso e o usuário rapidamente recebe a lista apenas com os eventos requisitados.                                     | Não   |
| RTF-015  | Eventos            | Ao clicar em 'ordenar', o usuário visualiza a opção de reorganizar a lista de eventos do primeiro evento do ano para o ultimo, e do ultimo evento do ano para o primeiro.                                                             | Não   |
| RTF-016  | Eventos            | Ao clicar em 'ordenar', e selecionar a forma de ordenação desejada, o usuário recebe a lista com os eventos reorganizados como solicitado com sucesso.                                                                                | Não   |
| RTF-017  | Eventos            | Ao clicar em qualquer um dos eventos o usuário é direcionado para a página de 'detalhes' do evento escolhido com sucesso e visualiza sua foto, sua descrição e o link que ao ser clicado o encaminhará para o site oficial do evento. | Não   |
| RTF-018  | Eventos Detalhes   | Na pagina 'detalhes, ao clicar no link do site oficial do evento, outra aba é aberta no navegador do usuário, encaminhando o mesmo para o site oficial do evento com sucesso.                                                         | Não   |
| RTF-019  |Notícias   | Ao clicar na página de notícias, a API carrega as notícias com suas descrições e links que redirecionam para as páginas onde as notícias podem ser lidas caso seja de interesse do usuário.                                                         | Não  |
| RTF-020  | Podcasts   | Na pagina de podcasts, ao clicar no botão 'ouvir mais' outra aba é aberta no navegador do usuário, encaminhando o mesmo para o site oficial do podcast.  
| RTF-000  | Local              | && descrição &&                                                                                                                                                                                                                       | Não   |


## Avaliação

Foram realizados os testes de usabilidade do sistema na sexta-feira 24 de Junho de 2022, seguindo o roteiro de testes baseado nos principais requisitos funcionais. Veja quais foram os requisitos funcionais usados [aqui](especification.md).

| RF-00n     | Tarefa do Usuário                                               | Usuário 1 | Usuário 2 | Usuário 3 |
|------------|-----------------------------------------------------------------|-----------|-----------|-----------|
| RF-006     | Encontre um evento e suas informações (data, local, descrição). | OK        | OK        | OK        |
| RF-003/004 | Encontre informações sobre linguagens de programação.           | OK        | OK        | OK        |
| RF-001     | Encontre e escolha um editor de código.                         | OK        | OK        | FAIL      |
| RF-005/013 | Encontre dicas e extensões.                                     | OK        | OK        | OK        |
| RF-007     | Entre em contato com os desenvolvedores                         | OK        | OK        | OK        |

Até o momento não foram encontrados bugs funcionais, mas ajustes de responsividade para mobile ainda estão em desenvolvimento.

Novas atualizações serão feitas em breve.
<hr>

<p align="left"><a href="./development.md">Programação de Funcionalidades</a>
