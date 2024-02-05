import { useState, useEffect } from "react";
import "./style.css";
import Question from "./Question";

function Questions() {
  const [arr, setArray] = useState([]);

  useEffect(() => {

    fetch('https://the-trivia-api.com/v2/questions')
      .then((res) => res.json())
      .then((data) => setArray(data));
  }, []);

  return (
    <>
      {arr.length !== 0 && <Question arr={arr}/>}
    </>
  );
}

export default Questions;
