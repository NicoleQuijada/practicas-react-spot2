const React = require('react');

function FeedbackList(props){
    const {feedback, setFeedback} = props;
    const showFeedback = feedback.map((element, index)=>{
        return(
            <div key={`feedback-${index}`}>
            <h3>
            Nombre: {element.name}
            </h3>
            <p>
            Comentario: {element.comment}
            </p>
            
            </div>
            
            )
        })
    return(
        <>
        <div style={{marginLeft: 5 + 'rem'}}>
        {showFeedback}
        </div>
       
        </>
    )
}
module.exports = FeedbackList;