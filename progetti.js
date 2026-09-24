// Contenuti delle pagine di dettaglio (index.html#p-<slug>), uno per progetto.
// La chiave è lo slug del progetto (data-slug nell'elenco di index.html).
//
// Nome, Category e Role vengono già dall'elenco della home: qui servono solo se si vuole
// un testo diverso (campi "category" e "role"). Ogni campo si può omettere: la sezione
// corrispondente semplicemente non compare. Senza "images" si mostra la cover.
//
//   subtitle      riga grigia sotto il nome
//   tools         es. "Photoshop, Blender"
//   overview      Project Overview
//   process       My Process & Pipeline
//   deliverables  elenco puntato di Key Deliverables
//   images        immagini della colonna di destra, dall'alto in basso
//   columns       immagini affiancate in griglia, N per riga (es. 4); senza, una sotto l'altra
window.PROGETTI = {
  'minimi-storici': {
    subtitle: 'Brand & Motion Identity',
    tools: 'Illustrator, Photoshop, After Effects',
    overview: 'Minimi Storici is a comprehensive visual identity project developed to establish a dynamic, modern, and highly recognizable brand presence. The primary objective was to translate core brand values into a flexible visual system capable of seamless adaptation across both print media and digital channels.',
    process: 'As the Brand Designer and Motion Artist, I led the visual development from initial concept to execution. I designed the vector-based logo, established typographic hierarchy and color palettes, and subsequently animated the visual assets to create engaging motion graphics for social media and video campaigns.',
    deliverables: [
      'Logo Design & Comprehensive Brand Guidelines',
      'Visual Identity System & Typographic Assets',
      'Animated Logos & Motion Graphics for Social Media'
    ],
    images: [
      'Assets/MINIMI_ (1).webp',
      'Assets/MINIMI_ (2).webp',
      'Assets/MINIMI_ (3).webp',
      'Assets/MINIMI_ (4).webp',
      'Assets/MINIMI_ (5).webp',
      'Assets/MINIMI_ (6).webp',
      'Assets/MINIMI_ (7).webp',
      'Assets/MINIMI_ (8).webp'
    ]
  },
  'scienceup': {
    subtitle: 'Scientific & Editorial Illustration',
    category: 'Scientific & Editorial Illustration',
    tools: 'Photoshop, Procreate',
    overview: 'ScienceUP is an illustration series designed to make complex scientific concepts accessible and engaging. Through a clean and contemporary visual language, the project transforms intricate data and theoretical ideas into striking visual narratives tailored for editorial and educational publishing.',
    process: 'Serving as the illustrator, I collaborated closely on ideation to craft effective visual metaphors. I defined the overall compositions, established a strategic color palette, and executed high-fidelity digital illustrations that maintain an ideal balance between conceptual accuracy and aesthetic appeal.',
    deliverables: [
      'High-Resolution Digital Editorial Illustrations',
      'Educational Character Concepts & Visual Diagrams',
      'Layout Adaptation for Print and Digital Publications'
    ]
  },
  'discosizer': {
    subtitle: 'Commercial Campaign & Social Motion',
    category: 'Visual & Graphic Design / Motion Design',
    tools: 'Photoshop, After Effects, Blender',
    overview: 'Discosizer is a cross-platform commercial campaign focused on high-energy social media content creation. The project fuses 2D graphic design with hard-surface 3D assets to generate a bold, modern aesthetic tailored for commercial engagement.',
    process: 'In my role as Designer and Motion Artist, I established the visual direction for the promotional assets. I modeled custom 3D hard-surface elements in Blender, integrating them into graphic layouts before animating the final assets in After Effects for vertical and horizontal video formats.',
    deliverables: [
      'Graphic Design & Social Media Asset Suite',
      '3D Hard-Surface Modeling for Scene Assets',
      'Promotional Motion Graphics (Vertical & Landscape Formats)'
    ]
  },
  'downhill': {
    subtitle: 'Animated Feature Concept',
    category: 'Visual Development & Concept Art',
    role: 'Visual Development Artist, Character & Prop Designer',
    tools: 'Photoshop, Procreate',
    overview: 'DOWNHILL is a personal Visual Development and Worldbuilding project conceived as a feature animation concept. The work explores a high-octane narrative centered on action, atmospheric depth, and distinct character and equipment design.',
    process: 'As the Visual Development Artist, I defined the visual identity of the project. My scope included character design from initial silhouette studies to expressive model sheets, alongside the functional concept design of key props vital to the storytelling.',
    deliverables: [
      'Character Model Sheets & Turnarounds',
      'Prop Design & Character-Item Interaction Studies',
      'Atmospheric Color Keys & Animation Moodboards'
    ],
    images: [
      'Assets/DOWNHILL_ (1).webp',
      'Assets/DOWNHILL_ (2).webp',
      'Assets/DOWNHILL_ (3).webp',
      'Assets/DOWNHILL_ (4).webp',
      'Assets/DOWNHILL_ (5).webp',
      'Assets/DOWNHILL_ (6).webp',
      'Assets/DOWNHILL_ (7).webp',
      'Assets/DOWNHILL_ (8).webp'
    ]
  },
  'railgun-turret': {
    subtitle: 'Mobile Turret',
    category: 'Hard Surface Concept Art & Vehicle Design',
    role: 'Senior Hard Surface & Vehicle Concept Artist',
    tools: 'Blender, Photoshop',
    overview: 'Long Distance Railgun is an industrial and military concept art project geared toward AAA game development. The goal was to design an articulate, highly believable mobile artillery turret within a grounded Sci-Fi universe.',
    process: 'Functioning as a Hard Surface Concept Artist, I utilized a hybrid 2D/3D workflow. I began with exploratory 2D sketches before moving into Blender for 3D blockouts to test mechanical functionality and articulation. The project concluded with digital overpainting and photobashing in Photoshop to apply realistic surface wear and materials.',
    deliverables: [
      '3D Concept Blockout & Structural Mesh',
      'Production-Ready Technical Specification Sheets',
      'High-Resolution Keyart & Promotional Renders'
    ],
    images: [
      'Assets/LONG DISTANCE RAILGUN HEAVY DUTY MOBILE TURRET (1).webp',
      'Assets/LONG DISTANCE RAILGUN HEAVY DUTY MOBILE TURRET (2).webp',
      'Assets/LONG DISTANCE RAILGUN HEAVY DUTY MOBILE TURRET (3).webp',
      'Assets/LONG DISTANCE RAILGUN HEAVY DUTY MOBILE TURRET (4).webp',
      'Assets/LONG DISTANCE RAILGUN HEAVY DUTY MOBILE TURRET (5).webp',
      'Assets/LONG DISTANCE RAILGUN HEAVY DUTY MOBILE TURRET (6).webp'
    ]
  },
  'floating-settlement': {
    subtitle: 'Environment Concept Art',
    category: 'Environment Concept Art & Asset Design',
    role: 'Environment Concept Artist & Asset Designer',
    tools: 'Photoshop, 3D Coat, Blender',
    overview: 'Floating Settlement is an environment concept exploring a human habitat designed over water within a Sci-Fi/Fantasy setting. The project investigates modular architecture, environmental integration, and structural support systems.',
    process: 'As the Environment Concept Artist, I established the composition, lighting, and environmental tone. I blocked out core structures and modular assets using 3D Coat and Blender, followed by digital painting in Photoshop to establish atmospheric depth, lighting conditions, and narrative detail.',
    deliverables: [
      'Environment Keyframe Matte Painting',
      'Modular Building & Settlement Asset Design',
      'Lighting, Color, and Atmospheric Studies'
    ],
    images: [
      'Assets/FLOATING SETTLEMENT (1).webp',
      'Assets/FLOATING SETTLEMENT (1) (1).webp',
      'Assets/FLOATING SETTLEMENT (2).webp',
      'Assets/FLOATING SETTLEMENT (3).webp',
      'Assets/FLOATING SETTLEMENT (4).webp',
      'Assets/FLOATING SETTLEMENT (5).webp'
    ]
  },
  'calendar': {
    subtitle: 'Editorial Illustration Series',
    tools: 'Photoshop, Procreate',
    overview: 'Annual Calendar is a narrative illustration series created for a custom annual calendar. Each artwork represents a distinct season, depicted through recurring characters and evolving environmental storytelling.',
    process: "Serving as Illustrator and Character Designer, I ensured overall narrative and visual consistency. I designed the recurring characters and built each scene's composition, using seasonal color palettes to reflect the emotional tone of each month.",
    deliverables: [
      '12 High-Resolution Digital Illustrations for Print',
      'Recurring Character Design & Sheet Development',
      'Calendar Grid Layout & Typographic Integration'
    ],
    images: [
      'Assets/CALENDER_ (1).webp',
      'Assets/CALENDER_ (2).webp',
      'Assets/CALENDER_ (3).webp',
      'Assets/CALENDER_ (4).webp',
      'Assets/CALENDER_ (5).webp',
      'Assets/CALENDER_ (6).webp',
      'Assets/CALENDER_ (7).webp',
      'Assets/CALENDER_ (8).webp',
      'Assets/CALENDER_ (9).webp',
      'Assets/CALENDER_ (10).webp',
      'Assets/CALENDER_ (11).webp',
      'Assets/CALENDER_ (12).webp'
    ]
  },
  'desert-city-settlement': {
    subtitle: 'Worldbuilding & Environment Concept',
    tools: 'Photoshop, Blender',
    overview: 'Desert City Settlement is a visual development project focused on an ancient urban oasis repurposed for a Sci-Fi narrative. The concept explores vernacular architecture, harsh climatic conditions, and daily life in extreme environments.',
    process: 'In my role as Worldbuilder and Environment Artist, I constructed the urban architecture in Blender to establish precise perspective and sunlight shadows. I then used digital painting techniques in Photoshop to add surface textures, lived-in details, and scale-defining figures.',
    deliverables: [
      'Panoramic Environment Establishing Shot',
      'Architectural & Urban Detail Studies',
      'Color Script & Harsh Sunlight Lighting Studies'
    ],
    images: [
      'Assets/DESERT CITY SETTLEMENT (1).webp',
      'Assets/DESERT CITY SETTLEMENT (2).webp',
      'Assets/DESERT CITY SETTLEMENT (3).webp',
      'Assets/DESERT CITY SETTLEMENT (4).webp'
    ]
  },
  'skatepark-overpass': {
    subtitle: '2D Animation Background',
    tools: 'Photoshop, Blender',
    overview: 'Skatepark Overpass is a background design tailored specifically for 2D animation pipelines. It features an urban environment beneath a highway overpass converted into a skatepark, prioritizing perspective accuracy and environmental storytelling.',
    process: 'As the Background Painter, I established camera focal lengths and perspective grids using Blender. I then painted the environment in Photoshop, carefully organizing the digital file into production-ready layers for smooth 2D animation compositing.',
    deliverables: [
      'Production-Ready Layered Background file for 2D Compositing',
      'Detailed Urban Perspective Grid & Layout',
      'Ambient Lighting & Surface Texture (Graffiti, Weathering) Art'
    ],
    images: [
      'Assets/SKATEPARK_ (1).webp',
      'Assets/SKATEPARK_ (2).webp',
      'Assets/SKATEPARK_ (3).webp',
      'Assets/SKATEPARK_ (4).webp',
      'Assets/SKATEPARK_ (5).webp'
    ]
  },
  'fisherman-bioluminescent': {
    subtitle: 'IP Development',
    role: 'Character, Creature & Prop Concept Artist',
    tools: 'Photoshop, Procreate',
    overview: 'The Fisherman & The Bioluminescent Creatures is an original Intellectual Property (IP) centered on human interaction with glowing marine fauna. The project encompasses character design, creature anatomy, and custom fantasy fishing equipment.',
    process: "Serving as the Lead Concept Artist for the IP, I oversaw all visual direction. I developed anatomical and lighting studies for the bioluminescent creatures, created costume designs for the fisherman, and designed specialized gear suited to the world's lore.",
    deliverables: [
      'Character & Creature Sheets (Anatomy, Lighting, & Texture)',
      'Prop Design for Equipment & Watercraft',
      'Illustrative Keyart showing Character-Creature Interaction'
    ],
    images: [
      'Assets/FIHERMAN_ (1).webp',
      'Assets/FIHERMAN_ (2).webp',
      'Assets/FIHERMAN_ (3).webp',
      'Assets/FIHERMAN_ (4).webp',
      'Assets/FIHERMAN_ (5).webp',
      'Assets/FIHERMAN_ (6).webp'
    ]
  },
  'ex-calibur': {
    subtitle: 'Sci-Fi Weapon & Mecha Concept Art',
    tools: 'Photoshop, Illustrator',
    overview: 'EX-CALIBUR is a personal hard-surface design project focused on advanced Sci-Fi weaponry and mecha units. The concept bridges industrial design principles with fictional in-universe corporate branding.',
    process: 'In my dual role as Hard Surface and Graphic Designer, I designed functional weapon concepts prioritizing ergonomics and mechanical logic. I developed custom vector decals, warning labels, and corporate branding in Illustrator, integrating them into the 2D renders for added realism.',
    deliverables: [
      'Sci-Fi Weapon Concept Art with Orthographic Views',
      'Vector Graphic Decals, UI, & Industrial Branding',
      'Component Breakdown & Mechanical Callout Sheets'
    ],
    images: [
      'Assets/EXCALIBUR (1).webp',
      'Assets/EXCALIBUR (2).webp',
      'Assets/EXCALIBUR (3).webp',
      'Assets/EXCALIBUR (4).webp',
      'Assets/EXCALIBUR (5).webp',
      'Assets/EXCALIBUR (6).webp',
      'Assets/EXCALIBUR (7).webp',
      'Assets/EXCALIBUR (8).webp',
      'Assets/EXCALIBUR (9).webp',
      'Assets/EXCALIBUR (10).webp'
    ]
  },
  'cheers': {
    subtitle: 'Animated Short Film VisDev',
    tools: 'Photoshop',
    overview: "CHEERS! is a student animated short film produced at BigRock School. The project required an immersive, characterful environment to serve as the backdrop for the film's narrative.",
    process: "Working as a Visual Development Artist and Background Painter within the production team, I helped establish the short film's visual tone. I painted digital backgrounds following strict style guidelines to ensure seamless integration with the animated characters.",
    deliverables: [
      'Digital Environment Backgrounds for Production Shots',
      'Lighting & Color Keys for the Compositing Team',
      'Preliminary Environment Concept Art'
    ],
    images: [
      'Assets/CHEERS_  (1).webp',
      'Assets/CHEERS_  (2).webp',
      'Assets/CHEERS_  (3).webp',
      'Assets/CHEERS_  (4).webp'
    ]
  },
  'sipario': {
    subtitle: 'Vinyl & Music Packaging Design',
    tools: 'Photoshop, Illustrator, Procreate',
    overview: 'SIPARIO is a graphic design and editorial music packaging project created for Diorama Group. The scope involved visual identity, custom illustrations, and complete physical packaging design for vinyl and CD formats.',
    process: "As Graphic Designer and Art Director, I translated the album's musical themes into a cohesive visual identity. I combined custom digital illustrations with typography and prepared print-ready mechanical files for vinyl sleeves, labels, and promotional materials.",
    deliverables: [
      'Full Vinyl Packaging Design (Cover, Inner Sleeve, Vinyl Label)',
      'Promotional Illustration & Social Media Assets',
      'Print-Ready Prepress Files with Custom Typography'
    ]
  },
  'centauri': {
    subtitle: 'Sci-Fi Character Concept Art',
    tools: 'Photoshop',
    overview: 'CENTAURI is a character concept design project set in a futuristic Sci-Fi universe. The focus centers on costume design, silhouette clarity, and the seamless integration of cybernetic elements with human anatomy.',
    process: 'As Character Concept Artist, I explored character silhouettes and posture, focusing on technical fabric folds and armored plating details. I refined color schemes and material finishes using digital painting techniques in Photoshop.',
    deliverables: [
      'Full-Body Character Concept Art',
      'Costume & Gear Variation Sheets',
      'Material & Armor Callout Views for 3D Modeling'
    ],
    images: [
      'Assets/CENTAURI_ (1).webp',
      'Assets/CENTAURI_ (2).webp',
      'Assets/CENTAURI_ (3).webp',
      'Assets/CENTAURI_ (4).webp',
      'Assets/CENTAURI_ (5).webp',
      'Assets/CENTAURI_ (6).webp',
      'Assets/CENTAURI_.webp'
    ]
  },
  'card-game': {
    subtitle: 'BigRock Game Jam',
    role: 'Game Illustrator & UI/Graphic Designer',
    tools: 'Photoshop, Illustrator, Procreate',
    overview: 'A fast-paced card game visual design project developed during the BigRock Game Jam. The project required rapid visual identity creation, card frame UI design, and original game illustrations under strict time constraints.',
    process: "Acting as the team's Illustrator and Graphic Designer, I built vector card templates (UI, icons, values) in Illustrator while producing digital character illustrations in Photoshop and Procreate to meet the game jam deadline.",
    deliverables: [
      'Card Layout Templates & Game UI Assets',
      'Character & Item Digital Illustrations',
      'Game Logo Design & Promotional Packaging Mockup'
    ],
    columns: 4,
    images: [
      'Assets/CARD GAME_ (1).webp',
      'Assets/CARD GAME_ (2).webp',
      'Assets/CARD GAME_ (3).webp',
      'Assets/CARD GAME_ (4).webp',
      'Assets/CARD GAME_ (5).webp',
      'Assets/CARD GAME_ (6).webp',
      'Assets/CARD GAME_ (7).webp',
      'Assets/CARD GAME_ (8).webp',
      'Assets/CARD GAME_ (9).webp',
      'Assets/CARD GAME_ (10).webp',
      'Assets/CARD GAME_ (11).webp',
      'Assets/CARD GAME_ (12).webp',
      'Assets/CARD GAME_ (13).webp',
      'Assets/CARD GAME_ (14).webp',
      'Assets/CARD GAME_ (15).webp',
      'Assets/CARD GAME_ (16).webp',
      'Assets/CARD GAME_ (17).webp',
      'Assets/CARD GAME_ (18).webp',
      'Assets/CARD GAME_ (19).webp',
      'Assets/CARD GAME_ (20).webp',
      'Assets/CARD GAME_ (21).webp',
      'Assets/CARD GAME_ (22).webp',
      'Assets/CARD GAME_ (23).webp',
      'Assets/CARD GAME_ (24).webp',
      'Assets/CARD GAME_ (25).webp',
      'Assets/CARD GAME_ (26).webp',
      'Assets/CARD GAME_ (27).webp',
      'Assets/CARD GAME_ (28).webp'
    ]
  }
};
