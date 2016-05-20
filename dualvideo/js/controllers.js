angular.module('sq.controllers', [])

.controller('MainCtrl', function($scope, Duos){
	$scope.duos = Duos.all();
	$scope.showModal = false;
	$scope.inputDuo = {
		name: "",
		desc: "",
		url1: "",
		url2: ""
	};
	$scope.component = "welcome";
	$scope.cduo = null;

	$scope.setComponent = function (comp) {
		$scope.component = comp;
	};

	$scope.setDuo = function (duo) {
		$scope.cduo = duo;
		if ($scope.component != "details") {
			$scope.component = "details";
		}
	}

	$scope.modal = {
		action: 'create',
		show: function(action) {
			this.action = action;
			$scope.showModal = true;
		},
		hide: function() {
			$scope.showModal = false;
		}
	};

	$scope.getVideoUrl = function(url) {
		return "https://www.youtube.com/embed/"+ url +"?enablejsapi=1";
	};

	$scope.updateDuo = function() {
		$scope.cduo.name = $scope.inputDuo.name;
		$scope.cduo.desc = $scope.inputDuo.desc;
		$scope.cduo.url1 = $scope.inputDuo.url1;
		$scope.cduo.url2 = $scope.inputDuo.url2;
		Duos.save();
	};

	$scope.addDuo = function () {
		Duos.push({name: $scope.inputDuo.name,
				  desc: $scope.inputDuo.desc,
				  url1: $scope.inputDuo.url1,
				  url2: $scope.inputDuo.url2
				});
	};

	$scope.takeAction = function (action) {
		if (action == 'Create') {
			$scope.addDuo();
		} else if (action == 'Update') {
			$scope.updateDuo();
		}
		$scope.modal.hide();
	};

});

