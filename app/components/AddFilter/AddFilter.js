const React = require('react');
const {useState} = React;

function AddFilter(props){
    // estos estados vienen del padre (view)
    const {prices, setPrices} = props;
    const {categories, setCategories} = props;
    // este estado nuevo es para obtener el valor de los inputs
    const [inputs, setInputs] = useState({
        min:'',
        max:'',
        category:''
    });
    
    // la funcion onChangeInput hace un setInput a cada propiedad con el valor que corresponde
    // depende de su name se le asignara su value
    const onChangeInput = (e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value })
    }
    
    const handlerPrice = (event)=>{
        event.preventDefault();
       setPrices([...prices, {'min':inputs.min, 'max':inputs.max}]);
    //    para limpiar el estado y el input se debe setear nuevamente las propiedades en ''
    //    y en el input colocarle el value del estado
       setInputs({...inputs, min:'', max:''});
    }

    const handlerCategory = (event)=>{
        event.preventDefault();
        setCategories([...categories, {'category':inputs.category}]);
    //    para limpiar el estado y el input se debe setear nuevamente las propiedades en ''
    //    y en el input colocarle el value del estado
        setInputs({...inputs, category:''});

    }
    
    return(
        <>
        <div style={{marginLeft: 5 + 'rem'}}>
        <form onSubmit={handlerPrice}>
        <p>Rango de precio</p>
        <label htmlFor='min'>min<input onChange={onChangeInput} type='number' name='min' value={inputs.min} placeholder='150'></input></label>
        <label htmlFor='max'>max<input onChange={onChangeInput} type='number' name='max' value={inputs.max} placeholder='5000'></input></label>
        <button type='submit'> Agregar rango de precio </button>
        </form>  
        <form onSubmit={handlerCategory}>
        <p>Filtro por categoría</p>
        <label htmlFor='category'>Categoría<input onChange={onChangeInput} type='text' name='category' value={inputs.category} placeholder='agregar filtros por categoría...'></input></label>
        <button type='submit'> Agregar filtro por categoría </button>
        </form>  
        </div>
        
        </>
        )
    }
    
    module.exports = AddFilter;