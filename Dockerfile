FROM --platform=linux/amd64 node:16 as build

WORKDIR /tmp/
COPY package*.json ./
RUN npm --verbose ci --no-optional --production \
      --target_platform=linux --target_arch=arm

FROM --platform=linux/arm64 node:16 as runtime

WORKDIR /home/app

COPY --from=build /tmp/node_modules node_modules
COPY index.js .

ENTRYPOINT nodejs ./index.js
