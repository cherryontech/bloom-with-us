import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

export default function UpskillSelection() {
  const navigate = useNavigate();

  const [noAnswers, setNoAnswers] = useState([]);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    const noAnswers = JSON.parse(localStorage.getItem("noAnswers")) || [];
    console.log(noAnswers);
    setNoAnswers(noAnswers);

    const upskillList =
      JSON.parse(localStorage.getItem("selectedProgress")) || [];
    if (upskillList.length > 0) {
      setInProgress(true); // a skill has already been selected
    }
  }, []);

  const onSkillPressed = (noSkillId) => {
    const upskillList = [];
    upskillList.push(noSkillId);

    localStorage.setItem("selectedProgress", JSON.stringify(upskillList));
    navigate("/progress-tracking"); // automatically go to progress tracking
  };

  return (
    <div className="flex flex-col items-center mt-12 space-y-10">
      {inProgress ? ( // a skill has already been selected
        <div className="flex flex-col items-center">
          <p className="text-lg pb-4"> You have already selected a skill </p>
          <Button
            variant="primaryDarkPurple"
            onPress={() => navigate("/progress-tracking")}
          >
            {" "}
            To Progress Tracking{" "}
          </Button>
        </div>
      ) : (
        // choose a skill to upskill on
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold pb-4">
            Which skill would you like to begin improving?
          </h1>
          <ul className="flex flex-row flex-wrap w-fit space-x-2 justify-center">
            {noAnswers.map((noSkill) => {
              return (
                <li key={noSkill.id} className="">
                  <Button
                    variant="secondaryDarkPurple"
                    onPress={() => onSkillPressed(noSkill.id)}
                    className="w-44"
                  >
                    {noSkill.skill}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
