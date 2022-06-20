import React, { useState } from "react";
import AccordionList from "./accordionList";

const Accordion = () => {
  const [question, setQuestion] = useState([
    {
      id: 1,
      question: "Do i have to allow the use of cookies",
      answer:
        "Yes, cookies help save your data for the next time you visit our page.",
    },
    {
      id: 2,
      question: "How do i change my page password",
      answer: "Navigate to your profile, click settings and change password",
    },
    {
      id: 3,
      question: "What is Bank Id",
      answer: " It is a number bankers use when trying to resolve bank issues",
    },
    {
      id: 3,
      question: "Whose birth number can i use",
      answer: "Whatever birth numnber you have",
    },
    {
      id: 3,
      question: "When do i receive a password ordered by the letter",
      answer:
        "when you request for a password, it is authenticated immediately and sent to you.",
    },
  ]);
  return (
    <div style={Container}>
      <div style={Wrapper}>
        <h3 style={h3Text}>Questions and Answers About Login</h3>
        <div>
          {question.map((q) => {
            return <AccordionList key={q.id} question={q} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Container = {
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  background: "purple",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Wrapper = {
  background: "white",
  padding: "10px",
  borderRadius: "5px",
  display: "flex",
  flexWrap: "wrap",
  margin: "0 2em",
};
const h3Text = {
  width: "250px",
  padding: "0px 4px",
};
export default Accordion;
