import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#bde6fd] flex justify-center items-center p-4"
    >
      <form
        //   using getform.io to receive the message
        method="POST"
        action="https://getform.io/f/6be5f3ef-64ce-4df1-9011-3aee51ba2299"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-3xl  font-bold border-b-4 border-yellow-400 text-blue-800">
            Contact
          </p>
          <p className="text-blue-800 py-4 text-xl">
            Send me a message and lets get in contact{" "}
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#fdf1bd]"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#fdf1bd]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="my-4 p-2 bg-[#fdf1bd]"
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-[#03afff] group  border-red-500 border-double border-8 px-4 py-3 my-8 mx-auto flex items-center hover:bg-blue-800 hover:border-yellow-600 hover:text-white">
          Send me a Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
