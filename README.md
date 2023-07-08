# README

## Requirements

nodejs + pnpm installed  

## ToDo

Backend doit pouvoir réception des liens magnet pour enrichir la base
Backend doit lire les CBZ puis les mettre en base de donnée
Préparer un docker-compose pour avoir une base de donnée sur laquelle mettre les datas ? Sinon IPFS avec lecture des répertoires seulement ?

## Design API

/comics
[{id: 1, name: 'Boku no hero', image: ''}]

/comic/1/groups
[{id: 1, name: 'Chapitre 1', image: ''}]

/comic/1/group/2123/pages
[{src: '', src: '', src: ''}]

## Front

Must remember current page (local storage for example)
Home page

