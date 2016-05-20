angular.module('sq.controllers', [])

.controller('MainCtrl', function($scope, Bots){
	$scope.bots = Bots.all();
	$scope.showModal = false;
	$scope.inputBot = {
		name: "",
		desc: "",
		train: "",
		test: ""
	};
	$scope.component = "welcome";
	$scope.cbot = null;

	$scope.setComponent = function (comp) {
		$scope.component = comp;
	};

	$scope.setBot = function (bot) {
		$scope.cbot = bot;
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

	$scope.updateBot = function() {
		$scope.cbot.name = $scope.inputBot.name;
		$scope.cbot.desc = $scope.inputBot.desc;
		$scope.cbot.train = $scope.inputBot.train.split(',');
		$scope.cbot.test = $scope.inputBot.test.split(',');
		Bots.save();
	}

	$scope.addBot = function () {
		Bots.push({name: $scope.inputBot.name,
				  desc: $scope.inputBot.desc,
				  train: $scope.inputBot.train.split(','),
				  test: $scope.inputBot.test.split(',')
				});
	};

	$scope.takeAction = function (action) {
		if (action == 'Create') {
			$scope.addBot();
		} else if (action == 'Update') {
			$scope.updateBot();
		}
		$scope.modal.hide();
	};

});

