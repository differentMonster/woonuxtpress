FROM wordpress:5.7.1-php7.4-apache

# copy backend folder
COPY . /var/www/html/backend

# focus on backend folder
WORKDIR /var/www/html/backend

# COPY check-wordpress-version.sh /usr/local/bin/

# RUN chmod 755 /usr/local/bin/check-wordpress-version.sh

# ENTRYPOINT ["/usr/local/bin/check-wordpress-version.sh"]