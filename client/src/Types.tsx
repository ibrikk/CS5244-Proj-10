// New Releases
import img1984 from "./assets/images/books/1984.jpg";
import imgAllTheDarkColors from "./assets/images/books/all_the_dark_colors.jpg";
import imgGreatGatsby from "./assets/images/books/great-gratsby.jpg";
import imgTheHousemaid from "./assets/images/books/the_housemaid.jpg";
import imgDaydream from "./assets/images/books/daydream.jpg";
import rmrCreatures from "./assets/images/books/remarkably.jpg";

// For You
import sapiens from "./assets/images/books//sapiens.jpg";
import animalFarm from "./assets/images/books/Animal Farm.jpg";
import whyNationFail from "./assets/images/books/daron acemoglu.jpg";
import originOfSecies from "./assets/images/books/Darvin Origins.jpg";
import bananasBeaches from "./assets/images/books//cyntia Enloe.jpg";
import imaginedCommunities from "./assets/images/books/imagined communities.jpg";

// Fiction
import courtOfMistAndRuin from "./assets/images/books//Court of mis.jpg";
import assassinsBlade from "./assets/images/books/Assassins blade.jpg";
import houseInCerulean from "./assets/images/books/House Cerulean.jpg";
import reckless from "./assets/images/books//reckless.jpg";
import thingsWeNever from "./assets/images/books/things_we_never_got_offer.jpg";
import butcher from "./assets/images/books/Butcher and Blackbird.jpg";
import houseOfEarth from "./assets/images/books/House of Earth and Blood.jpg";
import houseOfSky from "./assets/images/books//house of sky and breath.jpg";
import zodiac from "./assets/images/books/zodiac academy 2.jpg";
import twoTwisted from "./assets/images/books/two twisted crowns.jpg";
import ironFlames from "./assets/images/books/Iron_falems.jpg";
import worldWalkers from "./assets/images/books/World_of_walkers.jpg";

// Business
import zeroToOne from "./assets/images/books/startup.jpg";
import startupWife from "./assets/images/books/Startup_Wife.jpg";
// import ceoMind from "./assets/images/books/CEO Mind.gif";
import wolrdBusiness from "./assets/images/books/worldBusiness.jpg";
import britishBusinessman from "./assets/images/books/britishBusinessman.jpg";

// Romance
import lastLetter from "./assets/images/books/lastLetter.jpg";
import everySummerAfter from "./assets/images/books/everysummer.jpg";
import pumpkinSpiceCafe from "./assets/images/books/9780008610678_l.jpg";
import pickleballers from "./assets/images/books/pickleballer.jpg";
import itEndsWithUs from "./assets/images/books/it ends with us.jpg";
import christmasFix from "./assets/images/books/christmasfix.jpg";
import here from "./assets/images/books/here.jpg";
import miracle from "./assets/images/books/miracle.jpg";
import elifShafak from "./assets/images/books/elifShafak.jpg";

// Travel
import destinationsoflife from "./assets/images/books/destinationsoflife.jpg";
import nationalParks from "./assets/images/books/nationalparksUS.jpg";
import italy from "./assets/images/books/italy.jpg";
import japan from "./assets/images/books/japan.jpg";
import svalbard from "./assets/images/books/svalbard.jpg";
import rideofHerLife from "./assets/images/books/rideofHerLife.jpg";

// Cooking
import mediterraneanCook from "./assets/images/books/mediterranean.jpg";
import antiInflammatory from "./assets/images/books/anti-inflammatory.jpg";
import vegan from "./assets/images/books/vegan.jpg";
import italiancooking from "./assets/images/books/italianCooking.jpg";
import hundredcookies from "./assets/images/books/cookies.jpg";
import baking101 from "./assets/images/books/gordonramsey.jpg";
import foodLab from "./assets/images/books/foodLab.jpg";
import natasha from "./assets/images/books/natasha.jpg";

// Action & Adventure
import alchemist from "./assets/images/books/alchemist.jpg";
import lifeOfPi from "./assets/images/books/lifeofPi.jpg";
import tomSawyer from "./assets/images/books/tomSawyer.jpg";
import robinHood from "./assets/images/books/robinhood.jpg";

// DIY
import diyBiogas from "./assets/images/books/DIY.jpg";
import masterDiy from "./assets/images/books/masterDiy.jpg";
import diyForDummies from "./assets/images/books/diyforDummies.jpg";
import diyFanzines from "./assets/images/books/fanzinesDiy.jpg";
import diyForHomeRepair from "./assets/images/books/DiyhomeBuild.jpg";
import diyStringArt from "./assets/images/books/diyStringArt.jpg";

