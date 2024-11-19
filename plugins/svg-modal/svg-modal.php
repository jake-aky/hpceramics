<?php
/**
 * Plugin Name:       SVG Modal
 * Description:       An interactive block with the Interactivity API.
 * Version:           0.1.0
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       svg-modal
 *
 * @package           svg-modal
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
function svg_modal_svg_modal_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', 'svg_modal_svg_modal_block_init' );

add_action( 'init', 'modal_enqueue', 0 );
function modal_enqueue() {
    wp_enqueue_script( 'load-modal-script', plugins_url( '', 'svg-modal' ) . '/svg-modal/build/view.js');
}
