<?php
/* @var $this UserBookController */
/* @var $model UserBook */

$this->breadcrumbs=array(
	'User Books'=>array('index'),
	$model->id=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List UserBook', 'url'=>array('index')),
	array('label'=>'Create UserBook', 'url'=>array('create')),
	array('label'=>'View UserBook', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage UserBook', 'url'=>array('admin')),
);
?>

<h1>Update UserBook <?php echo $model->id; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>