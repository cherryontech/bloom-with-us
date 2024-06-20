import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import QuestionsSkillAssessment from "./QuestionsSkillAssessment";
import skillsAndQuestions from "../../data/CareerPathSkills/customerSuccessManagerSkills.json";

// ***** TO DO: Start off from where they last were, if they left in the midle ******
export default function SkillsAssessment() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const goToResults = useNavigate();

  const currentSkillDetails = skillsAndQuestions[currentSkill];

  const handleMoveToNextSkill = (answer) => {
    const yesAnswers = JSON.parse(localStorage.getItem("yesAnswers")) || [];
    const noAnswers = JSON.parse(localStorage.getItem("noAnswers")) || [];

    if (currentSkillDetails) {
      answer === "Yes"
        ? yesAnswers.push(currentSkillDetails)
        : noAnswers.push(currentSkillDetails);

      localStorage.setItem("yesAnswers", JSON.stringify(yesAnswers));
      localStorage.setItem("noAnswers", JSON.stringify(noAnswers));
    }

    currentSkill < skillsAndQuestions.length - 1
      ? setCurrentSkill(currentSkill + 1)
      : goToResults("/results-page");
  };

  return (
    <div className="flex flex-col mt-6">
      <div>
        <h1 className="text-dark-purple-text text-4xl"> Skill Assessment </h1>
      </div>

      <div>
        <QuestionsSkillAssessment currentSkill={currentSkill} />
      </div>

      <div>
        <Button
          variant="secondaryDarkPurple"
          onClick={() => handleMoveToNextSkill("Yes")}
        >
          Yes
        </Button>
        <Button
          variant="secondaryDarkPurple"
          onClick={() => handleMoveToNextSkill("No")}
        >
          No
        </Button>
      </div>
    </div>
  );
}
