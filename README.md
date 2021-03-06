# TodoApp Build Status - [![Build Status](https://github.com/johnmorrisQADeveloper/013_vue_vuex_mongo_express/workflows/main/badge.svg)](https://github.com/johnmorrisQADeveloper/013_vue_vuex_mongo_express/actions)


![Image description](src/assets/archvuexmongoexpress.png)



 [![ubuntu status](https://github.com/johnmorrisQADeveloper/013_vue_vuex_mongo_express/workflows/ubuntu/badge.svg)](.github/workflows/ubuntu.yml)  [![zap status](https://github.com/johnmorrisQADeveloper/013_vue_vuex_mongo_express/workflows/zap/badge.svg)](.github/workflows/zap.yml) 


## Start REST API
```
cd backend
npm i
npm start
http://localhost:3000/todos
https://cryptic-sierra-47326.herokuapp.com/todos
```

## Start Vue APP
```
npm run serve
http://localhost:8080/
```

## start docker 
```
docker-compose up -d --build
http://localhost:8080/
http://localhost:3000/todos
```

## stop docker
```
docker-compose stop
```

## general docker
```
docker images
docker system prune
docker system prune -a

```

## cypress intellisense
```
/// <reference types="Cypress" />
```

## update dependecies
```
npx npm-check-updates -u
npm update
```
