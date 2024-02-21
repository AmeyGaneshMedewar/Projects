import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to our book discovery app, where adventure awaits on every page. Explore a diverse collection of books across genres and topics, curated just for you. Whether you're searching for gripping thrillers, heartwarming romances, or thought-provoking non-fiction, our app has something for everyone. Dive in today and discover your next favorite read!

But that's not all! With our app, you can also:
- **Search on Amazon:** Find your desired book on Amazon with just a click and add it to your cart.
- **Search on Google:** Dive deeper into topics related to your search by searching on Google for more information.
- **Search on Wikipedia:** Explore comprehensive articles and resources on Wikipedia to enhance your understanding.
- **Search on YouTube:** Watch videos related to your book search on YouTube and broaden your horizons.
- **Search for PowerPoint Presentations:** Find presentations and slideshows related to your book topic for additional insights and knowledge.

Embark on a journey of discovery with our app and uncover a world of knowledge and inspiration!</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
