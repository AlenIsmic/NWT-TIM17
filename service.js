﻿app.factory("BookStoreService", ['$http', function($http) {
    
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
        addBook: function(createBookModel, alerts)
        {
            return $http.post(serviceBase + 'api/books', createBookModel)
                .success(function () {

                    //show ui.bootstrap.alert success message
                    alerts.push({type:'success', msg: 'Book successfully added !'});
                })
                .error(function(){

                    //show ui.bootstrap.alert danger message
                    alerts.push({type:'danger', msg: 'Add new book failed !'});
                });
        },

        //This method should be used for retrieving any type of review
        //For instance it can be author review... in that case referenceID is authorID and reviewType is 1 ( it represents authorReviewType in review_type db table )
        getReviews: function(referenceID, reviewType)
        {
            return $http.get(serviceBase + 'api/reviews/'+referenceID+'/'+reviewType)
                .error(function(){
                    alert("Retrieving reviews failed!");
                });
        },

        addReview: function(addReviewModel)
        {
            return $http.post(serviceBase + 'api/reviews', addReviewModel)
                .error(function(){
                    alert("Adding new review failed!");
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
                    },
        getMyOrders : function()
        {
            return $http.get(serviceBase + 'api/orders')
                .error(function(){
                    alert("Retrieving orders failed!");
                });
        },
 
        orderBook: function(orderBookModel, alerts)
        {
            return $http.post(serviceBase + 'api/orders', orderBookModel)
                .success(function () {

                    //show ui.bootstrap.alert success message
                    alerts.push({type:'success', msg: 'Book successfully ordered !'});
                })
                .error(function(){

                    //show ui.bootstrap.alert danger message
                    alerts.push({type:'danger', msg: 'Ordering book failed !'});
                });
        },

        getBookNumberByGenre: function()
        {
            return $http.get(serviceBase + 'api/statistics/book/genre')
                .error(function(){
                    alert("getBookNumberByGenre failed!");
                });
        }
    };
    
}]);