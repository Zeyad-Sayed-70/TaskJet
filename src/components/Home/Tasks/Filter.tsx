import { useTasks } from "@/context/TaskProvider";
import React, { useEffect, useMemo, useState } from "react";

const Filter = () => {
  const { tasks, filteredTasks, setFilteredTasks } = useTasks();
  const [selectedTag, setSelectedTag] = useState<string>("");

  const tags = useMemo(() => {
    const uniqueTags = new Set();
    const allTags = tasks
      ?.map((task) => task.tags)
      .flat(1)
      .sort();
    const filteredTags = allTags?.filter((tag) => {
      const isUnique = !uniqueTags.has(tag);
      uniqueTags.add(tag);
      return isUnique;
    });
    return filteredTags;
  }, [tasks]);

  useEffect(() => {
    if (!tasks) return;
    const newFilteredTasks = tasks.filter((task) =>
      task.tags.includes(selectedTag)
    );
    setFilteredTasks(newFilteredTasks);
  }, [selectedTag, tasks]);

  return (
    <div className="flex items-center flex-wrap gap-1 p-2 bg-gray-100 rounded-md">
      <h2 className="font-semibold mr-2">Tags:</h2>
      {tags?.map((tag, ind) => (
        <Chip
          key={ind}
          value={tag}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      ))}
    </div>
  );
};

function Chip({
  value,
  selectedTag,
  setSelectedTag,
}: {
  value: any;
  selectedTag: string;
  setSelectedTag: (selectedTag: string) => void;
}) {
  return (
    <span
      onClick={() => {
        if (selectedTag === value) setSelectedTag("");
        else setSelectedTag(value);
      }}
      className={`rounded-lg p-1 px-2 bg-opacity-80  text-secondary text-sm hover:bg-opacity-100 cursor-pointer transition-all select-none ${
        selectedTag === value ? "bg-purple-950" : "bg-purple-800"
      }`}
    >
      {value}
    </span>
  );
}

export default Filter;
