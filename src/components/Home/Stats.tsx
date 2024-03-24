import React from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { SiFuturelearn } from "react-icons/si";

const stats = [
  {
    id: 1,
    title: "Tasks",
    subTitle: "In Progress",
    icon: <MdOutlinePendingActions size={30} color="white" />,
    count: 17,
    advice: "Keep Doing",
    bgColorClass: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
  {
    id: 2,
    title: "Tasks",
    subTitle: "Completed",
    icon: <IoCheckmarkDoneCircle size={30} color="white" />,
    count: 23,
    advice: "Good Job",
    bgColorClass: "bg-gradient-to-r from-lime-500 to-green-500",
  },
  {
    id: 3,
    title: "Tasks",
    subTitle: "In Future",
    icon: <SiFuturelearn size={30} color="white" />,
    count: 6,
    advice: "We Waiting",
    bgColorClass: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
];

const Stats = () => {
  return (
    <div className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`rounded-lg flex-1 w-full min-w-[260px] p-4 py-6 text-gray-200 ${stat.bgColorClass}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gray-100 bg-opacity-25">
              {stat.icon}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{stat.title}</h2>
              <h2 className="text-2xl font-semibold">{stat.subTitle}</h2>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-bold">{stat.count}</h1>
            <p className="text-sm font-semibold">{stat.advice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
