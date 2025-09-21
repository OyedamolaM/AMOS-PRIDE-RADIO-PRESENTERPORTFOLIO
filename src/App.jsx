import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // === BACKGROUND AUDIO ===
    const bgAudio = new Audio("/audio/friday-cruise"); // change file as needed
    bgAudio.loop = true;
    bgAudio.volume = 0.5;

    const startBgAudio = () => {
      bgAudio.play().catch((err) => console.log("Autoplay blocked:", err));
      document.removeEventListener("click", startBgAudio);
      document.removeEventListener("keydown", startBgAudio);
      document.removeEventListener("touchstart", startBgAudio);
    };

    document.addEventListener("click", startBgAudio);
    document.addEventListener("keydown", startBgAudio);
    document.addEventListener("touchstart", startBgAudio);

    // === SNIPPET AUDIO CONTROL ===
    const audios = document.querySelectorAll("audio");

    audios.forEach((audio) => {
      audio.addEventListener("play", () => {
        // pause background audio if playing
        if (!bgAudio.paused) bgAudio.pause();

        // pause other <audio> snippets
        audios.forEach((otherAudio) => {
          if (otherAudio !== audio) {
            otherAudio.pause();
          }
        });
      });
    });

    // cleanup
    return () => {
      audios.forEach((audio) => {
        audio.replaceWith(audio.cloneNode(true));
      });
      document.removeEventListener("click", startBgAudio);
      document.removeEventListener("keydown", startBgAudio);
      document.removeEventListener("touchstart", startBgAudio);
      bgAudio.pause();
      bgAudio.src = "";
    };
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero hero-bg">
        <img
          className="bg-hero-image"
          alt="Hero background"
          src="/images/hero-bg-desktop.png"
        />
        <div className="overlay">
          <h1 className="hero-title">Hi, I'm Oluwafemi Pride Amos</h1>
          <p className="hero-subtitle">Radio Voice, TV-Ready Presence</p>
          <div className="hero-buttons">
            <a href="#media" className="btn">
              🎧 Listen
            </a>
            <a href="#media" className="btn secondary">
              🎥 Watch Reel
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* About Section */}
        <section className="section" id="about">
          <h2>About Oluwafemi Amos Pride</h2>
          <div className="about-grid">
            <img
              src="/images/profile-picture.png"
              alt="Amos Oluwafemi Pride"
              className="profile-pic"
            />
            <p>
              Amos is a well known seasoned radio presenter in Akure, with over 8 years of experience
              in live broadcasting, audience engagement, and storytelling. <br />
              Amos has hosted prime-time shows, interviewed influential
              personalities, and built a loyal listener base.
              <br />
              Now, He is ready to bring that same energy and charisma to the
              television screen.
            </p>
          </div>
        </section>

        {/* Media Section */}
        <section className="section" id="media">
          <h2>Featured Media</h2>
          <div className="media-grid">
            <div className="media-card">
              <h3 className="radio-demo">Radio Shows Snippets</h3>
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
              </audio>
              <audio controls>
                <source src="/audio/rto-3.mp3" type="audio/mpeg" />
              </audio>
            </div>
            <div className="media-card">
              <h3>TV-Ready Video Intro</h3>
              <video controls>
                <source
                  src="/video/sample_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <h2>Experience</h2>
          <h3>Deputy Team Lead - Programs
            <br />Empire Radio 104.5FM, Akure (On-Air Personality) - February, 2021-Date</h3>
          <ul className="experience-list">
            <li>
              <strong>Morning Pulse/Evening Pulse</strong>
              <br />
              Hosted and moderated top-rated drive-time show
              <br />
              Conceptualized and delivers high-energy shows, increasing listener engagement and loyalty
              <br />
              Collaborated with production team in developing innovative content and promotional strategies
            </li>
            <li>
              <strong>Over 200 Interviews</strong>
              <br />
              Conducted in-depth interviews with notable guests, public figures, celebrities, fostering meaningful conversations and insightful discussions.<br />
            </li>
            <li>
              <strong>Voiceover Artist</strong>
              <br />
              Commercials, podcasts, and documentaries
            </li>

            
          </ul>

          <h3>On-Air Personality <br />Breez FM 91.9FM, Akure (2018)</h3>
          <ul className="experience-list">
            <li>
              <strong>Morning Shows/Breakfast Lounge</strong>
              <br />
              Hosted popular shows and events of the station. <br />
              Built loyal listeners base and drove ratings growth<br />
              Developed strong relationships with listeners, guests, and colleagues, ensuring seamless on-air delivery
            </li>
            <li>
              <strong>Content Creation</strong>
              <br />
              Created and delivered content on various topics, including news, entertainment, and lifestyle <br />
              Hosted and Presented news, entertainment, and lifestyle programs
            </li>
            <li>
              <strong>Voiceover Artist</strong>
              <br />
              Commercials, podcasts, and documentaries
            </li>
          </ul>
          <h3>Industrial Training <br />
          On-Air Personality, Breez FM 91.9FM, Akure (2017)</h3>
          <ul className="experience-list">
          <li>Co-hosted the Morning Show - Breakfast Lounge</li>
          <li>Recorded News Packages</li>
          <li>Prepared Media Purchase Orders (MPOs)</li>
          <li>Monitored Traffic</li>
          <li>Retained as a full Staff</li>
          </ul>
        </section>





<h3>Key  Skills</h3>
<ul>
  <li>Live broadcasting and presentation</li>
  <li>Content creation and engagements</li>
  <li>Interviewing and discussion facilitation</li>
  <li>Audience engagement and relationship building</li>
  <li>Social media management and promotion</li>
  <li>Team collaboration and leadership</li>
  <li>Oral and Written English, Diction and Grammar</li>
</ul>

<h3>Education</h3>
<p>B.Sc. Information Technology, National Open University of Nigeria, Akure, Ondo State, 2019 (Certificate received and dated March 2023)</p>

        {/* Contact Section */}
        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>
            Phone/Whatsapp: <strong>+2348034961284</strong>
          </p>
          <p>
            Email: <a href="mailto:pride1554@gmail.com">pride1554@gmail.com</a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/oluwafemivoice"
              target="_blank"
              rel="noreferrer"
            >
              @oluwafemivoice
            </a>
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Oluwafemi Pride Amos. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
