const projectsData = {
    duocode: {
        title: "DuoCode",
        objective: "Inspirado no Duolingo, o DuoCode é uma jogo que te ensina os conceitos de C++",
        techs: "O jogo foi feito inteiramente em C++, e para a interface gráfica foi utilizado o raylib. O versionamento do jogo foi feito pelo GitHub.",
        concepts: [
            "Classes e Objetos",
            "Polimorfismo",
            "Construtores e Encapsulamento de Dados",
            "Testes unitários",
            "Tratamento de Exceções",
            "Documentação Doxygen"
        ],
        link: "https://github.com/davi-balsamao/duocode",
        videoSrc: "./img/videoDuoCode.mp4" 
    },
    git: {
        title: "Projeto Git",
        objective: "Centraliza minha evolução e resolução de exercícios durante a formação da Alpha Edtech. O foco é documentar meu aprendizado de forma progressiva e estruturada.",
        techs: "Markdown e GitHub",
        concepts: [
            "Merge conflicts",
            "Criação de branches",
            "Comandos básicos do Git"
        ],
        link: "https://github.com/davi-balsamao/alpha-edtech-learnings.git",
        videoSrc: "./img/videoProjetoGit.mp4"
    },
    spaceinvaders: {
        title: "Space Invaders",
        objective: "Simular o jogo Space Invaders, em que o objetivo do jogo é destruir todas as naves inimigas sem deixar que cheguem ao final da tela",
        techs: "O jogo foi todo feito na Linguagem C, e foi utilizado a biblioteca allegro para interface gráfica",
        concepts: [
            "Módularização de código",
            "Ponteiros e manipulação",
            "Lógica básica de programação",
            "Estrutura básica de dados"
        ],
        link: "https://github.com/davi-balsamao/projeto-css",
        videoSrc: "./img/videoSpaceInvaders.mp4"
    },
    css: {
        title: "Projeto CSS",
        objective: "Criar uma página sobre pontos turísticos, estilizando com CSS e realizando a lógica do header com JS",
        techs: "Página foi feita com HTML, CSS e JS",
        concepts: [
            "Subprogramação e Módulos",
            "Flexbox",
            "Programação básica de CSS"
        ],
        link: "https://github.com/davi-balsamao/alpha-edtech-learnings/tree/main/Modulo_JS/Aula04-M%C3%A9todos_Array_Subprograma%C3%A7%C3%A3o_e_M%C3%B3dulos/Conjunto_exercicios/Exercicio_4",
        videoSrc: "./img/videoProjetoCSS.mp4"
    }
};

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const projectButtons = document.querySelectorAll('.project-card .btn');
const detailsSection = document.getElementById('project-details');
const detailsTitle = document.getElementById('details-title');
const detailsObjective = document.getElementById('details-objective');
const detailsTechs = document.getElementById('details-techs');
const detailsConcepts = document.getElementById('details-concepts');
const detailsLink = document.getElementById('details-link');
const detailsVideo = document.getElementById('details-video');

projectButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const projectKey = btn.getAttribute('data-project');
        const data = projectsData[projectKey];

        if (!data) return;

        detailsTitle.textContent = data.title;
        detailsObjective.textContent = data.objective;
        detailsTechs.textContent = data.techs;
        detailsLink.href = data.link;

        detailsConcepts.innerHTML = '';
        data.concepts.forEach(concept => {
            const li = document.createElement('li');
            li.textContent = concept;
            detailsConcepts.appendChild(li);
        });

        detailsVideo.src = data.videoSrc; 
        detailsVideo.load(); 

        detailsSection.classList.remove('hidden');
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    });
});