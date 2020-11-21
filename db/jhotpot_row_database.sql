CREATE TABLE IF NOT EXISTS app_version_android (
  app_version_android_id int unsigned NOT NULL AUTO_INCREMENT,
  app_version_android_name varchar(50)  DEFAULT NULL,
  app_version_android_release_date DATE NOT NULL,
  app_version_android_stop_service_date DATE DEFAULT NULL,

  PRIMARY KEY(app_version_android_id)

) ENGINE=InnoDB  AUTO_INCREMENT=1 ;

 CREATE TABLE IF NOT EXISTS current_android_version (
  ref_app_version_android_id int unsigned,

  FOREIGN KEY(ref_app_version_android_id) REFERENCES app_version_android(app_version_android_id)

) ENGINE=InnoDB  AUTO_INCREMENT=1 ;

 CREATE TABLE IF NOT EXISTS app_version_ios (
  app_version_ios_id int unsigned NOT NULL AUTO_INCREMENT,
  app_version_ios_name varchar(50)  DEFAULT NULL,
  app_version_ios_release_date DATE NOT NULL,
  app_version_ios_stop_service_date DATE DEFAULT NULL,

  PRIMARY KEY(app_version_ios_id)

) ENGINE=InnoDB  AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS current_ios_version (
  ref_app_version_ios_id int unsigned,

  FOREIGN KEY(ref_app_version_ios_id) REFERENCES app_version_ios(app_version_ios_id)

) ENGINE=InnoDB  AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS device_type (
  device_type_id tinyint unsigned  NOT NULL AUTO_INCREMENT,
  device_type_name varchar(100) NOT NULL,  

  PRIMARY KEY (device_type_id),
  UNIQUE KEY  (device_type_name)

) ENGINE=InnoDB  AUTO_INCREMENT=1 ;

CREATE TABLE division (
  division_id int unsigned NOT NULL AUTO_INCREMENT,
  division_name_en varchar(50) NOT NULL,
  division_name_bd varchar(50) NOT NULL,
  division_active tinyint DEFAULT '1',

  PRIMARY KEY(division_id),
  UNIQUE KEY(division_name_en),
  UNIQUE KEY(division_name_bd)

) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE district (
  district_id int unsigned NOT NULL AUTO_INCREMENT,
  ref_district_division_id int unsigned NOT NULL,
  district_name_en varchar(50) NOT NULL,
  district_name_bd varchar(50) NOT NULL,
  district_active tinyint DEFAULT 1,

  PRIMARY KEY(district_id),
  FOREIGN KEY(ref_district_division_id) REFERENCES division(division_id),
  UNIQUE KEY(ref_district_division_id,district_name_en),
  UNIQUE KEY(ref_district_division_id,district_name_bd)

) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE sub_district_or_ps (
  sub_district_or_ps_id int unsigned NOT NULL AUTO_INCREMENT,
  ref_sub_district_or_ps_district_id int unsigned NOT NULL,
  sub_district_or_ps_name_en varchar(50) NOT NULL,
  sub_district_or_ps_name_bd varchar(50) NOT NULL,
  sub_district_or_ps_active tinyint DEFAULT 1,

  PRIMARY KEY(sub_district_or_ps_id),
  FOREIGN KEY(ref_sub_district_or_ps_district_id) REFERENCES district(district_id),
  UNIQUE KEY(ref_sub_district_or_ps_district_id,sub_district_or_ps_name_en),
  UNIQUE KEY(ref_sub_district_or_ps_district_id,sub_district_or_ps_name_bd)

) ENGINE=InnoDB AUTO_INCREMENT=1;


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


CREATE TABLE ad_category (
  ad_category_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  ad_category_name_en varchar(100) NOT NULL,
  ad_category_name_bd varchar(100) NOT NULL,
  ad_category_info_en varchar(500) NOT NULL,
  ad_category_info_bd varchar(500) NOT NULL,
  ad_category_position tinyint unsigned DEFAULT 0,
  ad_category_active tinyint DEFAULT 1,

  PRIMARY KEY(ad_category_id),
  UNIQUE KEY(ad_category_name_en),
  UNIQUE KEY(ad_category_name_bd)
  
) ENGINE=InnoDB AUTO_INCREMENT=1;


