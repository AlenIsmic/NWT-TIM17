app.factory("BookStoreService", ['$http', function($http) {
    
    var serviceBase = './BookStore/index.php/'
    
    var bookStoreSvc = {};
    
    return {
        checkUser: function(username, password)
                    {
                        return $http.get(serviceBase + 'CheckUser?username=' + username + '&password=' + password);
                    },
        checkIfAdmin: function(username)
                    {
                        return $http.get(serviceBase + 'CheckIfAdmin?username=' + username);
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
                            
                        }).error(function(){
                            
                        });
                    },
        getBooks: function()
                    {
                        return $http.get('./index.php/api/book');
                    }
    }
    
}]);