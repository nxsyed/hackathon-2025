// data/scheduleData.ts

/**
 * Possible types for a schedule item.
 */
export type ScheduleItemType = 'workshop' | 'coding' | 'presentation' | 'other';

/**
 * Represents a single block of schedule information.
 */
export type ScheduleItem = {
  time: string;
  title: string;
  details: string;
  /**
   * Used to determine color-coding in the schedule UI.
   * "workshop" | "coding" | "presentation" | "other"
   */
  type?: ScheduleItemType;
};

/**
 * The Saturday schedule (example).
 * You can add/remove items as needed, and update 'type'
 * to reflect the correct category for each session.
 */
export const saturdaySchedule: ScheduleItem[] = [
  {
    time: '10:00 – 10:30 AM',
    title: 'Registration & Light Breakfast',
    details: 'Check in, network, and get settled.',
    type: 'other',
  },
  {
    time: '10:30 – 10:45 AM',
    title: 'Opening Ceremony & Overview',
    details: 'Welcome by organizers, overview of hackathon rules & BIA challenge.',
    type: 'presentation',
  },
  {
    time: '10:45 – 11:45 AM',
    title: 'Millin Gabani: LLM & Software Dev Foundations',
    details: 'Intro to LLMs and key dev tools, including GMB API basics.',
    type: 'workshop',
  },
  {
    time: '11:45 AM – 1:00 PM',
    title: 'Hacking Session & Mentor Rounds',
    details: 'Form teams, brainstorm, and begin setting up your project environment.',
    type: 'coding',
  },
  {
    time: '1:00 – 2:00 PM',
    title: 'Lunch Break',
    details: 'Relax, refuel, and share ideas with other teams.',
    type: 'other',
  },
  {
    time: '2:00 – 3:00 PM',
    title: 'Sylvie Shi: Advanced LLM Techniques & Best Practices',
    details: 'Deeper dive into data cleaning, enrichment, and automation with LLMs.',
    type: 'workshop',
  },
  {
    time: '3:00 – 5:00 PM',
    title: 'Focused Hacking',
    details: 'Build and implement solutions. Mentors available for troubleshooting.',
    type: 'coding',
  },
  {
    time: '5:00 – 6:00 PM',
    title: 'Trevor Vincent: LLM Integration & Web Deployment',
    details: 'Integrate an LLM pipeline, discuss real-time updates and testing.',
    type: 'workshop',
  },
  {
    time: '6:00 PM',
    title: 'End of Day 1',
    details: 'Wrap up coding and prepare for Day 2.',
    type: 'other',
  },
];

/**
 * The Sunday schedule (example).
 * You can add/remove items as needed, and update 'type'
 * to reflect the correct category for each session.
 */
export const sundaySchedule: ScheduleItem[] = [
  {
    time: '8:30 – 9:00 AM',
    title: 'Arrival & Light Breakfast',
    details: 'Reconnect with your team and plan your day.',
    type: 'other',
  },
  {
    time: '9:00 – 10:00 AM',
    title: 'Hacking Session & Mentor Check-Ins',
    details: 'Finalize critical features, get help on blockers.',
    type: 'coding',
  },
  {
    time: '10:00 – 11:00 AM',
    title: 'Zeeshan Ahmed: Career guidance and startups',
    details: 'Tips and guidance for running a startup and navigating your career',
    type: 'workshop',
  },
  {
    time: '11:00 AM – 12:00 PM',
    title: 'Final Hacking Push',
    details: 'Apply finishing touches and prepare for demos.',
    type: 'coding',
  },
  {
    time: '12:00 PM',
    title: 'Code Freeze',
    details: 'Stop coding; get ready for presentations.',
    type: 'other',
  },
  {
    time: '12:00 – 1:00 PM',
    title: 'Project Demos & Judging',
    details: 'Teams present their solutions; judges ask questions.',
    type: 'presentation',
  },
  {
    time: '1:00 – 1:30 PM',
    title: 'Judges’ Deliberation & Lunch',
    details: 'Grab a bite while judges compare scores.',
    type: 'other',
  },
  {
    time: '1:30 – 2:00 PM',
    title: 'Awards & Closing',
    details: 'Winners announced, prizes awarded, final remarks.',
    type: 'presentation',
  },
  {
    time: '2:00 PM',
    title: 'Hackathon Concludes',
    details: 'Thank you for participating!',
    type: 'other',
  },
];
