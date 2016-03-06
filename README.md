ion-google-place
================

Option of search-type in ion-google-place element (geocode, address, establishment, (cities), or (regions)) <br />
Has the options of searching for places now <br />

Usage: <br />
Use the ion-google-place.css and ion-google-place.js files your index.html file (for ionic) <br />
Use the code in the node folder in a node.js server <br />
Use the angular factory in the factoryForUsingLib folder in your angular app <br />
Placeholder now must be the ng-model dot description to be displayed. (if ng-model is address, placeholder ={{address.description}}) <br />

**Example:**

```
<label ng-show="addressData.address.description" class="item item-input">
    <ion-google-place placeholder="{{addressData.address.description}}" ng-model="addressData.address" search-type="address"/><!-- current-location="true" -->
</label>
<label ng-hide="addressData.address.description" class="item item-input">
    <ion-google-place placeholder="Enter address" ng-model="addressData.address" search-type="address"/><!-- current-location="true" -->
</label>
```

Ionic directive for a location dropdown that utilizes google maps

![Animated demo](https://github.com/israelidanny/ion-google-place/raw/master/demo.gif)

This is a simple directive for an autocomplete overlay location field built for Ionic Framework.

#Installation

Clone this repository.

For the geolocation service to work, you'll need to have Google Maps javascript API somewhere in your HEAD tag:
`<script src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>`

You'll need to add `ion-google-place` as a dependency on your Ionic app:
```javascript
angular.module('myApp', [
  'ionic',
  'ion-google-place'
]);
```

You can in this version have the current location by adding to the directive "ion-google-place" the attribute currentLocation to true.

the acceptable value fot the attribute currentLocation are true or false.