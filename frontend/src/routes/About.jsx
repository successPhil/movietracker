import { useState } from "react";
export default function About() {
    const [ menuOpened, setMenuOpened ] = useState(false)
    return (
        <div className="route-text">
        <div className={`about-content ${menuOpened ? 'menu-opened' : ''}`}>
      <h1>Welcome to Machbuster</h1>
      <p>Your go-to source for upcoming movie releases and more!</p>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Discover new and upcoming movie releases</li>
          <li>Search our extensive movie database</li>
          <li>Get detailed information about movies</li>
          <li>Create and manage your own watchlist</li>
        </ul>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Machbuster, we strive to provide movie enthusiasts with a seamless
          and informative experience. Whether you're looking for the latest
          blockbusters or exploring hidden gems, we've got you covered.
        </p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <p>
          Our dedicated team is passionate about movies and technology. We're
          committed to delivering a top-notch experience for our users.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Feel free to reach out with any questions, feedback, or suggestions:</p>
        <ul>
          <li>Email: info@machbuster.com</li>
          {/* Add more contact options if desired */}
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 Machbuster. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};