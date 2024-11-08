<?php
define('WP_CACHE', true); // WP-Optimize Cache
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "l29o44633761632" );
/** Database username */
define( 'DB_USER', "l29o44633761632" );
/** Database password */
define( 'DB_PASSWORD', "K{kK0-DW=Z@" );
/** Database hostname */
define( 'DB_HOST', "107.180.123.45:3307" );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'g1/S4d1368$s8ZmSASY(' );
define( 'SECURE_AUTH_KEY',  'V96Gg$&mfF8cvEr6n1Z2' );
define( 'LOGGED_IN_KEY',    'E0X-IgpG5ZS@1TsAFR/%' );
define( 'NONCE_KEY',        'NjK9Qzj$3w9xTM 6E=3E' );
define( 'AUTH_SALT',        '5ABt(GjQ0*XjXK@nB2=T' );
define( 'SECURE_AUTH_SALT', 'hj+s2V$cZkCZCEF!caPT' );
define( 'LOGGED_IN_SALT',   '-qrdU9Km&/&2DU#try-D' );
define( 'NONCE_SALT',       'VNNvYhO4njQKkYt=n8PG' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_3wn9kjattn_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
//define( 'WP_CACHE', false /* Modified by NitroPack */ );
require_once( dirname( __FILE__ ) . '/gd-config.php' );
define( 'FS_METHOD', 'direct' );
define( 'FS_CHMOD_DIR', (0705 & ~ umask()) );
define( 'FS_CHMOD_FILE', (0604 & ~ umask()) );
/* Add any custom values between this line and the "stop editing" line. */
define( 'FORCE_SSL_ADMIN', true );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';