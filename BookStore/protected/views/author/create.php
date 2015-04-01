<?php
/* @var $this AuthorController */
/* @var $model Author */

$this->breadcrumbs=array(
	'Authors'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Author', 'url'=>array('index')),
	array('label'=>'Manage Author', 'url'=>array('admin')),
);
?>

<h1>Add new author</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>