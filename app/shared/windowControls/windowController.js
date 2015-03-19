app.controller('windowController', function ($scope, storageService) {
    var gui = require('nw.gui'),
        win = gui.Window.get(),
        storage = storageService;

    win.x = storage.get("windowLocationX");
    win.y = storage.get("windowLocationY");

    function saveWindowLocationOnScreen () {
        storage.set("windowLocationX", win.x);
        storage.set("windowLocationY", win.y);
    }

    $scope.isWindowExpanded = false;

    $scope.closeWindow = function () {
        saveWindowLocationOnScreen();
        win.close();
    };
    $scope.minimizeWindow = function () {
        win.minimize();
    };
    $scope.expandWindow = function () {
        if($scope.isWindowExpanded)
        {
            win.unmaximize();
        }
        else
        {
            win.maximize();
        }
        $scope.isWindowExpanded = !$scope.isWindowExpanded;
    };
});