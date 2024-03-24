"use client";
import TaskProvider from "@/context/TaskProvider";
import Stats from "./Stats";
import Tasks from "./Tasks";
import Container from "../Common/Container";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col gap-24 md:py-12 max-w-[850px] mx-auto">
        <TaskProvider>
          <Stats />
          <Tasks />
        </TaskProvider>
      </div>
    </Container>
  );
};

export default Home;
