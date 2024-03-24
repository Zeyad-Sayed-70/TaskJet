import SideBar from "@/components/Common/Sidebar";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <main className="flex gap-2 md:gap-6 flex-col md:flex-row">
      <section className="w-full md:w-[250px]">
        <SideBar />
      </section>
      <section className="flex-1 h-[100vh] overflow-auto">
        <Home />
      </section>
    </main>
  );
}
