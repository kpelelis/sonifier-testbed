FROM node:14

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY index.js ./

CMD ["node", "index.js"]
