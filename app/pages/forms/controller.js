const React = require('react');
const View = require('./view');

exports.render = function render(req, res){
    const products = props => < View {...props} />
    res.render(products, {products:res.locals.products})
}