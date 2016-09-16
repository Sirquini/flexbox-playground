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

.factory('Duos', function($localStorage) {
	var duos = $localStorage.getObject('duos');

	return  {
		all: function () {
			return duos;
		},
		get: function(duoIndex) {
			return duos[duoIndex];
		},
		push: function(duo) {
			duos.push(duo);
			$localStorage.setObject('duos', duos);
		},
		save: function() {
			$localStorage.setObject('duos', duos);
		}
	};
})

.filter('truncate', function() {
	return function(value, limit) {
		if (isNaN(limit))
			limit = 20;
		if (value.length > limit)
			return value.substr(0, limit) + '...';
		else
			return value;
	};
});
