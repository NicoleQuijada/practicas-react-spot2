const React = require('react');
const Style = require('nordic/style');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const InjectI18n = require('nordic/i18n/injectI18n');
const {useEffect, useState} = React;
const restClient = require('nordic/restclient')({
    timeout:5000,
    baseURL:'/api'
});

/**
* View Component Using Page. This is the same component located under pages/demo/view but it uses the Page Component
*/
function View(props) {
    const { imagePrefix, translations, i18n } = props; // ssr
    
    const preloadedState = {   // csr
        imagePrefix,
        translations
    };
    const [products, setProducts] = useState([]);
    const [offset, setOffset] = useState(0);
    
    useEffect(()=>{
        restClient.get('/get-products',{
            headers:{
                name:'celular',
                limit:10,
                offset
            }
        })
        .then(response => setProducts(response.data))
        .catch(error => error);
    },[])
    
    return (
        <>
        <Style href='products.css' />
        <Script>
        {`
        window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
            isJSON: true,
        })}
        console.log('%cPage is loaded!','color:green')
        `}
        </Script>
        {/* Dependencias cargadas en el cliente */}
        <Script src='vendor.js' />
        {/* Carga el archivo de cliente de la pagina */}
        <Script src='products.js' />
        <ul>
        {products.length>0?
            products.map((product)=> <li>{product.title}</li>)
            :<span>no hay productos</span>
        }
        </ul>
        
        </>
        );
    }
    
    module.exports = InjectI18n(View);