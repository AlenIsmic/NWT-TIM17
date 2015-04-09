app.factory("BookStoreService", ['$http', function($http) {
    
    var serviceBase = './BookStore/index.php/'
    
    var bookStoreSvc = {};
    
    return {
        login: function(username, password)
                    {
                        //TODO : call API controller to find the user in the db
                        return $http.get(serviceBase + 'api/users/1');
                    },
        sendRegistrationRequest: function(username, email, password)
                    {
                        var user = new {
                          username : username,
                          emil : email,
                          password : password
                        };
                        return $http.post(serviceBase + '/user', user).then(function(){
                            
                        }).success(function(){
                            $http.post('/mail', email);
                            
                        }).error(function(){
                            alert("Greška u procesiranju zahtjeva");
                        });
                    },
        getBooks: function()
                    {
                        return $http.get(serviceBase + 'api/books');
                    }
    }
    
}]);