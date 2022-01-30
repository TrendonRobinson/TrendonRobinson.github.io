import './HomeFix.css';

import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Particles from "react-tsparticles";

function Home() {

    let location = useLocation();

    useEffect(() => {
        // let Home = document.getElementById('HomeLink').parentElement
        // Home.classList.add("active"); test
    }, [])

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <div className="Home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: true,
                        mode: "push",
                        },
                        onHover: {
                        enable: true,
                        mode: "attract",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        },
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 200,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                    },
                    detectRetina: true,
                }}
                />
            <div className="grid">
                <div id='title' className='title'>
                    <div className='name'>
                        <h1>
                            Trendon
                        </h1>
                        <h1>
                            Robinson
                        </h1>
                    </div>
                    <div className='name-logo'>
                        <h1>
                            {'<T/R>'}
                        </h1>
                    </div>
                </div>
                <div className='Items'>
                    <div id="item1" className='column'>
                        <div className='skill-desc'>
                            <h5>
                                About
                            </h5>
                            <p>
                                Jr Web Developer 2018 <br/>
                                Graphic Designer 2018 <br/>
                                Game Developer 2012 <br/>
                            </p>
                        </div>
                    </div>
                    <div id="item2" className='column'>
                        <div className='skill-desc'>
                            <h5>
                                Contact
                            </h5>
                            <p>
                                Trendonrobinson@gmail.com <br/>
                                +1 (470) 304 7418
                            </p>
                        </div>
                    </div>
                    <div id="item3" className='column'>
                        <div className='skill-desc'>
                            <h5>
                                Information
                            </h5>
                            <p>
                                https://gist.github.com/TrendonRobinson <br/>
                                https://twitter.com/TPr0fessor/media <br/>
                                https://devforum.roblox.com/t/thepr0fessors-portforlio <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
