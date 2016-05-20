angular.module('sq.services', [])

.factory('$localStorage', function($window) {
	return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = angular.toJson(value);
    },
    getObject: function(key) {
      return angular.fromJson($window.localStorage[key] || '[]');
    }
  };
})

.factory('Bots', function($localStorage){
	var bots = $localStorage.getObject('bots');

	return  {
		all: function () {
			return bots;
		},
		get: function(botIndex) {
			return bots[botIndex];
		},
		push: function(bot) {
			bots.push(bot);
			$localStorage.setObject('bots', bots);
		},
		save: function() {
			$localStorage.setObject('bots', bots);
		}
	};
});