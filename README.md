# Proyecto de React - One Piece API

Este proyecto de React utiliza la API de One Piece para mostrar películas, personajes por película y detalles de cada personaje.

## Instalación

1. Clona este repositorio en tu máquina local:
    git clone https://github.com/SebastianQuirozCervantes/avatar-one-piece-sq.git

2. Instalar dependencias
    npm install

3. Debe existir un archivo .env con la URL de la API
    REACT_APP_URL_API="https://api.jikan.moe/v4"

## Uso

### Una vez que hayas instalado las dependencias y configurado tu archivo .env, puedes iniciar el proyecto:
    npm start

## Tecnologías Utilizadas

1. React
2. Material-UI
3. API externa de One Piece (https://api.jikan.moe/v4)

## Estructura del proyecto

tu_proyecto/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieList.js
│   │   ├── CharacterList.js
│   │   └── CharacterDetail.js
│   ├── pages/
│   │   └── Characters.js
│   │   └── Movies.js
│   │   └── NotFound.js
│   ├── assets/
│   ├── utils/
│   │   └── hooks.js
│   ├── App.js
│   ├── index.js
├── .env
└── README.md
