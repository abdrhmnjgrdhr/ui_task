
import Hero from "./components/Hero";
import Rightpart from "./components/Rightpart";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
  <>
  <div className="flex flex-row">
  <Sidebar/>
  <Hero/>
  <Rightpart/>

  </div>
  </>
  );
}
