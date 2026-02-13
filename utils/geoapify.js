const fetch = require("node-fetch");

const GEO_KEY = process.env.GEOAPIFY_KEY;

module.exports.forwardGeocode = async function (location) {
  const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
    location,
  )}&apiKey=${GEO_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.features || data.features.length === 0) {
    return null;
  }

  const place = data.features[0].properties;

  return {
    lat: place.lat,
    lng: place.lon,
  };
};
