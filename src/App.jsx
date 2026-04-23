import { useEffect, useRef } from "react";


const introParagraphs = [
  "Amos is a seasoned radio presenter and events host, with over 8 years of experience in live broadcasting, audience engagement, storytelling, and event hosting. He has built a strong reputation for delivering compelling on-air experiences while also bringing structure and energy to live events and public engagements.",
  "Across more than eight years on air, Amos has hosted prime-time shows, interviewed influential personalities, and built a loyal listener base. Beyond the studio, he has successfully hosted and coordinated events across multiple cities, including Lagos, Abuja, Ogun, and Akure, engaging diverse audiences with confidence, clarity, and professionalism.",
  "He has led conversations with public figures, moderated discussions, and delivered voice work for commercials, documentaries, and branded media. He brings that same energy, charisma, and stage presence to every occasion.",
];


// const eventHostingFormats = [
//   "Political symposiums and civic conversations",
//   "Conference hosting and panel moderation",
//   "Corporate ceremonies and official programmes",
//   "Broadcast-linked live events and audience activations",
// ];

const mediaItems = [
  {
    title: "Presenter Reel",
    type: "video",
    src: "/video/Amos_sample_video.mp4",
    poster: "/images/profile-picture.png",
    caption:
      "A concise reel showing on-camera presence, voice control, and confidence suited to booking review.",
  },
  {
    title: "On-Air Clip 02",
    type: "audio",
    src: "/audio/rot-2.mp3",
    caption: "Short sample demonstrating clarity, timing, and spoken confidence.",
  },
  {
    title: "On-Air Clip 03",
    type: "audio",
    src: "/audio/rto-1.mp3",
    caption: "A focused clip built around clean projection and presenter discipline.",
  },
  {
    title: "Friday Cruise",
    type: "audio",
    src: "/audio/friday-cruise.mp3",
    caption: "Broadcast segment that highlights warmth, control, and audience-facing flow.",
  },
  {
    title: "Afternoon Cruise",
    type: "audio",
    src: "/audio/afternoon-cruise.mp3",
    caption: "Drive-time sample focused on pacing, connection, and steady live presentation.",
  },
  {
    title: "On-Air Clip 04",
    type: "audio",
    src: "/audio/rto-3.mp3",
    caption: "A steady live segment that reinforces tone, confidence, and audience command.",
  },
];

const experienceEntries = [
  {
    role: "Deputy Team Lead, Programs",
    organization: "Empire Radio 104.5FM, Akure",
    period: "February 2021 - Present",
    summary:
      "Leads high-visibility live programming while balancing editorial discipline, audience engagement, and production coordination.",
    highlights: [
      "Hosted and moderated flagship drive-time programming with a steady live presence.",
      "Developed and delivered high-energy content that strengthened listener loyalty and station engagement.",
      "Collaborated with production teams on show concepts, promotional ideas, and broadcast execution.",
      "Conducted more than 200 interviews with public figures, cultural voices, and notable guests.",
    ],
  },
  {
    role: "On-Air Personality",
    organization: "Breez FM 91.9FM, Akure",
    period: "2017",
    summary:
      "Built audience trust through consistent on-air performance, relationship-driven presentation, and broad content delivery.",
    highlights: [
      "Hosted morning and breakfast programming with strong listener retention.",
      "Created and presented content spanning news, lifestyle, and entertainment segments.",
      "Delivered voiceover work for commercials, podcasts, and documentary-style productions.",
    ],
  },
  {
    role: "Industrial Training, On-Air Personality",
    organization: "Breez FM 91.9FM, Akure",
    period: "2017",
    summary:
      "Started in a practical newsroom and studio environment, building an early foundation in live broadcasting and station operations.",
    highlights: [
      "Co-hosted the Breakfast Lounge morning show.",
      "Recorded news packages and supported content preparation.",
      "Prepared media purchase orders and monitored station traffic.",
      "Retained as a full member of staff after training.",
    ],
  },
];


const education = {
  title: "Education",
  value: "B.Sc. Information Technology, National Open University of Nigeria.",
};

const certifications = {
  title: "Certifications",
  value: "The West Africa Broadcast & Media Academy (WABMA) certificate for presentation.",
};

const contactLinks = [
  {
    label: "Phone / WhatsApp",
    value: "+234 803 496 1284",
    href: "tel:+2348034961284",
  },
  {
    label: "Email",
    value: "amospride1@gmail.com",
    href: "mailto:amospride1@gmail.com",
  },
  {
    label: "X / Twitter",
    value: "@aimonus",
    href: "https://twitter.com/aimonus",
    external: true,
  },
];

