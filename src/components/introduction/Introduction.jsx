import person from "../../assets/images/Merriam1.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "6 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "25+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "20",
  },
];

const Introduction = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["IT Specialist", "Web Instructor", "Project Manager"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText("");
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex, titles]);

  return (
    <div
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen px-4 lg:px-8 py-16"
      id="introduction"
    >
      {/* Left Content */}
      <div className="space-y-8 lg:order-1">
        <div className="space-y-4">
          <p className="text-lg text-white font-medium">I'm</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Merriam Muyco Chua
          </h1>
          <p className="text-lg lg:text-xl text-picto-primary font-medium h-8 flex items-center">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-base lg:text-lg text-[#8B5E3C] leading-relaxed max-w-lg">
            I bring a rare blend of hands-on <strong>IT expertise</strong>, proven <strong>Quality
            Assurance experience</strong>, and <strong>strong teaching/mentorship
            skills</strong>. 
          </p>
          <p className="text-base lg:text-lg text-[white] leading-relaxed max-w-lg mt-4">
            <strong>I’m adaptable, process-driven, and
            committed to delivering reliable, user-focused software while
            supporting continuous improvement.</strong>
          </p>
        </div>

        <div className="flex items-start">
          <a
            href="/Merriam-Muyco-Chua.pdf"
            download="Merriam-Muyco-Chua.pdf"
            className="bg-[#8B5E3C]/70 hover:bg-[#6C4829]/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8">
          {informationSummaryData.map((item) => (
            <div key={item.id} className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-picto-primary">
                {item.description}
              </div>
              <div className="text-sm text-picto-primary mt-1">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:order-2 relative hero-image-container">
        <div className="relative max-w-md mx-auto lg:max-w-none w-full">
          {/* Decorative background elements */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-10 -left-4 w-32 h-32 bg-orange-300 rounded-full opacity-30 blur-2xl"></div>
          
          <img
            className="relative z-10 hero-image"
            src={person}
            alt="Merriam Muyco Chua"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
