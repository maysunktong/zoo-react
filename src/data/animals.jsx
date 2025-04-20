import { getImagePath } from "../utils/utils";

export const mammals = [
  {
    name: "Echidna",
    lifespan: "50 years",
    group: "mammals",
    food: "insects such as ants and termites, beetle larvae and worms",
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    length: "76cm",
    weight: "10kg",
    found: "Throughout Australia",
    imageUrl: getImagePath("echidna"),
    previewImageUrl: getImagePath("echidna2", "webp")
  },
  {
    name: "Tasmanian Devil",
    lifespan: "5 years",
    group: "mammals",
    food: "A predator, then eat meat from other animals such as wallabies and wombats",
    description:
      "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936.",
    length: "70cm",
    weight: "10kg",
    found: "Tasmania",
    imageUrl: getImagePath("Tasmanian Devil"),
    previewImageUrl: getImagePath("Tasmanian Devil2")
  },
  {
    name: "Quokka",
    lifespan: "10 years",
    group: "mammals",
    food: "Plant eaters, they munch on shrubs and grasses",
    description:
      "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur with lighter parts underneath. The tail is relatively short and mostly devoid of hair.",
    length: "50cm",
    weight: "3kg",
    found:
      "Only found on Rottnest Island and a few places on mainland Western Australia",
    imageUrl: getImagePath("Quokka"),
    previewImageUrl: getImagePath("Quokka2", "webp")
  },
];

export const reptiles = [
  {
    name: "Frill-necked Lizard",
    lifespan: "20 years",
    group: "reptiles",
    food: "Small insects and spiders",
    description:
      "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If that doesn't work, it bolts to the nearest tree.",
    length: "90cm",
    weight: "1kg",
    found: "Northern Australia",
    imageUrl: getImagePath("Frill-necked Lizard"),
    previewImageUrl: getImagePath("Frill-necked Lizard")
  },
  {
    name: "Hawksbill Turtle",
    lifespan: "50 years",
    group: "reptiles",
    food: "other animals (sponges & jellyfish), sea plants",
    description:
      "The Hawksbill Sea Turtle gets its name from its bird-like beak. Its shell is covered in large overlapping scutes with a serrated edge. The flippers have two visible claws. Females average 50 kg and the shell is about 80 cm long.",
    length: "80cm (carapace)",
    weight: "50kg",
    found:
      "Tropical coasts of Queensland, Northern Territory and Western Australia",
    imageUrl: getImagePath("Hawksbill Turtle"),
    previewImageUrl: getImagePath("Hawksbill Turtle2")
  },
  {
    name: "Perentie",
    lifespan: "20 years",
    group: "reptiles",
    food: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    description:
      "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is shy and mostly found in remote arid areas. Revered in Aboriginal culture, it was once a key source of food and medicine.",
    length: "2.5m",
    weight: "20kg",
    found: "Deserts",
    imageUrl: getImagePath("Perentie"),
    previewImageUrl: getImagePath("Perentie2")
  },
];

export const birds = [
  {
    name: "Cassowary",
    lifespan: "20 years",
    group: "birds",
    food: "Plants matter like fruit, insects and small animals like mice and lizards",
    description:
      "Cassowaries are large, flightless birds with powerful legs and dinosaur-like looks. They are shy but can be dangerous when provoked. Their attacks can be deadly.",
    length: "1.7m",
    weight: "44kg",
    found: "Queensland",
    imageUrl: getImagePath("Cassowary"),
    previewImageUrl: getImagePath("Cassowary2")
  },
  {
    name: "Kookaburra",
    lifespan: "20 years",
    group: "birds",
    food: "Insects and small animals including snakes, frogs and lizards",
    description:
      "The laughing kookaburra is the largest member of the Kingfisher family, known for its call that sounds like laughter. It's native to eucalyptus forests and has been introduced elsewhere.",
    length: "43cm",
    weight: "300g",
    found: "Australia wide",
    imageUrl: getImagePath("Kookaburra"),
    previewImageUrl: getImagePath("Kookaburra2")
  },
  {
    name: "Yellow Tailed Black Cockatoo",
    lifespan: "41 years",
    group: "birds",
    food: "Fruit, seeds and other plant material",
    description:
      "With dark plumage and yellow markings, these cockatoos are found in temperate forests across SE Australia. They have a heavy, slow flying pattern and wailing calls.",
    length: "65cm",
    weight: "900g",
    found: "SE Australia",
    imageUrl: getImagePath("Yellow Tailed Black Cockatoo"),
    previewImageUrl: getImagePath("Yellow Tailed Black Cockatoo2")
  },
];

export const allAnimals = [...mammals, ...reptiles, ...birds];
