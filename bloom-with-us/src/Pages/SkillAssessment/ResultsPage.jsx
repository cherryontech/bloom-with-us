import { useEffect, useState } from "react";
import ResultsCard from "../../components/ResultsCard";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const navigate = useNavigate();
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
      <div className="pb-10">
        <span className="text-xl"> Let&apos;s improve these skills </span>
        <Button
          variant="primaryDarkPurple"
          className="ml-6"
          onPress={navigate("/upskill-selection")}
        >
          Start here
        </Button>
      </div>
    </div>
  );
}
