CREATE TABLE job_category (
  job_category_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  job_category_name_en varchar(100) NOT NULL,
  job_category_name_bd varchar(100) NOT NULL, 
  job_category_active tinyint DEFAULT 1,
  PRIMARY KEY(job_category_id),
  UNIQUE KEY(job_category_name_en),
  UNIQUE KEY(job_category_name_bd)
  
) ENGINE=InnoDB  AUTO_INCREMENT=1;


CREATE TABLE food_business_type (
  food_business_type_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  food_business_type_name_en varchar(100) NOT NULL,
  food_business_type_name_bd varchar(100) NOT NULL, 
  food_business_type_active tinyint DEFAULT 1,
  PRIMARY KEY(food_business_type_id),
  UNIQUE KEY(food_business_type_name_en),
  UNIQUE KEY(food_business_type_name_bd)
  
) ENGINE=InnoDB  AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS login (
  login_id BIGINT unsigned NOT NULL AUTO_INCREMENT,
  login_username varchar(100) NOT NULL,
  login_password_value varchar(250) NOT NULL,
  login_full_name varchar(100) DEFAULT NULL,
  login_gender tinyint DEFAULT '0' COMMENT'0 means not inserted,1 means male,2 means female,3 means others',
  login_birth_date DATE DEFAULT NULL,
  login_phone varchar(20) DEFAULT NULL,
  login_email varchar(100) DEFAULT NULL,
  ref_login_division_id int unsigned DEFAULT NULL,
  ref_login_district_id int unsigned DEFAULT NULL,
  ref_login_sub_district_or_ps_id int unsigned DEFAULT NULL,
  login_profile_photo_location varchar(200) DEFAULT NULL,
  login_registration_date_time datetime  DATETIME NOT NULL,
  login_edit_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  login_active tinyint DEFAULT 1,
  PRIMARY KEY(login_id),
  UNIQUE KEY(login_username),
  FOREIGN KEY(ref_login_division_id) REFERENCES devision(division_id),
  FOREIGN KEY(ref_login_district_id) REFERENCES district(district_id),
  FOREIGN KEY(ref_login_sub_district_or_ps_id) REFERENCES  sub_district_or_ps(sub_district_or_ps_id)
  
) ENGINE=InnoDB  AUTO_INCREMENT=1 ;


CREATE TABLE car_type (
  car_type_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  car_type_name_en varchar(50) NOT NULL,
  car_type_name_bd varchar(100) NOT NULL, 
  car_type_active tinyint DEFAULT 1,
  PRIMARY KEY(car_type_id),
  UNIQUE KEY(car_type_name_en),
  UNIQUE KEY(car_type_name_bd)
  
) ENGINE=InnoDB  AUTO_INCREMENT=1;


CREATE TABLE rent_a_car (
  rent_a_car_id BIGINT unsigned NOT NULL AUTO_INCREMENT,
  ref_rent_a_car_login_id BIGINT UNSIGNED NOT NULL ,
  ref_rent_a_car_division_id int unsigned DEFAULT NULL, 
  ref_rent_a_car_district_id int unsigned DEFAULT NULL,
  ref_rent_a_car_sub_district_or_pos_id int unsignedDEFAULT NULL,
  rent_a_car_address text DEFAULT NULL,
  rent_a_car_ownership_type enum('company','personal') NOT NULL,
  rent_a_car_name varchar(100) NOT NULL,
  rent_a_car_type_ids varchar(200) comment'id will be divided by coma(,)',
  rent_a_car_mobile varchar(200) comment'multiple number will be separated by coma(,)',
  rent_a_car_image_1 varchar(200) DEFAULT NULL,
  rent_a_car_image_2 varchar(200) DEFAULT NULL,
  rent_a_car_image_3 varchar(200) DEFAULT NULL,
  rent_a_car_image_4 varchar(200) DEFAULT NULL,
  rent_a_car_image_5 varchar(200) DEFAULT NULL,
  rent_a_car_registration_date_time DATETIME NOT NULL,
  rent_a_car_editing_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  rent_a_car_post_weight varchar(20) DEFAULT '0',
  rent_a_car_active tinyint DEFAULT 1,
  PRIMARY KEY(rent_a_car_id),
  FOREIGN KEY(ref_rent_a_car_login_id) REFERENCES login(login_id),
  FOREIGN KEY(ref_rent_a_car_division_id) REFERENCES division(division_id),
  FOREIGN KEY(ref_rent_a_car_district_id) REFERENCES district(district_id),
  FOREIGN KEY(ref_rent_a_car_sub_district_or_pos_id) REFERENCES sub_district_or_pos(sub_district_or_pos_id)
  
) ENGINE=InnoDB  AUTO_INCREMENT=1;


