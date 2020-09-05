CREATE TABLE IF NOT EXISTS app_version_android (
  app_version_android_id int unsigned NOT NULL AUTO_INCREMENT,
  app_version_android_name varchar(50)  DEFAULT NULL,
  app_version_android_release_date DATETIME NOT NULL,
  app_version_android_stop_service_date DATETIME DEFAULT NULL,
  PRIMARY KEY(app_version_android_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

 CREATE TABLE IF NOT EXISTS current_android_version (
  ref_app_version_android_id int unsigned,
  FOREIGN KEY(ref_app_version_android_id) REFERENCES app_version_android(app_version_android_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

 CREATE TABLE IF NOT EXISTS app_version_ios (
  app_version_ios_id int unsigned NOT NULL AUTO_INCREMENT,
  app_version_ios_name varchar(50)  DEFAULT NULL,
  app_version_ios_release_date DATETIME NOT NULL,
  app_version_ios_stop_service_date DATETIME DEFAULT NULL,
  PRIMARY KEY(app_version_ios_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS current_ios_version (
  ref_app_version_ios_id int unsigned,
  FOREIGN KEY(ref_app_version_ios_id) REFERENCES app_version_ios(app_version_ios_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS device_type (
  device_type_id tinyint unsigned  NOT NULL AUTO_INCREMENT,
  device_type_name varchar(100) NOT NULL,  
  PRIMARY KEY (device_type_id),
  UNIQUE KEY  (device_type_name)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

INSERT INTO device_type (device_type_id, device_type_name) VALUES ('1', 'ANDROID'), (NULL, 'IOS');


CREATE TABLE division (
  division_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  division_name varchar(25) NOT NULL,
  division_bn_name varchar(25) NOT NULL,
  division_url varchar(50) NOT NULL,
  PRIMARY KEY(division_id),
  UNIQUE KEY(division_name),
  UNIQUE KEY(division_bn_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO division (division_id, division_name, division_bn_name, division_url) VALUES
(1, 'Lazio', 'Lazioano', 'lazio.it'),
(2, 'Umbria', 'Umbriano', 'www.umbria.it'),


CREATE TABLE district (
  district_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  ref_district_division_id tinyint unsigned NOT NULL,
  district_name varchar(25) NOT NULL,
  district_bn_name varchar(25) NOT NULL,
  district_lat varchar(15) DEFAULT NULL,
  district_lon varchar(15) DEFAULT NULL,
  district_url varchar(50) NOT NULL,
  PRIMARY KEY(district_id),
  FOREIGN KEY(ref_district_division_id) REFERENCES division(division_id),
  UNIQUE KEY(district_name,ref_district_division_id),
  UNIQUE KEY(district_bn_name,ref_district_division_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1;

INSERT INTO district (district_id, ref_district_division_id, district_name, district_bn_name, district_lat, district_lon, district_url) VALUES
(1, 1, 'Rome', 'Roma',NULL, NULL, 'www.roma.it'),
(2, 1, 'Latin', 'Latina', NULL, NULL, 'www.latina.it'),
(3, 2, 'Perugia', 'Perugia', NULL, NULL, 'www.perugia.it'),
(4, 2, 'Foligno', 'Firenza', NULL, NULL, 'www.foligno.it'),

CREATE TABLE upazila (
  upazila_id smallint unsigned NOT NULL AUTO_INCREMENT,
  ref_upazila_district_id tinyint unsigned NOT NULL,
  upazila_name varchar(25) NOT NULL,
  upazila_bn_name varchar(25) NOT NULL,
  upazila_url varchar(50) NOT NULL,
  PRIMARY KEY(upazila_id),
  FOREIGN KEY(ref_upazila_district_id) REFERENCES district(district_id),
  UNIQUE KEY(upazila_name,ref_upazila_district_id),
  UNIQUE KEY(upazila_bn_name,ref_upazila_district_id)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


INSERT INTO upazila (upazila_id, ref_upazila_district_id, upazila_name, upazila_bn_name, upazila_url) VALUES
(1, 1, 'RomE-1', 'RomA-1', 'R1.it'),
(2, 1, 'Rome-2', 'Roma-1', 'r2.it'),
(3, 1, 'Rome-3', 'Roma-3', 'r3.it'),
(4, 1, 'Rome-4', 'Roma-4', 'r4.it'),
(5, 2, 'Latin-1', 'Latina-1', 'l1,it'),
(6, 2, 'Latin-2', 'Latina-2', 'L2.it'),
(7, 3, 'Perugia-1', 'Perugia-1', 'p1.it'),
(8, 3, 'Perigia-2', 'Perugia-2', 'p2.it'),
(9, 4, 'Foligno-1', 'Firenza-1', 'f1.it'),
(10, 4, 'foligno-2', 'Firenza-2', 'f2.it');



CREATE TABLE ad_category (
  ad_category_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  ad_category_name varchar(50) NOT NULL,
  ad_category_bn_name varchar(50) NOT NULL,
  ad_category_position tinyint unsigned DEFAULT 0,
  ad_category_active tinyint DEFAULT 1,
  PRIMARY KEY(ad_category_id),
  UNIQUE KEY(ad_category_name),
  UNIQUE KEY(ad_category_bn_name)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;



INSERT INTO ad_category (ad_category_id, ad_category_name, ad_category_bn_name, ad_category_position, ad_category_active) VALUES
(1, 'Res', 'Res-bn', 1, 1),
(2, 'Comme', 'comm-bn', 2, 1),
(3, 'Gar', 'Gar-bn', 3, 1),
(4, 'Tr', 'Tr-bn', 4, 1),
(5, 'L/ F', 'L/F-bn', 5, 1),
(6, 'R / J', 'R/J-bn', 6, 1),
(7, 'T', 'T-bn', 7, 1),
(8, 'B', 'বB-bn', 8, 1);


CREATE TABLE ad_sub_category (
  ad_sub_category_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  ref_ad_sub_category_ad_category_id tinyint unsigned NOT NULL,
  ad_sub_category_name varchar(50) NOT NULL,
  ad_sub_category_bn_name varchar(50) NOT NULL,
  ad_sub_category_position tinyint unsigned DEFAULT 0,
  ad_sub_category_active tinyint DEFAULT 1,
  PRIMARY KEY(ad_sub_category_id),
  FOREIGN KEY(ref_ad_sub_category_ad_category_id) REFERENCES ad_category(ad_category_id),
  UNIQUE KEY(ad_sub_category_name),
  UNIQUE KEY(ad_sub_category_bn_name)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO ad_sub_category (ad_sub_category_id, ref_ad_sub_category_ad_category_id, ad_sub_category_name, ad_sub_category_bn_name, ad_sub_category_position, ad_sub_category_active) VALUES
(1, 1, 'A/F', 'A/F-bn', 1, 1),
(2, 1, 'Ro', 'Ro-bn', 2, 1),
(3, 1, 'Sub', 'sub-bn', 3, 1),
(4, 1, 'H/S/R/B', 'H/S/R/B-bn', 4, 1),
(5, 1, 'Pl', 'pl-bn', 5, 1),
(6, 2, 'O/A', 'o/A-bn', 1, 1),
(7, 2, 'S O/A', 'S O/A-bn', 2, 1),
(8, 2, 'F', 'F-bn', 3, 1),
(9, 2, 's', 's-bn', 4, 1),
(10, 2, 'w', 'w-bn', 5, 1),
(11, 4, 'C/M/M', 'C/M/M-bn', 1, 1),
(12, 4, 'P/T/V', 'P/T/V-bn', 2, 1)
(13, 5,'L', 'L-bn', 1, 1),
(14, 5,'F', 'F-bn', 2, 1),
(15, 6,'R', 'R-bn', 1, 1),
(16, 6,'J', 'j-bn', 2, 1),
(17, 7,'T S', 'T S-bn', 1, 1),
(18, 7,'B T', 'B T-bn', 2, 1);

CREATE TABLE ad_type (
  ad_type_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  ad_type_name varchar(50) NOT NULL,
  ad_type_bn_name varchar(50) NOT NULL,
  ad_type_position tinyint unsigned DEFAULT 0,
  ad_type_active tinyint DEFAULT 1,
  PRIMARY KEY(ad_type_id),
  UNIQUE KEY(ad_type_name),
  UNIQUE KEY(ad_type_bn_name)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO ad_type (ad_type_id, ad_type_name, ad_type_bn_name, ad_type_position, ad_type_active) VALUES
(1, 'F G R', 'F G R-bn', 1, 1),
(2, 'F T R', 'F T R -bn', 2, 1),
(3, 'F S', 'F S-bn', 3, 1),
(4, 'F B', 'F B -BNয', 4, 1),
(5, 'Ads', 'Ads-bn', 5, 1);


CREATE TABLE post (
  post_id bigint unsigned NOT NULL AUTO_INCREMENT,
  ref_post_ad_type_id tinyint unsigned NOT NULL,
  ref_post_ad_sub_category_id tinyint unsigned NOT NULL,
  post_title varchar(50) NOT NULL,
  ad_type_position tinyint unsigned DEFAULT 0,
  ad_type_active tinyint DEFAULT 1,
  PRIMARY KEY(ad_type_id),
  UNIQUE KEY(ad_type_name),
  UNIQUE KEY(ad_type_bn_name)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;