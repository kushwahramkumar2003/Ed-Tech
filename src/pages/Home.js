import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Components/core/HomePage/HighlightText";
import CTAButton from "../Components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";

const Home = () => {
  return (
    <div>
      {/* Section1  */}
      <div className="relative flex flex-col items-center justify-between w-11/12 mx-auto text-white max-w-maxContent">
        <Link to={"/signup"}>
          <div className="p-1 mx-auto mt-16 font-bold transition-all duration-200 rounded-full bg-richblack-800 text-richblack-200 hover:scale-95 w-fit group">
            <div className="flex flex-row items-center px-10 rounded-full gap-2 py-[5px] transition-all duration-200 group-hover:bg-richblue-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-4xl font-semibold text-center mt-7">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>
        <div className="w-[90%] text-center text-md font-bold text-richblack-300 mt-4">
          With out online coding, you can learn at your own pace, from anywhere
          in the world, and get access to a wealth of resources, including
          hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row mt-8 gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="shadow-blue-200 ">
          <video muted loop autoPlay controls>
            {/* <source src={Banner} type="video/mp4" /> */}
            <source src={Banner} type="video/webm" />
          </video>
        </div>
      </div>

      {/* Section2  */}

      {/* Section3  */}

      {/* Footer  */}
    </div>
  );
};

export default Home;
