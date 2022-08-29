const router = require('nordic/ragnar').router();
const getProducts = require('./getProducts');

router.use('/get-products', getProducts)


module.exports = router;
