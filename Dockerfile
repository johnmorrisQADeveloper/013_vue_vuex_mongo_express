FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
# RUN npm install -g @vue/cli
# RUN npm install -g babel-eslint
# RUN npm install -g @vue/cli-plugin-babel
# RUN npm install -g @vue/cli-plugin-eslint
# start app
CMD ["npm", "run", "serve"]

