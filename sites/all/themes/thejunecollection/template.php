<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

function thejunecollection_preprocess_html(&$variables) {
  drupal_add_css('http://fonts.googleapis.com/css?family=Titillium+Web:400,200', array('type' => 'external'));
}

function thejunecollection_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }
}
?>