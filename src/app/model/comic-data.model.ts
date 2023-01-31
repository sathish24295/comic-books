export interface ComicBookListElement {
  id?: string;
  name?: string;
  coverimageurl?: string;
  publicationdate?: Date;
  genre?: string;
  excerpt?: string;
  writtenby?: string[];
  publisher?: string;
}

export const ELEMENT_DATA: ComicBookListElement[] = [
  {
    id: '1',
    name: 'Hawkeye',
    coverimageurl: 'assets/comics/Hawkeye.jpg',
    publicationdate: new Date('10/20/2000'),
    genre: 'Comedy',
    excerpt:
      'A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. "Please," asks the stranger, "draw me a sheep." And the pilot realizes that when life\'s events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers.',
    writtenby: ['Paulo Coelho'],
    publisher: 'Marvel Comics',
  },
  {
    id: '2',
    name: 'King Snake',
    coverimageurl: 'assets/comics/KingSnake.jpg',
    publicationdate: new Date('08/13/2004'),
    genre: 'Horror',
    excerpt:
      'The story of a convicted Australian bank robber and heroin addict who escapes prison and eventually finds himself in India, this novel is an account of his days in the Bombay of the 1980s. Beautifully written, this novel based on true events is the story of one man’s search for meaning as he attempts to survive without a home, family, or identity, in a new country.',
    writtenby: ['Elizabeth Stroud'],
    publisher: 'Penguin Random House',
  },
  {
    id: '3',
    name: 'Game of Thrones',
    coverimageurl: 'assets/comics/GOT.jpg',
    publicationdate: new Date('03/21/2006'),
    genre: 'Fiction',
    excerpt: 'This place belonged to the children of the forest',
    writtenby: ['George R.R Martin'],
    publisher: 'HarperCollins',
  },

  {
    id: '4',
    name: 'Song of ice and Fire',
    coverimageurl: 'assets/comics/SongOfIceAndFire.jpg',
    publicationdate: new Date('04/11/2007'),
    genre: 'Romance',
    excerpt: 'I swear.Elia did not sound happy.',
    writtenby: ['James'],
    publisher: 'Red house',
  },
  {
    id: '5',
    name: 'Winds of winter',
    coverimageurl: 'assets/comics/WindsOfWinter.jpg',
    publicationdate: new Date('05/12/2008'),
    genre: 'Comedy',
    excerpt:
      'Queen Alicent rose to the challenge, closing the gates of castle and city, sending the gold cloaks to the walls, and dispatching riders on swift horses to find Prince Aemond and fetch him back',
    writtenby: ['Ricky'],
    publisher: 'Red gaint house',
  },
  {
    id: '6',
    name: 'Sound of love',
    coverimageurl: 'assets/comics/SoundOfLove.jpg',
    publicationdate: new Date('06/11/2006'),
    genre: 'Romance',
    excerpt: 'Its not easy to hear the sound of love',
    writtenby: ['Adam'],
    publisher: 'Sydney new publication',
  },
  {
    id: '7',
    name: 'The Flash',
    coverimageurl: 'assets/comics/Flash.jpg',
    publicationdate: new Date('08/11/2007'),
    genre: 'Superhero',
    excerpt:
      'Born to Run may be one of Wally West’s greatest stories during his time as The Flash',
    writtenby: ['Masashi Tanaka'],
    publisher: 'DC Comics',
  },
  {
    id: '8',
    name: 'Cross Region',
    coverimageurl: 'assets/comics/CrossRegion.jpg',
    publicationdate: new Date('08/11/2008'),
    genre: 'Thriller',
    excerpt:
      'And as her lord husband Prince Daemon escorted her from the hall, cuts were seen upon Her Grace’s legs and the palm of her left hand,.',
    writtenby: ['Andrew Vachss'],
    publisher: 'Oscar publication',
  },
  {
    id: '9',
    name: 'Soulmate',
    coverimageurl: 'assets/comics/SoulMate.jpg',
    publicationdate: new Date('08/11/2009'),
    genre: 'Romance',
    excerpt: 'Anything for you and everything for you',
    writtenby: ['Shane'],
    publisher: 'New south publication',
  },
  {
    id: '10',
    name: 'The Little Prince',
    coverimageurl: 'assets/comics/LittlePrince.jpg',
    publicationdate: new Date('09/10/2009'),
    genre: 'Thriller',
    excerpt: 'Power is ultimate in kingland',
    writtenby: ['Jenny'],
    publisher: 'NSW publication',
  },
];

interface PublishersElement {
  label: string;
  value: string;
}

export const Publishers: PublishersElement[] = [
  { label: 'Marvel Comics', value: 'marvel' },
  { label: 'DC Comics', value: 'dc' },
  { label: 'Dark Horse Comics', value: 'darkhorse' },
  { label: 'Image Comics', value: 'image' },
  { label: 'IDW Publishing', value: 'idw' },
  { label: 'Valiant Comics', value: 'valiant' },
  { label: 'Ace Comics', value: 'ace' },
  { label: 'Vertigo', value: 'vertigo' },
  { label: 'Archie Comics', value: 'archie' },
  { label: 'Black Mask', value: 'black' },
  { label: 'Kodansha Comics', value: 'kodansha' },
  { label: 'Dynamite', value: 'dynamite' },
  { label: 'Red house', value: 'redhouse' },
  { label: 'Penguin Random House', value: 'penguin' },
  { label: 'HarperCollins', value: 'harpercollins' },
  { label: 'Red gaint house', value: 'redgaint' },
  { label: 'Sydney new publication', value: 'sydney' },
  { label: 'Oscar publication', value: 'oscar' },
  { label: 'New south publication', value: 'newsouth' },
  { label: 'NSW publication', value: 'nsw' },
];

export const Authors = [
  'Paulo Coelho',
  'Elizabeth Stroud',
  'George R.R Martin',
  'James',
  'Ricky',
  'Adam',
  'Masashi Tanaka',
  'Andrew Vachss',
  'Shane',
  'Jenny',
  'Stan Lee',
  'Frank Miller',
  'John Byrne',
  'Alan Moore',
  'Grant Morrison',
  'Peter David',
  'Jim Starlin',
  'Gail Simone',
  'Wendy Pini',
  'Kazuki Takahashi',
];
