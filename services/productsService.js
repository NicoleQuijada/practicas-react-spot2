const normalizer = require("./transforms/normalize");
const restClient = require('nordic/restclient')({
    timeout:5000
});

class ProductsService{
    static getProducts(siteId, name, limit, offset){
        return restClient.get(`/sites/${siteId}/search?`,{
            params:{
                q:name,
                limit,
                offset
            }
        })
        .then((response) => normalizer(response.data.results))
        .catch((error) => error);
    }
}
module.exports = ProductsService;