import { useEffect, useState } from "react";
import ResultsCard from "../../components/ResultsCard";

export default function ResultsPage() {
  //arrays that will hold responses
  const [yesAnswers, setYesAnswers] = useState([]);
  const [noAnswers, setNoAnswers] = useState([]);

  //gets responses from local storage and assigns them into the constants
  useEffect(() => {
    const yesAnswers = JSON.parse(localStorage.getItem("yesAnswers")) || [];
    const noAnswers = JSON.parse(localStorage.getItem("noAnswers")) || [];
    setYesAnswers(yesAnswers);
    setNoAnswers(noAnswers);
  }, []);

  return (
    <div className="flex flex-col mt-12">
      <ResultsCard yesAnswer={yesAnswers} noAnswer={noAnswers} />
    </div>
  );
}
