import { Button } from "../components/button";
import { IconButton } from "../components/iconbutton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSKilAssessment = () => {
    navigate("/assessment-intro");
  };

  return (
    <div className="bg-white">
      <div className="px-6 lg:px-8">
        <div className="mx-auto flex justify-center">
          <div className="mt-6 text-center w-2/3">
            <h1 className="text-3xl text-black">
              Overcome Imposter Syndrome & watch yourself Bloom
            </h1>
            <p className="text-lg mt-6">
              Imposter syndrome is like a cage that traps your potential; it
              convices you that you don&apos;t deserve your achievements, and as
              a result you shy away from new challenges and opportunities for
              growth.
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <div className="bg-white p-6 rounded-lg w-1/4">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  <IconButton variant="purple" onPress={handleSKilAssessment}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </IconButton>
                </h2>
                <Button
                  className="text-gray-700"
                  variant="link"
                  onPress={handleSKilAssessment}
                >
                  Take a Skill Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
