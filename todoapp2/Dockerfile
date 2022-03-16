
FROM node:16.14-alpine3.14 as development

WORKDIR /todoapp2

COPY ./package*.json ./yarn.lock ./dev.env /todoapp2/

RUN yarn add glob rimraf

RUN yarn install --only=development

COPY . /todoapp2/

RUN yarn run build


# CMD ["yarn", "start:dev", "/todoapp2/"]

# FROM node:16.14-alpine3.14 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /todoapp2

# COPY package*.json ./

# RUN yarn install --only=production

# COPY . .

# COPY --from=development /todoapp2/dist ./dist

CMD ["yarn", "start:dev", "/todoapp2/"]