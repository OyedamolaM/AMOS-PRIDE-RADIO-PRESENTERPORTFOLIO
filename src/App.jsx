

export default function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero hero-bg">
          <img className="bg-hero-image" alt="Hero background" src="/images/hero-bg-desktop.png"/>
        <div className="overlay">
          <h1 className="hero-title">Hi, I'm Oluwafemi Pride Amos</h1>
          <p className="hero-subtitle">Radio Voice, TV-Ready Presence</p>
          <div className="hero-buttons">
            <a href="#media" className="btn">🎧 Listen</a>
            <a href="#media" className="btn secondary">🎥 Watch Reel</a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* About Section */}
        <section className="section" id="about">
          <h2>About Amos</h2>
          <div className="about-grid">
            <img
  src="/images/profile-picture.png"
  alt="Amos Oluwafemi Pride"
  className="profile-pic"
/>
            <p>
              Amos is a seasoned radio presenter with over 8 years of experience in live broadcasting,
              audience engagement, and storytelling. Amos has hosted prime-time shows, interviewed
              influential personalities, and built a loyal listener base. Now, He is ready to bring that
              same energy and charisma to the television screen.
            </p>
          </div>
        </section>

        {/* Media Section */}
        <section className="section" id="media">
          <h2>Featured Media</h2>
          <div className="media-grid">
            <div className="media-card">
              <h3 className="radio-demo">Radio Show Demo</h3>
              <audio controls>
                <source src="/audio/afternoon-cruise.mp3" type="audio/mpeg" />
              </audio>
              <audio controls>
                <source src="/audio/friday-cruise.mp3" type="audio/mpeg" />
              </audio>
              <audio controls>
                <source src="/audio/rot-2.mp3" type="audio/mpeg" />
              </audio>
              <audio controls>
                <source src="/audio/rto-1.mp3" type="audio/mpeg" />
              </audio><audio controls>
                <source src="/audio/rto-3.mp3" type="audio/mpeg" />
              </audio>
            </div>
            <div className="media-card">
              <h3>TV-Ready Video Intro</h3>
              <video controls>
                <source src="/video/mixkit-people-recording-a-podcast-in-a-studio-2948-hd-ready.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <h2>Experience</h2>
          <h3>Empire FM (2017–2024)</h3>
          <ul className="experience-list">
            <li>
              <strong>Morning Pulse</strong><br />
              Hosted top-rated morning drive-time show <br />
            </li>
            <li>
              <strong>Over 200 Interviews</strong><br />
              Conversations with public figures and celebrities <br />
            </li>
            <li>
              <strong>Voiceover Artist</strong><br />
              Commercials, podcasts, and documentaries
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>Phone/Whatsapp: <strong>+2348034961284</strong></p>
          <p>Email: <a href="mailto:pride1554@gmail.com">pride1554@gmail.com</a></p>
          <p>Instagram: <a href="https://instagram.com/oluwafemivoice" target="_blank">@oluwafemivoice</a></p>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Oluwafemi Pride Amos. All rights reserved.</p>
      </footer>
    </div>
  );
}