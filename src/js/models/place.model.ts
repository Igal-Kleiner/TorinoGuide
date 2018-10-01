export default class PlaceModel {
  name: string;
  coords: object;
  rating: number;
  address: object;
  constructor(name: string, coords: object, rating: number, address: object) {
    this.name = name;
    this.coords = coords;
    this.rating = rating;
    this.address = address;
  }
}
