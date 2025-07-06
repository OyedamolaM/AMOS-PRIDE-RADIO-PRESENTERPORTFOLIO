

export default function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero video-bg">
        <video autoPlay muted loop className="bg-video">
          <source src="/video/mixkit-people-recording-a-podcast-in-a-studio-2948-hd-ready.mp4" type="video/mp4" />
        </video>
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
          <h2>About Me</h2>
          <div className="about-grid">
            <img
  src="https://media.istockphoto.com/id/2162773837/photo/podcasters-recording-in-a-studio.jpg?s=1024x1024&w=is&k=20&c=x28IxEj5g3yKmg5HCyRokT2YWL4nKinT0g_82NIR3fM="
  alt="Amos Oluwafemi Pride"
  className="profile-pic"
/>
            <p>
              I'm a seasoned radio presenter with over 8 years of experience in live broadcasting,
              audience engagement, and storytelling. I've hosted prime-time shows, interviewed
              influential personalities, and built a loyal listener base. Now, I'm ready to bring that
              same energy and charisma to the television screen.
            </p>
          </div>
        </section>

        {/* Media Section */}
        <section className="section" id="media">
          <h2>Featured Media</h2>
          <div className="media-grid">
            <div className="media-card">
              <h3>Radio Show Demo</h3>
              <audio controls>
                <source src="/audio/radio-demo.mp3" type="audio/mpeg" />
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
          <ul className="experience-list">
            <li>
              <strong>Morning Pulse - XYZ FM (2017–2024)</strong><br />
              Hosted top-rated morning drive-time show
            </li>
            <li>
              <strong>Over 200 Interviews</strong><br />
              Conversations with public figures and celebrities
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
          <p>Email: <a href="mailto:oluwafemi@example.com">oluwafemi@example.com</a></p>
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