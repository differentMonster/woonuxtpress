# Nuxt [ frontend ] + [ Wordpress ] + [ Woocommerce ]

** Your API will most likely live in its own sub-domain to avoid exposing non-traditional web ports like 8000 in your URLs
** Keep CORS, cross-origin resource sharing, in mind. You may need to include a plugin to allow cross-domain fetches
** If you're running Wordpress in Docker consider state, be sure to mount and backup the media uploads volume and of course your MySQL database
** Disable your Wordpress front end with redirects

# Nuxt
* logs
* [#D] remove response from classWooCommerceOrigin

# Wordpress
* logs
* DONE add CORS into wordpress
  CLOSED: [2022-01-16 Sun 04:59]

* [#D] remove or disable class-wp-rest-api plugin

# Woocommerce

* logs
* DONE Cross Origin Problem
  CLOSED: [2022-01-16 Sun 00:51]
Refused to set unsafe header "User-Agent"
from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
