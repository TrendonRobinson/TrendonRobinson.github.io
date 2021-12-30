import './Home.css';

import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

function Home() {

    let location = useLocation();

    useEffect(() => {
        // let Home = document.getElementById('HomeLink').parentElement
        // Home.classList.add("active");
    }, [])

    return (
        <div className="Home">
            <div className="grid">
                <div id="item1" className='column'>
                    <h1>
                        Trendon
                    </h1>
                    <h1>
                        Robinson
                    </h1>

                    <div className='skill-desc'>
                        <button>
                            Web Developer
                        </button>
                        <p>
                            A strong front-end developer with the
                            experience to develop a quality full stack application.
                        </p>
                    </div>
                </div>
                <div id="item2" className='column'>
                    <div className='skill-desc'>
                        <button>
                            Graphic Designer
                        </button>
                        <p>
                            Over the course of 5 years.
                            I've designed game ui, graphics for colleges, and websites for personal and team projects.
                        </p>
                    </div>
                </div>
                <div id="item3" className='column'>
                    <h1>
                        {'<T/R>'}
                    </h1>
                    <div className='skill-desc'>
                        <button>
                            Game Developer
                        </button>
                        <p>
                            I am offering my services as a scripter. With 9 years to back my skill, I specialize in front-end programming.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
