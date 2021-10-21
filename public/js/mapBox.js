/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmFydGp1ZGdlIiwiYSI6ImNrdWswOWJ1aDExcHAybm96dDEzeXpsemQifQ.KWJ_IsHEMqHLL_0XObbp2w';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bartjudge/ckuk0l5rf6ldt17pmgp57m16x',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 45,
    })
      .setLngLat(location.coordinates)
      .setHTML(`<p>${location.day}: ${location.description}</p>`)
      .addTo(map);
    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      right: 100,
      left: 100,
    },
  });
};
