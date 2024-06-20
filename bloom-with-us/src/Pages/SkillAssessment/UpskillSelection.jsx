import { useEffect, useState } from "react";
import { Button } from "../../components/button";

export default function UpskillSelection() {
  //arrays that will hold responses
  const [noAnswers, setNoAnswers] = useState([]);

  //gets responses from local storage and assigns them into the constants
  useEffect(() => {
    const noAnswers = JSON.parse(localStorage.getItem("noAnswers")) || [];
    console.log(noAnswers);
    setNoAnswers(noAnswers);
  }, []);

  const onSkillPressed = (noSkillId) => {
    const upskillList = [];
    upskillList.push(noSkillId);

    localStorage.setItem("selectedProgress", JSON.stringify(upskillList));
  };

  return (
    <div className="flex flex-col items-center mt-12 space-y-10">
      <h1 className="font-bold">
        {" "}
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
  );
}
