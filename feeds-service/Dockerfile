from node:16.13.2

WORKDIR /usr/src/app
COPY dist /usr/src/app
COPY package.json package.json
RUN npm install --production

EXPOSE 3000

CMD ["node", "index.js"]