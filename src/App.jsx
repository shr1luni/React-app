import About from "./components/About";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main>
        {/*Gradient Image */}
        <img
          className="absolute top-0 right-0
  opacity-60 -z-10"
          src="/gradient.png"
          alt="Gradient-image"
        />

        {/*Blur Effect */}
        <div
          className="h-0 w-[40rem] absolute top-[20%]
  right-[-5%] shadow-[0_0_900px_#000] -rotate-[30deg]
  -z-10"
        ></div>

        <Header />
        <Slider />
        <About/>
        <Team />
        <Contact/>
        <Footer/>
        
      </main>
    </>
  );
}
