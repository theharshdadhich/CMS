/* eslint-disable react/no-unescaped-entities */
import React from "react";

// eslint-disable-next-line react/prop-types
const Biography = ({ imageUrl }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 overflow-hidden">
            Biography
          </h1>
          <p className="mb-8 leading-relaxed">
            Dr. Akshara Dadhich always dreamt of creating a space where patients
            could receive personalized and compassionate medical care. After
            years of dedicated service in various hospitals and clinics, she
            realized the need for a community-centered health facility that
            emphasizes holistic wellness. Driven by her passion and vision, Dr.
            Dadhich established Dadhich Care Center in 2024, aiming to bridge the
            gap between conventional and integrative medicine.
          </p>
          <p className="mb-8 leading-relaxed">
            The clinic quickly became known for its patient-centric approach,
            where the focus is on treating the whole person rather than just the
            symptoms. Dr. Dadhich's unwavering commitment to excellence, combined
            with a team of skilled healthcare professionals, has made Akshara
            Health Hub a trusted name in the community. Today, the clinic
            continues to thrive, upholding its mission to provide exceptional
            care and improve the overall well-being of its patients.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg bounce-animation"
            alt="whoweare"
            src={imageUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Biography;