export interface BookMock {
  id: number;
  title: string;
  author: string;
  price: number;
  picture: string;
  pictureDescription: string;
  isPublic: boolean;
}

export interface BookItem {
  bookId: number;
  categoryId: number;
  title: string;
  author: string;
  description: string;
  isFeatured: boolean;
  isPublic: boolean;
  price: number;
  rating: number;
  picture: string;
}
export interface CategoryMock {
  id: number;
  category: string;
  books: BookMock[];
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}

export class ShoppingCartItem {
  id: number;
  book: BookItem;
  quantity: number;

  constructor(theBook: BookItem) {
    this.id = theBook.bookId;
    this.book = theBook;
    this.quantity = 1;
  }
}

export interface ContextProps {
  children: JSX.Element | JSX.Element[];
}

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
export interface CustomerForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpiryMonth: number;
  ccExpiryYear: number;
}

export interface Order {
  orderId: number;
  amount: number;
  dateCreated: number;
  confirmationNumber: number;
  customerId: number;
}

export interface OrderDetails {
  order: Order;
  customer: CustomerForm;
  books: BookItem[];
  lineItems: LineItem[];
}

export interface ServerErrorResponse {
  reason: string;
  message: string;
  fieldName: string;
  error: boolean;
}

export interface LineItem {
  bookId: number;
  orderId: number;
  quantity: number;
}
export interface Customer {
  customerName: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpDate: number;
}

