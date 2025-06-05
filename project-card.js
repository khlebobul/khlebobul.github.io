class ProjectCard {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.mainLink = data.mainLink;
    this.additionalLinks = data.additionalLinks || [];
  }

  render() {
    const card = document.createElement("div");
    card.className = "project-card";

    const titleElement = document.createElement("div");
    titleElement.className = "project-title";

    const titleLink = document.createElement("a");
    titleLink.href = this.mainLink;
    titleLink.target = "_blank";
    titleLink.textContent = this.title;
    titleElement.appendChild(titleLink);

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "project-description";
    descriptionElement.textContent = this.description;

    card.appendChild(titleElement);
    card.appendChild(descriptionElement);

    if (this.additionalLinks.length > 0) {
      const linksContainer = document.createElement("div");
      linksContainer.className = "project-links";

      this.additionalLinks.forEach((link, index) => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.textContent = link.title;

        linksContainer.appendChild(linkElement);

        if (index < this.additionalLinks.length - 1) {
          const separator = document.createElement("span");
          separator.textContent = " / ";
          separator.className = "link-separator";
          linksContainer.appendChild(separator);
        }
      });

      card.appendChild(linksContainer);
    }

    return card;
  }
}

function renderProjects(containerId, projects) {
  const container = document.getElementById(containerId);

  projects.forEach((projectData) => {
    const card = new ProjectCard(projectData);
    container.appendChild(card.render());
  });
}

// Projects data
const projectsData = [
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
      { title: "github", url: "https://github.com/khlebobul/board_buddy" },
    ],
  },
  {
    title: "knight's graph",
    description:
      "fascinating puzzle game based on the ancient knight's tour problem",
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
    title: "use_scramble",
    description: "lightweight package for random text animations",
    mainLink: "https://pub.dev/packages/use_scramble",
    additionalLinks: [],
  },
  {
    title: "gen_art_bg",
    description: "animated generative art backgrounds collection flutter",
    mainLink: "https://pub.dev/packages/gen_art_bg",
    additionalLinks: [],
  },
  {
    title: "raycast extensions",
    description: "helpful raycast extensions for developers",
    mainLink: "https://www.raycast.com/khlebobul",
    additionalLinks: [],
  },
];
