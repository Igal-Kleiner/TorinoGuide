"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var place_model_1 = require("./models/place.model");
//import {CollectionModel as Collection} from "./models/collection.model";
var address_model_1 = require("./models/address.model");
(function (w) {
    'use strict';
    var xi = '';
    /*let Collection = function(parameters: { name: string, places: object[], color: string }) {
      let {name, places, color} = parameters;
      this.collectionName = name || '';
      this.collectionPlaces = places || [];
      this.collectionColor = color;
    };*/
    var collectionsNames = ['Sights & Landmarks', 'Shopping', 'Museums', 'Food & Drinks', 'Nightlife', 'Sports & Outdoor Activities', 'Fun & Games'];
    /*let Place = function(name: string, coords: object, rating: number, address: object)  {
      let self = this;
      self.name = name;
      self.coords = coords;
      self.rating = rating;
      self.address = address;
    };*/
    /*let Address = function(street: string, number: string, zip?: string, city = 'Torino', country = 'Italy') {
      let self = this;
      self.street = street;
      self.number = number;
      self.zip = zip ? zip + " " : '';
      self.city = city;
      self.country = country;
      self.getFullAddress = function() {
        return self.street + " " + self.number + "<br>" + self.zip + self.city + "<br>" + self.country;
      };
    };*/
    var m = new place_model_1.default('Museo Egizio', { lat: 45.068435, long: 7.6843506 }, 5, new address_model_1.default('Via Accademia delle Scienze', '6', '10123'));
    console.log(m);
    w.em = m;
})(window);
