# Nuxt-Press

# Dockerlization
* enviroment setup
** BUG in .env NUXTPRESS_DB_NAME must same as what you create on phpmyadmin and wordpress database else it will have connection problem
   * comeback to insert database again and logs

** [ your location folder ] copy to => [ vm path ]
** .[/backend/wp-content] : [/var/www/html/wp-content]

   ```bash
      - ./backend/wp-content:/var/www/html/wp-content
   ```

** nuxtpress.front must have volumes setup, else docker wont recongization
   ```bash
      - ./frontend:/var/www/nuxtpress-app
   ```

# Frontend [ Nuxt 2 ]

# Backend [ wordpress ]

# Logs
* DONE [0/0] dockerlization front and backend
  CLOSED: [2021-12-08 Wed 00:59]
  - Note taken on [2021-12-06 Mon 01:28] \\
    - [X] axios return wp-json/v2 Restful API
    - [X] environment setup
  - follow up by fetch restful api post from wordpress
  - axios work but $axios.get didt [ fix ]
  - $wp return by pages and posts, using fetch
  - wordpress page set are successfully

* TODO testout $wp, create, post, detele, update
  - Note taken on [2021-12-08 Wed 05:14] \\
    - block-renderer
    - blocks
    - categories
    - comments
    - cpt
    - frontPage
    - media
    - menu
    - options
    - pages
    - search
    - settings
    - slug
    - statuses
    - tags
    - taxonomies
    - taxonomy
    - themes
    - types
    - users
    - _ns
    - options

* DONE update Dockerlization wordpress
  CLOSED: [2021-12-09 Thu 01:53]
  - Note taken on [2021-12-09 Thu 01:51] \\
    - WORDPRESS_DEBUG
      original define('WP_DEBUG', false)
      setting 1 will be true and 0 will be false

    - WORDPRESS_TABLE_PREFIX
      The default database table prefix for WordPress is 'wp_'; however, we recommend changing it. The reason for this is that all your login details are stored in your database, making your WordPress tables very popular targets for hackers.

* DONE wordpress add user problem
  CLOSED: [2021-12-18 Sat 22:30]
  - Note taken on [2021-12-18 Sat 22:30] \\
    - MailPoet Error : MailPoet requires a PDO_MYSQL PHP extention.
