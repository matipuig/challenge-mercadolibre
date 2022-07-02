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

# Add environment variables before building.
ARG FRONTEND_URL
ARG LANGUAGE
ARG LOGS_LEVEL silly
ARG BACKEND_BASE_URL
ARG BACKEND_API_KEY
RUN echo "NEXT_PUBLIC_FRONTEND_BASE_URL=${FRONTEND_URL}" >> /home/node/app/.env \
    && echo "NEXT_PUBLIC_LANGUAGE=${LANGUAGE}" >> /home/node/app/.env \
    && echo "LOGS_LEVEL=${LOGS_LEVEL}" >> /home/node/app/.env \
    && echo "BACKEND_BASE_URL=${BACKEND_BASE_URL}" >> /home/node/app/.env \
    && echo "BACKEND_API_KEY=${BACKEND_API_KEY}" >> /home/node/app/.env \
    && echo ".env file for build time generated with docker arg_builds FRONTEND_URL, LANGUAGE, LOGS_LEVEL, BACKEND_BASE_URL y BACKEND_API_KEY" 
RUN npm run next_build

# Start the app.
EXPOSE 3000
CMD npm run start
