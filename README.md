<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
Yarn install
```
3. Instalar Nest CLI
```
npm i -g @nestjs/cli
```
4. levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el __.env__

6. Reconstruir la base de datos con la semilla "seed"
```
http://localhost:3000/api/v2/seed
```
7. Ejecutar la aplicacion
```
yarn start:dev
```


## Stack Usado
* MongoDB
* Nest
* Docker

# Production Build
1. Crear el archivo   ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
# Notas
Heroku redeploysin cambios:
```
git commit --allow-empty -m "Tigger Heroku deploy"
git push heroku <master|main>
```