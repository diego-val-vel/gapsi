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

### 4.1 Logs de inicialización del contenedor

![1.containerInitLogs](/screenshots/1.containerInitLogs.png)

### 4.2 Accediendo a la aplicación desde localhost

![2.appFromLocalHost.png](/screenshots/2.appFromLocalHost.png)

### 4.3 Formulario válido y con todos los campos llenos

![3.validAndFullFilledForm.png](/screenshots/3.validAndFullFilledForm.png)

### 4.4 Formulario inválido

![4.invalidForm.png](/screenshots/4.invalidForm.png)

### 4.5 Respuesta inválida desde el backend porque el email ya está registrado

![5.invalidEmailAlreadyRegistered.png](/screenshots/5.invalidEmailAlreadyRegistered.png)

### 4.6 Respuesta válida desde el backend, lead registrado

![6.validLeadRegistered.png](/screenshots/6.validLeadRegistered.png)

### 4.7 Salidas desde la consola

![7.consoleOutputs.png](/screenshots/7.consoleOutputs.png)
