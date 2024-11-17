"use client"
import React, { useState } from "react";

export const FAQ = () => {
  const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div id="accordion-collapse">
      {/* Section 1 */}
      <div>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleSection(1)}
            aria-expanded={activeSection === 1}
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is a hackathon?</span>
            <svg
              className={`w-3 h-3 transform ${activeSection === 1 ? "rotate-180" : ""
                }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeSection === 1 && (
          <div
            id="accordion-collapse-body-1"
            className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              A hackathon is an event where students can collaborate, network with one another, and form teams to come up with the most unique projects together in programming. The team with the best and most intuitive program will win!
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Hackathons are a great way to gain experience for teamwork and put in a collective effort together. You could use your lessons from this event to help you better understand the world of programming and benefit you for advanced problem solving skills.
            </p>
          </div>
        )}
      </div>

      {/* Section 2 */}
      <div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleSection(2)}
            aria-expanded={activeSection === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a fee to participate?</span>
            <svg
              className={`w-3 h-3 transform ${activeSection === 2 ? "rotate-180" : ""
                }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeSection === 2 && (
          <div
            id="accordion-collapse-body-2"
            className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Only fee required is your passion for coding and teamwork! (corny)
            </p>
          </div>
        )}
      </div>

      {/* Section 3 */}
      <div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleSection(3)}
            aria-expanded={activeSection === 3}
            aria-controls="accordion-collapse-body-3"
          >
            <span>What is the goal for the hackathon?</span>
            <svg
              className={`w-3 h-3 transform ${activeSection === 3 ? "rotate-180" : ""
                }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeSection === 3 && (
          <div
            id="accordion-collapse-body-3"
            className="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our goal in this hackathon is to bring engagement to the community of the computer science field/industry. Hackathons are a great way to meet new people and collaborate with others who might have similar ideas to you.
            </p>
          </div>
        )}
      </div>

      {/* Section 4 */}
      <div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleSection(3)}
            aria-expanded={activeSection === 4}
            aria-controls="accordion-collapse-body-3"
          >
            <span>Can I register as an Individual or as a team?</span>
            <svg
              className={`w-3 h-3 transform ${activeSection === 3 ? "rotate-180" : ""
                }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {activeSection === 3 && (
          <div
            id="accordion-collapse-body-3"
            className="p-5 border border-t-0 border-gray-200 dark:border-gray-700"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              That’s totally up to you! You can either participate by yourself or you can team up with maximum four people.
              Either bring your own team or feel free to form your own with new people at the event.
            </p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <a href="https://chivalrous-period-295.notion.site/141c80fa0d47809f8f19ff1e30087235?pvs=105" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"             
              >
                Register
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
