<?php /* @var $this Controller */ ?>
<!DOCTYPE html>
<html>
<head>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
        <script src="<?php echo Yii::app()->request->baseUrl; ?>/scripts/bookStoreCtrl.js"></script>
        
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="language" content="en">
	<!-- blueprint CSS framework -->
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/scripts/bootstrap-3.3.4-dist/css/bootstrap.min.css" media="screen, projection">
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection">
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print">
	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection">
	<![endif]-->

	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css">
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css">
               
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body ng-app="bookStoreApp">

    <div ng-controller="bookStoreCtrl">
    
<div class="container" id="page">
    <div class="navbar navbar-fixed-scroll">
        <div class="container">
            <div class="navbar-header">
                <div id="logo">BookStore</div>
            </div>
            <div class="right">
                <?php $this->widget('zii.widgets.CMenu',array(
			'items'=>array(
				array('label'=>'Login', 'url'=>array('/site/login'), 'visible'=>Yii::app()->user->isGuest),
                                array('label'=>'Register', 'url'=>array('/user/create'), 'visible'=>Yii::app()->user->isGuest),
				array('label'=>'Logout ('.Yii::app()->user->name.')', 'url'=>array('/site/logout'), 'visible'=>!Yii::app()->user->isGuest)
			),
		)); ?>
            </div>
        </div>
    </div>
    <div id="mainmenu">
		<?php $this->widget('zii.widgets.CMenu',array(
			'items'=>array(
				array('label'=>'Home', 'url'=>array('/site/index')),
				array('label'=>'Authors', 'url'=>array('/author/index')),
				array('label'=>'Books', 'url'=>array('/book/index')),
                                //array('label'=>'Users', 'url'=>array('/user/index')),
                                array('label'=>'Orders', 'url'=>array('/order/index')),
                                array('label'=>'Reviews', 'url'=>array('/review/index')),
                                array('label'=>'Contact Us', 'url'=>array('/site/contact'))
			),
		)); ?>
    </div><!-- mainmenu -->
	<?php if(isset($this->breadcrumbs)):?>
		<?php $this->widget('zii.widgets.CBreadcrumbs', array(
			'links'=>$this->breadcrumbs,
		)); ?><!-- breadcrumbs -->
	<?php endif?>
                
	<?php echo $content; ?>           

	<div class="clear"></div>

	<div id="footer">
		Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
		All Rights Reserved.<br/>
		<?php echo Yii::powered(); ?>
	</div><!-- footer -->

</div><!-- page -->
</div>
</body>
</html>
