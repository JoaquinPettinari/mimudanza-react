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
    discount: 15
  },
  {
    id: "just_one",
    title: "Just One",
    category: CATEGORIAS.JuegoDeMesa,
    price: 35000,
    description: `Es un entretenido Party game colaborativo, todos jugamos juntos para ganarle al juego. Un jugador debe adivinar una palabra por turno, los demás deben darle una pista que elige sin ponerse de acuerdo con el resto, lo mas original posible, para que en la suma de todas las pistas, el jugador que adivina pueda saber que palabra es. Pero ¡ojo!, las pistas idénticas quedarán anuladas, ¡por eso es fundamental que las pistas sean originales!`,
    photos: 3,
  },
  {
    id: "monopoly",
    title: "Monopoly",
    category: CATEGORIAS.JuegoDeMesa,
    price: 45000,
    description:
      "Monopoly es un juego de mesa basado en el intercambio y la compraventa de bienes raíces, reconocido mundialmente.",
    photos: 3,
    discount: 10
  },
  {
    id: "erudito",
    title: "Erudito",
    category: CATEGORIAS.JuegoDeMesa,
    price: 30000,
    description:
      "El Erudito es un juego de mesa de preguntas de cultura general que desafía a los jugadores a utilizar su ingenio y capacidad de razonamiento más que su conocimiento.",
    photos: 3,
  },
  {
    id: "rollers",
    title: "Rollers",
    category: CATEGORIAS.Ejercicio,
    price: 130000,
    description:
      "Marca BladeRunner, modelo Pro 80 ajustables con frenos. Nuevos sin uso, talle 40, en caja.",
    photos: 8,
    discount: 45,
  },
  {
    id: "melomano",
    title: "Melómano *EXPANSIÓN*",
    category: CATEGORIAS.JuegoDeMesa,
    price: 15000,
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
    discount: 10,
  },
  {
    id: "parlantes",
    title: "Parlantes Edifier R1100",
    category: CATEGORIAS.Tecnologia,
    price: 150000,
    description: `
    Potencia de salida: 42 Watts (RMS) - L/R: 21 W + 21 W.
    Respuesta de frecuencia: 65 Hz ~ 20 kHz
    Tipos de entrada: Line-in PC - Line-in AUX
    Tweeter: 13 mm
    Woofer: 4" (116 mm)
    Dimensiones: 140 × 226 × 197 mm (anch. x alt. x prof.)
    Peso: 4.9 kg`,
    photos: 1,
    reserved: true,
  },
  {
    id: "heladera",
    title: "Heladera Vostok 360L Blanca",
    category: CATEGORIAS.Cocina,
    price: 300000,
    description: "Nueva!! Tiene 8 meses nada mas!",
    photos: 2,
    discount: 10
  },
  {
    id: "carpa",
    title: "Carpa Coleman 2 personas 3000mm",
    category: CATEGORIAS.Camping,
    price: 200000,
    description:
      "Tiene solamente 4 usos, está nueva. Tamaño empaque: 46 cm x 16 cm. Peso: 2,8 kg.",
    photos: 1,
    discount: 20,
  },
  {
    id: "auto",
    title: "Stepway 2022 37.000k Intense (tope de gama)",
    category: CATEGORIAS.Auto,
    price: 16000000,
    description:
      "Stepway 2022 Intense manual 36.000 kilómetros, services oficiales. Mas de 20.000 kilómetros son de ruta.",
    photos: 4,
  },
  {
    id: "mesa_de_luz",
    title: "Mesa de luz moderna",
    category: CATEGORIAS.Muebles,
    price: 30000,
    description:
      "Mesita de Luz 1 Cajón Moderna 'ACHERY' en Melamina de Primera Calidad Marca 'MASISA'. Medidas: 0.45 x 0.50 x 0.35 Mts.",
    photos: 1,
    reserved: true,
  },
  {
    id: "aislante",
    title: "Aislante bolsa de dormir",
    category: CATEGORIAS.Camping,
    price: 10000,
    description:
      "Aislante térmico para carpa, buen estado",
    photos: 1,
  },
  {
    id: "exprimidor_jugo",
    title: "Exprimidora de jugo liliana",
    category: CATEGORIAS.Cocina,
    price: 15000,
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
    id: "juego_mesa_exterior",
    title: "Juego de exterior de plástico",
    category: CATEGORIAS.Exterior,
    price: 40000,
    description:
      "2 sillones modelo Miami comodísimo con mesa de plastico.",
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
    id: "raqueta_wilson",
    title: "Raqueta de tenis Wilson",
    category: CATEGORIAS.Ejercicio,
    price: 230000,
    description:
      "Raqueta de tenis wilson con menos de 1 año de uso. 300g gramos, tamaño Del Grip 4 3/8, aro 100.",
    photos: 1,
  },
  {
    id: "teclado_hyperx",
    title: "Teclado gamer HyperX Alloy Origins QWERTY Red español latinoamérica color negro con luz RGB",
    category: CATEGORIAS.Tecnologia,
    price: 60000,
    description:
      "2 años de uso! Funciona a la perfección.",
    photos: 1,
  },
  {
    id: "colchon_inflable",
    title: "Colchon Inflable Intex Downy Set X2 + 2 Almohadas+ Inflador",
    category: CATEGORIAS.Camping,
    price: 50000,
    description:
      "Están en perfecto estado, son comodísimos. Una almohada está pinchada :(. Viene con inflador",
    photos: 1,
  },
  {
    id: "cobertor_auto",
    title: "Cubre Coche Auto Antigranizo Impermeable",
    category: CATEGORIAS.Auto,
    price: 30000,
    description:
      "2 usos. TALLE M (AUTOS DE 3,76 A 4, 20MTS): VOLKSWAGEN GOL POWER / TREND, RENAULT SANDERO, PEUGEOT 206/207/208, CHEVROLET CORSA/CLASSIC, CHEVROLET ONIX, FIESTA KINETIC 5P, TOYOTA ETIOS 5P, FIAT ARGO, RENAULT SANDERO Y SIMILARES",
    photos: 1,
  },
    {
    id: "cargador_tres_en_uno",
    title: "Cargador Tres En Uno",
    category: CATEGORIAS.Tecnologia,
    price: 15000,
    description:
      "Base inalámbrica 3 en 1. Carga reloj, auricular y celular",
    photos: 1,
  },
  {
    id: "mat_yoga",
    title: "Mat de yoga",
    category: CATEGORIAS.Ejercicio,
    price: 10000,
    description:
      "Mat de yoga nuevo! Es buenisimo!",
    photos: 1,
  },
  {
    id: "apple_watch",
    title: "Apple Watch Serie 8 45mm Gps Aluminio Sport Band Color De La Caja Midnight M/l",
    category: CATEGORIAS.Tecnologia,
    price: 300000,
    description:
      "La batería dura todo el día. Tengo la caja original. Fue comprado en el exterior",
    photos: 1,
  },
];
