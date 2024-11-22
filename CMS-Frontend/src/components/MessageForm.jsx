import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-3xl title-font font-bold mb-3 text-gray-900">
            Send Us A Message
          </h2>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto overflow-hidden">
          <form onSubmit={handleMessage} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                // className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                rows={7}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-200 dark:text-black dark:placeholder-gray-500 dark:border-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-500 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-neutral-700 rounded text-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MessageForm;
