<?php
/**
 * Created by PhpStorm.
 * User: Mirza Šehović
 * Date: 21.3.2015
 * Time: 0:48
 */

class ApiController extends Controller
{
    // Members
    /**
     * Key which has to be in HTTP USERNAME and PASSWORD headers
     */
    Const APPLICATION_ID = 'ASCCPE';

    /**
     * Default response format
     * either 'json' or 'xml'
     */
    private $format = 'json';
    /**
     * @return array action filters
     */
    public function filters()
    {
        return array();
    }

    // Generic acitons

    //GET ALL
    public function actionList()
    {
        // Get the respective model instance
        switch($_GET['model'])
        {
            case 'books':
                $models = Book::model()->findAll();
                break;
            case 'users':
                $models = User::model()->findAll();
                break;
            case 'orders':
                $models = Order::model()->findAll();
                break;
            case 'authors':
                $models = Author::model()->findAll();
                break;
            case 'reviews':
                $models = Review::model()->findAll();
                break;
            case 'booksAuthors':
                $models = BookAuthor::model()->findAll();
                break;
            case 'usersBooks':
                $models = UserBook::model()->findAll();
                break;
            default:
                // Model not implemented error
                $this->_sendResponse(501, sprintf(
                    'Error: Mode <b>list</b> is not implemented for model <b>%s</b>',
                    $_GET['model']) );
                Yii::app()->end();
        }
        // Did we get some results?
        if(empty($models)) {
            // No
            $this->_sendResponse(200,
                sprintf('No items where found for model <b>%s</b>', $_GET['model']) );
        } else {
            // Prepare response
            $rows = array();
            foreach($models as $model)
                $rows[] = $model->attributes;
            // Send the response
            $this->_sendResponse(200, CJSON::encode($rows));
        }
    }

        //GET - Alen Ismic
    public function actionView()
    {
        // Check if id was submitted via GET
        if(!isset($_GET['id']))
            $this->_sendResponse(500, 'Error: Parameter <b>id</b> is missing' );

        switch($_GET['model'])
        {
            // Find respective model
            case 'books':
                $model = Book::model()->findByPk($_GET['id']); 
               break;
            case 'users':
                $model = User::model()->findByPk($_GET['id']);
                break;
            case 'orders':
                $model = Order::model()->findByPk($_GET['id']);
                break;
            case 'authors':
                $model = Author::model()->findByPk($_GET['id']);
                break;
            case 'reviews':
                $model = Review::model()->findByPk($_GET['id']);
                break;
            case 'booksAuthors':
                $model = BookAuthor::model()->findByPk($_GET['id']);
                break;
            case 'usersBooks':
                $model = UserBook::model()->findByPk($_GET['id']);
                break;
            default:
                $this->_sendResponse(501, sprintf(
                    'Mode <b>view</b> is not implemented for model <b>%s</b>',
                    $_GET['model']) );
                Yii::app()->end();
        }
        // Did we find the requested model? If not, raise an error
        if(is_null($model))
            $this->_sendResponse(404, 'No Item found with id '.$_GET['id']);
        else
            $this->_sendResponse(200, CJSON::encode($model));
    }

    //POST - Damir Avdic
    public function actionCreate()
    {
        switch($_GET['model'])
        {
            // Get an instance of the respective model
            case 'books':
                $model = new Book();
                break;
            case 'users':
                $model = new User();
                break;
            case 'orders':
                $model = new Order();
                break;
            case 'authors':
                $model = new Author();
                break;
            case 'reviews':
                $model = new Review();
                break;
            case 'booksAuthors':
                $model = new BookAuthor();
                break;
            case 'usersBooks':
                $model = new UserBook();
                break;
            default:
                $this->_sendResponse(501,
                    sprintf('Mode <b>create</b> is not implemented for model <b>%s</b>',
                        $_GET['model']) );
                Yii::app()->end();
        }
        // Try to assign POST values to attributes
        foreach($_POST as $var=>$value) {
            // Does the model have this attribute? If not raise an error
            if($model->hasAttribute($var))
                $model->$var = $value;
            else
                $this->_sendResponse(500,
                    sprintf('Parameter <b>%s</b> is not allowed for model <b>%s</b>', $var,
                        $_GET['model']) );
        }
        // Try to save the model
        if($model->save())
            $this->_sendResponse(200, CJSON::encode($model));
        else {
            // Errors occurred
            $msg = "<h1>Error</h1>";
            $msg .= sprintf("Couldn't create model <b>%s</b>", $_GET['model']);
            $msg .= "<ul>";
            foreach($model->errors as $attribute=>$attr_errors) {
                $msg .= "<li>Attribute: $attribute</li>";
                $msg .= "<ul>";
                foreach($attr_errors as $attr_error)
                    $msg .= "<li>$attr_error</li>";
                $msg .= "</ul>";
            }
            $msg .= "</ul>";
            $this->_sendResponse(500, $msg );
        }
    }

    //PUT
    public function actionUpdate()
    {

    }

    //DELETE
    public function actionDelete()
    {

    }

    // Private functions

    private function _sendResponse($status = 200, $body = '', $content_type = 'text/html')
    {
        // set the status
        $status_header = 'HTTP/1.1 ' . $status . ' ' . $this->_getStatusCodeMessage($status);
        header($status_header);
        // and the content type
        header('Content-type: ' . $content_type);

        // pages with body are easy
        if($body != '')
        {
            // send the body
            echo $body;
        }
        // create the body if none is passed
        else
        {
            // create some body messages
            $message = '';

            switch($status)
            {
                case 401:
                    $message = 'You must be authorized to view this page.';
                    break;
                case 404:
                    $message = 'The requested URL ' . $_SERVER['REQUEST_URI'] . ' was not found.';
                    break;
                case 500:
                    $message = 'The server encountered an error processing your request.';
                    break;
                case 501:
                    $message = 'The requested method is not implemented.';
                    break;
            }

            // (this is an apache directive "ServerSignature On")
            $signature = ($_SERVER['SERVER_SIGNATURE'] == '') ? $_SERVER['SERVER_SOFTWARE'] . ' Server at ' . $_SERVER['SERVER_NAME'] . ' Port ' . $_SERVER['SERVER_PORT'] : $_SERVER['SERVER_SIGNATURE'];

            // this should be templated in a real-world solution
            $body = '
                        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
                        <html>
                        <head>
                            <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
                            <title>' . $status . ' ' . $this->_getStatusCodeMessage($status) . '</title>
                        </head>
                        <body>
                            <h1>' . $this->_getStatusCodeMessage($status) . '</h1>
                            <p>' . $message . '</p>
                            <hr />
                            <address>' . $signature . '</address>
                        </body>
                        </html>';

            echo $body;
        }
        Yii::app()->end();
    }

    private function _getStatusCodeMessage($status)
    {
        $codes = Array(
            200 => 'OK',
            400 => 'Bad Request',
            401 => 'Unauthorized',
            402 => 'Payment Required',
            403 => 'Forbidden',
            404 => 'Not Found',
            500 => 'Internal Server Error',
            501 => 'Not Implemented',
        );
        return (isset($codes[$status])) ? $codes[$status] : '';
    }
}