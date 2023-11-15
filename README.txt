Passo a passo para abrir o projeto (separando em backend e frontend):

1 - Backend

Pré-requisitos:
    - ter o nodejs instalado em seu CPU

Instalação dos pacotes:
    - Primeiro, dentro do diretorio raiz do projeto (pasta backend) rode o comando "npm install" pelo terminal. (Apert ctrl + ' ou clique com o botão direito na pasta para abrir o terminal).

    -Em seguida, digite "npm install" para instalar os pacotes, e por fim, com os pacotes instalados rode o comando "npm start" para iniciar o servidor.

    -O servidor backend roda em http://localhost:3000


2 - FRONT END

Pré-requisitos:
    - ter o nodejs instalado em seu CPU

Instalação dos pacotes:
    - Primeiro, dentro do diretorio raiz do projeto (pasta frontend) rode o comando "npm install" pelo terminal. (Apert ctrl + ' ou clique com o botão direito na pasta para abrir o terminal).

    -Em seguida, digite "npm install" para instalar os pacotes, e por fim, com os pacotes instalados rode o comando "npm run dev" para iniciar o servidor front do projeto.

    -O servidor frontend roda em http://localhos:5153/

    - Por fim, para logar no jogo deve-se usar o seguinte login e senha:

        Login: admin
        Senha: 1234


Professor, tudo bem com o senhor? Espero que sim.

Como eu não consegui entregar o trabalho em grupo 2 eu acabei juntando algumas funcionalidades tanto do trabalho 2 quanto do trabalho em grupo 3 que eu consegui criar, fiz uma lista delas:

- Tela de login - No projeto tem-se apenas um usuário criado sem banco de dados. Além disso, rotas protegidas que só podem ser acessadas caso o usuário esteja logado;
- Ferramenta de busca - O usuário consegue fazer pesquisa de pokemons na página da Pokedex;
- Progresso cronológico - O usuário encontra pokemons enquanto anda no mapa e consegue interagir com eles recebendo feedback da aplicação ao fazer certas ações, como capturar pokemons e ter acesso a eles na página de "meus pokémons";
- Mapa desbloqueado - O usuário precisa realizar tarefas antes de conseguir avançar para outro mapa (no caso do projeto capturar os pokemons);
- Acessibilidade - Imagens com propriedade alt com descrição da imagem apresentada. O Alt é lido pelos leitores de tela para usuários com necessidades especiais;
- Controlar velocidade do dia - No projeto, tem-se um relógio que mostra o tempo presente no mapa, passando com uma velocidade diferente do normal. Além disso, o mapa muda de acordo com o horário do dia, escurecendo à noite a partir das 20h no horário do mapa;
- Efeito de seleção - Os componentes e elementos sofrem alteração ao interagir com o mouse;
- Arquitetura baseada em MVC (Model, Views, Controllers) - Projeto estruturado em MVC, apenas sem as Views, por se tratar de uma API e ser renderizado no frontend.


