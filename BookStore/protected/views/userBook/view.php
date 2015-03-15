<?php
/* @var $this UserBookController */
/* @var $model UserBook */

$this->breadcrumbs=array(
	'User Books'=>array('index'),
	$model->id,
);

$this->menu=array(
	array('label'=>'List UserBook', 'url'=>array('index')),
	array('label'=>'Create UserBook', 'url'=>array('create')),
	array('label'=>'Update UserBook', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete UserBook', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage UserBook', 'url'=>array('admin')),
);
?>

<h1>View UserBook #<?php echo $model->id; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'user',
		'book',
		'state',
		'order',
	),
)); ?>
