import { useNavigate } from "react-router-dom";
import bloomWithUsLogo from "../../assets/bloomwithus.svg";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav
      className="bg-blue-400 h-28 shadow shadow-gray-300 w-100 px-8 md:px-auto"
      style={{
        borderBottom: "24px solid #FFCF72",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
    >
      <div className="md:h-16 h-28 mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div
          className="text-black md:order-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={bloomWithUsLogo}
            className="h-28 w-28 mt-6"
            alt="Image of the Bloom with Us logo. The logo includes a blossomed flower with the words Bloom with Us and Slogan Text beneath it."
          />
        </div>
        <div className="text-black order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 text-black"></li>
            <li
              className="text-sm md:px-4 md:py-2 hover:text-white cursor-pointer"
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>
            <li
              className="text-sm md:px-4 md:py-2 hover:text-white cursor-pointer"
              onClick={() => navigate("/assessment-intro")}
            >
              Skills Assessment
            </li>
            <li
              className="text-sm md:px-4 md:py-2 hover:text-white cursor-pointer"
              onClick={() => navigate("/goal-progress-tracking")}
            >
              Goal/Progress Tracking
            </li>
            <li
              className="text-sm md:px-4 md:py-2 hover:text-white cursor-pointer"
              onClick={() => navigate("/resources")}
            >
              Resources
            </li>
            <li
              className="text-sm md:px-4 md:py-2 hover:text-white cursor-pointer"
              onClick={() => navigate("/resources")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
