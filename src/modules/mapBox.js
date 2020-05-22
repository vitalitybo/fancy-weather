/* global mapboxgl */
import { MapBoxAPIKey } from '../../environment';

export default class Map {
  init(coords) {
    this.longitude = coords.longitude;
    this.latitude = coords.latitude;
    const result = typeof mapboxgl !== 'undefined'
      ? this.initFn() : setTimeout(() => this.init(coords), 100);
    return result;
  }

  initFn() {
    mapboxgl.accessToken = MapBoxAPIKey;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitude, this.latitude],
      zoom: 8,
    });

    this.marker = new mapboxgl.Marker()
      .setLngLat([this.longitude, this.latitude])
      .addTo(this.map);
  }

  changeCity(city) {
    this.map.flyTo({
      center: [
        city.longitude,
        city.latitude,
      ],
      essential: true,
    });
    this.marker
      .setLngLat([city.longitude, city.latitude])
      .addTo(this.map);
  }
}

export const mapBox = new Map();
