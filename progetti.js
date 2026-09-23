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
window.PROGETTI = {
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
      'Assets/Cheers-1.png',
      'Assets/Cheers-2.png',
      'Assets/Cheers-3.png',
      'Assets/Cheers-4.png',
      'Assets/Cheers-5.png'
    ]
  }
};
