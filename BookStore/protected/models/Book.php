<?php

/**
 * This is the model class for table "tbl_book".
 *
 * The followings are the available columns in table 'tbl_book':
 * @property integer $id
 * @property string $title
 * @property integer $genre
 * @property string $cover
 * @property string $summary
 * @property double $price
 * @property integer $available
 *
 * The followings are the available model relations:
 * @property Genre $genre0
 * @property BookAuthor[] $bookAuthors
 * @property UserBook[] $userBooks
 */
class Book extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'tbl_book';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('id, title, price', 'required'),
			array('id, genre, available', 'numerical', 'integerOnly'=>true),
			array('price', 'numerical'),
			array('title', 'length', 'max'=>50),
			array('cover', 'length', 'max'=>100),
			array('summary', 'safe'),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, title, genre, cover, summary, price, available', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'genre0' => array(self::BELONGS_TO, 'Genre', 'genre'),
			'bookAuthors' => array(self::HAS_MANY, 'BookAuthor', 'book'),
			'userBooks' => array(self::HAS_MANY, 'UserBook', 'book'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'title' => 'Title',
			'genre' => 'Genre',
			'cover' => 'Cover',
			'summary' => 'Summary',
			'price' => 'Price',
			'available' => 'Available',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('genre',$this->genre);
		$criteria->compare('cover',$this->cover,true);
		$criteria->compare('summary',$this->summary,true);
		$criteria->compare('price',$this->price);
		$criteria->compare('available',$this->available);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Book the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
