'use client';

import type { ScheduleItem } from '@/data/scheduleData';
import type { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { saturdaySchedule, sundaySchedule } from '@/data/scheduleData';

/**
 * Returns color-coded Tailwind classes
 * based on the schedule item's "type".
 */
function getTypeClasses(type?: string): string {
  switch (type) {
    case 'workshop':
      return 'bg-blue-50 border-blue-300 text-blue-900';
    case 'coding':
      return 'bg-green-50 border-green-300 text-green-900';
    case 'presentation':
      return 'bg-yellow-50 border-yellow-300 text-yellow-900';
    default:
      // fallback or "other"
      return 'bg-white border-gray-200 text-gray-800';
  }
}

/**
 * Props for rendering a single day's schedule.
 */
type ScheduleDayProps = {
  schedule: ScheduleItem[];
};

/**
 * Renders the schedule for a single day with hover tooltips,
 * using right-justified text and color-coding.
 */
const ScheduleDay: FC<ScheduleDayProps> = ({ schedule }) => {
  return (
    <div className="mt-4 space-y-4">
      {schedule.map((item, idx) => {
        const colorClasses = getTypeClasses(item.type);

        return (
          <div
            key={idx}
            // "flex flex-col items-end" to align text to the right
            className={`flex flex-col rounded-md border p-4 ${colorClasses}`}
          >
            <div className="mb-1 text-left font-bold">{item.time}</div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-help text-left underline decoration-dotted">
                  {item.title}
                </TooltipTrigger>
                <TooltipContent>
                  {item.details}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      })}
    </div>
  );
};

/**
 * Main hackathon schedule component with a tabbed interface
 * for Saturday and Sunday.
 */
const HackathonSchedule: FC = () => {
  return (
    <section className="mx-auto max-w-xl p-4">
      <h2 className="mb-4 text-2xl font-semibold">Hackathon Schedule</h2>
      <Tabs defaultValue="sat" className="space-y-4">
        {/* Tab Buttons */}
        <TabsList>
          <TabsTrigger value="sat">Saturday</TabsTrigger>
          <TabsTrigger value="sun">Sunday</TabsTrigger>
        </TabsList>

        {/* Saturday Tab */}
        <TabsContent value="sat">
          <ScheduleDay schedule={saturdaySchedule} />
        </TabsContent>

        {/* Sunday Tab */}
        <TabsContent value="sun">
          <ScheduleDay schedule={sundaySchedule} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default HackathonSchedule;
