/* Static images */
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

// Best Sellers
import taytay from "./assets/images/books/taylor_swift.jpg";
import welcome from "./assets/images/books/welcome_to_the_club.jpg";
import mario from "./assets/images/books/mario.jpg";
import ablaze from "./assets/images/books//ablaze.jpg";

// Trending
import melania from "./assets/images/books/Melania.jpg";
import whatIAteInOneYear from "./assets/images/books/what_i_ate_in_one_year.jpg";
import bornInACrime from "./assets/images/books/born_a_crime.jpg";
import onWriting from "./assets/images/books/on_writing.jpg";

// On Sale
import romeo from "./assets/images/books/romeo_juliet.jpg";
import hamlet from "./assets/images/books/hamlet.jpg";
import harryPotter from "./assets/images/books//harry_potter.jpg";
import yellowStone from "./assets/images/books/yellowstone.jpg";

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
import trump from "./assets/images/books/trump.jpg";
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

// Default image
import noImage from "./assets/images/books/no-image.jpg";
import { BookItem, ShoppingCartItem } from "./Types";

const imageMap: { [key: string]: { [key: number]: string } } = {
  "New Releases": {
    1001: img1984,
    1002: imgAllTheDarkColors,
    1003: imgGreatGatsby,
    1004: imgTheHousemaid,
    1005: imgDaydream,
    1006: rmrCreatures,
  },
  "For You": {
    1007: sapiens,
    1008: animalFarm,
    1009: whyNationFail,
    1010: originOfSecies,
    1011: bananasBeaches,
    1012: imaginedCommunities,
  },
  "Best Sellers": {
    1013: taytay,
    1014: welcome,
    1015: mario,
    1016: ablaze,
  },
  Trending: {
    1017: melania,
    1018: whatIAteInOneYear,
    1019: bornInACrime,
    1020: onWriting,
  },
  "On Sale": {
    1021: romeo,
    1022: hamlet,
    1023: harryPotter,
    1024: yellowStone,
  },
  Fiction: {
    1025: courtOfMistAndRuin,
    1026: assassinsBlade,
    1027: houseInCerulean,
    1028: reckless,
    1029: thingsWeNever,
    1030: butcher,
    1031: houseOfEarth,
    1032: houseOfSky,
    1033: zodiac,
    1034: twoTwisted,
    1035: ironFlames,
    1036: worldWalkers,
  },
  Business: {
    1037: zeroToOne,
    1038: startupWife,
    1039: trump,
    1040: wolrdBusiness,
    1041: britishBusinessman,
  },
  Romance: {
    1042: lastLetter,
    1043: everySummerAfter,
    1044: pumpkinSpiceCafe,
    1045: pickleballers,
    1046: itEndsWithUs,
    1047: christmasFix,
    1048: here,
    1049: miracle,
    1050: elifShafak,
  },
  Travel: {
    1051: destinationsoflife,
    1052: nationalParks,
    1053: italy,
    1054: japan,
    1055: svalbard,
    1056: rideofHerLife,
  },
  Cooking: {
    1057: mediterraneanCook,
    1058: antiInflammatory,
    1059: vegan,
    1060: italiancooking,
    1061: hundredcookies,
    1062: baking101,
    1063: foodLab,
    1064: natasha,
  },
  "Action & Adventure": {
    1065: alchemist,
    1066: lifeOfPi,
    1067: tomSawyer,
    1068: robinHood,
  },
  DIY: {
    1069: diyBiogas,
    1070: masterDiy,
    1071: diyForDummies,
    1072: diyFanzines,
    1073: diyForHomeRepair,
    1074: diyStringArt,
  },
};

export const VATAX = 5.3;

// Function to add picture paths to each book
export const addLocalImagePaths = (books: BookItem[], categoryName: string) => {
  return books.map((book: BookItem) => ({
    ...book,
    picture: imageMap[categoryName][book.bookId] || noImage, // Fallback to default image
  }));
};

export const findImageByBookId = (id: number): string => {
  for (const key in imageMap) {
    if (imageMap[key][id] !== undefined) {
      return imageMap[key][id];
    }
  }
  return noImage; // Fallback to default image
};

// From https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const PriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const asDollarsAndCents = function (cents: number) {
  return PriceFormatter.format(cents / 100.0);
};

// From https://github.com/validatorjs
const US_MOBILE_PHONE_PATTERN =
  /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/;

export function isMobilePhone(input: string): boolean {
  return US_MOBILE_PHONE_PATTERN.test(input);
}

const EMAIL_Pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

export function isvalidEmail(input: string): boolean {
  return EMAIL_Pattern.test(input);
}
// From https://github.com/validatorjs
/* eslint-disable max-len */
const creditCard =
  /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
/* eslint-enable max-len */

export function isCreditCard(str: string) {
  const sanitized = str.replace(/[- ]+/g, "");

  if (!creditCard.test(sanitized)) {
    return false;
  }

  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += (tmpNum % 10) + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
}

export const subtotal = (cart: ShoppingCartItem[]) => {
  let sum = 0;
  for (const item of cart) {
    sum += item.book.price * item.quantity;
  }
  return sum;
};

export const calculateTotalQuantity = (cart: ShoppingCartItem[]) => {
  let sum = 0;
  for (const item of cart) {
    sum += item.quantity;
  }
  return sum;
};
