class ProjectCard {
  constructor(data, index) {
    this.title = data.title;
    this.description = data.description;
    this.mainLink = data.mainLink;
    this.additionalLinks = data.additionalLinks || [];
    this.index = index;
  }

  render() {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.cardId = this.title.replace(/\s+/g, '-').toLowerCase();

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = String(this.index + 1).padStart(2, "0");

    const titleElement = document.createElement("h3");
    titleElement.className = "project-title";

    const titleLink = document.createElement("a");
    titleLink.href = this.mainLink;
    titleLink.target = "_blank";
    titleLink.rel = "noreferrer";
    titleLink.textContent = this.title;
    titleElement.appendChild(titleLink);

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "project-description";
    descriptionElement.textContent = this.description;

    card.appendChild(number);
    card.appendChild(titleElement);
    card.appendChild(descriptionElement);

    if (this.additionalLinks.length > 0) {
      const linksContainer = document.createElement("div");
      linksContainer.className = "project-links";

      this.additionalLinks.forEach((link) => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.rel = "noreferrer";
        
        linkElement.textContent = link.title;

        linksContainer.appendChild(linkElement);
      });

      card.appendChild(linksContainer);
    }

    return card;
  }
}

function renderProjects(containerId, projects) {
  const container = document.getElementById(containerId);

  projects.forEach((projectData, index) => {
    const card = new ProjectCard(projectData, index);
    container.appendChild(card.render());
  });
}

// Projects data
const projectsData = [
  {
    title: "pegma",
    description: "pure challenge of the classic peg solitaire — free, open source, and fun to master!",
    mainLink: "https://pegma.vercel.app",
    additionalLinks: [
      {
        title: "app store",
        url: "https://apps.apple.com/ru/app/pegma-peg-solitaire/id6754343848",
      },
      {
        title: "google play",
        url: "https://play.google.com/store/apps/details?id=com.khlebobul.pegma",
      },
      {
        title: "github",
        url: "https://github.com/khlebobul/pegma"
      },
    ],
  },
  {
    title: "board buddy",
    description: "your ultimate board game companion",
    mainLink: "https://boardbuddyapp.vercel.app",
    additionalLinks: [
      {
        title: "app store",
        url: "https://apps.apple.com/ru/app/board-buddy-score-counter/id6743980638",
      },
      {
        title: "google play",
        url: "https://play.google.com/store/apps/details?id=com.khlebobul.board_buddy",
      },
      { 
        title: "github", 
        url: "https://github.com/khlebobul/board_buddy" 
      }
    ],
  },
  {
    title: "knight's graph",
    description: "fascinating puzzle game based on the ancient knight's tour problem",
    mainLink: "https://knightsgraph.vercel.app",
    additionalLinks: [
      {
        title: "app store",
        url: "https://apps.apple.com/us/app/knights-graph/id6737812039",
      },
      {
        title: "google play",
        url: "https://play.google.com/store/apps/details?id=com.khlebobul.knights_graph",
      },
    ],
  },
  {
    title: "not_static_icons",
    description: "beautifully crafted animated icons for flutter made with lucide icons",
    mainLink: "https://pub.dev/packages/not_static_icons",
    additionalLinks: [
      {
        title: "demo",
        url: "https://not-static-icons.vercel.app/",
      },
      {
        title: "github",
        url: "https://github.com/khlebobul/not_static_icons",
      },
    ],
  },
  {
    title: "raycast extensions",
    description: "helpful raycast extensions for developers",
    mainLink: "https://www.raycast.com/khlebobul",
    additionalLinks: [],
  },
];

// Experiments data
const experimentsData = [
  {
    title: "speed reader",
    description: "native macOS speed reader using RSVP and ORP — PDFs, EPUB, DOCX, articles, OCR, and four focused modes",
    mainLink: "https://github.com/khlebobul/speed-reader",
    additionalLinks: [],
  },
  {
    title: "flutter voice control example app",
    description: "flutter app example with local speech recognition and voice command control using sherpa-onnx",
    mainLink: "https://github.com/khlebobul/flutter_voice_control_example_app",
    additionalLinks: [],
  },
  {
    title: "ascii blur",
    description: "images → an artistic blend of blur and ASCII art with flutter",
    mainLink: "https://github.com/khlebobul/ascii_blur",
    additionalLinks: [],
  },
  {
    title: "ascii cat",
    description: "cute ASCII cat app 🐈‍⬛",
    mainLink: "https://github.com/khlebobul/ascii_cat",
    additionalLinks: [],
  },
  {
    title: "ascii camera",
    description: "ASCII camera effect with flutter",
    mainLink: "https://github.com/khlebobul/ascii_camera",
    additionalLinks: [],
  },
  {
    title: "dynamic island pet",
    description: "dynamic island pet companion",
    mainLink: "https://github.com/khlebobul/dynamic_island_pet",
    additionalLinks: [],
  },
  {
    title: "build123d_models",
    description: "a collection of 3d models created using build123d",
    mainLink: "https://github.com/khlebobul/build123d_models",
    additionalLinks: [],
  },
  {
    title: "lego block image processor",
    description: "images ➭ lego blocks instruction",
    mainLink: "https://lego-processor.vercel.app",
    additionalLinks: [],
  },
];

renderProjects('projects-container', projectsData);
renderProjects('experiments-container', experimentsData);
document.getElementById('projects-count').textContent = projectsData.length;
document.getElementById('experiments-count').textContent = experimentsData.length;
