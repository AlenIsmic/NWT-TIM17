<?php
/* @var $this UserBookController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'User Books',
);

$this->menu=array(
	array('label'=>'Create UserBook', 'url'=>array('create')),
	array('label'=>'Manage UserBook', 'url'=>array('admin')),
);
?>

<h1>User Books</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
