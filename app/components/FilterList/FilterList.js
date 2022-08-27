const React = require('react');

function FilterList(props){
    const {prices, setPrices} = props;
    const {categories, setCategories} = props;
   
    const deleteCategory = (id)=>{
        const filterIndex = categories.filter((element, index)=>
            id != index
        );
        setCategories(filterIndex);
    }
    const deletePrice = (id)=>{
        const filterIndex = prices.filter((element, index)=>
            id != index
        );
        setPrices(filterIndex);
    }

    const showCategory = categories.map((element, index)=>{
        return(
            <li key={`category-${index}`}>
            {element.category}
            <button onClick={()=>{deleteCategory(index)}}>Eliminar</button>
            </li>
            )
        })
        const showPrices = prices.map((element, index)=>{
            return(
                
                <li key={`prices-${index}`}>
                min:{element.min}
                <br></br>
                max:{element.max}
                <button onClick={()=>{deletePrice(index)}}>Eliminar</button>
                </li>
                
                )
            })
            return(
                <>
                <div style={{marginLeft: 5 + 'rem'}}>
                <h2>Filtros</h2>
                <ul>
                {showCategory}
                {showPrices}
                
                </ul>
                </div>
                </>
                )
            }
            
            module.exports = FilterList;