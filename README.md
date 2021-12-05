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
* TODO [0/0] dockerlization front and backend
  - Note taken on [2021-12-06 Mon 01:28] \\
    - [ ] connect both using Restful API
    - [X] environment setup
  - follow up by docker setting database location, networks sharing
