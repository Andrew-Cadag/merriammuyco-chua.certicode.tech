import Roles from "./Roles";
import { Link } from "react-scroll";

const rolesData = [
  {
    id: 1,
    title: "Quality Assurance (QA) & Software Testing",
    description:
      "I specialize in Quality Assurance (QA) and Software Testing, with hands-on experience ensuring software products meet high standards of functionality, reliability, and user satisfaction. I take a methodical approach to identifying bugs, improving testing processes, and collaborating closely with developers to deliver clean, efficient, and dependable code.",
  },
  {
    id: 2,
    title: "Web Development (Frontend)",
    description:
      "I’m a front-end developer with a strong foundation in HTML, CSS, and JavaScript, combined with a working knowledge of basic server-side concepts. I focus on creating clean, responsive, and accessible web interfaces that deliver great user experiences across all devices and browsers. I enjoy turning design concepts into functional, interactive websites using core front-end technologies",
  },
  {
    id: 3,
    title: "Project Management & Agile Practices",
    description:
      "I bring a strong background in Project Management and Agile Practices, with a focus on delivering value-driven results, fostering team collaboration, and adapting quickly to changing priorities. I’ve led and supported projects through their full lifecycle—planning, execution, monitoring, and delivery—while aligning closely with business goals and stakeholder expectations.",
  },
  {
    id: 4,
    title: "Training & Mentorship",
    description:
      "I have a passion for sharing knowledge and empowering others. I’ve developed and delivered training programs on software testing best practices, QA methodologies, and effective bug reporting. My mentorship approach focuses on hands-on guidance, fostering a growth mindset, and building confidence in technical skills.",
  },
  {
    id: 5,
    title: "IT Support",
    description:
      "We provide end-to-end IT support services, ensuring smooth operation and maintenance of web systems. Our team is skilled in troubleshooting, system administration, and user support, helping organizations to optimize their IT infrastructure and enhance productivity.",
  },
  {
    id: 6,
    title: "Website and Application Support",
    description:
      "I provide website and application support with hands-on experience using platforms like Wix, WordPress, Flutter, and Android Studio. I’ve worked on building, maintaining, and updating both websites and mobile applications, focusing on functionality, user experience, and ongoing technical support.",
  },
];

const Profession = () => {
  return (
    <div
      className="content max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-20"
      id="services"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 lg:mb-12">
        <div className="max-md:text-center">
          <p className="section-title">What I do?</p>
          <div className="mt-4 text-[14px]">
            <p className="text-xs sm:text-lg font-normal text-gray-400">
              I help companies ship reliable products end-to-end—from systems
              design to mobile and web delivery—grounded in secure architectures,
              elegant UX, and measurable business value.
            </p>
          </div>
        </div>

        <Link
          href="#contact"
          to={"contact"}
          smooth={true}
          duration={300}
          className="mt-5 md:mt-0 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto flex-shrink-0"
          style={{ backgroundColor: "rgb(217, 160, 91)", color: "rgb(255, 248, 240)" }}
        >
          Say Hello!
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
