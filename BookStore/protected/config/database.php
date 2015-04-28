<?php

// This is the database connection configuration.
return array(
	'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/book_store.db',
	// uncomment the following lines to use a MySQL database
	'connectionString' => 'mysql:host=eu-cdbr-west-01.cleardb.com;dbname=heroku_be72c66e48bccd5',
	'emulatePrepare' => true,
	'username' => 'be0265e6cf6a49',
	'password' => 'a86a1fdf',
	'charset' => 'utf8',
);
