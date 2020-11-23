CREATE TABLE final_datasets (
    final_dataset_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cencept_id  INT UNSIGNED  NOT NULL ,
    state_id INT UNSIGNED NOT NULL ,
    year_id INT UNSIGNED NOT NULL ,
    participation_percentage  DOUBLE(12,9) NOT NULL
);