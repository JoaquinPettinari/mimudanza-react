export interface Article {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  photos: number;
  ask?: boolean;
  reserved?: boolean;
  sold?: boolean;
  discount?: number;
}

enum CATEGORIAS {
  Ejercicio = "Ejercicio",
  JuegoDeMesa = "Juegos de Mesa",
  Tecnologia = "Tecnología",
  Cocina = "Cocina",
  Exterior = "Exterior",
  Muebles = "Muebles",
  Camping = "Camping",
  Auto = "Auto",
  Otro = "Otro",
}

export const ARTICLES = [
  {
    id: "bicicleta_moove",
    title: "Bicicleta Moove R29",
    category: CATEGORIAS.Ejercicio,
    price: 300000,
    description: "Comprada nueva hace 2 años con muy poco uso.",
    photos: 3,
    discount: 15,
  },
  {
    id: "just_one",
    title: "Just One",
    category: CATEGORIAS.JuegoDeMesa,
    price: 15000,
    description: `Es un entretenido Party game colaborativo, todos jugamos juntos para ganarle al juego. Un jugador debe adivinar una palabra por turno, los demás deben darle una pista que elige sin ponerse de acuerdo con el resto, lo mas original posible, para que en la suma de todas las pistas, el jugador que adivina pueda saber que palabra es. Pero ¡ojo!, las pistas idénticas quedarán anuladas, ¡por eso es fundamental que las pistas sean originales!`,
    photos: 3,
  },
  {
    id: "monopoly",
    title: "Monopoly",
    category: CATEGORIAS.JuegoDeMesa,
    price: 25000,
    description:
      "Monopoly es un juego de mesa basado en el intercambio y la compraventa de bienes raíces, reconocido mundialmente.",
    photos: 3,
    discount: 10,
  },
  {
    id: "erudito",
    title: "Erudito",
    category: CATEGORIAS.JuegoDeMesa,
    price: 10000,
    description:
      "El Erudito es un juego de mesa de preguntas de cultura general que desafía a los jugadores a utilizar su ingenio y capacidad de razonamiento más que su conocimiento.",
    photos: 3,
  },
  {
    id: "rollers",
    title: "Rollers",
    category: CATEGORIAS.Ejercicio,
    price: 100000,
    description:
      "Marca BladeRunner, modelo Pro 80 ajustables con frenos. Nuevos sin uso, talle 40, en caja.",
    photos: 8,
    discount: 50,
  },
  {
    id: "melomano",
    title: "Melómano *EXPANSIÓN*",
    category: CATEGORIAS.JuegoDeMesa,
    price: 8000,
    description:
      "Juego de mesa de trivia de la marca Maldón, diseñado especialmente para los amantes de la música en Argentina. En este juego en español, podrás demostrar tus conocimientos y habilidades musicales mientras te diviertes con tus amigos y familiares.",
    photos: 8,
  },
  {
    id: "microfono",
    title: "Micrófono HyperX QuadCast Condensador Bidireccional color negro",
    category: CATEGORIAS.Tecnologia,
    price: 120000,
    description:
      "Al ser condensador, permite un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales.",
    photos: 2,
    discount: 15,
  },
  {
    id: "aislante",
    title: "Aislante bolsa de dormir",
    category: CATEGORIAS.Camping,
    price: 5000,
    description: "Aislante térmico para carpa, buen estado",
    photos: 1,
  },
  {
    id: "exprimidor_jugo",
    title: "Exprimidora de jugo liliana",
    category: CATEGORIAS.Cocina,
    price: 10000,
    description:
      "Exprimidor de jugo marca Liliana con filtros de pulpa regulable.",
    photos: 1,
  },
  {
    id: "valijon_auto",
    title: "Valijón para auto 210L",
    category: CATEGORIAS.Auto,
    price: 80000,
    description:
      "Valijón para auto, sin mucho uso. Viene con 2 llaves, se puede vender el portaequipaje tambien.",
    photos: 2,
  },
  {
    id: "palos_trekking",
    title: "Palos de trekking importados",
    category: CATEGORIAS.Ejercicio,
    price: 30000,
    description:
      "Palos de trekking expansibles, viene con varias puntas para distintas superficies.",
    photos: 1,
  },
  {
    id: "mesa_plegable",
    title: "Mesa de camping de plástico plegable",
    category: CATEGORIAS.Exterior,
    price: 40000,
    description:
      "Mesas De Camping Valija De Plastico 1.80 Plegable Color Blanco.",
    photos: 2,    
  },
  {
    id: "colchon_inflable",
    title: "Colchon Inflable Intex Downy Set X2 + 2 Almohadas+ Inflador",
    category: CATEGORIAS.Camping,
    price: 35000,
    description:
      "Están en perfecto estado, son comodísimos. Una almohada está pinchada :(. Viene con inflador",
    photos: 1,
  },
  {
    id: "cargador_tres_en_uno",
    title: "Cargador Tres En Uno",
    category: CATEGORIAS.Tecnologia,
    price: 15000,
    description: "Base inalámbrica 3 en 1. Carga reloj, auricular y celular",
    photos: 1,
  },
  {
    id: "mat_yoga",
    title: "Mat de yoga",
    category: CATEGORIAS.Ejercicio,
    price: 10000,
    description: "Mat de yoga nuevo! Es buenisimo!",
    photos: 1,
  },
  {
    id: "apple_watch",
    title:
      "Apple Watch Serie 8 45mm Gps Aluminio Sport Band Color De La Caja Midnight M/l",
    category: CATEGORIAS.Tecnologia,
    price: 300000,
    description:
      "La batería dura todo el día. Tengo la caja original. Fue comprado en el exterior",
    photos: 1,
  },
  {
    id: "escritorio",
    title: "Escritorio para computadora con cajones",
    category: CATEGORIAS.Muebles,
    price: 50000,
    description: "Mesa escritorio 125 x 60. Tiene menos de un año! Impecable",
    photos: 1
  },
  {
    id: "placar",
    title: "Placar de madera",
    category: CATEGORIAS.Muebles,
    price: 50000,
    description: "Placar de madera 1,80 x 1,80. Cuenta con 4 cajones",
    photos: 1
  }
];
