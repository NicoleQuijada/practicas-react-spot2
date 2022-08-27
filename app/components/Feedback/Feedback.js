const React = require('react');
const {useState} = React;

function Feedback(props){
    const {feedback, setFeedback} = props;
    const [form, setForm] = useState({
        name:'',
        comment:''
    });

    const handlerSubmit=(event)=>{
        event.preventDefault();
        setFeedback([...feedback, form]);
    }
    
    const onChangeInput=(e)=>{
       
       setForm({...form, [e.target.name]:e.target.value });
       
    }
    
        

    return(
        <>
        <div style={{marginLeft: 5 + 'rem'}}>
        <form onSubmit={handlerSubmit}>
        <h2>Feedback</h2>
        <label htmlFor='feedback'>
            <input onChange={onChangeInput} type='text' name='name' placeholder='Ingresa tu nombre'></input>
        </label>
        <br></br>
        <textarea onChange={onChangeInput} name='comment' placeholder='ingresa tu comentario'></textarea>
        <br></br>
        <input type='submit' ></input>
        </form> 
        </div> 
        </>
        )
    }
    module.exports = Feedback;