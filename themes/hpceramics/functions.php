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
