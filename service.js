app.factory("BookStoreService", ['$http', function($http) {
    
    var serviceBase = './BookStore/index.php/'
    
    var bookStoreSvc = {};
    
    return {
        login: function(username, password)
                    {
                        //TODO : call API controller to find the user in the db
                        return $http.post(serviceBase + 'api/login/', username, password);
                    },
        sendRegistrationRequest: function(registerModel)
                    {
                        return $http({
                            method : 'POST',
                            url : serviceBase + 'api/users',
                            data : registerModel
                        }).success(function(){
                            $http.post('/mail', registerModel.email);
                            
                        }).error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
                    },
        getBooks: function()
                    {
                        return $http.get(serviceBase + 'api/books');
                    },
        getAuthors: function()
                    {
                        return $http.get(serviceBase + 'api/authors');
                    }
    }
    
}]);