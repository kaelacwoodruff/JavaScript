// Worldhopper Generator
// Outputs: Planet / Power / Best Friend

const planets = [
    "Lumar",
    "First of the Sun",
    "Nalthis",
    "Ashyn",
    "Braize",
    "Roshar",
    "Scadrial",
    "Sel",
    "Taldain",
    "Threnody",
    "Komashi",
    "Canticle",
    "Yolen",
    "Silverlight",
    "The Cognitive Realm",
  ];
  const powers = [
    "Allomancer",
    "Awakener",
    "Elantrian",
    "Feruchemist",
    "Forger",
    "Fused",
    "Hemalurgist",
    "Herald",
    "Sand Master",
    "Surgebinder",
    "Mistborn",
    "Yoki-hijo",
  ];
  const friends = [
    "Adolin Kholin",
    "Chiri-Chiri",
    "Dalinar Kholin",
    "Elend Venture",
    "Gaz",
    "Hoid",
    "Hrathen",
    "Hesina",
    "Jasnah Kholin",
    "Kaladin Stormblessed",
    "Kelsier",
    "Lopen",
    "Marasi Colms",
    "Marsh",
    "MeLaan",
    "Moash",
    "Navani Kholin",
    "Nikaro",
    "Raoden",
    "Renarin Kholin",
    "Rysn",
    "Sarene",
    "Sazed",
    "Shallan Davar",
    "Silence Montane",
    "Sixth of the Dusk",
    "Sja-anat",
    "Spook",
    "Lightsong",
    "Siri",
    "Steris Harms",
    "Straff Venture",
    "Sylphrena",
    "Szeth",
    "Taln",
    "Taravangian",
    "Teft",
    "TenSoon",
    "Sadeas",
    "Tress",
    "Vasher",
    "Venli",
    "Human",
    "Vin",
    "Vivenna",
    "Waxillium Ladrian",
    "Wayne",
    "Yalb",
    "Yumi",
    "Zane Venture",
    "Lirin",
    "Liyun",
    "Nightblood",
    "Charlie",
    "Lift",
  ];
  
  function cosmere() {
    //Randomly select index from each array
    const randomPlanet = Math.floor(Math.random() * (planets.length - 1));
    const randomPowers = Math.floor(Math.random() * (powers.length - 1));
    const randomFriends = Math.floor(Math.random() * (friends.length - 1));
  
    return `You are a ${powers[randomPowers]} from ${planets[randomPlanet]} and your best friend is ${friends[randomFriends]}.`;
    //Return line with string interpolation that takes in and chooses one each from planets, powers, & friends
  }
  
  console.log(cosmere());
  