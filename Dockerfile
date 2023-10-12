# Utiliza una imagen base de Node.js
FROM node:lastest
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
# Clona el repositorio de GitHub directamente en el contenedor
RUN git clone https://github.
# Copia los archivos del proyecto al contenedor
COPY package*.json ./
# Instala las dependencias
RUN npm install
# Comando para iniciar la aplicación
CMD [ "node", "app.js" ]
