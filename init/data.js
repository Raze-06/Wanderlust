const sampleListings = [
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 3500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: "Villa",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
    category: "Camping",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
    category: "Trending",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 1900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.044, 38.9399] },
    category: "Amazing Pools",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    category: "Iconic Cities",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2286, 46.0961] },
    category: "Mountains",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
    category: "Trending",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
    category: "Iconic Cities",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.065, -17.7134] },
    category: "Amazing Pools",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 1500,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.8433, 51.833] },
    category: "Farm House",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] },
    category: "Rooms",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
    category: "Amazing Pools",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
    category: "Mountains",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] },
    category: "Iconic Cities",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] },
    category: "Villa",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands.",
    image: {
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 57.4778] },
    category: "Trending",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    category: "Rooms",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by nature.",
    image: {
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] },
    category: "Farm House",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3289, 37.4467] },
    category: "Villa",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest.",
    image: {
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0739, 9.7489] },
    category: "Camping",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
    category: "Iconic Cities",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa with ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] },
    category: "Amazing Pools",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Glass House with Lake View",
    description: "A stunning glass house overlooking a calm lake.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 3500,
    location: "Udaipur",
    country: "India",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] },
    category: "Trending",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
  {
    title: "Beachside Homestay",
    description: "Relax in this beautiful beachside home with sea views.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      fileName: "listingimage",
    },
    price: 5000,
    location: "Goa",
    country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] },
    category: "Farm House",
    owner: "6a1ad3b31b0cc341a2ba2d87",
  },
];

module.exports = { data: sampleListings };
