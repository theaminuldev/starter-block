<?php

/**
 * Plugin Name:       Starter Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       starter-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

add_action('init', 'register_blocks');


function register_blocks(){
	$build_dir = __DIR__ . '/build/block';

	if (is_dir($build_dir)) {
		$block_directories = scandir($build_dir);
		//error_log(print_r($block_directories, true));

		foreach ($block_directories as $block_directory) {
			if ($block_directory === '.' || $block_directory === '..') {
				continue;
			}

			$block_path = $build_dir . '/' . $block_directory;

			if (is_dir($block_path)) {
				register_block_type($block_path);
			}
		}
	}
}