export default function App() {
  const workMediaSectionRef = useRef(null);
  const firstAudioRef = useRef(null);
  const hasAutoPlayedFirstClipRef = useRef(false);
  const isWorkMediaVisibleRef = useRef(false);

  useEffect(() => {
    document.title = "Oluwafemi Pride Amos | Broadcast Presenter and Event Host";

    const mediaElements = Array.from(document.querySelectorAll("audio, video"));
    const listeners = mediaElements.map((mediaElement) => {
      const handlePlay = () => {
        mediaElements.forEach((otherElement) => {
          if (otherElement !== mediaElement) {
            otherElement.pause();
          }
        });
      };

      mediaElement.addEventListener("play", handlePlay);

      return { handlePlay, mediaElement };
    });

    const interactionEvents = ["pointerdown", "keydown", "touchstart", "wheel"];
    let sectionObserver;

    const attemptFirstClipPlayback = () => {
      const firstAudio = firstAudioRef.current;

      if (!firstAudio || !isWorkMediaVisibleRef.current || hasAutoPlayedFirstClipRef.current) {
        return;
      }

      const playResult = firstAudio.play();

      if (playResult && typeof playResult.then === "function") {
        playResult
          .then(() => {
            hasAutoPlayedFirstClipRef.current = true;
          })
          .catch(() => {});
      } else {
        hasAutoPlayedFirstClipRef.current = true;
      }
    };

    const handleUserInteraction = () => {
      attemptFirstClipPlayback();
    };

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, handleUserInteraction, { passive: true });
    });

    if (workMediaSectionRef.current) {
      sectionObserver = new IntersectionObserver(
        ([entry]) => {
          isWorkMediaVisibleRef.current = entry.isIntersecting;

          if (entry.isIntersecting) {
            attemptFirstClipPlayback();
          }
        },
        {
          threshold: 0.45,
        },
      );

      sectionObserver.observe(workMediaSectionRef.current);
    }

    return () => {
      listeners.forEach(({ handlePlay, mediaElement }) => {
        mediaElement.removeEventListener("play", handlePlay);
      });

      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleUserInteraction);
      });

      sectionObserver?.disconnect();
    };
  }, []);

  const featuredVideo = mediaItems.find((item) => item.type === "video");
  const audioItems = mediaItems.filter((item) => item.type === "audio");
  const selectedExperience = experienceEntries.slice(0, 2);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container section-container site-header__inner">
          <a className="brand" href="#top">
            <span className="brand-text">
              <span className="brand-name">Oluwafemi Pride Amos</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#story">Story</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <a href="#gallery">Gallery</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container section-container hero-stage">
            <div className="hero-lockup">
              <h1 className="hero-wordmark">AMOS</h1>
              <p className="hero-wordmark-sub">Pride</p>
            </div>
            <p className="hero-tagline">
              Events | Broadcast | Ceremonies
            </p>

            <div className="hero-actions">
              <a className="pill-link pill-link--solid" href="#media">
                Watch Reel
              </a>
              <a className="pill-link pill-link--ghost" href="#contact">
                Book Amos Pride
              </a>
            </div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="container section-container story-grid">
            <div className="story-copy">
              <div className="story-lead">
                <h3 className="section-label">About</h3>
              </div>

              <div className="story-body">
                {introParagraphs.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {featuredVideo && (
              <article className="media-feature story-featured-reel" id="media">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={featuredVideo.poster}
                  aria-label={featuredVideo.title}
                >
                  <source src={featuredVideo.src} type="video/mp4" />
                </video>
              </article>
            )}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container section-container">
            <div className="work-heading">
              <p className="section-label">Broadcast Experience</p>
            </div>

            <div className="experience-grid">
              {selectedExperience.map((entry, index) => (
                <article className="panel-note work-card" key={`${entry.role}-${entry.organization}`}>
                  <p className="section-label">{entry.period}</p>
                  <h3>{entry.role}</h3>
                  <p className="experience-card__org">{entry.organization}</p>
                  <p>{entry.summary}</p>
                  <ul className="editorial-list">
                    {entry.highlights.slice(0, index === 0 ? 3 : 2).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="work-summary">
              <div className="panel-note credentials-panel">
                <div className="credentials-grid">
                  <div className="credential-block">
                    <p className="section-label">{education.title}</p>
                    <p>{education.value}</p>
                  </div>

                  <div className="credential-block">
                    <p className="section-label">{certifications.title}</p>
                    <p>{certifications.value}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-media-section" ref={workMediaSectionRef}>
              <div className="work-heading work-heading--subsection">
                <p className="section-label">Live Radio Clips</p>
              </div>

              <div className="snippet-grid">
                {audioItems.map((item, index) => (
                  <figure className="audio-card" key={item.src}>
                    <figcaption>
                      <strong>{item.title}</strong>
                      <span>{item.caption}</span>
                    </figcaption>
                    <audio
                      controls
                      preload="none"
                      aria-label={item.title}
                      ref={index === 0 ? firstAudioRef : null}
                    >
                      <source src={item.src} type="audio/mpeg" />
                    </audio>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container section-container contact-grid">
            <div className="contact-copy">
              <p className="section-label">Contact</p>
              <p>
                Ready to host, present, or collaborate? Let’s create something impactful together.
              </p>
            </div>

            <div className="contact-list">
              {contactLinks.map((item) => (
                <a
                  className="contact-item"
                  href={item.href}
                  key={item.label}
                  rel={item.external ? "noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="gallery-section" id="gallery">
          <div className="container section-container gallery-section__inner">
            <div className="gallery-section__copy">
              <p className="section-label">Gallery</p>
              <h2>Selected visuals for profile review.</h2>
              <p>
                A short gallery of key portrait and media assets. On mobile, you can slide through the cards.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <figure className="gallery-card" key={`${item.type}-${item.title}`}>
                  <span className="gallery-card__badge">{item.eventLabel}</span>
                  {item.type === "image" ? (
                    <img src={item.src} alt={item.title} loading="lazy" />
                  ) : (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={item.poster}
                      aria-label={item.title}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                  <figcaption>
                    <strong>{item.title}</strong>
                    <span>{item.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <footer className="site-footer">
        <div className="container section-container site-footer__inner">
          <p>Oluwafemi Pride Amos</p>
          <p>Copyright {new Date().getFullYear()} Oluwafemi Pride Amos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
