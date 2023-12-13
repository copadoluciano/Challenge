FROM cypress/included:12.3.0

WORKDIR /usr/src/app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Establece el comando predeterminado para ejecutar Cypress
CMD ["npm", "test"]