import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Tanisha. I'm a B.Tech Undergraduate with project-experience in Django, Flask, PostgreSql, AWS and React.</p>

            <p>I have strong fundamentals in computer science subjects: data structures and algorithms, database management systems and object oriented paradigm. I develop in python, and have knowledge of Core Java SE (for programming).</p>

            <p>I'm constantly learning new things. urrently those things include gaining more experience with my current Tech Stack.</p>

            <p>PS: Actively Looking for Internship.</p>
            <p>Contact Me: <a href="https://www.linkedin.com/in/tanisha-jain-1a662616b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;