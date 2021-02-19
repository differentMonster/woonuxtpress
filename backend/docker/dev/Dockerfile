FROM wordpress:latest

# copy backend folder
COPY . /var/www/html/backend

# focus on backend folder
WORKDIR /var/www/html/backend

COPY check-wordpress-version.sh /usr/local/bin/

RUN chmod 755 /usr/local/bin/check-wordpress-version.sh

ENTRYPOINT ["/usr/local/bin/check-wordpress-version.sh"]