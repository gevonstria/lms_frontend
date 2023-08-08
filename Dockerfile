FROM node:14.9
 
WORKDIR /opt/lms_frontend
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3000
 
CMD [ "npm", "start" ]