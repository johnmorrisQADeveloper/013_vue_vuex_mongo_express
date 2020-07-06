FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli
RUN npm install -g cypress-cucumber-preprocessor
RUN npm install -g cypress

# start app
CMD ["npm", "run", "serve"]

