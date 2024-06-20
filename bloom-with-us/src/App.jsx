import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-aria-components";
import "./App.css";
import HomePage from "./Pages/Home";
import SkillAssessment from "./Pages/SkillAssessment/SkillsAssessment.jsx";
import Header from "./components/PageLayout/Header";
import AssessmentIntro from "./Pages/AssessmentIntro";
import ResultsPage from "./Pages/SkillAssessment/ResultsPage.jsx";
import UpskillSelection from "./Pages/SkillAssessment/UpskillSelection.jsx";
import ProgressTracking from "./Pages/ProgressTracking/ProgressTracking.jsx";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="skill-assessment" element={<SkillAssessment />} />
        <Route path="assessment-intro" element={<AssessmentIntro />} />
        <Route path="progress-tracking" element={<ProgressTracking />} />
        <Route path="results-page" element={<ResultsPage />} />
        <Route path="upskill-selection" element={<UpskillSelection />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;

<BrowserRouter>
  <App />
</BrowserRouter>;
