FROM wordpress:5.8.2-php7.4-apache

    # update
RUN apt-get update

    # package zip
RUN apt-get install -y libzip-dev zlib1g-dev nano

RUN a2enmod rewrite

    # adding this part for add user feature
RUN docker-php-ext-install zip mysqli pdo pdo_mysql \
    && a2enmod headers \
    && sed -ri -e 's/^([ \t]*)(<\/VirtualHost>)/\1\tHeader set Access-Control-Allow-Origin "*"\n\1\2/g' /etc/apache2/sites-available/*.conf

COPY .htaccess /var/www/html/
# COPY index.php /var/www/html/
