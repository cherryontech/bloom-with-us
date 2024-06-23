import { useEffect, useState } from "react";
import skilltasks from "../../data/SkillTasks/SkillTasks.json";
import TaskCard from "../../components/TaskCard";

export default function ProgressTracking() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [displayingSkillIndex, setDisplayingSkillIndex] = useState(0);

  useEffect(() => {
    const skillIds = JSON.parse(localStorage.getItem("selectedProgress")) || [];

    const tempSkill = [];

    skilltasks.forEach((item) => {
      if (skillIds.includes(item.id)) {
        tempSkill.push({ id: item.id, skill: item.skill });
      }
    });
    setSelectedSkills(tempSkill);
  }, []);

  useEffect(() => {
    console.log(selectedSkills);
    if (selectedSkills.length > 0) {
      const index = skilltasks.findIndex(
        (value) => value.id == selectedSkills[0].id
      );
      setDisplayingSkillIndex(index);
    }
  }, [selectedSkills]);

  return (
    <div>
      {selectedSkills.length > 0 ? (
        <div className="grid grid-cols-[35%_1fr] gap-x-2 p-20">
          <div className="border-solid rounded-md border-2 border-dark-purple p-4">
            <h2 className="text-start font-bold"> Skills to develop </h2>
            <ul className="text-start">
              {selectedSkills.map((item) => {
                return <p key={item.skill}> {item.skill} </p>;
              })}
            </ul>
          </div>
          <div className="border-solid rounded-md border-2 border-dark-purple p-4 grid">
            <h2 className="font-bold text-start mb-6"> List of Tasks </h2>
            <ul className="w-4/5 justify-self-center">
              {skilltasks[displayingSkillIndex].taskList.map((item) => {
                return (
                  <li key={item.id}>
                    <TaskCard
                      task={item}
                      displayingSkillIndex={displayingSkillIndex}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl"> Skill assessment not complete </h1>
      )}
    </div>
  );
}
