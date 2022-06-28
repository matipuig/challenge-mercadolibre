# DOCKERFILE
# Choose the node version by build argument. Node "latest" is not suitable for production.
# Use https://hub.docker.com/_/node and check for the recommended version in: https://nodejs.org/en/
# Important: Big images come with more vulnerabilities. Try to use something like alpine. 
ARG NODE_VERSION 
FROM node:${NODE_VERSION}

# Install node packages and apply permissions on the begining.
RUN mkdir -p /home/node/app/node_modules \
    && chown -R node:node /home/node/app \
    && chmod -R +x /home/node/app

# Choose workdir and copy package.json to speed up using cache.
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./

# Install the packages, copy the source code and compile it.
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run compile

# Add the volume if you need it.
# VOLUME /home/node/app/persisted

# It's very important to run it with node and not pm2 or another process manager.
# This way, you give the restart decision to the container manager.
CMD ["npm", "run", "start-from-docker", "--silent"]