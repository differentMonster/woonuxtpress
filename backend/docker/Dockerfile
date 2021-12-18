    FROM wordpress:5.8.2-php7.4-apache

    # RUN \
    # apt-get update && \
    # docker-php-ext-install pdo pdo_mysql

    # update
    RUN apt-get update

    # package zip
    RUN apt-get install -y libzip-dev zlib1g-dev

    # adding this part for add user feature
    RUN docker-php-ext-install zip mysqli pdo pdo_mysql

    RUN a2enmod rewrite
