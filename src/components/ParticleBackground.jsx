import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1 
                    },
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "attract", // Mudei para focar apenas na atração forte
                                parallax: {
                                    enable: true,
                                    force: 60,
                                    smooth: 10
                                }
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            attract: { // CONFIGURAÇÃO DO ÍMÃ
                                distance: 200, // Raio de alcance do mouse
                                duration: 0.4,
                                factor: 5, // Força da atração (aumente se quiser mais agressivo)
                                speed: 2, // Velocidade que elas correm pro mouse
                                maxSpeed: 50, // Limite de velocidade pra não virar bagunça
                                easing: "ease-out-quad",
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#8b5cf6", "#a78bfa", "#ffffff", "#e5e7eb"],
                        },
                        links: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1, 
                            straight: false,
                            attract: {
                                enable: true,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 400, 
                        },
                        opacity: {
                            value: { min: 0.3, max: 0.8 },
                            animation: {
                                enable: true,
                                speed: 0.5,
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                        shape: {
                            type: ["circle", "triangle", "edge", "polygon"],
                        },
                        size: {
                            value: { min: 1, max: 3 }, // Diminuí levemente o max pra não ficar grosseiro com tanta partícula
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    }

    return <></>;
};

export default ParticleBackground;