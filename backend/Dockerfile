# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del backend
COPY ./backend/package.json ./backend/package-lock.json /app/

# Instala las dependencias de Node.js
RUN npm install

# Copia el código fuente
COPY ./backend /app/

# Expone el puerto (opcional)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]