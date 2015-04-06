app.factory("services", ['$http', function($http) {
    var serviceBase = '/BookStore/SourceFiles/'
    
    var obj = {};
    obj.getCustomers = function(){
       return $http.get(serviceBase + 'customers');
    }
}]);