import "./../../public/css/projects.css";
import {
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import website01 from "./../assets/projects/website-01.png"
import website02 from "./../assets/projects/website-02.png"
import website03 from "./../assets/projects/website-03.png"
import website04 from "./../assets/projects/website-04.png"
import website05 from "./../assets/projects/website-05.png"
import website06 from "./../assets/projects/website-06.png"
import website07 from "./../assets/projects/website-07.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const localProjects = [
  {
    title: "SPartner",
    image: website01,
    description:
      "Business website with responsive design and WordPress integration.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    live: "https://spartner.in",
  },
  {
    title: "SPartner Adventure",
    image: website02,
    description:
      "Adventure tourism website with responsive layouts.",
    tech: ["WordPress", "CSS", "JavaScript"],
    live: "https://adventure.spartner.in",
  },
  {
    title: "SVP Sarumanai",
    image: website03,
    description:
      "Educational institution website with WordPress.",
    tech: ["WordPress", "Elementor"],
    live: "https://svpsarumanai.edu.in/",
  },
];

const abroadProjects = [
  {
    title: "Pro Medical English",
    image: website04,
    description:
      "Healthcare education platform built using WordPress.",
    tech: ["WordPress", "Elementor"],
    live: "https://promedicalenglish.com/",
  },
  {
    title: "The Leap Indonesia",
    image: website05,
    description:
      "Corporate website with custom responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "http://theleap.id/",
  },
  {
    title: "Dr Sara Cullen",
    image: website06,
    description:
      "Professional coaching website using WordPress.",
    tech: ["WordPress", "Elementor"],
    live: "https://drsaracullen.com/",
  },
  {
    title: "Nambikkai Malaysia",
    image: website07,
    description:
      "Community organization website with responsive design.",
    tech: ["WordPress", "Responsive Design"],
    live: "https://nambikkai.com.my/",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={project.image} alt={project.title} />
    </div>  

    <div className="project-content">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="visit-btn"
      >
        <FaExternalLinkAlt />
        Visit Website
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
  <div className="project-section" id="projects">
    <div className="container">

    <h3 className="project-heading">
        🇮🇳 Local Projects
    </h3>

    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        breakpoints={{
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }}
    >
        {localProjects.map((project, index) => (
            <SwiperSlide key={index}>
                <ProjectCard project={project} />
            </SwiperSlide>
        ))}
    </Swiper>
<h3 className="project-heading">
        🌍 International Projects
    </h3>

    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        breakpoints={{
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }}
    >
        {abroadProjects.map((project, index) => (
            <SwiperSlide key={index}>
                <ProjectCard project={project} />
            </SwiperSlide>
        ))}
    </Swiper>
</div>
</div>


  );
};

export default Projects;