import React from 'react';
import { Link } from 'react-router-dom';
import slack from '../assets/slack.png';
import icon from '../assets/Icon.png';
import Photo from '../assets/profilepic.png';

const Home = () => (
  <div className="home_page">
    <div id="profile_img">
      <img src={Photo} alt="myBio" className="bio" />
    </div>
    <h1>Daniel Yerimah</h1>
    <div id="slack" />

    <section className="links">
      <button type="button">
        <a id="twitter" href="https://twitter.com/iamdeewyne">
          Twitter link
        </a>
      </button>

      <button type="button">
        <a id="btn__zuri" href="https://training.zuri.team/">
          Zuri team
        </a>
      </button>

      <button type="button">
        <a id="books" href="http://books.zuri.team">Designing and Coding Books</a>
      </button>

      <button type="button">
        <a id="book__python" href="https://books.zuri.team/">Python Books</a>
      </button>

      <button type="button">
        <a id="pitch" href="https://background.zuri.team">
          Background chek for Coders
        </a>
      </button>

      <button type="button">
        <a id="book__design" href="https://books.zuri.team/design-rules">Design Books</a>
      </button>

      <button type="button">
        <Link to="/contact" id="contact">Contact</Link>
      </button>

      <div className="social-links">
        <div>
          <img src={slack} alt="slack" className="foot" />
        </div>

        <div>
          <img src={icon} alt="github" className="foot" />
        </div>
      </div>
    </section>
  </div>
);

export default Home;