const mockData: CategoryMock[] = [
  {
    id: 1001,
    category: "New Releases",
    books: [
      {
        id: 1,
        title: "1984",
        author: "George Orwell",
        price: 17.45,
        picture: img1984,
        pictureDescription: "1984 book cover",
        isPublic: true,
      },
      {
        id: 2,
        title: "All The Colors of the Dark",
        author: "Chris Walker",
        price: 13.59,
        picture: imgAllTheDarkColors,
        pictureDescription: "All The Colors of the Dark book cover",
        isPublic: true,
      },
      {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 15.99,
        picture: imgGreatGatsby,
        pictureDescription: "The Great Gatsby book cover",
        isPublic: false,
      },
      {
        id: 4,
        title: "The Housemaid",
        author: "Freida McFadden",
        price: 8.99,
        picture: imgTheHousemaid,
        pictureDescription: "The Housemaid book cover",
        isPublic: true,
      },
      {
        id: 5,
        title: "Daydream",
        author: "Hannah Grace",
        price: 12.5,
        picture: imgDaydream,
        pictureDescription: "Daydream book cover",
        isPublic: false,
      },
      {
        id: 6,
        title: "Remarkably Bright Creatures",
        author: "Shelby Van Pelt",
        price: 18.99,
        picture: rmrCreatures,
        pictureDescription: "Remarkably Bright Creatures book cover",
        isPublic: true,
      },
    ],
  },
  {
    id: 1002,
    category: "For You",
    books: [
      {
        id: 6,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 24.99,
        picture: sapiens,
        pictureDescription: "Sapiens book cover",
        isPublic: true,
      },
      {
        id: 7,
        title: "Animal Farm",
        author: "George Orwell",
        price: 5.5,
        picture: animalFarm,
        pictureDescription: "Animal Farm book cover",
        isPublic: true,
      },
      {
        id: 8,
        title: "Why Nations Fail",
        author: "Daron Acemoglu and James A. Robinson",
        price: 13.5,
        picture: whyNationFail,
        pictureDescription: "Why Nations Fail book cover",
        isPublic: false,
      },
      {
        id: 9,
        title: "Origin of Species",
        author: "Charles Darwin",
        price: 29.5,
        picture: originOfSecies,
        pictureDescription: "Origin of Species book cover",
        isPublic: true,
      },
      {
        id: 10,
        title: "Bananas, Beaches, and Bases",
        author: "Cynthia Enloe",
        price: 15.8,
        picture: bananasBeaches,
        pictureDescription: "Bananas, Beaches, and Bases book cover",
        isPublic: false,
      },
      {
        id: 11,
        title: "Imagined Communities",
        author: "Benedict Anderson",
        price: 18.4,
        picture: imaginedCommunities,
        pictureDescription: "Imagined Communities book cover",
        isPublic: true,
      },
    ],
  },
  {
    id: 1003,
    category: "Fiction",
    books: [
      {
        id: 12,
        title: "A Court of Mist and Ruin",
        author: "Sarah J. Maas",
        price: 21.5,
        picture: courtOfMistAndRuin,
        pictureDescription: "A Court of Mist and Ruin book cover",
        isPublic: true,
      },
      {
        id: 13,
        title: "The Assassin's Blade",
        author: "Sarah J. Maas",
        price: 14.5,
        picture: assassinsBlade,
        pictureDescription: "The Assassin's Blade book cover",
        isPublic: true,
      },
      {
        id: 14,
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        price: 18.45,
        picture: houseInCerulean,
        pictureDescription: "The House in the Cerulean Sea book cover",
        isPublic: false,
      },
      {
        id: 15,
        title: "Reckless",
        author: "Luan Roberts",
        price: 11.75,
        picture: reckless,
        pictureDescription: "Reckless book cover",
        isPublic: true,
      },
      {
        id: 16,
        title: "Things We Never Got Over",
        author: "Lucky Score",
        price: 15.6,
        picture: thingsWeNever,
        pictureDescription: "Things We Never Got Over book cover",
        isPublic: false,
      },
      {
        id: 17,
        title: "The Butcher and the Blackbird",
        author: "Brynne Weaver",
        price: 23.5,
        picture: butcher,
        pictureDescription: "The Butcher and the Blackbird book cover",
        isPublic: true,
      },
      {
        id: 18,
        title: "House of Earth and Blood",
        author: "Sarah J. Maas",
        price: 23.99,
        picture: houseOfEarth,
        pictureDescription: "House of Earth and Blood book cover",
        isPublic: true,
      },
      {
        id: 19,
        title: "House of Sky and Breath",
        author: "Sarah J. Maas",
        price: 24.99,
        picture: houseOfSky,
        pictureDescription: "House of Sky and Breath book cover",
        isPublic: false,
      },
      {
        id: 20,
        title: "Zodiac Academy 2",
        author: "C. Peckham and S. Valenti",
        price: 23.5,
        picture: zodiac,
        pictureDescription: "Zodiac Academy 2 book cover",
        isPublic: false,
      },
      {
        id: 21,
        title: "Two Twisted Crowns",
        author: "Rachel Gillig",
        price: 11.89,
        picture: twoTwisted,
        pictureDescription: "Two Twisted Crowns book cover",
        isPublic: true,
      },
      {
        id: 22,
        title: "Iron and Flames",
        author: "Rebecca Yarros",
        price: 19.99,
        picture: ironFlames,
        pictureDescription: "Iron and Flames book cover",
        isPublic: false,
      },
      {
        id: 23,
        title: "World of Walkers",
        author: "Neal Asher",
        price: 29.92,
        picture: worldWalkers,
        pictureDescription: "World of Walkers book cover",
        isPublic: true,
      },
    ],
  },
  {
    id: 1004,
    category: "Business",
    books: [
      {
        id: 24,
        title: "Zero to One: Notes on Startups, or How to Build the Future",
        author: "Peter Thiel",
        price: 16.99,
        picture: zeroToOne,
        pictureDescription: "Zero to One book cover",
        isPublic: true,
      },
      {
        id: 25,
        title: "The Startup Wife",
        author: "Tahmima Anam",
        price: 27.9,
        picture: startupWife,
        pictureDescription: "The Startup Wife book cover",
        isPublic: false,
      },
      {
        id: 26,
        title:
          "The Mind of the CEO: The World's Business Leaders Talk about Leadership, Responsibility the Future of the Corporation, and What Keeps Them Up at Night",
        author: "Jeffrey E. Garten",
        price: 29.99,
        picture: startupWife,
        pictureDescription: "The Mind of the CEO book cover",
        isPublic: true,
      },
      {
        id: 27,
        title: "The World's Business Cultures: How to Unlock Them",
        author: "Barry Tomalin, Ma, Mike Nicks",
        price: 12.44,
        picture: wolrdBusiness,
        pictureDescription: "The World's Business Cultures book cover",
        isPublic: false,
      },
      {
        id: 28,
        title:
          "Whenever I Hear That Song: The memoir of a very British businessman",
        author: "Martin Broughton",
        price: 26.7,
        picture: britishBusinessman,
        pictureDescription: "Whenever I Hear That Song book cover",
        isPublic: true,
      },
    ],
  },
  {
    id: 1005,
    category: "Romance",
    books: [
      {
        id: 29,
        title: "The Last Letter",
        author: "Rebecca Yarros",
        price: 12.99,
        picture: lastLetter,
        pictureDescription: "The Last Letter book cover",
        isPublic: true,
      },
      {
        id: 30,
        title: "Every Summer After",
        author: "Carley Fortune",
        price: 14.99,
        picture: everySummerAfter,
        pictureDescription: "Every Summer After book cover",
        isPublic: true,
      },
      {
        id: 31,
        title: "The Pumpkin Spice Café",
        author: "Laurie Gilmore",
        price: 18.99,
        picture: pumpkinSpiceCafe,
        pictureDescription: "The Pumpkin Spice Café book cover",
        isPublic: false,
      },
      {
        id: 32,
        title: "Pickleballers",
        author: "Ilana Long",
        price: 15.99,
        picture: pickleballers,
        pictureDescription: "Pickleballers book cover",
        isPublic: true,
      },
      {
        id: 33,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        price: 14.99,
        picture: itEndsWithUs,
        pictureDescription: "It Ends with Us book cover",
        isPublic: false,
      },
      {
        id: 34,
        title: "The Christmas Fix",
        author: "Lucy Score",
        price: 14.99,
        picture: christmasFix,
        pictureDescription: "The Christmas Fix book cover",
        isPublic: true,
      },
      {
        id: 35,
        title: "Counting Miracles",
        author: "Nicholas Sparks",
        price: 30.96,
        picture: miracle,
        pictureDescription: "Counting Miracles book cover",
        isPublic: true,
      },
      {
        id: 36,
        title: "Here One Moment",
        author: "Liane Moriarty",
        price: 20.0,
        picture: here,
        pictureDescription: "Here One Moment book cover",
        isPublic: true,
      },
      {
        id: 37,
        title: "The Forty Rules of Love: A Novel of Rumi",
        author: "Elif Shafak",
        price: 14.99,
        picture: elifShafak,
        pictureDescription: "The Forty Rules of Love book cover",
        isPublic: false,
      },
    ],
  },
  {
    id: 1006,
    category: "Travel",
    books: [
      {
        id: 38,
        title:
          "Destinations of a Lifetime: 225 of the World's Most Amazing Places",
        author: "National Geographic",
        price: 14.11,
        picture: destinationsoflife,
        pictureDescription: "Destinations of a Lifetime book cover",
        isPublic: false,
      },
      {
        id: 39,
        title:
          "National Geographic Complete National Parks of the United States",
        author: "National Geographic",
        price: 24.99,
        picture: nationalParks,
        pictureDescription:
          "National Geographic Complete National Parks of the United States book cover",
        isPublic: true,
      },
      {
        id: 40,
        title: "Best of Italy",
        author: "Rick Steves",
        price: 18.99,
        picture: italy,
        pictureDescription: "Best of Italy book cover",
        isPublic: true,
      },
      {
        id: 41,
        title: "Japan",
        author: "Lonely Planet",
        price: 21.99,
        picture: japan,
        pictureDescription: "Japan book cover",
        isPublic: false,
      },
      {
        id: 42,
        title:
          "Life on Svalbard: Finding Home on a Remote Island Near the North Pole",
        author: "Cecilia Blomdahl",
        price: 60.21,
        picture: svalbard,
        pictureDescription: "Life on Svalbard book cover",
        isPublic: true,
      },
      {
        id: 43,
        title:
          "The Ride of Her Life: The True Story of a Woman, Her Horse, and Their Last-Chance Journey Across America",
        author: "Elizabeth Letts",
        price: 28.34,
        picture: rideofHerLife,
        pictureDescription: "The Ride of Her Life book cover",
        isPublic: false,
      },
    ],
  },
  {
    id: 1007,
    category: "Cooking",
    books: [
      {
        id: 44,
        title:
          "The Complete Mediterranean Cookbook: 500 Vibrant, Kitchen-Tested Recipes for Living and Eating Well Every Day",
        author: "The Editors at America's Test Kitchen",
        price: 24.99,
        picture: mediterraneanCook,
        pictureDescription: "The Complete Mediterranean Cookbook book cover",
        isPublic: true,
      },
      {
        id: 45,
        title:
          "The Complete Anti-Inflammatory Diet for Beginners: A No-Stress Meal Plan with Easy Recipes to Heal the Immune System",
        author: "Dorothy Calimeris and Lulu Cook",
        price: 11.99,
        picture: antiInflammatory,
        pictureDescription:
          "The Complete Anti-Inflammatory Diet for Beginners book cover",
        isPublic: false,
      },
      {
        id: 46,
        title:
          "Big Vegan Flavor: Techniques and 150 Recipes to Master Vegan Cooking",
        author: "Nisha Vora",
        price: 49.0,
        picture: vegan,
        pictureDescription: "Big Vegan Flavor book cover",
        isPublic: true,
      },
      {
        id: 47,
        title: "Essentials of Classic Italian Cooking",
        author: "Marcella Hazan",
        price: 29.8,
        picture: italiancooking,
        pictureDescription: "Essentials of Classic Italian Cooking book cover",
        isPublic: true,
      },
      {
        id: 48,
        title: "100 Cookies: The Baking Book for Every Kitchen",
        author: "Sarah Kieffer",
        price: 19.99,
        picture: hundredcookies,
        pictureDescription: "100 Cookies book cover",
        isPublic: false,
      },
      {
        id: 49,
        title: "Baking 101: From Cookies to Cakes and Everything In-Between",
        author: "Gordon Ramsay",
        price: 11.3,
        picture: baking101,
        pictureDescription: "Baking 101 book cover",
        isPublic: true,
      },
      {
        id: 50,
        title: "The Food Lab: Better Home Cooking Through Science",
        author: "J. Kenji López-Alt",
        price: 35.0,
        picture: foodLab,
        pictureDescription: "The Food Lab book cover",
        isPublic: true,
      },
      {
        id: 51,
        title: "Natasha's Kitchen: 100+ Easy Family-Favorite Recipes",
        author: "Natasha Kravchuk",
        price: 11.43,
        picture: natasha,
        pictureDescription: "Natasha's Kitchen book cover",
        isPublic: true,
      },
    ],
  },
  {
    id: 1008,
    category: "Action & Adventure",
    books: [
      {
        id: 52,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 14.99,
        picture: alchemist,
        pictureDescription: "The Alchemist book cover",
        isPublic: true,
      },
      {
        id: 53,
        title: "Life of Pi",
        author: "Yann Martel",
        price: 12.98,
        picture: lifeOfPi,
        pictureDescription: "Life of Pi book cover",
        isPublic: true,
      },
      {
        id: 54,
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        price: 8.75,
        picture: tomSawyer,
        pictureDescription: "The Adventures of Tom Sawyer book cover",
        isPublic: false,
      },
      {
        id: 55,
        title: "Robin Hood: The Classic Adventure Tale",
        author: "Nicky Raven",
        price: 5.97,
        picture: robinHood,
        pictureDescription: "Robin Hood book cover",
        isPublic: true,
      },
    ],
  },
  {
    id: 1009,
    category: "DIY",
    books: [
      {
        id: 56,
        title: "DIY Biogas: Build Your Own Biogas Plant",
        author: "Paul Scheckel",
        price: 7.06,
        picture: diyBiogas,
        pictureDescription: "DIY Biogas book cover",
        isPublic: true,
      },
      {
        id: 57,
        title: "Master Basic DIY: Teach Yourself",
        author: "DIY Doctor",
        price: 30.51,
        picture: masterDiy,
        pictureDescription: "Master Basic DIY book cover",
        isPublic: false,
      },
      {
        id: 58,
        title: "Building DIY Websites for Dummies",
        author: "Jennifer DeRosa",
        price: 21.43,
        picture: diyForDummies,
        pictureDescription: "Building DIY Websites for Dummies book cover",
        isPublic: true,
      },
      {
        id: 59,
        title: "Fanzines: The DIY Revolution",
        author: "Teal Triggs",
        price: 39.87,
        picture: diyFanzines,
        pictureDescription: "Fanzines book cover",
        isPublic: true,
      },
      {
        id: 60,
        title: "Beginner's Guide to DIY & Home Repair",
        author: "Jo Behari, Alison Winfield-Chislett",
        price: 25.43,
        picture: diyForHomeRepair,
        pictureDescription: "Beginner's Guide to DIY & Home Repair book cover",
        isPublic: false,
      },
      {
        id: 61,
        title: "DIY String Art: 24 Designs to Create and Hang",
        author: "Jesse Dresbach",
        price: 17.88,
        picture: diyStringArt,
        pictureDescription: "DIY String Art book cover",
        isPublic: true,
      },
    ],
  },
];

export default mockData;
