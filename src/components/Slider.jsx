import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Welcome to Aakash Labs",
      subtitle: "Transform Your Digital Future",
      description: "We create cutting-edge solutions that drive innovation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      buttonText: "Get Started",
      bgColor: "from-indigo-500 to-fuchsia-500",
    },
    {
      id: 2,
      title: "Built for Tomorrow",
      subtitle: "Our innovative approach for sustainability.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
      buttonText: "Learn More",
      bgColor: "from-green-500 to-lime-500",
    },
    {
      id: 3,
      title: "Trusted Worldwide",
      subtitle: "Join us on a global journey of innovation.",
      description: "Delivering outstanding results for your business.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
      buttonText: "Join Us",
      bgColor: "from-yellow-500 to-amber-500",
    },
  ];

  // Auto-play slider effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full h-full relative bg-gradient-to-br ${slide.bgColor}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white px-8 max-w-4xl">
                <h2 className="text-sm uppercase tracking-wider mb-4 opacity-90">
                  {slide.subtitle}
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </section>
  );
};

export default Slider;
