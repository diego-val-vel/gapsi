# gapsi
Repository containing my proposed solution to the exam administered by the company GAPSI

## 0. Descripción
La aplicación desarrollada que da solución al ejercicio propuesto se basa en un frontend (un formulario) hecho con Angular y Material 17. Para lograr lo anterior se utilizó Docker, quien conteneriza todo este ecosistema basado en Angular. La comunicación con el backend se hace por medio de un service y la creación de un proxy que permite solventar el problema de restricción por CORS que se tiene al llamar a un servicio expuesto en un servidor (en este caso el API de proc-leads) desde un desarrollo o servidor local.

## 1. Software previo requerido
Se debe instalar Docker y también Docker Compose, esto depende del sistema operativo que se use. La forma más sencilla de contar con lo anterior es, en Windows y/o Mac, instalando Docker Desktop.

## 2. Uso

### 2.1 Clonar el repositorio
`https://github.com/diego-val-vel/gapsi.git`

### 2.2 Acceder a la carpeta raíz usando la terminal del S. Op.
`cd gapsi`

### 2.3 Iniciar el contenedor
Desde la misma terminal, ejecutar el comando que se encargará de ejecutar todo el pipeline descrito en el archivo docker-compose.yml:

`docker-compose up --build`

### 2.4 Desde un navegador web, ingresar a
`http://localhost:3000/`

### 2.5 Capturar los datos para el registro del proveedor

## 3. Otros comandos Docker

- Listar los contenedores:
`docker ps`

- Acceder al contenedor del backend:
`docker exec -it gapsi-backend-1 /bin/bash`

- Acceder al contenedor del frontend:
`docker exec -it gapsi-frontend-1 /bin/bash`

- Detener el contenedor:
`docker stop gapsi-backend-1`

- Iniciar los contenedores:
`docker-compose up --build`

- Reiniciar los contenedores:
`docker-compose restart`

- Recrear desde cero los contenedores:
`docker-compose down && docker-compose up --build`

## 4. Evidencias

### 4.1 Documentación por Postman

![1.Postman doc](/screenshots/1.png)

### 4.2 Welcome page

![2.Welcome page](/screenshots/2.png)

### 4.3 Lista de proveedores paginada, página 1

![3.Lista proveedores pg1.png](/screenshots/3.png)

### 4.4 Lista de proveedores, página 2

![4.Lista proveedores pg2.png](/screenshots/4.png)

### 4.5 Validación, registro duplicado

![5.Registro duplicado.png](/screenshots/5.png)

### 4.6 Respuesta exitosa, alta del proveedor

![6.Alta de proveedor.png](/screenshots/6.png)