CREATE TABLE post (
  post_id BIGINT unsigned NOT NULL AUTO_INCREMENT,
  ref_post_login_id BIGINT UNSIGNED NOT NULL,
  ref_post_ad_category_id tinyint unsigned NOT NULL, 
  ref_post_division_id int unsigned DEFAULT NULL,
  ref_post_district_id int unsigned DEFAULT NULL,
  ref_post_sub_district_or_ps_id int unsigned DEFAULT NULL,
  post_address VARCHAR(200) DEFAULT NULL,
  post_mobile_no VARCHAR(200) DEFAULT NULL,
  post_contact_person_full_name VARCHAR(100) DEFAULT NULL,
  post_swapping_product_name VARCHAR(200) DEFAULT NULL,
  ref_post_swapping_by_id tinyint unsigned DEFAULT null,
  post_swapping_details text DEFAULT NULL,
  post_swapping_exchange_amount VARCHAR(20) DEFAULT NULL,
  post_swapping_about_exchange_details text DEFAULT NULL,
  post_title varchar(200) DEFAULT NULL,
  post_details text DEFAULT NULL,
  ref_post_selling_product_category_id INT UNSIGNED DEFAULT NULL,
  post_amount varchar(20) DEFAULT NULL, 
  ref_post_job_category_id tinyint unsigned  DEFAULT NULL,
  post_birth_date DATE DEFAULT NULL,
  post_gender tinyint DEFAULT '0' COMMENT'0 means not inserted,1 means male,2 means female,3 means others',
  post_education_requirements text DEFAULT NULL,
  post_job_salary varchar(20) DEFAULT NULL,
  ref_post_food_business_type_id tinyint unsigned DEFAULT NULL,
  post_food_list text DEFAULT NULL,
  post_food_timetable text DEFAULT NULL,
  post_instructions_medium varchar(100) DEFAULT NULL,
  post_interested_classes varchar(200) DEFAULT NULL,
  post_interested_subjects varchar(200) DEFAULT NULL,
  post_wanted_groom_bride tinyint DEFAULT NULL COMMENT'0 means nothing, 1 means groom and 2 means bride',
  post_bride_groom_name varchar(100) DEFAULT NULL,
  post_bride_groom_height varchar(20) DEFAULT NULL,
  post_bride_groom_religion varchar(50) DEFAULT NULL,
  ref_post_bride_groom_occupation_id tinyint DEFAULT NULL,
  post_bride_groom_home_town_address text DEFAULT NULL,
  post_bride_groom_expectation_details text DEFAULT NULL,
  post_ending_date_time  DATETIME DEFAULT NULL,
  post_created_date_time DATETIME DEFAULT NULL,
  post_editing_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  post_weight varchar(20) DEFAULT NULL,
  post_active tinyint DEFAULT 1,
  PRIMARY KEY(post_id)
FOREIGN KEY(ref_post_login_id) REFERENCES login(login_id)
FOREIGN KEY(ref_post_ad_category_id) REFERENCES ad_category(ad_category_id)
FOREIGN KEY(ref_post_division_id) REFERENCES division(division_id)
FOREIGN KEY(ref_post_district_id) REFERENCES district(district_id)
FOREIGN KEY(ref_post_sub_district_or_ps_id) REFERENCES sub_district_or_ps(sub_district_or_ps_id)
FOREIGN KEY(ref_post_swapping_by_id) REFERENCES swapping_by(swapping_by_id)
FOREIGN KEY(ref_post_selling_product_category_id) REFERENCES selling_product_category(selling_product_category_id)
FOREIGN KEY(ref_post_job_category_id) REFERENCES job_category(job_category_id)
FOREIGN KEY(ref_post_food_business_type_id) REFERENCES food_business_type(food_business_type_id)
FOREIGN KEY(ref_post_bride_groom_occupation_id) REFERENCES occupation(occupation_id)
FOREIGN KEY() REFERENCES ()

  
) ENGINE=InnoDB  AUTO_INCREMENT=1;
