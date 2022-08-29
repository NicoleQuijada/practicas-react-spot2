const router = require('nordic/ragnar').router();
const ProductsService = require('../services/productsService');

router.get('/', (req,res)=>{
    const {name, limit, offset} = req.headers;
    const {siteId} = req.platform;
    ProductsService.getProducts(siteId, name, limit, offset)
    .then(products=> res.json(products))
    .catch(error => console.log(error));
})


  
module.exports = router;