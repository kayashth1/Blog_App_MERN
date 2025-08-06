import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col items-center md:flex-row justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Greetings! I'm Yash Shrivastava from Kanpur, Uttar Pradesh.
            Currently, I am in my final year of B.Tech at the esteemed IIT (ISM)
            Dhanbad. I indulge in music and social services. I am a driven,
            creative, and passionate individual dedicated to making a positive
            impact through technology. Additionally, I love solving problems,
            both in software and in social contexts, and strive to contribute
            meaningfully wherever I can.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links?.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline transition">
                      {item}
                    </a>
                  </li>
                ))}
                {section.socialLinks?.map(({ name, link }) => (
                  <li key={name}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline transition"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © Kitaab-Yash Shrivastava - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
