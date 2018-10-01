export default class AddressModel {
  street: string;
  number: string;
  zip: string;
  city: string;
  country: string;
  constructor(street: string, number: string, zip?: string, city = 'Torino', country = 'Italy') {
    this.street = street;
    this.number = number;
    this.zip = zip ? zip + " " : '';
    this.city = city;
    this.country = country;
  };
  getFullAddress = function() {
    return this.street + " " + this.number + "<br>" + this.zip + this.city + "<br>" + this.country;
}
