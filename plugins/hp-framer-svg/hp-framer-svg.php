<?php
/**
 * Plugin Name:       HP Framer SVG
 * Description:       An animated svg of the HP logo, alongside fade in text.
 * Version:           0.1.0
 * Author:            jake-aky
 * Text Domain:       hp-framer-svg
 *
 * @package           hp-framer-svg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function hp_framer_svg_hp_framer_svg_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', 'hp_framer_svg_hp_framer_svg_block_init' );

add_action( 'init', 'framer_enqueue', 0 );
function framer_enqueue() {
    wp_enqueue_script( 'framer-view-script', plugins_url( '', 'svg-modal' ) . '/hp-framer-svg/build/view.js', ['load-modal-script', 'wp-element'] );
}