CREATE TABLE service_type (
  service_type_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  service_type_name_en varchar(100) NOT NULL,
  service_type_name_bd varchar(100) NOT NULL,
  service_type_position tinyint unsigned DEFAULT 0,
  service_type_active tinyint DEFAULT 1,

  PRIMARY KEY(service_type_id),
  UNIQUE KEY(service_type_name_en),
  UNIQUE KEY(service_type_name_bd)
  
) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE selling_product_category (
  selling_product_category_id int unsigned NOT NULL AUTO_INCREMENT,
  selling_product_category_name_en varchar(100) NOT NULL,
  selling_product_category_name_bd varchar(100) NOT NULL,
  selling_product_category_position int unsigned DEFAULT 0,
  selling_product_category_active tinyint DEFAULT 1,

  PRIMARY KEY(selling_product_category_id),
  UNIQUE KEY(selling_product_category_name_en),
  UNIQUE KEY(selling_product_category_name_bd)

) ENGINE=InnoDB AUTO_INCREMENT=1;


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


CREATE TABLE rent_a_service (
  rent_a_service_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  ref_rent_a_service_division_id int unsigned DEFAULT NULL,
  ref_rent_a_service_district_id int unsigned DEFAULT NULL,
  ref_rent_a_service_sub_district_or_ps_id int unsigned DEFAULT NULL,
  rent_a_service_type_ids varchar(200) comment 'id will be divided by coma(,)',
  rent_a_service_freelencer_organization tinyint NOT NULL DEFAULT 0 comment '1 means freelencer,2 means organization)',
  rent_a_service_name VARCHAR(100) NOT NULL,
  rent_a_service_address varchar(200) DEFAULT NULL,
  rent_a_service_mobile_no varchar(200) DEFAULT NULL comment 'multiple number will be separated by coma(,)',
  rent_a_service_image_1 varchar(200) DEFAULT NULL,
  rent_a_service_image_2 varchar(200) DEFAULT NULL,
  rent_a_service_image_3 varchar(200) DEFAULT NULL,
  rent_a_service_image_4 varchar(200) DEFAULT NULL,
  rent_a_service_imagte_5 varchar(200) DEFAULT NULL,
  rent_a_service_registration_date_time	DATETIME NOT NULL,
  rent_a_service_editing_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  rent_a_service_weight	varchar(20) DEFAULT '0',
  rent_a_service_active	tinyint DEFAULT 1,

  PRIMARY KEY(rent_a_service_id),
  FOREIGN KEY(ref_rent_a_service_division_id) REFERENCES division(division_id),
  FOREIGN KEY(ref_rent_a_service_district_id) REFERENCES district(district_id),
  FOREIGN KEY(ref_rent_a_service_sub_district_or_ps_id) REFERENCES sub_district_or_ps(sub_district_or_ps_id)

) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE swapping_by (
  swapping_by_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  swapping_by_name_en varchar(50) NOT NULL,
  swapping_by_name_bd varchar(50) NOT NULL,
  swapping_by_active tinyint NOT NULL DEFAULT 1,

  PRIMARY KEY(swapping_by_id),
  UNIQUE KEY(swapping_by_name_en),
  UNIQUE KEY(swapping_by_name_bd)

) ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS occupation(
  occupation_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  occupation_name_en varchar(50) NOT NULL,
  occupation_name_bd varchar(50) NOT NULL,
  occupation_active tinyint DEFAULT 1,

  PRIMARY KEY(occupation_id),
  UNIQUE KEY(occupation_name_en),
  UNIQUE KEY(occupation_name_bd)
  
) ENGINE=InnoDB  AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS product_condition(
  product_condition_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  product_condition_name_en	VARCHAR(50),
  product_condition_name_bn	VARCHAR(50),
  product_condition_active tinyint unsigned NOT NULL DEFAULT 1,

  PRIMARY KEY(product_condition_id),
  UNIQUE KEY(product_condition_name_en),
  UNIQUE KEY(product_condition_name_bn)	
  
) ENGINE=InnoDB  AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS marital_status(
  marital_status_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  marital_status_name_en varchar(50) NOT NULL,
  marital_status_name_bd varchar(50) NOT NULL,

  PRIMARY KEY(marital_status_id),
  UNIQUE KEY(marital_status_name_en),
  UNIQUE KEY(marital_status_name_bd)
  
) ENGINE=InnoDB  AUTO_INCREMENT=1 ;
