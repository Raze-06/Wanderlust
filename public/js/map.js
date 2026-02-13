const map = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/bright",
  center: listing.geometry.coordinates,
  zoom: 10,
});

const popup = new maplibregl.Popup({ offset: 25 }).setHTML(`
    <strong>${listing.title}</strong><br>
    ${listing.location}, ${listing.country}
  `);

new maplibregl.Marker({ color: "#ff385c" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);
