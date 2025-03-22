import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-between items-center p-14 m-12 h-[66vh]">
        <div className="flex flex-col gap-3">
          <h1 className="text-7xl font-bold">Welcome To Medico</h1>
          <h3 className="text-5xl font-bold bg-gradient-to-l from-[#c0a795] via-[#a50202] to-[#011272] inline-block text-transparent bg-clip-text">
            Brain Stroker Checker
          </h3>
          <br />
          <div className="flex gap-4 ">
            <Link to="/about">
              <span className="p-4 bg-white text-black rounded-lg font-bold">
                Read More
              </span>
            </Link>
            <Link to="/about">
              <span className="p-4 bg-white text-black rounded-lg font-bold">
                About Us
              </span>
            </Link>
          </div>
        </div>
        <div className="relative right-0 p-2">
          <div>
            <img
              className="inset-0 z-1 rounded-xl shadow-2xl "
              src="https://media.gettyimages.com/id/1015900216/vector/stroke-illustration.jpg?b=1&s=170667a&w=0&k=20&c=7byCdpm4P6VyLWxeqURyTR-o8-V8YR7htCVrlD-3MqE="
              alt=""
            />
          </div>
          <div>
            <img
              className="absolute left-[75px] top-16 z-2 rounded-xl shadow-2xl "
              src="https://th.bing.com/th/id/OIP.2ZZXLAQ0RLlZaZnEBZC5xQHaE7?w=626&h=417&rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Number Of Cases */}
      <div>
        <h1 className="text-5xl font-bold italic text-center p-12">
          Number Of Cases
        </h1>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="text-center p-4">
        <p>
          Stroke is one of the leading causes of death and disability worldwide.
          Let's raise awareness and reduce the numbers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <Link
          className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 hover:duration-300 flex flex-col items-center"
          href="#"
        >
          <img
            src="https://www.heart.org/-/media/Images/News/2019/May-2019/0531StrokeSymptoms.jpg?sc_lang=en&hash=00A4024C89A29F058BCE327C176BC8B8"
            className="shadow rounded-lg overflow-hidden border"
            alt="#"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">Case 1</h4>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lacus enim.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
              >
                View More
              </button>
            </div>
          </div>
        </Link>
        <Link
          className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 hover:duration-300  flex flex-col items-center"
          href="#"
        >
          <img
            src="https://www.heart.org/-/media/Images/News/2019/May-2019/0531StrokeSymptoms.jpg?sc_lang=en&hash=00A4024C89A29F058BCE327C176BC8B8"
            className="shadow rounded-lg overflow-hidden border"
            alt="#"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">Case 2</h4>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lacus enim.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
              >
                View More
              </button>
            </div>
          </div>
        </Link>
        <Link
          className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 hover:duration-300 flex flex-col items-center"
          href="#"
        >
          <img
            src="https://www.heart.org/-/media/Images/News/2019/May-2019/0531StrokeSymptoms.jpg?sc_lang=en&hash=00A4024C89A29F058BCE327C176BC8B8"
            className="shadow rounded-lg overflow-hidden border"
            alt="#"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">Case 3</h4>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lacus enim.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
              >
                View More
              </button>
            </div>
          </div>
        </Link>
      </div>
      <br />
      {/* What Doctors Says */}
      <div>
        <h1 className="text-5xl font-bold italic text-center p-12">
          What Doctors Says
        </h1>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="container mx-auto py-36">
        <div class="grid lge:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-6 lge:gap-6 md:gap-16 mdsm:gap-16 sm:gap-16 lg:px-2 lge:px-2 md:px-2 mdsm:px-2 sm:px-2">
          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img
                src="https://th.bing.com/th/id/OIP.loIW-HPCd6zM7spO_-dh9wHaHa?rs=1&pid=ImgDetMain"
                class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
                alt="X"
              />{" "}
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Dr. X
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img
                src="https://th.bing.com/th/id/OIP.loIW-HPCd6zM7spO_-dh9wHaHa?rs=1&pid=ImgDetMain"
                class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
                alt="Y"
              />
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Dr. Y
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img
                src="https://th.bing.com/th/id/OIP.loIW-HPCd6zM7spO_-dh9wHaHa?rs=1&pid=ImgDetMain"
                class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
                alt="Z"
              />
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Dr. Z
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>

          <div class="group relative">
            <div class="-top-12 left-[34%] absolute">
              <img
                src="https://th.bing.com/th/id/OIP.loIW-HPCd6zM7spO_-dh9wHaHa?rs=1&pid=ImgDetMain"
                alt=" XYZ"
                class="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
              />
            </div>
            <div class="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 class=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Dr. XYZ
              </h2>
              <p class="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Every Update */}
      <div>
        <h1 className="text-5xl font-bold text-center p-12">
          Get Every Update...
        </h1>
      </div>
    </>
  );
};

export default Home;
