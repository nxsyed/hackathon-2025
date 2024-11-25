import React from "react";

interface Speaker {
  id: number;
  name: string;
  jobTitle: string;
  imageSrc: string;
  industries: string[];
  linkedinUrl?: string;
  companyUrl?: string;
}

interface SpeakerListProps {
  speakers: Speaker[];
}

export const SpeakerList: React.FC<SpeakerListProps> = ({ speakers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex flex-col items-center pt-6 pb-10">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={speaker.imageSrc}
                alt={`${speaker.name}'s photo`}
              />
            </div>
            <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white text-center">
              {speaker.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {speaker.jobTitle}
            </span>
            <div className="flex flex-wrap justify-center mt-2 gap-2">
              {speaker.industries.map((industry, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {industry}
                </span>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {speaker.linkedinUrl && (
                <a
                  href={speaker.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  LinkedIn
                </a>
              )}
              {speaker.companyUrl && (
                <a
                  href={speaker.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Company
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};