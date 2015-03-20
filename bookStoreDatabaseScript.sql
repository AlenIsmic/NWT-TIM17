SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `book_store` DEFAULT CHARACTER SET latin1 ;
USE `book_store` ;

-- -----------------------------------------------------
-- Table `book_store`.`tbl_user`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `book_store`.`tbl_user` (
  `id` INT(11) NOT NULL ,
  `name` VARCHAR(50) NOT NULL ,
  `email` VARCHAR(50) NOT NULL ,
  `admin` INT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `unique_id` (`id` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `book_store`.`tbl_book`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `book_store`.`tbl_book` (
  `id` INT(11) NOT NULL ,
  `title` VARCHAR(50) NOT NULL ,
  `genre` VARCHAR(50) NULL ,
  `cover` VARCHAR(100) NULL ,
  `summary` TEXT NULL ,
  `price` DOUBLE NOT NULL ,
  `available` INT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `unique_id` (`id` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `book_store`.`tbl_order`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `book_store`.`tbl_order` (
  `id` INT(11) NOT NULL ,
  `date` DATETIME NOT NULL ,
  `user` INT NOT NULL ,
  `price` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `unique_id` (`id` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`user` ASC) ,
  CONSTRAINT `user`
    FOREIGN KEY (`user` )
    REFERENCES `book_store`.`tbl_user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `book_store`.`tbl_author`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `book_store`.`tbl_author` (
  `id` INT(11) NOT NULL ,
  `name` VARCHAR(50) NOT NULL ,
  `biography` VARCHAR(50) NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `unique_id` (`id` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`biography` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `book_store`.`tbl_book_author`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `book_store`.`tbl_book_author` (
  `id` INT(11) NOT NULL ,
  `author` INT NOT NULL ,
  `book` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `unique_id` (`id` ASC) ,
  INDEX `author_idx` (`author` ASC) ,
  CONSTRAINT `author`
    FOREIGN KEY (`author` )
    REFERENCES `book_store`.`tbl_author` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `book`
    FOREIGN KEY (`book` )
    REFERENCES `book_store`.`tbl_book` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

-- -----------------------------------------------------
-- Table `book_store`.`tbl_user_book`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `book_store`.`tbl_user_book` (
  `id` INT(11) NOT NULL ,
  `user` INT NOT NULL ,
  `book` INT NOT NULL ,
  `state` VARCHAR(50) NOT NULL ,
  `order` INT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `unique_id` (`id` ASC) ,
  INDEX `order_idx` (`order` ASC) ,
  CONSTRAINT `user2`
    FOREIGN KEY (`user` )
    REFERENCES `book_store`.`tbl_user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `book2`
    FOREIGN KEY (`book` )
    REFERENCES `book_store`.`tbl_book` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `order`
    FOREIGN KEY (`order` )
    REFERENCES `book_store`.`tbl_order` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

-- -----------------------------------------------------
-- Table `book_store`.`tbl_review`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `book_store`.`tbl_review` (
  `id` INT(11) NOT NULL ,
  `content` VARCHAR(150) NOT NULL ,
  `user` INT NOT NULL ,
  `rate` INT NULL ,
  `type` VARCHAR(45) NOT NULL ,
  `reference` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `unique_id` (`id` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

USE `book_store` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;