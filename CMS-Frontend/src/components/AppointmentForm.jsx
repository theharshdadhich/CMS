import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";


const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uid, setUid] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          uid,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setUid(""),
        setDob(""),
        setGender(""),
        setAppointmentDate(""),
        setDepartment(""),
        setDoctorFirstName(""),
        setDoctorLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="flex items-center min-h-screen">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto my-10">
            <div className="text-center">
              <h2 className="my-3 text-4xl font-extrabold text-gray-700 dark:text-gray-800 overflow-hidden">
                Appointment
              </h2>

              <p className="text-gray-500 dark:text-gray-600">
                Get your appointment in just a few clicks.
              </p>
            </div>

            <div className="m-7">
              <form onSubmit={handleAppointment}>
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400"
                  >
                    Mobile Number
                  </label>

                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="uid"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400"
                  >
                    UID
                  </label>

                  <input
                    type="number"
                    name="uid"
                    id="uid"
                    placeholder="UID No."
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="dob"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400 overflow-visible"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400"
                  >
                    Gender
                  </label>

                  <select
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="appointmentDate"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400 overflow-visible"
                  >
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    placeholder="Appointment Date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400 overflow-visible"
                  >
                    Department
                  </label>
                  <select
                    value={department}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                      setDoctorFirstName("");
                      setDoctorLastName("");
                    }}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  >
                    {departmentsArray.map((depart, index) => {
                      return (
                        <option value={depart} key={index}>
                          {depart}
                        </option>
                      );
                    })}
                  </select>
                  <label
                    htmlFor="doctor"
                    className="block mt-2 mb-2 text-sm dark:text-gray-600 text-gray-400 overflow-visible"
                  >
                    Doctor
                  </label>
                  <select
                    value={`${doctorFirstName} ${doctorLastName}`}
                    onChange={(e) => {
                      const [firstName, lastName] = e.target.value.split(" ");
                      setDoctorFirstName(firstName);
                      setDoctorLastName(lastName);
                    }}
                    disabled={!department}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  >
                    <option value="">Select Doctor</option>
                    {doctors
                      .filter(
                        (doctor) => doctor.doctorDepartment === department
                      )
                      .map((doctor, index) => (
                        <option
                          value={`${doctor.firstName} ${doctor.lastName}`}
                          key={index}
                        >
                          {doctor.firstName} {doctor.lastName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm dark:text-gray-600 text-gray-400"
                  >
                    Address
                  </label>
                  <textarea
                    rows="10"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500"
                  />
                  <div className="mb-6 flex items-center">
                    <p className="text-sm text-gray-400 dark:text-gray-600 mb-0 mr-2">
                      Have you visited before?
                    </p>
                    <input
                      type="checkbox"
                      checked={hasVisited}
                      onChange={(e) => setHasVisited(e.target.checked)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-900 dark:ring-offset-gray-800"
                    />
                  </div>
                </div>
                <div className="mb-6">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-neutral-700 rounded text-lg"
                >
                  Get Appointment
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
