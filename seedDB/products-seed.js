const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Journaling supplies
  const journalingSupplies_titles = [
    "Premium Metallic Marker Calligraphy Brush Pens, Ohuhu 12 PCS Glitter Paint Pen",
    "Factor Notes Notebook: 100 GSM, Dot Grid, A5, 144 Pages - Bullet Journal Diary (The Pastel Pink Roses)",
    "20 Rolls Washi Tape Set, Ocean Collection Tape with 3 Sizes 10/15/30mm, Sea-Blue Style Decorative Masking Tapes",
    "Party Time (50 Sheets, 100 Pages) A5 Sketchbook | Top Spiral-Bound Sketchpad for Artists",
    "Sakura Pigma Micron line Drawing 8 Color pens Set, Bible journaling Study kit, Assorted fine Point 01 (Multi 8 Colors)",
    "Double Sided Adhesive Silicon Tape, Transparent Adhesive Heavy Duty, Heat Resistant,Multi-Functional, Removable, Sticky,No Trace,Anti-Slip Gel,Nano,Tape (3 Meter)",
    "Metallic Brush Pens - Soft Brush Tip for Calligraphy, Hand Lettering, Colouring, Scrapbooking, Card Making - Set of 10 Colors.",
    "Sketch Book, Ohuhu A4 Drawing book for artists, 120LB/200GSM drawing pad",
    "12 Rolls Cute Gold Foil Flower Decorative Masking Tape Scrapbooking Tape",
    "Vintage Scrapbooking DIY Material Paper Pack Floral News Paper Letter Decorative Antique"

  ];
  const journalingSupplies_imgs = [
    "https://m.media-amazon.com/images/I/818wrJYPgTL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71-SgT-uRFL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61Vy6KtXYaL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/914JTyRS7ES._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81WfqnQa4iL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/51FDfA4kHRL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81ATSKMQZiL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81DodRImX6L._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61kT5Vr-VQS._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71o75T2Y4MS._AC_UL480_FMwebp_QL65_.jpg"
  ];

  //--------------------Travel
  const travel_titles = [
    "Multi-Functional Travel Storage Bags Luggage Suitcase Compression Pouches",
    "Men's and Women's Velvet Neck Pillow with Sleeping Eye Mask",
    "8 Pieces Travel kit Bottle Set, Colorful Plastic Multipurpose Cosmetic Toiletries Travel Refillable Bottles and Jars",
    "Black Hardsided Cabin Trolley",
    "Black Nylon Unisex Passport Holder",
    "Lightweight Foldable Rexine Travel Handbag Storage Carrying Bag (50 x 38 x 20 cm) Off White",
    "Disposable Toilet Seat Covers (20 Sheets) | No Direct Contact with Unhygienic Seats|",
    "Travel Organizer Bag Clothes Toiletry Small Accessories Storage Bag Zipper Luggage,Pink",
    "Universal Travel Adapter, International All in One Worldwide Travel Adapter and Wall Charger with USB Ports"

  ];

  const travel_imgs = [
    "https://m.media-amazon.com/images/I/51S6+VeicvL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/91xfrepS+AL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/51YN-aURZhL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71s7HbyqzEL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81wu+fke33L._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/91tsZ9Kt8iL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/71kNrESVBxL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61BZg5DUFwL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/611RCy1XjsL._AC_UL480_FMwebp_QL65_.jpg"
  ];

  //--------------------Jewellery
  const jewellery_titles = [
    "Stylish Pendant Necklace For Women",
    "AD & Pearl Stud Earrings Jewellery For Women",
    "Brass and Necklace for Women",
    "Hair Accessories 6 Pcs Hollow Hair Clips Medium Metal Clutchers",
    "Butterfly pendant necklace",
    "Emerald earrings",
    "Unicorn Charm Pendant Chain for Young Girls",
    "Solitaire Heart Pendant Chain Necklace",
    "Set of 9-8 Boho Midi Finger Crystal Rings for Girls and Women",
    "Jewellery Gold Plated Enamelled Combo of Rings for Girls",
    "Silver Plated Butterfly Alloy Metal Couple Ring"
  ];

  const jewellery_imgs = [
    "https://m.media-amazon.com/images/I/61UKLJgN8HL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/51N2S-vpvxL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/51un3qT-z2L._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81OmMxkKmSL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/41AY4nvAchL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/81-36DDkTOL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61nKqIynKOL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61HKXT8-2nL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/6196-72ofmL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/31AGkKewFFL._AC_UL480_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/61nAQP3edAL._AC_UL480_FMwebp_QL65_.jpg"
  ];

  //--------------------Bags
  const bags_titles = [
    "Pink Leather Crossbody Bag",
    "Stylish Pink Crossbody Bag",
    "Mini Black Carra Shoulder Bag",
    "White Leather Mini Bag with Crossbody Strap",
    "Blue Jeans Mini Bag",
    "Biege Be Dior Mini Bag with Crossbody Strap",
    "Red Be Dior Mini Bag with Crossbody Strap",
    "Light Blue Mini Bag with Golden Strap",
    "Light Green Mini Bag with Golden Strap",
    "Pastel Pink Mini Bag with Golden Strap",
    "Biege Leather Crossbody Bag",
    "White Leather Crossbody Bag",
    "Elegant White Mini Bag with Silver Strap",
    "Simple Red Mini Bag",
  ];
  const bags_imgs = [
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/DKNY_Mini_Flap_Crossbody_W_-_SS_Crossbody_R1513004_Kalbsleder_beige_%281%29_%2816080518124%29.jpg",
    "https://p1.pxfuel.com/preview/177/215/691/handbag-bag-today-the-postwoman-fashion-style-skin.jpg",
    "https://p2.piqsels.com/preview/392/1016/905/handbags-white-fashion-bag-shoulder-bag.jpg",
    "https://c.pxhere.com/photos/37/cb/camera_bag_scene_package_fashion-900156.jpg!d",
    "https://c.pxhere.com/photos/94/0e/bag_dior_x_n-867928.jpg!d",
    "https://c.pxhere.com/photos/92/ad/bag_dior_u-867943.jpg!d",
    "https://c.pxhere.com/photos/5b/ea/bag_fashion_style-518819.jpg!d",
    "https://c.pxhere.com/photos/19/aa/bag_fashion_style-518820.jpg!d",
    "https://c.pxhere.com/photos/41/9e/bag_fashion_style-518821.jpg!d",
    "https://c.pxhere.com/photos/24/f9/bag_fashion_style-518803.jpg!d",
    "https://c.pxhere.com/photos/16/e8/bag_fashion_style-518804.jpg!d",
    "https://images.unsplash.com/photo-1564422167509-4f8763ff046e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://c.pxhere.com/photos/87/f0/bag_crimson_product_photos_padlock_bag_women_bags_dot_white-1000331.jpg!d",
  ];

  //--------------------Home & Living

  const homeAndLiving_titles = [
    "7x10 ft. Area Hand knotted Rug",
    "Abstract figure painting",
    "Inhale Exhale wall print",
    "Cactus print wall art",
    "mountain wall art",
    "Custom wood Sign",
    "Turkish Lumbar pillow cover",
    "Sunflower metal wall decor",
    "Fairy light up jar",
    "Raw citrine crystal",
    "Grid wall clock",
    "Pomenarian Watercolor Art Print"
  ];
  const homeAndLiving_imgs = [
    "https://i.etsystatic.com/32501878/r/il/b6b22f/3624807703/il_340x270.3624807703_8oth.jpg",
    "https://i.etsystatic.com/5223966/r/il/1090af/2051944999/il_340x270.2051944999_qb3o.jpg",
    "https://i.etsystatic.com/9129033/r/il/07870f/1390056940/il_340x270.1390056940_45n2.jpg",
    "https://i.etsystatic.com/13032542/r/il/c3c1e1/1818347329/il_340x270.1818347329_cbzh.jpg",
    "https://i.etsystatic.com/29345702/c/2500/1500/0/0/il/e73f67/3333681583/il_340x270.3333681583_qv2i.jpg",
    "https://i.etsystatic.com/20641892/r/il/acdd09/2872910888/il_340x270.2872910888_1p03.jpg",
    "https://i.etsystatic.com/13748905/r/il/97bde1/3577206806/il_340x270.3577206806_meb3.jpg",
    "https://i.etsystatic.com/33276349/c/1637/1300/386/98/il/25a83f/3577200496/il_340x270.3577200496_3p3h.jpg",
    "https://i.etsystatic.com/11940416/r/il/d672f4/1054912259/il_340x270.1054912259_d0ag.jpg",
    "https://i.etsystatic.com/9859922/r/il/726b51/3205540364/il_340x270.3205540364_e4zu.jpg",
    "https://i.etsystatic.com/6265223/r/il/23bc04/445257431/il_340x270.445257431_p02u.jpg",
    "https://i.etsystatic.com/12477765/r/il/d03942/2008337730/il_340x270.2008337730_h0ex.jpg"
  ];

  //-----------------------Candles
  const candles_titles = [
    "Bubble cube candle",
    "12 cactus candle",
    "French lavender & Wild herbs scented candle",
    "Crystal & Herbs tealight candle",
    "U shaped ribbed candle",
    "Bookish soy wax scented candle",
    "Rope knot candle",
    "Tropical flower scented candle",
    "Fresh cut pine candle",
    "Sea shell candle",
    "Milk tea boba candle"
  ];
  const candles_imgs = [
    "https://i.etsystatic.com/26705063/c/1284/1020/0/104/il/dd275c/3376345781/il_340x270.3376345781_hsc3.jpg",
    "https://i.etsystatic.com/26225371/r/il/2af250/2755063090/il_340x270.2755063090_k54k.jpg",
    "https://i.etsystatic.com/16473066/r/il/55a81c/3136099547/il_340x270.3136099547_8y4x.jpg",
    "https://i.etsystatic.com/9859922/r/il/54c0c6/1227975882/il_340x270.1227975882_fkwb.jpg",
    "https://i.etsystatic.com/27301387/c/2130/1693/0/928/il/8d9651/3362741466/il_340x270.3362741466_mnvb.jpg",
    "https://i.etsystatic.com/26776503/r/il/0d93d9/2754459502/il_340x270.2754459502_huwv.jpg",
    "https://i.etsystatic.com/28068577/r/il/6f59ca/2970556562/il_340x270.2970556562_qece.jpg",
    "https://i.etsystatic.com/19452887/c/2752/2187/117/317/il/ed8744/3535480799/il_340x270.3535480799_o0cl.jpg",
    "https://i.etsystatic.com/14751771/c/720/572/405/18/il/859e3d/1859692403/il_340x270.1859692403_4aq7.jpg",
    "https://i.etsystatic.com/27301387/r/il/2fd0ac/3219521663/il_340x270.3219521663_hox2.jpg",
    "https://i.etsystatic.com/19849034/r/il/db1ff3/3494226927/il_340x270.3494226927_nq3r.jpg"
  ];

  //-----------------Art & Craft supplies

  const artAndCraftSupplies_titles = [
    "Sun printing kit",
    "Wooden draing stencils",
    "Paintbrush holder",
    "Recycled newspaper colour pencils",
    "DIY zebra art project kit",
    "Sketching pencil set",
    "48 painting colours set",
    "Flower letter quilling card",
    "set of 24 Acrylic paints and 3 brushes",
    "Watercolor brushpens",
    "4mm 2200 Quilling paper strips"
  ];
  const artAndCraftSupplies_imgs = [
    "https://i.etsystatic.com/17436998/r/il/1d2b14/3372903884/il_340x270.3372903884_jp5k.jpg",
    "https://i.etsystatic.com/8760642/c/1500/1192/0/179/il/b75021/2608847974/il_340x270.2608847974_g9j6.jpg",
    "https://i.etsystatic.com/25275728/r/il/17a418/2645632932/il_340x270.2645632932_qerw.jpg",
    "https://i.etsystatic.com/20753934/r/il/b5fb11/2493824208/il_340x270.2493824208_5uo6.jpg",
    "https://i.etsystatic.com/19984155/c/2250/1788/0/365/il/62081d/2344369962/il_340x270.2344369962_lfpg.jpg",
    "https://i.etsystatic.com/10066082/r/il/56b7bc/1685019358/il_340x270.1685019358_bqel.jpg",
    "https://i.etsystatic.com/26475219/r/il/b812e2/3443921271/il_340x270.3443921271_367r.jpg",
    "https://i.etsystatic.com/19841887/r/il/cc2a81/2856223364/il_340x270.2856223364_9oq6.jpg",
    "https://i.etsystatic.com/24015481/r/il/cc00e7/3031754521/il_340x270.3031754521_7tca.jpg",
    "https://i.etsystatic.com/13570985/r/il/a222bb/3470532597/il_340x270.3470532597_d7qf.jpg",
    "https://i.etsystatic.com/14105209/r/il/2af9e0/3208160828/il_340x270.3208160828_b3ph.jpg"
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 250, max: 5000 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(journalingSupplies_titles, journalingSupplies_imgs, "Journaling Supplies");
  await seedProducts(jewellery_titles, jewellery_imgs, "Jewellery");
  await seedProducts(travel_titles, travel_imgs, "Travel");
  await seedProducts(bags_titles, bags_imgs, "Bags");
  await seedProducts(
    homeAndLiving_titles,
    homeAndLiving_imgs,
    "Home & Living"
  );
  await seedProducts(artAndCraftSupplies_titles, artAndCraftSupplies_imgs, "Art & Craft supplies");
  await seedProducts(candles_titles, candles_imgs, "Candles");

  await closeDB();
}

seedDB();
