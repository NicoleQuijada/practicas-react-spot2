const React = require('react');
const PropTypes = require('prop-types');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');


function View(props){
    const { products } = props;
    const preloadState = {products};
    const [ data, setData ] = React.useState({name: '', lastname: ''});
    const [ error, setError ] = React.useState({});
    const handleInput = (e) => {
        const {value, id} = e.target;

        if(value.trim().length <= 1){
            if(id === 'name'){
            setError({
                ...error,
                [id]: 'Debe ingresar un nombre válido'
            })
        }
        if(id === 'lastname'){
            setError({
                ...error,
                [id]: 'Debe ingresar un apellido válido'
            })
        }
        }else{
            setError({
                ...error,
                [id]:""
            })
            setData({...data,
            [id]:value
        })
        }
    }
    console.log(error)

    return(
        <>
       
        <Script>{`
            window.__PRELOADED_STATE__ = ${serialize(preloadState, {
                isJSON: true,
            })}
            console.log("%cClase page is loaded!","color:green")
            `}</Script>
            <Script src="vendor.js" />
            <Script src="products.js"/>
            <form>
                <label htmlFor='name'>nombre</label>
                <input id='name' type='text' onBlur={handleInput} />
                {error.name && <span>{error.name}</span>}
                <label htmlFor='lastname'>apellido</label>
                <input id='lastname' type='text' onBlur={handleInput} />
                {error.lastname && <span>{error.lastname}</span>}
            </form>
        </>
    );
};

View.PropTypes = {
    products: PropTypes.arrayOf({
        
    })
}
module.exports = View;
