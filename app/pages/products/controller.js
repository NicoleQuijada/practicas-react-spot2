const React = require('react');
const View = require('./view');
const ImageProvider = require('nordic/image/provider')
const I18nProvider = require('nordic/i18n/I18nProvider')
const config = require('nordic/config')
 
/**
 * Fetch Site data example
 */
// const serviceName = require('../../../services/service_name');
// exports.functionName = function functionName(req, res, next) {
//  serviceName.getSite(req.platform.siteId).then((data) => {
//     res.locals.site = data;
//     next();
//   }).catch(err => next(err));
// };
 
const imagePrefix = config.assets.prefix;
 
exports.render = function render(req, res) {
  const ProductView = (props) => (
    <I18nProvider i18n={req.i18n}>
      <ImageProvider prefix={config.assets.prefix}>
       <View {...props} />
      </ImageProvider>
    </I18nProvider>
)
 
/**
 * Render View
 */
  res.render(ProductView, {
   PropName: 'Hola',
   imagePrefix,
   translations: req.translations,
  });
};