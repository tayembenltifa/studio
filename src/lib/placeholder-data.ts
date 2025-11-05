export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: "Neuf" | "Comme neuf" | "Bon état" | "Passable";
  category: "Roman" | "Science-Fiction" | "Histoire" | "Cuisine" | "Poésie" | "Biographie" | "Fantaisie";
  description: string;
  sellerId: string;
  imageId: string;
  isSold: boolean;
};

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
};

export type MessageThread = {
  id: string;
  bookId: string;
  buyerId: string;
  sellerId: string;
  messages: Message[];
};


export const users: User[] = [
  { id: "user1", name: "Alice Dubois", avatarUrl: "https://i.pravatar.cc/150?u=user1" },
  { id: "user2", name: "Bob Leclerc", avatarUrl: "https://i.pravatar.cc/150?u=user2" },
  { id: "user3", name: "Chloé Martin", avatarUrl: "https://i.pravatar.cc/150?u=user3" },
];

export const books: Book[] = [
  {
    id: "1",
    title: "L'Étranger",
    author: "Albert Camus",
    price: 8,
    condition: "Bon état",
    category: "Roman",
    description: "Un classique de la littérature française, édition de 1998. Quelques pages sont légèrement cornées.",
    sellerId: "user1",
    imageId: "book1",
    isSold: false,
  },
  {
    id: "2",
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    price: 12,
    condition: "Comme neuf",
    category: "Roman",
    description: "Belle édition illustrée, parfaite pour un cadeau. Lu une seule fois.",
    sellerId: "user2",
    imageId: "book2",
    isSold: false,
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    price: 7,
    condition: "Passable",
    category: "Science-Fiction",
    description: "Édition de poche, la couverture est un peu usée mais l'intérieur est en bon état.",
    sellerId: "user1",
    imageId: "book3",
    isSold: false,
  },
  {
    id: "4",
    title: "Dune",
    author: "Frank Herbert",
    price: 15,
    condition: "Comme neuf",
    category: "Science-Fiction",
    description: "Premier tome de la saga. État impeccable.",
    sellerId: "user3",
    imageId: "book4",
    isSold: false,
  },
  {
    id: "5",
    title: "Sapiens : Une brève histoire de l'humanité",
    author: "Yuval Noah Harari",
    price: 18,
    condition: "Bon état",
    category: "Histoire",
    description: "Très instructif. Quelques passages surlignés au crayon.",
    sellerId: "user2",
    imageId: "book5",
    isSold: false,
  },
   {
    id: "6",
    title: "Cuisiner Simplement",
    author: "Jean-Pierre Coffe",
    price: 20,
    condition: "Neuf",
    category: "Cuisine",
    description: "Jamais utilisé, encore sous blister. Recettes faciles pour tous les jours.",
    sellerId: "user3",
    imageId: "book6",
    isSold: false,
  },
  {
    id: "7",
    title: "Les Misérables",
    author: "Victor Hugo",
    price: 9,
    condition: "Passable",
    category: "Roman",
    description: "Édition ancienne, livre de poche. A beaucoup voyagé.",
    sellerId: "user1",
    imageId: "book7",
    isSold: true,
  },
  {
    id: "8",
    title: "Les Fleurs du Mal",
    author: "Charles Baudelaire",
    price: 10,
    condition: "Bon état",
    category: "Poésie",
    description: "Recueil de poèmes classique. Édition de 2005.",
    sellerId: "user2",
    imageId: "book8",
    isSold: false,
  },
  {
    id: "9",
    title: "Le Seigneur des Anneaux",
    author: "J.R.R. Tolkien",
    price: 25,
    condition: "Comme neuf",
    category: "Fantaisie",
    description: "Trilogie complète en un seul volume. Parfait état.",
    sellerId: "user3",
    imageId: "book9",
    isSold: false,
  },
  {
    id: "10",
    title: "Une vie",
    author: "Simone Veil",
    price: 11,
    condition: "Bon état",
    category: "Biographie",
    description: "Autobiographie poignante. Lu avec soin.",
    sellerId: "user1",
    imageId: "book10",
    isSold: false,
  },
];

export const messageThreads: MessageThread[] = [
    {
        id: "thread1",
        bookId: "1",
        buyerId: "user2",
        sellerId: "user1",
        messages: [
            { id: "msg1", senderId: "user2", text: "Bonjour, votre livre est-il toujours disponible ?", timestamp: "2024-07-28T10:00:00Z" },
            { id: "msg2", senderId: "user1", text: "Bonjour, oui il l'est !", timestamp: "2024-07-28T10:05:00Z" },
            { id: "msg3", senderId: "user2", text: "Super ! Serait-il possible de le récupérer cette semaine ?", timestamp: "2024-07-28T10:06:00Z" },
        ]
    },
    {
        id: "thread2",
        bookId: "4",
        buyerId: "user1",
        sellerId: "user3",
        messages: [
            { id: "msg4", senderId: "user1", text: "Bonjour, je suis intéressé par Dune. Le prix est-il négociable ?", timestamp: "2024-07-27T15:30:00Z" },
            { id: "msg5", senderId: "user3", text: "Bonjour, non désolé le prix est ferme, le livre est comme neuf.", timestamp: "2024-07-27T16:00:00Z" },
        ]
    }
]

// Mock current user - in a real app this would come from an auth context
export const currentUserId = "user1";
