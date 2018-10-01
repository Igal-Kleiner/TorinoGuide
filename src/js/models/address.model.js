"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressModel = /** @class */ (function () {
    function AddressModel(street, number, zip, city, country) {
        if (city === void 0) { city = 'Torino'; }
        if (country === void 0) { country = 'Italy'; }
        this.getFullAddress = function () {
            return this.street + " " + this.number + "<br>" + this.zip + this.city + "<br>" + this.country;
        };
        this.street = street;
        this.number = number;
        this.zip = zip ? zip + " " : '';
        this.city = city;
        this.country = country;
    }
    ;
    return AddressModel;
}());
exports.default = AddressModel;
