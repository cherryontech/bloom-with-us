import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import imgbg from "../assets/comingsoonbg.jpeg";

export default function ComingSoon() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="static">
      <div className="relative z-50 flex flex-col top-10 w-1/2 left-1/4">
        <h1 className="text-3xl text-slate-50 mb-4"> Coming Soon</h1>
        <Button
          className=""
          onPress={handleGoBack}
          variant="secondaryDarkPurple"
        >
          {" "}
          Return to Home{" "}
        </Button>
      </div>
      <img
        src={imgbg}
        alt="dark background image"
        className="z-10 absolute top-0"
      />
    </div>
  );
}
