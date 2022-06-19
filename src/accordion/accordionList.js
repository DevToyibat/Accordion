import React from "react";

const AccordionList = ({ question }) => {
    const [isActive,setActive] = React.useState(false);
  return (
    <div style={questionBox}>
      <div style={topRow}>
        <div style={questionContainer}>{question.question}</div>
        <button style={button} onClick={()=> setActive(!isActive)}>{isActive ? "-": "+"}</button>
      </div>
      {isActive &&  <p style={answerContainer}>{question.answer}</p>  }
      
    </div>
  );
};
const questionBox = {
  width: "450px",
  background: "white",
  padding: "5px",
  margin:'7px',
  padding:'10px',
  boxShadow:'0 6px 6px rgba(0,0,0,0.2)'
};

const questionContainer = {};
const answerContainer = {
    lineHeight:'0.1'
};
const button = {
    border:'none',
    borderRadius:'50%',
    background:'black',
    color:'white',
    cursor:'pointer'
};
const topRow= {
    display:'flex',
    justifyContent:'space-between'
};

export default AccordionList;
