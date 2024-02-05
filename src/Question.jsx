import { useState } from "react";
import "./style.css";
function Question({ arr }) {
  let [correctAns, setCorrectAns] = useState(0);
  let [questionNo, setQuestionNo] = useState(0);
  let [submitted,setSubmiited]=useState(false)
  

  let arr1 = [...arr[questionNo].incorrectAnswers, arr[questionNo].correctAnswer];
  const randomNumber = Math.floor(Math.random() * 3);
  let temp = arr1[randomNumber];
  arr1[randomNumber] = arr1[3];
  arr1[3] = temp;
  console.log(randomNumber);

  function btnClick(event) {
    if (event.target.value == randomNumber) {
      setCorrectAns(correctAns + 1);
    }
    if (questionNo < 9) {
      setQuestionNo(questionNo + 1)
    }else{
      setSubmiited(true);
    }
  }
  return (
    <>
    <h1 className="heading">QUIZ APPLICATION</h1>
     {!submitted &&
        <div className="container">
          <div className="questionContainer">

          <h1>Question {`${questionNo + 1}/${arr.length}`}</h1>
            <p>{arr[questionNo].question.text}
            </p>
          </div>
          <div className="optionContainer">
            <div className="btnContainer">
              <button  onClick={btnClick} value={0}>{arr1[0]}</button>
              <button onClick={btnClick} value={1}>{arr1[1]}</button>
              <button onClick={btnClick} value={2}>{arr1[2]}</button>
              <button onClick={btnClick} value={3}>{arr1[3]}</button>
            </div> 
          </div>
        </div>}
        {submitted&&<div className="containerNew">{`You Scored ${correctAns}/${arr.length}`}</div>}
        
    </>
  )
}
export default Question;

