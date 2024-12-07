DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('New Releases'),('For You'),('Best Sellers'),('Trending'),('On Sale'),('Fiction'),('Business'),('Romance'),('Travel'),('Cooking'),('Action & Adventure'),('DIY');

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('1984', 'George Orwell', '', 1745, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('All The Colors of the Dark', 'Chris Walker', '', 1359, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', '', 1599, 0, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Housemaid', 'Freida McFadden', '', 899, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Daydream', 'Hannah Grace', '', 1250, 0, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Remarkably Bright Creatures', 'Shelby Van Pelt', '', 1899, 0, TRUE, FALSE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Sapiens', 'Yuval Noah Harari', '', 2499, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Animal Farm', 'George Orwell', '', 550, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Why Nations Fail', 'Daron Acemoglu and James A. Robinson', '', 1350, 0, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Origin of Species', 'Charles Darwin', '', 2950, 0, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Bananas, Beaches, and Bases', 'Cynthia Enloe', '', 1580, 0, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Imagined Communities', 'Benedict Anderson', '', 1840, 0, TRUE, FALSE, 1002);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Taylor Swift: The New York Times Best Seller', 'Maria Isabel Sanchez Vegara, Borghild Fallberg (Illustrator)', '', 958, 0, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Welcome to the Club', 'Raquel Dapice', 'Welcome to the Club: 100 Parenting Milestones You Never Saw Coming (Parenting Books, Parenting Books Best Sellers, New Parents Gift)', 935, 0, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Guinness World Records: Gamer\'s Edition 2025', 'Guinness World Records', '', 1092, 0, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Ablaze', 'Christopher Krovatin', '', 2100, 0, TRUE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Melania', 'Melania Trump', '', 2731, 0, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('What I Ate in One Year', 'Stanley Tucci', '', 2600, 0, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Born a Crime', 'Trevor Noah', '', 3100, 0, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('On Writing: A Memoir of the Craft', 'Stephen King', '', 5600, 0, TRUE, FALSE, 1004);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Romeo and Juliet', 'William Shakespeare', '', 299, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Tragedy of Hamlet: Prince of Denmark', 'William Shakespeare', '', 1631, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Harry Potter and the Cursed Child', 'J K Rowling, Jack Thorne, John Tiffany', '', 145, 0, TRUE, FALSE, 1005);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Yellowstone', 'Gabriel Gator Guilbeau', '', 1399, 0, TRUE, FALSE, 1005);


INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A Court of Mist and Ruin', 'Sarah J. Maas', '', 2150, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Assassin\'s Blade', 'Sarah J. Maas', '', 1450, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The House in the Cerulean Sea', 'TJ Klune', '', 1845, 0, FALSE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Reckless', 'Luan Roberts', '', 1175, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Things We Never Got Over', 'Lucy Score', '', 1560, 0, FALSE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Butcher and the Blackbird', 'Brynne Weaver', '', 2350, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('House of Earth and Blood', 'Sarah J. Maas', '', 2399, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('House of Sky and Breath', 'Sarah J. Maas', '', 2499, 0, FALSE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Zodiac Academy 2', 'C. Peckham and S. Valenti', '', 2350, 0, FALSE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Two Twisted Crowns', 'Rachel Gillig', '', 1189, 0, TRUE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Iron and Flames', 'Rebecca Yarros', '', 1999, 0, FALSE, FALSE, 1006);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('World of Walkers', 'Neal Asher', '', 2992, 0, TRUE, FALSE, 1006);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Zero to One: Notes on Startups, or How to Build the Future', 'Peter Thiel', '',1699, 0, TRUE, FALSE, 1007);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Startup Wife', 'Tahmima Anam', '', 2790, 0, FALSE, FALSE, 1007);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Trump: The Art of the Deal', 'Donald J Trump', '', 392, 0, TRUE, FALSE, 1007);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The World\'s Business Cultures: How to Unlock Them', 'Barry Tomalin, Ma, Mike Nicks', '', 1244, 0, FALSE, FALSE, 1007);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Whenever I Hear That Song: The memoir', 'Martin Broughton', '', 2670, 0, TRUE, FALSE, 1007);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Last Letter', 'Rebecca Yarros', '',1299, 0, TRUE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Every Summer After', 'Carley Fortune', '', 2499, 0, FALSE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Pumpkin Spice Café', 'Laurie Gilmore', '', 1899, 0, FALSE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Pickleballers', 'Ilana Long', '',1599, 0, TRUE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('It Ends with Us', 'Colleen Hoover', '', 1499, 0, FALSE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Christmas Fix', 'Lucy Score', '', 1499, 0, TRUE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Counting Miracles', 'Nicholas Sparks', '', 3096, 0, TRUE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Here One Moment', 'Liane Moriarty', '', 2000, 0, TRUE, FALSE, 1008);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Forty Rules of Love: A Novel of Rumi', 'Elif Shafak', '', 1499, 0, TRUE, FALSE, 1008);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Destinations of a Lifetime: Most Amazing Places', 'National Geographic', '', 1411, 0, FALSE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('National Geographic: Complete National Parks', 'National Geographic', '', 2499, 0, TRUE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Best of Italy', 'Rick Steves', '', 1899, 0, TRUE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Japan', 'Lonely Planet', '',2199, 0, FALSE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Life on Svalbard: Finding Home on a Remote Island', 'Cecilia Blomdahl', '', 6021, 0, TRUE, FALSE, 1009);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Ride of Her Life: The True Story of a Woman, Her Horse', 'Elizabeth Letts', '', 2834, 0, FALSE, FALSE, 1009);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Complete Mediterranean Cookbook', 'The Editors at America\'s Test Kitchen', '', 2499, 0, TRUE, FALSE, 1010);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Complete Anti-Inflammatory Diet for Beginners', 'Dorothy Calimeris and Lulu Cook', '', 1199, 0, FALSE, FALSE, 1010);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Big Vegan Flavor: Techniques and 150 Recipes', 'Nisha Vora', '', 4900, 0, TRUE, FALSE, 1010);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Essentials of Classic Italian Cooking', 'Marcella Hazan', '', 2980, 0, TRUE, FALSE, 1010);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('100 Cookies: The Baking Book for Every Kitchen', 'Sarah Kieffer', '', 1999, 0, FALSE, FALSE, 1010);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Baking 101: From Cookies to Cakes and Everything In-Between', 'Gordon Ramsay', '', 1130, 0, TRUE, FALSE, 1010);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Food Lab: Better Home Cooking Through Science', 'J. Kenji López-Alt', '', 3500, 0, TRUE, FALSE, 1010);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Natasha\'s Kitchen: 100+ Easy Family-Favorite Recipes', 'Natasha Kravchuk', '', 1143, 0, TRUE, FALSE, 1010);


INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Alchemist', 'Paulo Coelho', '', 1499, 0, TRUE, FALSE, 1011);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Life of Pi', 'Yann Martel', '', 1298, 0, TRUE, FALSE, 1011);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Adventures of Tom Sawyer', 'Mark Twain', '', 875, 0, FALSE, FALSE, 1011);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Robin Hood: The Classic Adventure Tale', 'Nicky Raven', '', 597, 0, TRUE, FALSE, 1011);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('DIY Biogas: Build Your Own Biogas Plant', 'Paul Scheckel', '', 706, 0, TRUE, FALSE, 1012);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Master Basic DIY: Teach Yourself', 'DIY Doctor', '', 3051, 0, FALSE, FALSE, 1012);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Building DIY Websites for Dummies', 'Jennifer DeRosa', '', 875, 0, FALSE, FALSE, 1012);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Fanzines: The DIY Revolution', 'Teal Triggs', '', 3987, 0, TRUE, FALSE, 1012);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Beginner\'s Guide to DIY & Home Repair', 'Jo Behari, Alison Winfield-Chislett', '', 2543, 0, FALSE, FALSE, 1012);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('DIY String Art: 24 Designs to Create and Hang', 'Jesse Dresbach', '', 1788, 0, TRUE, FALSE, 1012);