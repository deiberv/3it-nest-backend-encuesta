<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Backend Prueba tecnica encuesta

Este backend hace uso de base de datos sqlite.

1. Clonar el repositorio
2. Instalar las dependencias
```
npm install
```
3. Copiar el archivo ```.env.template``` y renombrar por ```.env```
4. Cambiar las variables del archivo ```.env```
5. Ejecutar la aplicación 
```
npm run start:dev
```
6. Ejecutar los seed
```
POST http://localhost:3000/api/seed/
```

### Peticiones
```
#Obtener listado de estilos
GET http://localhost:3000/api/estilos

#Crear una encuesta, realizar el voto sobre el estilo musical
POST http://localhost:3000/api/encuestas

#Resultado de los estilos musicales
GET http://localhost:3000/api/encuestas

```
