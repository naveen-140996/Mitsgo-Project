import React from "react";
import Form from "./Form";

const Contactus = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className="contact-bg flex justify-center items-center min-h-screen">
        <div className="w-[80%] max-w-5xl text-center">
          <h2 className="text-white font-bold text-[64px] leading-[70px]">
            Get in Touch with MedFits
          </h2>
          <p className="text-white text-base md:text-lg mt-[30px]">
            We’re here to help you on your journey to health and transformation.
            Have questions, need advice, or want to join our program?{" "}
            <span className="text-[#136BD0]">Reach out to us!</span>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div>
        <Form />
      </div>

      {/* Google Map Section */}
      <div className="my-[30px]">
        <div className="w-[80%] mx-auto">
          <iframe
            title="MedFits Location"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15560.660711583685!2d80.2396377!3d13.1219839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641e5c93f88b%3A0xa4e5a2c5745c6c4f!2sPerambur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
