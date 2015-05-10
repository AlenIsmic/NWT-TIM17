app.factory("BookStoreService", ['$http', function($http) {
    
    var serviceBase = './BookStore/index.php/';

    var filteredBooks = [];
    
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
                        filteredBooks = [];
                        return $http.get(serviceBase + 'api/books');
                    },
        addBooksByAuthor: function(addBookModel)
                    {
                        return $http.post(serviceBase + 'api/books', {model: addBookModel})
                                .error(function(){
                                    alert("Adding new book failed!");
                        });
                    },
        getAuthors: function()
                    {
                        return $http.get(serviceBase + 'api/authors');
                    },
        addAuthor: function(createAuthorModel)
        {
            //post to create author api service
            return $http.post(serviceBase + 'api/authors', {model: createAuthorModel})
                .error(function(){
                    alert("Adding new author failed!");
                });
        },
        addBook: function(createBookModel)
        {
            return $http.post(serviceBase + 'api/books', createBookModel)
                .error(function(){
                    alert("Adding new book failed!");
                });
        },
        filterBooksByAuthor: function(ind)
                    {
                        //get books by authorID
                        filteredBooks = $http.get(serviceBase + 'api/booksAuthors/');
                    },
        getFilteredBooks : function()
                    {
                        return filteredBooks;
                    }
    };
    
}]);