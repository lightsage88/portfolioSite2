import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    const goToProjects = () => {

    }
    return (
        <div id="homeDiv">
            <h2>Greetings! My name is Adrian Rosales.</h2>
            <h4>I'm something of a renaissance man. I'm a professional opera singer, an amateur stand-up comic,
            and a web-developer</h4>
            <Link to="/projects">
            <button>Take a look at my work!</button>

            </Link>
        </div>
    )
}


export default Home;