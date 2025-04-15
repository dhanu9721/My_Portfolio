import React from 'react';
import './About.css';

const About = () => {

  return (
    <section className="who-am-i">
      <h3 className='n'>About Us<hr/></h3>
      <div className="who-am-i-content">
        <div className="text-section">
          <h2>Who I am?</h2>
          <p>
            My name is Dhananjay Maurya. I am a professional and enthusiastic programmer
            in my daily life. I am a quick learner with a self-learning attitude.
            I love to learn and explore new technologies and am passionate about 
            problem-solving. I love almost all the stacks of web application development 
            and love to make the web more open to the world. My core skill is based on 
            JavaScript and I love to do most of the things using JavaScript. I am available 
            for any kind of job opportunity that suits my skills and interests.
          </p>
        </div>
        <div className="image-section">
        <img src={`${process.env.PUBLIC_URL}/images/profileImage.jpeg`} alt="description" />

        </div>
      </div>

    
    </section>
  );
};

export default About;

