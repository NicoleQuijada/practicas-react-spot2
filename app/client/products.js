require('../pages/products/styles.scss');

const React = require('react');
const View = require('../pages/products/view');
const hydrate = require('nordic/hydrate');
const ImageProvider = require('nordic/image/provider')
const I18nProvider = require('nordic/i18n/I18nProvider')
const I18n = require('nordic/i18n')
 
/**
 * Get server state
 */
const {imagePrefix, translations } = window.__PRELOADED_STATE__;
 
const i18n = new I18n({ translations });

/**
 * Mount DemoView on client
 */
hydrate(
  <I18nProvider i18n={i18n}>
   <ImageProvider prefix={imagePrefix}>
     <View />
   </ImageProvider>
  </I18nProvider>,
  document.getElementById('root-app')
);