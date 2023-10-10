# Utiliza una imagen base de Node.js
FROM node:14
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
# Copia los archivos del proyecto al contenedor
COPY package*.json ./
# Instala las dependencias
RUN npm install
# Comando para iniciar la aplicación
CMD [ "node", "app.js" ]
