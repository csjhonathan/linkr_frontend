**Language:**
<button onclick="toggleLanguage('pt')">Portuguese</button> | <button onclick="toggleLanguage('en')">English</button>


<style>
  #pt {
    display: block;
  }

  #en {
    display: none;
  }
</style>


<div id="pt">

# Linkr (Frontend) 
<img src="./public/favicon.ico" alt="Linkr Logo" width="50" height="200">

##### Neste repositório você encontrará a interface de usuário para a aplicação Linkr, uma plataforma de compartilhamento e descoberta de links. Este repositório contém o código-fonte do frontend do projeto.

### Visão Geral

O Linkr é uma plataforma que permite aos usuários compartilhar e descobrir links interessantes. Com o frontend do Linkr, os usuários podem navegar pelos links compartilhados por outros usuários, adicionar seus próprios links e interagir com a comunidade, seguindo outros usuários, curtindo seus posts e comentando, além, é claro, de poder compartilhar suas publicações com sua própria rede.

Este projeto foi construído em colaboração com:

- [Diego Becker](https://github.com/DiegoBeker)
- [Felipe Iasbik](https://github.com/felipeiasbik)
- [Filipe Tenedini](https://github.com/FilipeTenedini)

### Principais recursos:

- Registro e login de usuários.
- Página inicial com os links mais recentes e populares.
- Pesquisa de usuários pelo nome.
- Adição e edição de links.
- Feed personalizado, onde o usuário vê somente os posts dos usuários que segue.
- Perfil de usuário com informações pessoais e links compartilhados.

Para ver como ficou o projeto, basta acessar o link abaixo:

[Linkr](https://linkr-frontend-gilt.vercel.app)

Vale a ressalva de que o acesso pode ser um pouco lento devido ao backend estar hospedado em uma plataforma gratuita. Mas tenha paciência :)

Ademais,

### OBRIGADO PELA VISITA :D

</div>

<div id="en">

## Linkr (Frontend) - English

In this repository, you will find the user interface for the Linkr application, a platform for sharing and discovering links. This repository contains the source code for the frontend of the project.

### Overview

Linkr is a platform that allows users to share and discover interesting links. With the Linkr frontend, users can browse links shared by other users, add their own links, and interact with the community by following other users, liking their posts, commenting, and, of course, sharing their own posts with their network.

This project was built in collaboration with:

- [Diego Becker](https://github.com/DiegoBeker)
- [Felipe Iasbik](https://github.com/felipeiasbik)
- [Filipe Tenedini](https://github.com/FilipeTenedini)

### Key Features:

- User registration and login.
- Home page displaying the most recent and popular links.
- User search by name.
- Adding and editing links.
- Personalized feed where the user sees posts only from the users they follow.
- User profile with personal information and shared links.

To see how the project looks, simply access the link below:

[Linkr](https://linkr-frontend-gilt.vercel.app)

Please note that the access may be a bit slow due to the backend being hosted on a free platform. So please be patient :)

Thank you for visiting! :D
</div>

<script>
   function toggleLanguage(language) {
    if (language === 'pt') {
      document.getElementById('pt').style.display = 'block';
      document.getElementById('en').style.display = 'none';
    } else {
      document.getElementById('pt').style.display = 'none';
      document.getElementById('en').style.display = 'block';
    }
  }
</script>