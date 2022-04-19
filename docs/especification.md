# Especificações do Projeto

## Personas

<div align="justify">

Marcos Oliveira tem 25 anos, é recém formado em administração de empresas e atualmente trabalha em um escritório de contabilidade no interior de Minas Gerais. Marcos era muito jovem quando ingressou na faculdade, e, por influência dos pais, escolheu estudar uma área que não o da possibilidade de viver o estilo de vida de seus sonhos, por esse motivo deseja migrar para a área de T.I. Para Marcos é importante um trabalho que o proporcione liberdade geográfica. “Tenho o sonho de conhecer o mundo e morar em vários países para viver diferentes culturas. Experiencias são tudo o que levamos da vida". (Oliveira, M. 04, 2022) Marcos sempre teve afinidade com computadores, jogos e tem interesse em como softwares são desenvolvidos, porem nunca programou e não sabe por onde começar a aprender. Ele se inscreveu em alguns canais do youtube com dicas para iniciantes, entretanto, não sabe como organizar o conteúdo por ordem de prioridade e não consegue manter o foco devido à quantidade de informação solta e sem conexão uma com a outra. Marcos deseja aprender completamente do 0 e busca por conteúdo relevante e melhor estruturado para facilitar seus estudos.

</div>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Aluno |Salvar meu progresso automaticamente |Recomeçar as aulas de onde parei sempre que fizer uma pausa 
|Aluno |Espaço para fazer exercícios |Fixar melhor o conteúdo das aulas
|Aluno |Um espaço para troca, networking e colaboração |Dividir conhecimento e começar a fazer contato na área
|Aluno |Baixar certificado do curso |Colocar no meu curriculum 
|Aluno |Pagar o curso via boleto |Não comprometer o limite do meu cartão
|Aluno |Acesso a palestras com dicas sobre como ingressar na área |Me preparar para o mercado de trabalho enquanto estudo
|Aluno |Acesso a palestras motivacionais |Não desanimar e me manter motivado durante o processo de aprendizagem 
|Aluno |Uma descrição do que devo conseguir fazer ao final de cada aula |Confirmar se estou acompanhando e absorvendo os conteúdos como deveria
|Aluno |Um espaço de contato ou aba "help" |Para enviar duvidas relacionadas ao uso da plataforma 
|Aluno |Links que me encaminhem para artigos complementares às matérias do curso |Garantir que eu tenha uma visão muito mais completa sobre cada assunto
|Aluno |Além dos videos, ter acesso a transcriçäo das aulas |Ter um reforço do conteúdo através da leitura
|Aluno |Avaliar e comentar as aulas |Eu ter acesso a conteúdos cada vez melhores 


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário acesse links de conteúdos externos, como youtube e sites | ALTA |
|RF-002| Criar área de login | ALTA |
|RF-003| Criar área de cadastro | ALTA |
|RF-004| Disponibilizar um certificado digital para download | ALTA |
|RF-005| Disponibilizar exercícios de prática | ALTA |
|RF-006| Deverá permitir como função básica consultar os sumários do conteúdo disponível | ALTA |
|RF-007| A consulta de sumários é permitida a qualquer usuário | ALTA |
|RF-008| O acesso ao conteúdo disponível deverá apenas estar acessiveis/visiveis quando for inserida um login e uma senha válidos. | ALTA |
|RF-009| Deverá permitir que os usuários registrados alterem quaisquer uma de suas configurações pessoais. | ALTA |
|RF-010| Disponibilizar uma funcionalidade para salvar o progresso do usuário | MÉDIA |
|RF-011| Disponibilizar campo para postagem de perguntas | MÉDIA |
|RF-012| Disponibilizar campo para postagem de respostas | MÉDIA |
|RF-013| A interface básica, para além de disponibilizar funcionalidades para a consulta de sumários, deve incluir opções para acesso ao conteúdo (para usuários autorizados) e registro de novos usuários. | MÉDIA |
|RF-014| Deverá avisar ao usuário de qualquer erro que eventualmente surja. | MÉDIA |
|RF-015| Disponibilizar uma funcionalidade para salvar o progresso do usuário | MÉDIA |
|RF-016| O acesso de usuários deverá ficar registrado num arquivo de log. | BAIXA |
|RF-017| Todo usuário cadastrado deverá ser informado da data e hora do seu último login. | BAIXA |
|RF-018| Disponibilizar transcrição das videoaulas | BAIXA |
|RF-019| Exibir notificação ao receber uma reposta no fórum | BAIXA |
|RF-020| Disponibilizar página com eventos de TI | BAIXA |
|RF-021| Disponibilizar a funcionalidade para o usuário ser notificado sobre próximos eventos | BAIXA |
|RF-022| Disponibilizar material complementar e referências no final da aula | BAIXA |
|RF-023| Disponibilizar uma área para comentários e avaliação das aulas | BAIXA |
|RF-024| Disponibilizar um resumo do que deve ser compreendido na aula | BAIXA |
|RF-025| Disponibilizar uma página com depoimentos de ex-alunos | BAIXA |
|RF-026| Disponibilizar uma área para contato | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Interface responsiva a smartphones, tablets e desktop | ALTA |
|RNF-002| deverá ter uma interface simples e intuitiva para motivar e facilitar a sua utilização. | ALTA |
|RNF-003| Uma vez que a interface se destina a ser apresentado num brower impõe-se a compatibilidade com os navegadores web mais comuns (Internet Explorer, Google Chrome e Mozilla Firefox). | ALTA |
|RNF-004| A segurança dos dados descrita legalmente na LGPD torna fundamental a protecção das informações contra acessos não autorizados. | MÉDIA |
|RNF-005| A página deverá ter alta disponibilidade | MÉDIA |
|RNF-006| O desenvolvimento deverá ser feito tendo em conta futuras atualizações | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Utilização do HTML5 no desenvolvimento do site        |
|04| O idioma do projeto limita-se ao português            |


<br>

<p align="right"><a href="./context.md">Contexto</a>
