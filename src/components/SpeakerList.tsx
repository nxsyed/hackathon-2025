import React from 'react';

type Speaker = {
  id: number;
  name: string;
  jobTitle: string;
  imageSrc: string;
  industries: string[];
  linkedinUrl?: string;
  companyUrl?: string;
};

type SpeakerListProps = {
  speakers: Speaker[];
};

export const SpeakerList: React.FC<SpeakerListProps> = ({ speakers }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {speakers.map(speaker => (
        <div
          key={speaker.id}
          className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex flex-col items-center pb-10 pt-6">
            <div className="mb-4 size-24 overflow-hidden rounded-full shadow-lg">
              <img
                className="size-full object-cover"
                src={speaker.imageSrc}
              />
            </div>
            <h5 className="mb-2 text-center text-xl font-medium text-gray-900 dark:text-white">
              {speaker.name}
            </h5>
            <span className="text-center text-sm text-gray-500 dark:text-gray-400">
              {speaker.jobTitle}
            </span>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {speaker.industries.map((industry, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                >
                  {industry}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {speaker.linkedinUrl && (
                <a
                  href={speaker.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  LinkedIn
                </a>
              )}
              {speaker.companyUrl && (
                <a
                  href={speaker.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
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
