import React from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({ title, imageUrl }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="max-w-7xl mx-auto flex px-5 pt-[120px] md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-10 sm:text-6xl text-5xl items-center font-extrabold font-PlusJakarta xl:w-2/2 text-gray-900 overflow-hidden">
            {title}
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-xl">
            Welcome to Dadhich Care Center, where compassionate care meets medical
            excellence. Founded by <b>Dr. Akshara Dadhich</b>, our clinic is dedicated to
            providing comprehensive health services tailored to meet the unique
            needs of each patient. With a commitment to holistic wellness, our
            experienced team ensures that you receive the highest quality care
            in a warm and welcoming environment. At Dadhich Care Center, we
            believe in treating the whole person, not just the symptoms. Join us
            on a journey to better health and well-being, where your health is
            our top priority.
          </p>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 md:pl-10 flex justify-center">
          <img
            className="w-80 md:ml-1 ml-24 rounded-lg bounce-animation"
            alt="hero"
            src={imageUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
