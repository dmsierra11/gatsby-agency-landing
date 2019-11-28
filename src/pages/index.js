import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import logo from '../assets/images/logo.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            WHO ARE WE?
          </h2>
          <p>
            We are an experienced group of developers that came together a few years ago in order to
            <br />
            develop amazing and innovative stuff. We are passionate about what we do, we love new challenges, and we like to work with the latest techonlogies.
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fab fa-react major style2">
              <span className="label">React</span>
            </span>
          </li>
          <li>
            <span className="icon far fa-gem major style1">
              <span className="label">Ruby</span>
            </span>
          </li>
          <li>
            <span className="icon fab fa-android major style3">
              <span className="label">Android</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            What do we offer?
          </h2>
          <p>
            We offer programming services to technological companies looking either for programming support or to develop new innovative ideas.
            <br /><br />
            We are specialized in mobile and web technologies. Our strong technologies are React Native, React JS, GraphQL and Ruby on Rails. We use agile methodologies, increasing dramatically productivity and quality in a short delivery period.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Our work
          </h2>
          <p>
            We have worked on several apps in different technologies like iOS, Android and React Native, as well as ReactJS for web. We will show you some our previous work, contact with us!.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>OUR SERVICES</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Mobile App development</h3>
            <p>
              We deliver engaging & user-oriented mobile applications with business value.
              (iOS, Android and React Native)
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Web App development</h3>
            <p>
              We engineer web solutions. Front–end & back–end development. 
              Ruby and Rails, ReactJS and Java.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Wireframing & design</h3>
            <p>
              Every solution needs a beautiful design! We create intuitive interfaces (UI design)
              and design great user experience on their journey (UX design).
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>IT CONSULTING</h3>
            <p>
              We help you steer the way to your digital transformation helping you choosing the best technology, according to the business insights.
            </p>
          </li>
        </ul>
      </div>
    </section>

    {/* <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>LET'S GET IN TOUCH</h2>
          <p>
            Let's talk, no strings attached, tell us your idea and we'll do our best to provide with the best service and support
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Contact us!
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}

    <section id="three" className="wrapper style4 special">
    <header>
          <h2>LET'S GET IN TOUCH</h2>
          <p>
            Let's talk, no strings attached, tell us your idea and we'll do our best to provide with the best service and support
          </p>
        </header>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
          </div>
          <div className="col-6 col-12-xsmall">
            <input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <div className="col-6 col-12-small">
                  <input type="checkbox" id="demo-human" name="demo-human" />
                  <label htmlFor="demo-human" class="container-check">I have read and accepted the <a class="link" href="legal-warning.html" target="_blank">legal
                      conditions and the clauses</a> of the GDPR for the transfer of personal data
                    <input class="input" id="check-form" name="check" type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  {/* <span class="error-check check-form">The field cannot be empty</span> */}
                </div>
              </li>
              <li><input type="submit" value="Send Message" className="primary" /></li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  </Layout>
);

export default IndexPage;
