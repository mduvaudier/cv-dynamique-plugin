<?php
/**
 * Template Name: CV Dynamique
 * Template Post Type: page
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Style React compilé -->
  <link rel="stylesheet" href="<?php echo plugin_dir_url(__FILE__) . 'build/main.css'; ?>">
  
  <?php wp_head(); // Optionnel si tu veux garder certains styles ou scripts WordPress ?>
</head>
<body <?php body_class(); ?>>

  <div class="cv-dynamique" id="root"></div>

  <!-- Script React compilé -->
  <script type="module" src="<?php echo plugin_dir_url(__FILE__) . 'build/index.js'; ?>"></script>

</body>
</html>