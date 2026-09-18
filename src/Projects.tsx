import './Project.css';


export default function Project() {
  const projects = [
    {
      title: 'kenny Vista Luxury Hotel',
      description: 'Luxury hotel booking platform with room reservations, suite tours, and checkout.',
      tag: 'Hotel Project',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      tools: ['Html', 'CSS', 'Javascript'],
      link: '#'
    },
    {
      title: 'Prestige wheels',
      description: 'Modern automobile marketplace with vehicle customizer and test drive booking.',
      tag: 'Car Website',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      tools: ['Html5', 'CSS 5', 'Tailwind CSS', 'Three.js'],
      link: 'https://kennys-carwebsite.netlify.app'
    },
    {
      title: 'Vip Intelligence Studio',
      description: 'Generative AI content platform with prompt workflows and smart automated writing.',
      tag: 'AI Project',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Gemini API', 'TypeScript', 'Tailwind CSS'],
      link: 'https://aura-ai-demo.com'
    },
    {
      title: 'Apex Secure Digital Bank',
      description: 'Fintech online banking portal with money transfer, transactions, and security.',
      tag: 'Bank Project',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Javascript', 'Tailwind CSS', ],
      link: '#'
    },
    // {
    //   title: 'LiveStream Voice & Vision AI',
    //   description: 'Real-time conversational AI system with streaming audio responses built in React.',
    //   tag: 'Realtime AI with React',
    //   image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
    //   tools: ['React', 'WebSockets', 'Web Audio API', 'TypeScript'],
    //   link: 'https://realtime-ai-demo.com'
    // },
    {
      title: 'Piggyvest financing',
      description: 'Venture capital and private equity portal with portfolio insights and pitch submissions.',
      tag: 'Investor Website',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tools: ['React', 'Typescript', 'Tailwind CSS', 'GraphQL'],
      link: '#'
    },
    // {
    //   title: 'CyberStrike Arena',
    //   description: 'Interactive multiplayer browser gaming portal with leaderboard and live matchmaking.',
    //   tag: 'Game Website',
    //   image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    //   tools: ['React', 'HTML5 Canvas', 'TypeScript', 'WebSockets'],
    //   link: 'https://cyberstrike-game-demo.com'
    // },
    // {
    //   title: 'Pulse SaaS Cloud Manager',
    //   description: 'High performance cloud telemetry monitoring and team permissions dashboard.',
    //   tag: 'Cloud Platform',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    //   tools: ['React', 'TypeScript', 'Tailwind CSS', 'Docker'],
    //   link: 'https://pulsecloud-demo.com'
    // }
  ];



  return (
            
 
      
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">
          <span className="logo-tag">&lt;</span>
          <span>Projects</span>
          <span className="logo-tag">/&gt;</span>
        </h2>
        <p className="projects-subtitle">Explore some of the recent projects built by Kenny</p>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search projects by title, category, or tech stack..."
            
          />
          <button type="button" className="search-clear-btn">
            &times;
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="project-tag-overlay">{project.tag}</span>
            </div>

            <div className="project-body">
              <div className="project-top">
                <span className="project-status-text">Live Project</span>
                <span className="status-dot"></span>
              </div>

              <h3 className="project-heading">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tools">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="tool-badge">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="project-btn">
                <span>View Project</span>
                <span>&rarr;</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
