import './Project.css';

import ImageButton from '../Components/ImageButton'






function Projects() {
    return (
        <div className="Projects">
            <h1>Web-Dev projects</h1>
            <div className='section'>
                <ImageButton image={
                    {
                        url: 'https://i.ibb.co/nQFwB6X/Vocab-Builder.png',
                        title: 'Vocab Builder',
                        width: '100%'
                    }
                }/>
                <ImageButton image={
                    {
                        url: 'https://i.ibb.co/B4JBSBW/Screen-Shot-2021-12-29-at-1-44-51-PM.png',
                        title: 'Not That',
                        width: '100%'
                    }
                }/>
            </div>
            <h1>Game-Dev Projects</h1>
            <div className='section'>
                <ImageButton image={
                    {
                        url: 'https://i.ibb.co/ZK2JrQ6/IMG-7452.jpg',
                        title: "Billy's Adventure",
                        width: '100%'
                    }
                }/>
                <ImageButton image={
                    {
                        url: 'https://i.ibb.co/pLLdpJh/IMG-7451.jpg',
                        title: 'Quirkymals',
                        width: '100%'
                    }
                }/>
            </div>
        </div>
    );
}

export default Projects;
