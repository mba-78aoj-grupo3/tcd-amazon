FROM node:14.17.0

ENV PORT=8037
ENV HOST=ms-shipping
ENV APP_URI=http://ms-shipping:8037
ENV APP_NAME=ms-shipping
ENV NODE_ENV=development
ENV APP_KEY=TgHpLj48KWIhlzJbMBrPZmcY5mt3LTap
ENV GOOGLE_MAPS_API_KEY=AIzaSyDVQkzgkJJ-ks0wcvM4lKF2VnYVW0aNDtg

ENV HASH_DRIVER=bcrypt

ENV DB_CONNECTION=pg
ENV PG_HOST=postgres
ENV PG_PORT=5432
ENV PG_USER=msshipping
ENV PG_PASSWORD=123456
ENV PG_DB_NAME=db_ms_shipping

ENV KAFKA_SERVER=http://kafka:9092

ENV CONSUL_SERVER=consul-server1
ENV CONSUL_PORT=8500
ENV CACHE_VIEWS=false

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 8037