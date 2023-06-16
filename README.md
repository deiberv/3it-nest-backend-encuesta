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
# Obtener listado de estilos
GET http://localhost:3000/api/estilos

# Crear una encuesta, realizar el voto sobre el estilo musical
POST http://localhost:3000/api/encuestas

#Resultado de los estilos musicales, debe ser usuario con ROLE_ADMIN
GET http://localhost:3000/api/encuestas

# Login de usuario
POST http://localhost:3000/api/auth/login
{
  "email": "dvelandria2@gmail.com",
  "password": "Dv123456"
}

Usario disponibles
test1@google.com - Abc123 - ROLE_ADMIN
test2@google.com - Abc123 - ROLE_USER

# check-status 
GET http://localhost:3000/api/auth/check-status

```


## Proceso para el testeo
Se adjunta archivo 3i prueba tecnica.postman_collection.json de postman con las peticiones http que se pueden realizar
Se hace validaciones auth mediante token Bearer obtenido al hacer login

El usuario con ROLE_ADMIN puede realizar cualquier petición del sistema
El usuario con ROLE_USER puede emitir votos o cargar a la encuenta, pero no puede ver los resultados de la misma