import { useNavigate } from "react-router-dom";
import bloomWithUsLogo from "../../assets/bloomwithus.svg";
import { Button } from "../button";
import { IconButton } from "../iconbutton";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav
      className="bg-light-purple h-20 shadow shadow-gray-300 px-8 md:px-auto flex items-center static"
      style={{
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
    >
      <IconButton
        aria-label="Home link"
        size="nav-icon"
        onPress={() => navigate("/")}
        className="absolute md:order-1 cursor-pointer top-10"
      >
        <img
          src={bloomWithUsLogo}
          className="size-60"
          alt="Image of the Bloom with Us logo. The logo includes a blossomed flower with the words Bloom with Us and Slogan Text beneath it."
        />
      </IconButton>

      <div className="md:h-16 h-28 mx-auto container flex items-center justify-end flex-wrap md:flex-nowrap">
        <div className="text-black order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-white cursor-pointer">
              <Button size="nav-md" onPress={() => navigate("/about-us")}>
                {" "}
                About Us{" "}
              </Button>
            </li>
            <li className="md:px-4 md:py-2 hover:text-white cursor-pointer">
              <Button
                size="nav-md"
                onPress={() => navigate("/assessment-intro")}
              >
                {" "}
                Skills Assessment Tools{" "}
              </Button>
            </li>
            <li className="md:px-4 md:py-2 hover:text-white cursor-pointer">
              <Button
                size="nav-md"
                onPress={() => navigate("/progress-tracking")}
              >
                {" "}
                Progress Tracking{" "}
              </Button>
            </li>
            <li className="md:px-4 md:py-2 hover:text-white cursor-pointer">
              <Button size="nav-md" onPress={() => navigate("/resources")}>
                {" "}
                Resources{" "}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
