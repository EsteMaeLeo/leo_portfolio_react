import React from "react";
import unitedTech from "../assets/unted-tech.png";
import dashWeather from "../assets/dash-weather.png";
import foodTracker from "../assets/project1.png";
import noteTaker from "../assets/notetaker.png";
import scheduler from "../assets/scheduler.png";
import videodevs from "../assets/videodevs.png";
function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#bde6fd] text-blue-800"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl  font-bold border-b-4 border-yellow-400">
            My Projects
          </p>
          <p className="py-6">
            Check some of projects as Full-Stack Developer{" "}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* cards */}
          {/* Tech Social */}
          <div
            style={{ backgroundImage: `url(${unitedTech})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-blue-800 tracking-wider">
                Unite Tech Blog!!! Social Positive to share IT
              </span>
              grid-cols-3 gap-5">
              <div className="pt-8 text-center">
                <a href="https://cryptic-meadow-78620.herokuapp.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a href="https://github.com/EsteMaeLeo/united_tech_blog">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Weather */}
          <div
            style={{ backgroundImage: `url(${dashWeather})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-blue-800 tracking-wider">
                Weather Report by City
              </span>
              <div className="pt-8 text-center">
                <a href="https://estemaeleo.github.io/best-dashboard-clima">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a href="https://github.com/EsteMaeLeo/best-dashboard-clima">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${foodTracker})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-blue-800 tracking-wider">
                Food Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://pshertzi.github.io/Food-tracker-/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a href="https://github.com/pshertzi/Food-tracker-">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Note taker*/}
          <div
            style={{ backgroundImage: `url(${noteTaker})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-blue-800 tracking-wider">
                Note Taker
              </span>
              <div className="pt-8 text-center">
                <a href="https://polar-tundra-27406.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a href="https://github.com/EsteMaeLeo/note-taker-plus">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Scheduler*/}
          <div
            style={{ backgroundImage: `url(${scheduler})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-blue-800 tracking-wider">
                Work Day Scheduler Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://estemaeleo.github.io/ahorita-scheduler-machine">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a href="https://github.com/EsteMaeLeo/ahorita-scheduler-machine">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* VideoDevs*/}
          <div
            style={{ backgroundImage: `url(${videodevs})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-blue-800 tracking-wider">
                VideoDevs Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://evening-scrubland-24063.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a href="https://github.com/lukegranered/video-devs">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-800 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
