const React = require('react');
const PropTypes = require('prop-types');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const AddFilter = require('../../components/AddFilter');
const FilterList = require('../../components/FilterList');
const Feedback = require('../../components/Feedback');
const FeedbackList = require('../../components/FeedbackList');
const {useState} = React;

function View(props){
    // este products viene del client 
    const { products } = props;
    const preloadState = {products};
    // creamos dos variables de estados porque son dos form
    const [categories, setCategories] = useState([]);
    const [prices, setPrices] = useState([]);
    const [feedback, setFeedback] = useState([]);
    // se creo las variables de estado en la View porque es el padre y en los dos 
    // componentes se debe utilizar las variables de estados 

    return(
        <>
       <AddFilter
        categories={categories} setCategories={setCategories}
        prices={prices} setPrices={setPrices}
        />
       <FilterList
       categories={categories} setCategories={setCategories}
       prices={prices} setPrices={setPrices}
        />
        <Feedback feedback={feedback} setFeedback={setFeedback}
        />
        <FeedbackList feedback={feedback} setFeedback={setFeedback} 
        />
        

        <Script>{`
            window.__PRELOADED_STATE__ = ${serialize(preloadState, {
                isJSON: true,
            })}
            console.log("%cClase page is loaded!","color:green")
            `}</Script>
            <Script src="vendor.js" />
            <Script src="products.js"/>
            
        </>
    );
};

View.PropTypes = {
    products: PropTypes.arrayOf({
        
    })
}
module.exports = View;

