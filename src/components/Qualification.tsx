import { useState } from "react";
import { SlBriefcase, SlGraduation } from "react-icons/sl";
import Education from "./Education";
import Work from "./Work";

const Qualification = () => {
  const [experience, setExperience] = useState(true);

  return (
    <div className="mt-28 text-center">
      <h1 className="text-[32px] font-bold mb-5">Qualifications</h1>
      <div className="gap-4 flex justify-center text-[21px] font-light mb-4">
        <button
          onClick={() => setExperience(true)}
          className="mb-5 hover:text-blue-500 active:underline flex items-center gap-3"
        >
          <SlGraduation /> Education
        </button>
        |
        <button
          onClick={() => setExperience(false)}
          className="mb-5 hover:text-blue-500 active:underline flex items-center gap-3"
        >
          <SlBriefcase /> Work Experience
        </button>
      </div>
      {experience ? <Education /> : <Work />}
    </div>
  );
};

export default Qualification;
