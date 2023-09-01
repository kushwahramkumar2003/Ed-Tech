import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Components/core/HomePage/HighlightText";
import CTAButton from "../Components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import elipseImage1 from "../assets/Images/Ellipse 1.png";
import elipseImage2 from "../assets/Images/Ellipse 2.png";
import elipseImage3 from "../assets/Images/Ellipse 3.png";
function Home() {
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

        <div className="relative mx-3 my-12 shadow-blue-200 -z-10s vid1">
          <div>
            <img
              src={elipseImage2}
              width={"100%"}
              className="absolute bottom-[1%] -z-10 "
              alt="elipse "
            />
            <img
              src={elipseImage1}
              width={"100%"}
              className="absolute right-[12%] top-[2%] -z-10"
              alt="elipse "
            />
          </div>
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={"Coding courses"} />
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in "
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={"grad2"}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={"Coding courses"} />
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in "
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={"grad2"}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[332px]">
          <div className="flex flex-col items-center w-11/12 gap-5 mx-auto max-w-maxContent">
            <div className="h-[250px]"></div>
            <div className="flex flex-row text-white gap-7">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>*
          /6+
        </div>
      </div>

      {/* Section 3*/}

      {/* Footer  */}
    </div>
  );
}

export default Home;
