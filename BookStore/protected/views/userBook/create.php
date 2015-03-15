<?php
/* @var $this UserBookController */
/* @var $model UserBook */

$this->breadcrumbs=array(
	'User Books'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List UserBook', 'url'=>array('index')),
	array('label'=>'Manage UserBook', 'url'=>array('admin')),
);
?>

<h1>Create UserBook</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>