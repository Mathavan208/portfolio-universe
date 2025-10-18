import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
export default function App() {
  // refs
  const starCanvasRef = useRef(null);
  const techRef = useRef([]);
  const loaderRef = useRef(null);
  const containerRef = useRef(null);

  // state
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // demo data — replace these with your real data
  const profile = {
    name: "Mathavan",
    title: "Fullstack / MERN Developer",
    bio: "I build immersive fullstack web applications with a focus on seamless user experiences and robust backend solutions.",
    email: "maddymathavan209@example.com",
    location: "India",
    avatar: "/profile.jpg", // <-- replace with your image path
  };

  const techStacks = [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "javascript",
    "java",
    "sql"
  ];

  const myProjects = [
    {
      title: 'Pocket Mentor – Online Learning  Platform',
      desc: ' Developed a full-stack online learning platform Pocket Mentor, designed for delivering developer-oriented courses with seamless user and admin management.',
      href: 'https://pocketmentor-frontend.onrender.com/',
      image:'/images/projects-2.png',
      texture: '/textures/project/project1.mp4',
      logo: '/images/projects-2.png',
      logoStyle: {
        
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'tailwindcss',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'node.js',
          path: '/assets/nodejs.jpg',
        },
        {
          id: 4,
          name: 'mern',
          path: '/assets/mern.jpg',
        }
      ],
    },
    {
      title: 'Interactive 3D Portfolio Website',
      desc: 'Created an immersive 3D personal portfolio website showcasing projects and skills using Three.js, React, and Tailwind CSS.',
      href: 'https://portfolio-53dh.onrender.com/',
      image:'/images/portfolio.png',
      texture: '/textures/project/project2.mp4',
      logo: '/images/portfolio.png',
      logoStyle: {
       
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'three.js',
          path: 'assets/threejs.png',
        },
        {
          id: 3,
          name: 'tailwindcss',
          path: '/assets/tailwindcss.png',
        }
      ],
    },
    {
      title: ' NIKE SHOES BLOG WEBSITE',
      desc: 'THE BLOG WEBSITE FOR NIKE SHOES USING REACT JS AND TAILWIND CSS',
      subdesc: 'Attractive front end static website using react and tailwindcss',
      href: 'https://tailwind-project-hf43.onrender.com/',
      image:'/images/project-1.png',
      texture: '/textures/project/project3.mp4',
      logo: '/images/project-1.png',
      logoStyle: {
       
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'javascript',
          path: '/images/javascript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Coding Assessment Platform',
      desc: 'A platform for coding assessments and interviews using React JS and Tailwind CSS and firebase for backend',
      subdesc: 'User friendly website for coding assessments',
      href: 'https://coding-assessment-bqdp.onrender.com/',
      image:'/images/coding.png',
      texture: '/textures/project/project3.mp4',
      logo: '/images/coding.png',
      logoStyle: {
       
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'javascript',
          path: '/images/javascript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
         {
          id: 5,
          name: 'Firebase firestore',
          path: '/assets/firebase-logo.png',
        }
      ],
    },
    {
      title: 'React Challenges Platform',
      desc: 'A platform for frontend challenges for react and interviews using React JS and Tailwind CSS and firebase for backend',
      subdesc: 'User friendly website for frontend challenges',
      href: 'https://react-assessment-x54l.onrender.com/',
      image:'/images/coding-2.png',
      texture: '/textures/project/project3.mp4',
      logo: '/images/coding-2.png',
      logoStyle: {
       
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'javascript',
          path: '/images/javascript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
         {
          id: 5,
          name: 'Firebase firestore',
          path: '/assets/firebase-logo.png',
        }
      ],
    },
  ];

  // Helper function to calculate content-based sun size
  const calculateSunSize = (project) => {
    const titleLength = project.title.length;
    const descLength = project.desc.length;
    const tagCount = project.tags.length;
    
    // Base size calculation based on content
    const baseSize = 320;
    const sizeModifier = Math.min((titleLength + descLength + tagCount * 10) / 5, 120);
    
    return {
      mobile: Math.max(280, baseSize + sizeModifier * 0.3),
      tablet: Math.max(320, baseSize + sizeModifier * 0.5),
      desktop: Math.max(360, baseSize + sizeModifier * 0.7)
    };
  };

  // --------------------------
  // Starfield canvas (background)
  // --------------------------
  useEffect(() => {
    const canvas = starCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let stars = [];
    const STAR_COUNT = Math.floor((w * h) / 10000) + 100;

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * w,
          o: Math.random(),
        });
      }
    }

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initStars();
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        // perspective transform
        let k = 128.0 / s.z;
        let px = (s.x - w / 2) * k + w / 2;
        let py = (s.y - h / 2) * k + h / 2;
        if (px < 0 || px > w || py < 0 || py > h) {
          s.x = Math.random() * w;
          s.y = Math.random() * h;
          s.z = Math.random() * w;
        }
        s.z -= 1.5; // speed — tune this
        if (s.z <= 0) s.z = w;
        let size = (1 - s.z / w) * 3 * (s.o + 0.3);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.arc(px, py, Math.max(0.3, size), 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    initStars();
    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  // --------------------------
  // Loader (warp-through-galaxy) using GSAP
  // --------------------------
  useEffect(() => {
    const t = gsap.timeline({ paused: false });
    // small intro animation while loading
    t.to(loaderRef.current, {
      duration: 1.6,
      scale: 0.98,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // simulate asset loading
    const id = setTimeout(() => {
      setLoading(false);
      gsap.to(containerRef.current, { opacity: 1, duration: 1.2 });
    }, 1700);

    return () => {
      clearTimeout(id);
      t.kill();
    };
  }, []);

  // --------------------------
  // GSAP hover: Blackhole effect on tech stack
  // --------------------------
  useEffect(() => {
    // clear previous refs
    techRef.current = techRef.current.slice(0, techStacks.length);

    techRef.current.forEach((el) => {
      if (!el) return;
      const hoverIn = () => {
        gsap.killTweensOf(el);
        gsap.to(el, {
          duration: 0.55,
          scale: 1.28,
          filter: "brightness(1.2) saturate(1.1) drop-shadow(0 10px 30px rgba(0,0,0,0.6))",
          rotation: 6,
          transformOrigin: "50% 50%",
          ease: "power3.out",
        });
        // ripple blackhole aura
        const aura = el.querySelector(".aura");
        if (aura) {
          gsap.fromTo(
            aura,
            { opacity: 0.6, scale: 0.8 },
            { opacity: 0, scale: 2.6, duration: 0.9, ease: "power2.out" }
          );
        }
      };

      const hoverOut = () => {
        gsap.to(el, { duration: 0.6, scale: 1, rotation: 0, filter: "none", ease: "power3.out" });
      };

      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);

      // cleanup
      return () => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      };
    });
  }, [techStacks]);

  // --------------------------
  // Small helper: open project modal
  // --------------------------
  const openProject = (p) => setSelectedProject(p);
  const closeProject = () => setSelectedProject(null);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden font-sans" style={{ opacity: 0 }}>
      {/* star canvas */}
      <canvas ref={starCanvasRef} className="fixed inset-0 z-0 z0" />

      {/* subtle nebula gradient overlay */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side at 20% 10%, rgba(112, 41, 255, 0.08), transparent 8%), radial-gradient(closest-side at 80% 80%, rgba(0, 200, 255, 0.05), transparent 12%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* header / profile card */}
      <header className="relative z-20 px-4 py-8 sm:px-6 lg:px-20 xl:py-12">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 overflow-hidden rounded-full shadow-lg sm:w-20 sm:h-20 ring-2 ring-white/30">
              <img src={profile.avatar} alt="avatar" className="object-cover w-full h-full" />
            </div>
            <div className="text-center text-white sm:text-left">
              <h1 className="text-xl font-bold tracking-wide sm:text-2xl">{profile.name}</h1>
              <p className="text-xs sm:text-sm opacity-85">{profile.title} — {profile.location}</p>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-sm sm:gap-4 text-white/90">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#tech" className="hover:underline">Tech</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block px-3 py-2 text-xs text-white border rounded-md sm:px-4 bg-white/8 backdrop-blur-sm border-white/10 sm:text-sm"
            >
              Reach out
            </a>
          </nav>
        </div>
      </header>

      {/* central content */}
      <main className="relative z-20">
        {/* tagline / hero */}
        <section className="px-4 pb-16 sm:px-6 lg:px-20 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <h2 className="text-3xl font-extrabold leading-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient-to-r from-white to-purple-300">
              A aspiring Fullstack Developer crafting stellar web experiences.
            </h2>
            <p className="max-w-2xl mt-4 text-sm sm:mt-6 text-white/90 sm:text-base">{profile.bio}</p>

            <div className="flex flex-col items-center justify-center gap-3 mt-6 sm:mt-8 sm:flex-row sm:justify-start">
              <a
                href="#projects"
                className="w-full px-6 py-3 text-sm text-center text-white transition-transform rounded-full shadow-lg sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-500 hover:scale-105 sm:text-base"
              >
                Explore projects
              </a>
              <a
                href="#contact"
                className="w-full px-6 py-3 text-sm text-center transition border rounded-full sm:w-auto border-white/10 text-white/90 hover:bg-white/6 sm:text-base"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack Solar System - RESPONSIVE with proper spacing */}
        <section
          id="tech"
          className="relative flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-20 sm:py-20 lg:py-24"          
        >
          <h3 className="mb-8 text-xl font-semibold tracking-wider text-white sm:text-2xl lg:text-3xl sm:mb-12 lg:mb-16">
            Solar System of My Tech Stack
          </h3>

          <div className="relative flex items-center justify-center"
            style={{
              width: 'min(90vw, 600px)',
              height: 'min(90vw, 600px)',
              minHeight: '400px'
            }}>

            {/* ☀️ Central Sun */}
            <div
              className="absolute z-10 flex items-center justify-center text-xs font-bold text-black rounded-full sm:text-sm"
              style={{
                width: 'clamp(80px, 15vw, 128px)',
                height: 'clamp(80px, 15vw, 128px)',
                background: "radial-gradient(circle at 30% 30%, #FFD93D, #FF9F1C 70%, #FF6B00)",
                boxShadow: "0 0 40px 10px rgba(255, 165, 0, 0.6), 0 0 80px 30px rgba(255, 220, 100, 0.3)",
                textShadow: "0 0 8px rgba(0,0,0,0.5)",
              }}
            >
              TechStack ☀️
            </div>

            {/* 🪐 Orbiting Planets */}
            {techStacks.map((tech, i) => {
              // Responsive orbit calculations using clamp
              const orbitRadius = `clamp(${70 + i * 20}px, ${12 + i * 4}vw, ${140 + i * 40}px)`;
              const duration = 8 + i * 2;

              const colors = [
                "#FF6B6B", "#4ECDC4", "#FFD93D", "#6B5B95",
                "#1A535C", "#FF9F1C", "#A1C181", "#3A86FF", "#C77DFF",
              ];
              const planetColor = colors[i % colors.length];

              return (
                <div key={i}>
                  {/* Orbit ring */}
                  <div
                    className="absolute border rounded-full pointer-events-none border-white/10"
                    style={{
                      width: `calc(${orbitRadius} * 2)`,
                      height: `calc(${orbitRadius} * 2)`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />

                  {/* Orbital container */}
                  <div
                    className="absolute inset-0 animate-spin-orbit"
                    style={{
                      animationDuration: `${duration}s`,
                      transformOrigin: '50% 50%',
                    }}
                  >
                    {/* Planet positioned at orbit radius */}
                    <div
                      ref={(el) => (techRef.current[i] = el)}
                      className="absolute flex items-center justify-center text-center text-white transition-all duration-300 cursor-pointer hover:scale-110 planet-text"
                      style={{
                        width: `clamp(${Math.max(35, 60 - i * 2)}px, ${8 - i * 0.5}vw, ${Math.max(50, 80 - i * 3)}px)`,
                        height: `clamp(${Math.max(35, 60 - i * 2)}px, ${8 - i * 0.5}vw, ${Math.max(50, 80 - i * 3)}px)`,
                        fontSize: 'clamp(9px, 1.8vw, 12px)',
                        borderRadius: "50%",
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) translateX(${orbitRadius})`,
                        background: `radial-gradient(circle at 30% 30%, ${planetColor}, #000)`,
                        boxShadow: `0 0 15px ${planetColor}80, 0 0 30px ${planetColor}50`,
                      }}
                      onClick={() => {
                        console.log(`Clicked on ${tech}`);
                      }}
                    >
                      {/* Counter-rotating text to keep it readable */}
                      <span
                        className="relative z-10 px-1 font-medium animate-counter-spin"
                        style={{
                          animationDuration: `${duration}s`,
                        }}
                      >
                        {tech}
                      </span>

                      {/* Aura effect for GSAP hover */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 aura"
                        style={{
                          background: `radial-gradient(circle, ${planetColor}40, transparent 70%)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes spin-orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            @keyframes counter-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            
            .animate-spin-orbit {
              animation: spin-orbit linear infinite;
            }
            
            .animate-counter-spin {
              animation: counter-spin linear infinite;
            }
          `}</style>
        </section>

        {/* Projects Galaxy Section - CONTENT-ADAPTIVE SUNS */}
  <section
  id="projects"
  className="relative px-4 py-16 sm:px-6 lg:px-20 sm:py-20 lg:py-24"
>
  <h3 className="mb-12 text-3xl font-bold tracking-wider text-center text-white sm:text-4xl">
    🚀 Projects Galaxy
  </h3>

  <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
    {myProjects.map((project, index) => (
      <div
        key={index}
        className="group relative rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] w-full max-w-[360px] overflow-hidden"
        style={project.logoStyle}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-48 transition-all duration-500 opacity-90 group-hover:opacity-100"
        />

        <div className="relative z-10 flex flex-col gap-3 p-6 text-white">
          {/* Project Logo */}
          <div className="flex justify-center mb-3">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="object-contain p-1 border rounded-full w-14 h-14 border-white/30"
              style={project.logoStyle}
            />
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold tracking-wide text-center transition-all group-hover:text-purple-300">
            {project.title}
          </h4>

          {/* Description */}
          <p className="text-sm leading-relaxed text-center text-gray-300">
            {project.desc}
          </p>

          {/* Tags / Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {project.tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-purple-300 transition-all border rounded-full border-purple-600/40 hover:scale-105 hover:text-purple-400"
              >
                <img
                  src={tag.path}
                  alt={tag.name}
                  className="object-contain w-4 h-4"
                />
                {tag.name}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-sm font-bold text-center transition-all duration-300 border rounded-full border-purple-600/60 hover:bg-purple-700/30"
            >
              View
            </a>
            <button
              onClick={() => setSelectedProject(project)}
              className="flex-1 py-2 text-sm font-bold text-center transition-all duration-300 border rounded-full border-purple-600/60 hover:bg-purple-700/30"
            >
              Details
            </button>
          </div>
        </div>

        {/* Glow overlay */}
        <div className="absolute inset-0 transition-all duration-500 opacity-0 pointer-events-none group-hover:opacity-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 blur-3xl" />
      </div>
    ))}
  </div>
</section>



        {/* contact & footer - RESPONSIVE with proper spacing */}
        <section id="contact" className="px-4 py-16 text-white sm:px-6 lg:px-20 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <h3 className="mb-6 text-xl font-semibold sm:text-2xl lg:mb-8">Contact</h3>
            <p className="text-sm sm:text-base">Email: <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a></p>
            <p className="mt-2 text-sm sm:text-base">Location: {profile.location}</p>

            <div className="flex flex-col items-center gap-3 mt-8 sm:flex-row sm:items-start lg:mt-10">
              <a href="https://drive.google.com/file/d/1Rm7NYGo_KucI06UZW4WviCvbhEO73kt2/view?usp=drive_link" className="w-full px-4 py-2 text-sm text-center transition border rounded-md sm:w-auto text-white/90 border-white/10 hover:bg-white/10">Resume</a>
              <a href="https://linkedin.com/in/mathavan-s-01716b249" className="w-full px-4 py-2 text-sm text-center transition border rounded-md sm:w-auto text-white/90 border-white/10 hover:bg-white/10">LinkedIn</a>
              <a href="https://github.com/Mathavan208/" className="w-full px-4 py-2 text-sm text-center transition border rounded-md sm:w-auto text-white/90 border-white/10 hover:bg-white/10">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      {/* project modal - FIXED */}
      {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Overlay */}
    <motion.div
      className="absolute inset-0 bg-black/70 backdrop-blur-md"
      onClick={closeProject}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    />

    {/* Modal */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="relative z-50 w-full max-w-sm sm:max-w-2xl lg:max-w-3xl 
                 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto
                 border border-white/10 bg-gradient-to-br from-[#0b1020]/95 to-[#141a2f]/95 
                 shadow-[0_0_25px_rgba(255,255,255,0.08)]"
      style={{
        boxShadow: selectedProject.logoStyle?.boxShadow || "0 0 20px rgba(255,255,255,0.1)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <div
          className="flex items-center justify-center flex-shrink-0 text-xl font-bold text-white border rounded-full shadow-lg w-14 h-14 sm:w-20 sm:h-20 sm:text-2xl border-white/20 bg-gradient-to-br from-indigo-500 to-pink-500 shadow-indigo-700/30"
        >
          {selectedProject.title[0]}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="mb-2 text-xl font-semibold tracking-wide text-white sm:text-2xl">
            {selectedProject.title}
          </h4>
          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
            {selectedProject.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedProject.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 text-xs text-purple-300 transition-all border rounded-full border-purple-700/40 bg-purple-900/10 backdrop-blur-sm hover:scale-105 hover:text-purple-200"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeProject}
          className="absolute p-2 transition-all duration-300 rounded-full top-3 right-3 text-white/70 hover:text-white hover:bg-white/10"
        >
          ✕
        </button>
      </div>

      {/* Image */}
      {selectedProject.image && (
        <div className="mt-6 overflow-hidden border rounded-xl border-white/10">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="object-cover w-full transition-all duration-500 opacity-95 hover:opacity-100"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {selectedProject.href && (
          <a
            href={selectedProject.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-semibold text-purple-300 transition-all duration-300 border rounded-full border-purple-700/40 bg-purple-900/10 hover:bg-purple-700/30 hover:scale-105"
          >
            🌐 View Live
          </a>
        )}
        <button
          onClick={closeProject}
          className="px-5 py-2 text-sm font-semibold transition-all duration-300 border rounded-full border-white/20 text-white/80 hover:bg-white/10 hover:scale-105"
        >
          Close
        </button>
      </div>
    </motion.div>
  </div>
)}


      {/* loader overlay - RESPONSIVE */}
      {loading && (
        <div ref={loaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/90 to-transparent">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
            <div className="flex items-center justify-center w-32 h-32 overflow-hidden border rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56 border-white/10">
              {/* warp rings */}
              <div className="relative flex items-center justify-center w-full h-full">
                <div className="absolute w-[88%] h-[88%] rounded-full border border-white/6 animate-pulse" />
                <div className="absolute w-[66%] h-[66%] rounded-full border border-white/6 opacity-60 animate-spin-slow" />
                <div className="absolute w-[44%] h-[44%] rounded-full border border-white/6 opacity-80" />
                <div className="text-sm font-bold text-white sm:text-base">Warp</div>
              </div>
            </div>
            <div className="text-sm text-white/90 sm:text-base">Entering the galaxy...</div>
          </div>
          <style>{`
            @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
            .animate-spin-slow { animation: spin-slow 10s linear infinite; }
          `}</style>
        </div>
      )}

      {/* tiny accessibility helpers - RESPONSIVE */}
      <div aria-hidden className="fixed z-30 hidden text-xs bottom-4 right-4 sm:bottom-6 sm:right-6 text-white/70 sm:block">
        Tip: Click planets to view projects
      </div>

      {/* credits (small) - RESPONSIVE */}
      <footer className="fixed z-20 text-xs bottom-2 left-4 sm:bottom-4 sm:left-6 text-white/30">
        Made with ✨ React • Tailwind • GSAP
      </footer>
    </div>
  );
}