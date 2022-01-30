import './HomeFix.css';

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
