import About from "./components/About/About";
import Archive from "./components/Archive/Archive";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Exprience from "./components/Exprience/Exprience";
import Footer from "./components/Footer/Footer";
import LeftSide from "./components/LeftSide/LeftSide";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import RightSide from "./components/RightSide/RightSide";
export default function Home() {
  return (
    <div className="w-full h-screen bg-bodyColor font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <NavBar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-24 h-full fixed left-0 bottom-0 ">
          <LeftSide />
        </div>
        <div className="h-[88vh] w-full mx-auto">
          <Banner />
          <About />
          <Exprience />
          <Projects />
          <Archive />
          <Contact />
          <Footer />
        </div>
        <div className="hidden xl:inline-flex w-24 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
