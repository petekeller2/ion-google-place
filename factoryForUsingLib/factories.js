/**
 * @class yourApp.factories
 * @memberOf yourApp
 */
angular.module('fixplex.factories', [])

/**
 * @class GooglePlaceAPI
 * @memberOf yourApp.factories
 * @description Used with ion-google-place library
 */

.factory('GooglePlaceAPI', ["$http", function($http) {
  var googlePlace = {

  };

  /**
   * @function search
   * @memberOf yourApp.factories.GooglePlaceAPI
   * @param {string} query - ion-google-place input
   * @param {string} searchType - geocode, address, establishment, (cities), or (regions)
   * @returns {object} Autocomplete results. Response from the node server.
   * @description Used by the ion-google-place library.
   */
  googlePlace.search = function(query, searchType) {
    return $http({
      method: "post",
      url: "http://yourServerUrl/googlePlaceAPI/search",
      data: {
        query: query,
        searchType: searchType
      }
    });

  };

  /**
   * @function place
   * @memberOf yourApp.factories.GooglePlaceAPI
   * @param {string} placeID - placeID (in most cases this will be coming from the autocomplete results)
   * @returns {object} Place details. Response from the node server.
   * @description Used in the angular app.
   */
  googlePlace.place = function(placeID) {
    return $http({
      method: "post",
      url: "http://yourServerUrl/googlePlaceAPI/place",
      data: {
        placeID: placeID
      }
    });

  };

  return googlePlace;
}])
 
;
