'use client';

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { motion, AnimatePresence } from 'framer-motion';

const VALUES_DATA = [
  { 
    letter: 'S', 
    title: 'Standards', 
    desc: 'We set and uphold the global benchmark for safeguarding in the Indian context.',
    color: '#004AAD', // SafeSport Blue
    detail: 'Implementing rigorous protocols that protect athletes and organizations while fostering a culture of excellence.'
  },
  { 
    letter: 'A', 
    title: 'Accountability', 
    desc: 'Transparency and ethical action at every level of the sporting ecosystem.',
    color: '#800020', // Brand Maroon
    detail: 'Ensuring clear reporting lines and independent oversight to build trust and integrity within institutions.'
  },
  { 
    letter: 'F', 
    title: 'Fairness', 
    desc: 'Equal protection and respect for every athlete, regardless of background.',
    color: '#7CA57A', // Brand Green
    detail: 'Creating inclusive environments where dignity is non-negotiable and every voice is heard.'
  },
  { 
    letter: 'E', 
    title: 'Empowerment', 
    desc: 'Turning awareness into the confidence and courage to act.',
    color: '#FFBD59', // Brand Yellow
    textColor: '#1A1A1A',
    detail: 'Educating and enabling stakeholders to champion safeguarding as a pillar of performance.'
  },
];

export default function Values() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine>();
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio,
      }
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Thick Walls
    const wallOptions = { 
      isStatic: true, 
      render: { fillStyle: 'transparent' } 
    };
    const walls = [
      Bodies.rectangle(width / 2, -50, width, 100, wallOptions), // Top
      Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions), // Bottom
      Bodies.rectangle(-50, height / 2, 100, height, wallOptions), // Left
      Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions), // Right
    ];
    Composite.add(world, walls);

    // Large S.A.F.E. Spheres
    const shapes = VALUES_DATA.map((val, i) => {
      const x = (width / 5) * (i + 1);
      const y = height / 2;
      const size = Math.min(width, height) * 0.15;
      
      return Bodies.circle(x, y, size, {
        restitution: 0.8,
        friction: 0.05,
        frictionAir: 0.02,
        density: 0.05,
        render: {
          fillStyle: val.color,
          strokeStyle: 'rgba(255,255,255,0.2)',
          lineWidth: 4,
        },
        label: val.letter,
        plugin: { id: i }
      });
    });

    Composite.add(world, shapes);

    // Interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        damping: 0.1,
        render: { visible: false }
      }
    });

    // Handle Scroll through the canvas
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

    Composite.add(world, mouseConstraint);

    // Click Detection
    Events.on(mouseConstraint, 'mousedown', (event) => {
      const body = event.source.body;
      if (body) {
        const valueIndex = VALUES_DATA.findIndex(v => v.letter === body.label);
        if (valueIndex !== -1) setActiveValue(valueIndex);
      }
    });

    // Custom Text Rendering (League Gothic)
    const context = render.context;
    Events.on(render, 'afterRender', () => {
      shapes.forEach((body) => {
        const { x, y } = body.position;
        const fontSize = body.circleRadius! * 0.9;
        const value = VALUES_DATA.find(v => v.letter === body.label);
        
        context.font = `900 ${fontSize}px "var(--font-league-gothic)", sans-serif`;
        context.fillStyle = value?.textColor || "white";
        context.textAlign = "center";
        context.textBaseline = "middle";
        
        context.save();
        context.translate(x, y);
        context.rotate(body.angle);
        context.fillText(body.label, 0, 0);
        context.restore();
      });
    });

    // Resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;
      Matter.Body.setPosition(walls[1], { x: newWidth / 2, y: newHeight + 50 });
      Matter.Body.setPosition(walls[3], { x: newWidth + 50, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <section id="standards" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content - 5 Cols */}
          <div className="lg:col-span-5 relative z-10">
            <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-8 text-xs md:text-sm">
              Our Core Values
            </h3>
            <h2 className="text-6xl md:text-8xl font-league text-[#1A1A1A] uppercase leading-[0.8] mb-12 tracking-tight">
              THE S.A.F.E. <br /> FRAMEWORK
            </h2>
            
            <div className="space-y-4">
              {VALUES_DATA.map((val, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveValue(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border ${
                    activeValue === idx 
                    ? 'bg-[#F5F7FA] border-[#004AAD]/20 shadow-xl translate-x-4' 
                    : 'bg-white border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-league text-2xl text-white shrink-0 shadow-lg"
                      style={{ backgroundColor: val.color, color: val.textColor || 'white' }}
                    >
                      {val.letter}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#1A1A1A]">{val.title}</h4>
                      <p className="text-gray-500 text-sm line-clamp-1">{val.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Gamified Canvas - 7 Cols */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[700px] w-full">
            <div className="absolute inset-0 bg-[#F5F7FA] rounded-[3rem] shadow-inner overflow-hidden border border-gray-100">
              <div ref={sceneRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
              
              <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Interact with the elements to explore
                </p>
              </div>

              {/* Dynamic Detail Overlay */}
              <AnimatePresence>
                {activeValue !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-8 right-8 left-8 md:left-auto md:w-80 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/50 z-20"
                  >
                    <button 
                      onClick={() => setActiveValue(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-[#1A1A1A]"
                    >
                      ✕
                    </button>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-league text-xl text-white mb-6"
                      style={{ backgroundColor: VALUES_DATA[activeValue].color, color: VALUES_DATA[activeValue].textColor || 'white' }}
                    >
                      {VALUES_DATA[activeValue].letter}
                    </div>
                    <h5 className="font-bold text-2xl text-[#1A1A1A] mb-4">
                      {VALUES_DATA[activeValue].title}
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {VALUES_DATA[activeValue].detail}
                    </p>
                    <div className="w-12 h-1 bg-[#004AAD]/10 rounded-full"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#004AAD]/5 blur-[120px] rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
