FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=social_root
ENV MYSQL_DATABASE=social-network_db
ENV MYSQL_PASSWORD=regular_pass

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
