<?php
/**
 * Plugin Name: CV Dynamique
 * Description: Plugin pour afficher un CV interactif React.
 * Version: 1.0.1
 * Author: Marie Duvaudier
 */

// Charger les assets React compilés
add_action('wp_enqueue_scripts', 'cv_dynamique_enqueue_assets');

function cv_dynamique_enqueue_assets() {
    // Nom du fichier JS/CSS à adapter selon ce que Vite génère
    $plugin_path = plugin_dir_path(__FILE__) . 'build/';
    $plugin_url = plugin_dir_url(__FILE__) . 'build/';

    // CSS
    $css_files = glob($plugin_path . '*.css');
    if ($css_files && isset($css_files[0])) {
        $css_url = $plugin_url . basename($css_files[0]);
        wp_enqueue_style('cv-dynamique-style', $css_url, [], '1.0');
    }

    //Police
    wp_enqueue_style(
        'mon-plugin-google-fonts',
        'https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Poppins:wght@400;600&display=swap',
        false,
        null
    );

    // JS
    wp_enqueue_script('cv-dynamique-script', $plugin_url . 'index.js', [], '1.0', true);
}

// Shortcode pour afficher le CV
add_shortcode('cv_dynamique', 'cv_dynamique_render');

function cv_dynamique_render() {
    return '<div id="root"></div>';
}

add_filter('template_include', 'cv_dynamique_maybe_override_template');

function cv_dynamique_maybe_override_template($template) {
    if (is_singular('page')) {
        global $post;
        if (has_shortcode($post->post_content, 'cv_dynamique')) {
            return plugin_dir_path(__FILE__) . 'cv-dynamique-template.php';
        }
    }
    return $template;
}