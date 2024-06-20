/* eslint-disable react/prop-types */
import skillsAndQuestions from "../../data/CareerPathSkills/customerSuccessManagerSkills.json";

export default function QuestionsSkillAssessment({ currentSkill }) {
  //Access the skill the user is seeing
  const currentSkillDisplaying = skillsAndQuestions[currentSkill];

  return (
    <div className="pt-6 w-full">
      <div className="p-6 w-full">
        <h2 className="mb-6">
          Select yes or no based on whether you believe you exemplify this
          skill.
        </h2>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {currentSkillDisplaying.skill}
        </h2>

        <ul>
          {currentSkillDisplaying.skillValidationQuestions.map((q) => {
            return (
              <li className="text-gray-700 italic mb-6" key={q}>
                {q}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
