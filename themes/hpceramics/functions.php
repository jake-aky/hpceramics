<?php
function portfolio_enqueue_styles() {
    // Enqueue the main stylesheet
    wp_enqueue_style('main-style', get_stylesheet_uri(),array(), rand(111,9999));
}
add_action('wp_enqueue_scripts', 'portfolio_enqueue_styles');

/* Disable WordPress Admin Bar for all users */
add_filter( 'show_admin_bar', '__return_false' );

/* Create custom category for plugins */

add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$categories[] = array(
		'slug'  => 'jake-aky-plugins',
		'title' => 'jake-aky Plugins'
	);

	return $categories;
} );

/* Enqueue Navbar Script */
function enqueue_responsive_nav() {
	wp_enqueue_script('responsiveNav',"/wp-content/themes/hpceramics/scripts/nav.js", '',false, true);
}
add_action( 'wp_enqueue_scripts', 'enqueue_responsive_nav');
/* Enqueue Navbar Script */
function enqueue_lenis_smooth_scroll_package() {
	wp_enqueue_script('lenisSmoothScrollPackage',"https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js", '',false, true);
}
add_action( 'wp_enqueue_scripts', 'enqueue_lenis_smooth_scroll_package');
function enqueue_lenis_smooth_scroll() {
	wp_enqueue_script('lenisSmoothScroll',"/wp-content/themes/hpceramics/scripts/lenis.js", '',false, true);
}
add_action( 'wp_enqueue_scripts', 'enqueue_lenis_smooth_scroll');
