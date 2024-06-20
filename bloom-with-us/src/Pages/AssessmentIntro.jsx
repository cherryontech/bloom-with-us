import { useEffect } from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import skillsAndQuestions from "../data/CareerPathSkills/customerSuccessManagerSkills.json";

export default function AssessmentIntro() {
  const navigate = useNavigate();

  useEffect(() => {
    const yesAnswers = JSON.parse(localStorage.getItem("yesAnswers")) || [];
    const noAnswers = JSON.parse(localStorage.getItem("noAnswers")) || [];

    const complete =
      yesAnswers.length + noAnswers.length == skillsAndQuestions.length;

    if (complete) {
      navigate("/results-page");
    } else {
      localStorage.clear();
    }
  }, [navigate]);

  function handleNextPressed() {
    console.log("Button pressed");
    navigate("/skill-assessment");
  }

  return (
    <div className="grid grid-col-1 p-20">
      <h1 className="text-5xl text-start text-dark-purple-text pb-8">
        Hi, We&apos;re Bloom with Us!
      </h1>
      <p className="text-base justify-self-center w-3/4 pb-8">
        We’re here to help you advance your career goals. Start by taking our
        skills assessment to see what skills you already possess and what skills
        we can help you improve upon.
      </p>
      <Button
        variant="secondaryDarkPurple"
        className="justify-self-center"
        onPress={handleNextPressed}
      >
        {" "}
        Start your Skill Assessment{" "}
      </Button>
    </div>
  );
}
