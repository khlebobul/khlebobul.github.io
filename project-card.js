class ProjectCard {
  constructor(data) {
    this.title = data.title;
    this.titleRu = data.titleRu || data.title;
    this.description = data.description;
    this.descriptionRu = data.descriptionRu || data.description;
    this.mainLink = data.mainLink;
    this.additionalLinks = data.additionalLinks || [];
    this.currentLang = localStorage.getItem('language') || 'en';
  }

  render() {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.cardId = this.title.replace(/\s+/g, '-').toLowerCase();

    const titleElement = document.createElement("div");
    titleElement.className = "project-title";

    const titleLink = document.createElement("a");
    titleLink.href = this.mainLink;
    titleLink.target = "_blank";
    titleLink.textContent = this.currentLang === 'en' ? this.title : this.titleRu;
    titleLink.dataset.en = this.title;
    titleLink.dataset.ru = this.titleRu;
    titleElement.appendChild(titleLink);

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "project-description";
    descriptionElement.textContent = this.currentLang === 'en' ? this.description : this.descriptionRu;
    descriptionElement.dataset.en = this.description;
    descriptionElement.dataset.ru = this.descriptionRu;

    card.appendChild(titleElement);
    card.appendChild(descriptionElement);

    if (this.additionalLinks.length > 0) {
      const linksContainer = document.createElement("div");
      linksContainer.className = "project-links";

      this.additionalLinks.forEach((link, index) => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.target = "_blank";
        
        const titleEn = link.title;
        const titleRu = link.titleRu || link.title;
        
        linkElement.textContent = this.currentLang === 'en' ? titleEn : titleRu;
        linkElement.dataset.en = titleEn;
        linkElement.dataset.ru = titleRu;

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

    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') {
        window.open(this.mainLink, '_blank');
      }
    });

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

function updateProjectsLanguage(lang) {
  const elements = document.querySelectorAll('.project-card [data-' + lang + ']');
  elements.forEach(function(element) {
    element.textContent = element.getAttribute('data-' + lang);
  });
}

// Projects data
const projectsData = [
  {
    title: "pegma",
    titleRu: "pegma",
    description: "pure challenge of the classic peg solitaire — free, open source, and fun to master!",
    descriptionRu: "настоящий вызов классической игры peg solitaire — бесплатно, с открытым исходным кодом и увлекательно для всех!",
    mainLink: "https://pegma.vercel.app",
    additionalLinks: [
      {
        title: "app store",
        titleRu: "app store",
        url: "https://apps.apple.com/ru/app/pegma-peg-solitaire/id6754343848",
      },
      {
        title: "google play",
        titleRu: "google play",
        url: "https://play.google.com/store/apps/details?id=com.khlebobul.pegma",
      },
      {
        title: "github",
        titleRu: "github",
        url: "https://github.com/khlebobul/pegma"
      },
      {
        title: "rustore",
        titleRu: "rustore",
        url: "https://www.rustore.ru/catalog/app/com.khlebobul.pegma"
      },
    ],
  },
  {
    title: "board buddy",
    titleRu: "board buddy",
    description: "your ultimate board game companion",
    descriptionRu: "ваш идеальный компаньон для настольных игр",
    mainLink: "https://boardbuddyapp.vercel.app",
    additionalLinks: [
      {
        title: "app store",
        titleRu: "app store",
        url: "https://apps.apple.com/ru/app/board-buddy-score-counter/id6743980638",
      },
      {
        title: "google play",
        titleRu: "google play",
        url: "https://play.google.com/store/apps/details?id=com.khlebobul.board_buddy",
      },
      { 
        title: "github", 
        titleRu: "github", 
        url: "https://github.com/khlebobul/board_buddy" 
      },
      { 
        title: "rustore", 
        titleRu: "rustore", 
        url: "https://www.rustore.ru/catalog/app/com.khlebobul.board_buddy" 
      },
    ],
  },
  {
    title: "knight's graph",
    titleRu: "knight's graph",
    description: "fascinating puzzle game based on the ancient knight's tour problem",
    descriptionRu: "увлекательная головоломка, основанная на древней задаче о ходе коня",
    mainLink: "https://knightsgraph.vercel.app",
    additionalLinks: [
      {
        title: "app store",
        titleRu: "app store",
        url: "https://apps.apple.com/us/app/knights-graph/id6737812039",
      },
      {
        title: "google play",
        titleRu: "google play",
        url: "https://play.google.com/store/apps/details?id=com.khlebobul.knights_graph",
      },
      { 
        title: "rustore", 
        titleRu: "rustore", 
        url: "https://www.rustore.ru/catalog/app/com.khlebobul.knights_graph" 
      },
    ],
  },
  {
    title: "not_static_icons",
    titleRu: "not_static_icons",
    description: "bautifully crafted animated icons for flutter made with lucide icons",
    descriptionRu: "красиво созданные анимированные иконки для flutter на основе lucide icons",
    mainLink: "https://pub.dev/packages/not_static_icons",
    additionalLinks: [
      {
        title: "demo",
        titleRu: "демо",
        url: "https://not-static-icons.vercel.app/",
      },
      {
        title: "github",
        titleRu: "github",
        url: "https://github.com/khlebobul/not_static_icons",
      },
    ],
  },
  {
    title: "use_scramble",
    titleRu: "use_scramble",
    description: "lightweight package for random text animations",
    descriptionRu: "легкий пакет для случайных текстовых анимаций",
    mainLink: "https://pub.dev/packages/use_scramble",
    additionalLinks: [
      {
        title: "github",
        titleRu: "github",
        url: "https://github.com/khlebobul/use_scramble",
      },
    ],
  },
  {
    title: "gen_art_bg",
    titleRu: "gen_art_bg",
    description: "animated generative art backgrounds collection flutter",
    descriptionRu: "коллекция анимированных генеративных фонов для flutter",
    mainLink: "https://pub.dev/packages/gen_art_bg",
    additionalLinks: [
      {
        title: "github",
        titleRu: "github",
        url: "https://github.com/khlebobul/gen_art_bg",
      },
    ],
  },
  {
    title: "speed reader",
    titleRu: "скорочтение - speed reader",
    description: "chrome extensions to improve reading speed with fast, sequential visual presentation",
    descriptionRu: "расширения для chrome для улучшения скорости чтения",
    mainLink: "https://chromewebstore.google.com/detail/speed-reader/iifbkjcdekfokhpjbiabfgjlloabpdlp",
    additionalLinks: [],
  },
  {
    title: "pixel art",
    titleRu: "pixel art",
    description: "images → pixel art chrome extensions",
    descriptionRu: "картинки → pixel art расширения",
    mainLink: "https://chromewebstore.google.com/detail/pixel-art/hoelbnpckhabboheiepjdehipgmlkina",
    additionalLinks: [],
  },
  {
    title: "raycast extensions",
    titleRu: "расширения для raycast",
    description: "helpful raycast extensions for developers",
    descriptionRu: "полезные расширения raycast для разработчиков",
    mainLink: "https://www.raycast.com/khlebobul",
    additionalLinks: [],
  },
  {
    title: "square ribbon",
    titleRu: "square ribbon",
    description: "figma plugin",
    descriptionRu: "плагин для figma",
    mainLink: "https://www.figma.com/community/plugin/1441862652881971511/square-ribbon",
    additionalLinks: [],
  },
  {
    title: "figure 8",
    titleRu: "figure 8",
    description: "companion for maintaining eye health",
    descriptionRu: "помощник для поддержания здоровья глаз",
    mainLink: "https://khlebobul26.gumroad.com/l/figure8",
    additionalLinks: [],
  },
  {
    title: "wave logo generator",
    titleRu: "генератор волновых логотипов",
    description: "logo buddy",
    descriptionRu: "помощник для создания логотипов",
    mainLink: "https://wave-logo.vercel.app/",
    additionalLinks: [],
  },
];

// Experiments data
const experimentsData = [
  {
    title: "flutter voice control example app",
    titleRu: "приложение с примером управления через голос на flutter",
    description: "flutter app example with local speech recognition and voice command control using sherpa-onnx",
    descriptionRu: "приложение с примером управления через голос на flutter с использованием sherpa-onnx",
    mainLink: "https://github.com/khlebobul/flutter_voice_control_example_app",
    additionalLinks: [],
  },
  {
    title: "ascii blur",
    titleRu: "ascii blur",
    description: "images → an artistic blend of blur and ASCII art with flutter",
    descriptionRu: "картинки → ASCII размытие на flutter",
    mainLink: "https://github.com/khlebobul/ascii_blur",
    additionalLinks: [],
  },
  {
    title: "ascii cat",
    titleRu: "ascii cat",
    description: "cute ASCII cat app 🐈‍⬛",
    descriptionRu: "милое приложение с ASCII-котом 🐈‍⬛",
    mainLink: "https://github.com/khlebobul/ascii_cat",
    additionalLinks: [],
  },
  {
    title: "ascii camera",
    titleRu: "ascii camera",
    description: "ASCII camera effect with flutter",
    descriptionRu: "ASCII-эффект камеры на flutter",
    mainLink: "https://github.com/khlebobul/ascii_camera",
    additionalLinks: [],
  },
  {
    title: "dynamic island pet",
    titleRu: "питомец для dynamic island",
    description: "dynamic island pet companion",
    descriptionRu: "питомец-компаньон для dynamic island",
    mainLink: "https://github.com/khlebobul/dynamic_island_pet",
    additionalLinks: [],
  },
  {
    title: "build123d_models",
    titleRu: "build123d models",
    description: "a collection of 3d models created using build123d",
    descriptionRu: "коллекция 3d моделей, созданных через build123d",
    mainLink: "https://github.com/khlebobul/build123d_models",
    additionalLinks: [],
  },
  {
    title: "lego block image processor",
    titleRu: "обработчик изображений lego",
    description: "Images ➭ lego blocks instruction",
    descriptionRu: "Изображения ➭ инструкция по сборке из lego",
    mainLink: "https://lego-processor.vercel.app",
    additionalLinks: [],
  },
];
