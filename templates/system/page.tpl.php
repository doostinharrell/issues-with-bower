<?php

GLOBAL $base_url;
$theme = drupal_get_path('theme', 'sensibilities');

?>

<div class="l-page">
  <header class="l-header container" role="banner">
    <?php print render($page['header_left']); ?>
    <div class="l-region l-region--header-middle">
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="site-logo">
        <img src="<?php print $base_url . '/' . $theme . '/images/logo-header.png'; ?>" alt="<?php print t('Home'); ?>" />
      </a>
    </div>
    <?php print render($page['header_right']); ?>
  </header>

  <div class="l-main container">
    <?php print render($page['content_top']); ?>
    <div class="l-content" role="main">
      <?php print render($page['highlighted']); ?>
      <?php print $breadcrumb; ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>

    <?php print render($page['sidebar_first']); ?>
    <?php print render($page['sidebar_second']); ?>
    <?php print render($page['content_btm']); ?>
  </div>

  <footer class="l-footer" role="contentinfo">
    <div class="l-footer-inner container">
      <?php print render($page['footer_top_left']); ?>
      <div class="l-region l-region--footer-top-middle">
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="site-logo">
          <img src="<?php print $base_url . '/' . $theme . '/images/logo-footer.png'; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      </div>
      <?php print render($page['footer_top_right']); ?>
      <?php print render($page['footer_btm']); ?>
    </div>
  </footer>
</div>
