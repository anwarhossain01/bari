-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2021 at 05:05 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `a1`
--

-- --------------------------------------------------------

--
-- Table structure for table `ad_category`
--

CREATE TABLE `ad_category` (
  `ad_category_id` tinyint(3) UNSIGNED NOT NULL,
  `ad_category_name_en` varchar(100) NOT NULL,
  `ad_category_name_bd` varchar(100) NOT NULL,
  `ad_category_info_en` varchar(500) NOT NULL,
  `ad_category_info_bd` varchar(500) NOT NULL,
  `ad_category_position` tinyint(3) UNSIGNED DEFAULT 0,
  `ad_category_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_version_android`
--

CREATE TABLE `app_version_android` (
  `app_version_android_id` int(10) UNSIGNED NOT NULL,
  `app_version_android_name` varchar(50) DEFAULT NULL,
  `app_version_android_release_date` date NOT NULL,
  `app_version_android_stop_service_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_version_ios`
--

CREATE TABLE `app_version_ios` (
  `app_version_ios_id` int(10) UNSIGNED NOT NULL,
  `app_version_ios_name` varchar(50) DEFAULT NULL,
  `app_version_ios_release_date` date NOT NULL,
  `app_version_ios_stop_service_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `car_type`
--

CREATE TABLE `car_type` (
  `car_type_id` tinyint(3) UNSIGNED NOT NULL,
  `car_type_name_en` varchar(50) NOT NULL,
  `car_type_name_bd` varchar(100) NOT NULL,
  `car_type_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `current_android_version`
--

CREATE TABLE `current_android_version` (
  `ref_app_version_android_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `current_ios_version`
--

CREATE TABLE `current_ios_version` (
  `ref_app_version_ios_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `device_type`
--

CREATE TABLE `device_type` (
  `device_type_id` tinyint(3) UNSIGNED NOT NULL,
  `device_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `district_id` int(10) UNSIGNED NOT NULL,
  `ref_district_division_id` int(10) UNSIGNED NOT NULL,
  `district_name_en` varchar(50) NOT NULL,
  `district_name_bd` varchar(50) NOT NULL,
  `district_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `division`
--

CREATE TABLE `division` (
  `division_id` int(10) UNSIGNED NOT NULL,
  `division_name_en` varchar(50) NOT NULL,
  `division_name_bd` varchar(50) NOT NULL,
  `division_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `food_business_type`
--

CREATE TABLE `food_business_type` (
  `food_business_type_id` tinyint(3) UNSIGNED NOT NULL,
  `food_business_type_name_en` varchar(100) NOT NULL,
  `food_business_type_name_bd` varchar(100) NOT NULL,
  `food_business_type_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `job_category`
--

CREATE TABLE `job_category` (
  `job_category_id` tinyint(3) UNSIGNED NOT NULL,
  `job_category_name_en` varchar(100) NOT NULL,
  `job_category_name_bd` varchar(100) NOT NULL,
  `job_category_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` bigint(20) UNSIGNED NOT NULL,
  `login_username` varchar(100) NOT NULL,
  `login_password_value` varchar(250) NOT NULL,
  `login_full_name` varchar(100) DEFAULT NULL,
  `login_gender` tinyint(4) DEFAULT 0 COMMENT '0 means not inserted,1 means male,2 means female,3 means others',
  `login_birth_date` date DEFAULT NULL,
  `login_phone` varchar(20) DEFAULT NULL,
  `login_email` varchar(100) DEFAULT NULL,
  `ref_login_division_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_login_district_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_login_sub_district_or_ps_id` int(10) UNSIGNED DEFAULT NULL,
  `login_profile_photo_location` varchar(200) DEFAULT NULL,
  `login_registration_date_time` datetime NOT NULL,
  `login_edit_date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `login_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `marital_status`
--

CREATE TABLE `marital_status` (
  `marital_status_id` tinyint(3) UNSIGNED NOT NULL,
  `marital_status_name_en` varchar(50) NOT NULL,
  `marital_status_name_bd` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `occupation`
--

CREATE TABLE `occupation` (
  `occupation_id` tinyint(3) UNSIGNED NOT NULL,
  `occupation_name_en` varchar(50) NOT NULL,
  `occupation_name_bd` varchar(50) NOT NULL,
  `occupation_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `ref_post_login_id` bigint(20) UNSIGNED NOT NULL,
  `ref_post_ad_category_id` tinyint(3) UNSIGNED NOT NULL,
  `ref_post_division_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_post_district_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_post_sub_district_or_ps_id` int(10) UNSIGNED DEFAULT NULL,
  `post_address` varchar(200) DEFAULT NULL,
  `post_mobile_no` varchar(200) DEFAULT NULL,
  `post_contact_person_full_name` varchar(100) DEFAULT NULL,
  `post_swapping_product_name` varchar(200) DEFAULT NULL,
  `ref_post_swapping_by_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `post_swapping_details` text DEFAULT NULL,
  `post_swapping_exchange_amount` varchar(20) DEFAULT NULL,
  `post_swapping_about_exchange_details` text DEFAULT NULL,
  `post_title` varchar(200) DEFAULT NULL,
  `post_details` text DEFAULT NULL,
  `ref_post_selling_product_category_id` int(10) UNSIGNED DEFAULT NULL,
  `post_amount` varchar(20) DEFAULT NULL,
  `ref_post_job_category_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `post_birth_date` date DEFAULT NULL,
  `post_gender` tinyint(4) DEFAULT 0 COMMENT '0 means not inserted,1 means male,2 means female,3 means others',
  `post_education_requirements` text DEFAULT NULL,
  `post_job_salary` varchar(20) DEFAULT NULL,
  `ref_post_food_business_type_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `post_food_list` text DEFAULT NULL,
  `post_food_timetable` text DEFAULT NULL,
  `post_instructions_medium` varchar(100) DEFAULT NULL,
  `post_interested_classes` varchar(200) DEFAULT NULL,
  `post_interested_subjects` varchar(200) DEFAULT NULL,
  `post_wanted_groom_bride` tinyint(4) DEFAULT NULL COMMENT '0 means nothing, 1 means groom and 2 means bride',
  `post_bride_groom_name` varchar(100) DEFAULT NULL,
  `post_bride_groom_height` varchar(20) DEFAULT NULL,
  `post_bride_groom_religion` varchar(50) DEFAULT NULL,
  `ref_post_bride_groom_occupation_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `post_bride_groom_home_town_address` text DEFAULT NULL,
  `post_bride_groom_expectation_details` text DEFAULT NULL,
  `post_ending_date_time` datetime DEFAULT NULL,
  `post_created_date_time` datetime DEFAULT NULL,
  `post_editing_date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `post_weight` varchar(20) DEFAULT NULL,
  `post_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_condition`
--

CREATE TABLE `product_condition` (
  `product_condition_id` tinyint(3) UNSIGNED NOT NULL,
  `product_condition_name_en` varchar(50) DEFAULT NULL,
  `product_condition_name_bn` varchar(50) DEFAULT NULL,
  `product_condition_active` tinyint(3) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rent_a_car`
--

CREATE TABLE `rent_a_car` (
  `rent_a_car_id` bigint(20) UNSIGNED NOT NULL,
  `ref_rent_a_car_login_id` bigint(20) UNSIGNED NOT NULL,
  `ref_rent_a_car_division_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_rent_a_car_district_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_rent_a_car_sub_district_or_pos_id` int(10) UNSIGNED DEFAULT NULL,
  `rent_a_car_address` text DEFAULT NULL,
  `rent_a_car_ownership_type` enum('company','personal') NOT NULL,
  `rent_a_car_name` varchar(100) NOT NULL,
  `rent_a_car_type_ids` varchar(200) DEFAULT NULL COMMENT 'id will be divided by coma(,)',
  `rent_a_car_mobile` varchar(200) DEFAULT NULL COMMENT 'multiple number will be separated by coma(,)',
  `rent_a_car_image_1` varchar(200) DEFAULT NULL,
  `rent_a_car_image_2` varchar(200) DEFAULT NULL,
  `rent_a_car_image_3` varchar(200) DEFAULT NULL,
  `rent_a_car_image_4` varchar(200) DEFAULT NULL,
  `rent_a_car_image_5` varchar(200) DEFAULT NULL,
  `rent_a_car_registration_date_time` datetime NOT NULL,
  `rent_a_car_editing_date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `rent_a_car_post_weight` varchar(20) DEFAULT '0',
  `rent_a_car_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rent_a_service`
--

CREATE TABLE `rent_a_service` (
  `rent_a_service_id` bigint(20) UNSIGNED NOT NULL,
  `ref_rent_a_service_division_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_rent_a_service_district_id` int(10) UNSIGNED DEFAULT NULL,
  `ref_rent_a_service_sub_district_or_ps_id` int(10) UNSIGNED DEFAULT NULL,
  `rent_a_service_type_ids` varchar(200) DEFAULT NULL COMMENT 'id will be divided by coma(,)',
  `rent_a_service_freelencer_organization` tinyint(4) NOT NULL DEFAULT 0 COMMENT '1 means freelencer,2 means organization)',
  `rent_a_service_name` varchar(100) NOT NULL,
  `rent_a_service_address` varchar(200) DEFAULT NULL,
  `rent_a_service_mobile_no` varchar(200) DEFAULT NULL COMMENT 'multiple number will be separated by coma(,)',
  `rent_a_service_image_1` varchar(200) DEFAULT NULL,
  `rent_a_service_image_2` varchar(200) DEFAULT NULL,
  `rent_a_service_image_3` varchar(200) DEFAULT NULL,
  `rent_a_service_image_4` varchar(200) DEFAULT NULL,
  `rent_a_service_imagte_5` varchar(200) DEFAULT NULL,
  `rent_a_service_registration_date_time` datetime NOT NULL,
  `rent_a_service_editing_date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `rent_a_service_weight` varchar(20) DEFAULT '0',
  `rent_a_service_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `selling_product_category`
--

CREATE TABLE `selling_product_category` (
  `selling_product_category_id` int(10) UNSIGNED NOT NULL,
  `selling_product_category_name_en` varchar(100) NOT NULL,
  `selling_product_category_name_bd` varchar(100) NOT NULL,
  `selling_product_category_position` int(10) UNSIGNED DEFAULT 0,
  `selling_product_category_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `service_type`
--

CREATE TABLE `service_type` (
  `service_type_id` tinyint(3) UNSIGNED NOT NULL,
  `service_type_name_en` varchar(100) NOT NULL,
  `service_type_name_bd` varchar(100) NOT NULL,
  `service_type_position` tinyint(3) UNSIGNED DEFAULT 0,
  `service_type_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sub_district_or_ps`
--

CREATE TABLE `sub_district_or_ps` (
  `sub_district_or_ps_id` int(10) UNSIGNED NOT NULL,
  `ref_sub_district_or_ps_district_id` int(10) UNSIGNED NOT NULL,
  `sub_district_or_ps_name_en` varchar(50) NOT NULL,
  `sub_district_or_ps_name_bd` varchar(50) NOT NULL,
  `sub_district_or_ps_active` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `swapping_by`
--

CREATE TABLE `swapping_by` (
  `swapping_by_id` tinyint(3) UNSIGNED NOT NULL,
  `swapping_by_name_en` varchar(50) NOT NULL,
  `swapping_by_name_bd` varchar(50) NOT NULL,
  `swapping_by_active` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ad_category`
--
ALTER TABLE `ad_category`
  ADD PRIMARY KEY (`ad_category_id`),
  ADD UNIQUE KEY `ad_category_name_en` (`ad_category_name_en`),
  ADD UNIQUE KEY `ad_category_name_bd` (`ad_category_name_bd`);

--
-- Indexes for table `app_version_android`
--
ALTER TABLE `app_version_android`
  ADD PRIMARY KEY (`app_version_android_id`);

--
-- Indexes for table `app_version_ios`
--
ALTER TABLE `app_version_ios`
  ADD PRIMARY KEY (`app_version_ios_id`);

--
-- Indexes for table `car_type`
--
ALTER TABLE `car_type`
  ADD PRIMARY KEY (`car_type_id`),
  ADD UNIQUE KEY `car_type_name_en` (`car_type_name_en`),
  ADD UNIQUE KEY `car_type_name_bd` (`car_type_name_bd`);

--
-- Indexes for table `current_android_version`
--
ALTER TABLE `current_android_version`
  ADD KEY `ref_app_version_android_id` (`ref_app_version_android_id`);

--
-- Indexes for table `current_ios_version`
--
ALTER TABLE `current_ios_version`
  ADD KEY `ref_app_version_ios_id` (`ref_app_version_ios_id`);

--
-- Indexes for table `device_type`
--
ALTER TABLE `device_type`
  ADD PRIMARY KEY (`device_type_id`),
  ADD UNIQUE KEY `device_type_name` (`device_type_name`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`district_id`),
  ADD UNIQUE KEY `ref_district_division_id` (`ref_district_division_id`,`district_name_en`),
  ADD UNIQUE KEY `ref_district_division_id_2` (`ref_district_division_id`,`district_name_bd`);

--
-- Indexes for table `division`
--
ALTER TABLE `division`
  ADD PRIMARY KEY (`division_id`),
  ADD UNIQUE KEY `division_name_en` (`division_name_en`),
  ADD UNIQUE KEY `division_name_bd` (`division_name_bd`);

--
-- Indexes for table `food_business_type`
--
ALTER TABLE `food_business_type`
  ADD PRIMARY KEY (`food_business_type_id`),
  ADD UNIQUE KEY `food_business_type_name_en` (`food_business_type_name_en`),
  ADD UNIQUE KEY `food_business_type_name_bd` (`food_business_type_name_bd`);

--
-- Indexes for table `job_category`
--
ALTER TABLE `job_category`
  ADD PRIMARY KEY (`job_category_id`),
  ADD UNIQUE KEY `job_category_name_en` (`job_category_name_en`),
  ADD UNIQUE KEY `job_category_name_bd` (`job_category_name_bd`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`),
  ADD UNIQUE KEY `login_username` (`login_username`),
  ADD KEY `ref_login_division_id` (`ref_login_division_id`),
  ADD KEY `ref_login_district_id` (`ref_login_district_id`),
  ADD KEY `ref_login_sub_district_or_ps_id` (`ref_login_sub_district_or_ps_id`);

--
-- Indexes for table `marital_status`
--
ALTER TABLE `marital_status`
  ADD PRIMARY KEY (`marital_status_id`),
  ADD UNIQUE KEY `marital_status_name_en` (`marital_status_name_en`),
  ADD UNIQUE KEY `marital_status_name_bd` (`marital_status_name_bd`);

--
-- Indexes for table `occupation`
--
ALTER TABLE `occupation`
  ADD PRIMARY KEY (`occupation_id`),
  ADD UNIQUE KEY `occupation_name_en` (`occupation_name_en`),
  ADD UNIQUE KEY `occupation_name_bd` (`occupation_name_bd`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `ref_post_login_id` (`ref_post_login_id`),
  ADD KEY `ref_post_ad_category_id` (`ref_post_ad_category_id`),
  ADD KEY `ref_post_division_id` (`ref_post_division_id`),
  ADD KEY `ref_post_district_id` (`ref_post_district_id`),
  ADD KEY `ref_post_sub_district_or_ps_id` (`ref_post_sub_district_or_ps_id`),
  ADD KEY `ref_post_swapping_by_id` (`ref_post_swapping_by_id`),
  ADD KEY `ref_post_selling_product_category_id` (`ref_post_selling_product_category_id`),
  ADD KEY `ref_post_job_category_id` (`ref_post_job_category_id`),
  ADD KEY `ref_post_food_business_type_id` (`ref_post_food_business_type_id`),
  ADD KEY `ref_post_bride_groom_occupation_id` (`ref_post_bride_groom_occupation_id`);

--
-- Indexes for table `product_condition`
--
ALTER TABLE `product_condition`
  ADD PRIMARY KEY (`product_condition_id`),
  ADD UNIQUE KEY `product_condition_name_en` (`product_condition_name_en`),
  ADD UNIQUE KEY `product_condition_name_bn` (`product_condition_name_bn`);

--
-- Indexes for table `rent_a_car`
--
ALTER TABLE `rent_a_car`
  ADD PRIMARY KEY (`rent_a_car_id`),
  ADD KEY `ref_rent_a_car_login_id` (`ref_rent_a_car_login_id`),
  ADD KEY `ref_rent_a_car_division_id` (`ref_rent_a_car_division_id`),
  ADD KEY `ref_rent_a_car_district_id` (`ref_rent_a_car_district_id`),
  ADD KEY `ref_rent_a_car_sub_district_or_pos_id` (`ref_rent_a_car_sub_district_or_pos_id`);

--
-- Indexes for table `rent_a_service`
--
ALTER TABLE `rent_a_service`
  ADD PRIMARY KEY (`rent_a_service_id`),
  ADD KEY `ref_rent_a_service_division_id` (`ref_rent_a_service_division_id`),
  ADD KEY `ref_rent_a_service_district_id` (`ref_rent_a_service_district_id`),
  ADD KEY `ref_rent_a_service_sub_district_or_ps_id` (`ref_rent_a_service_sub_district_or_ps_id`);

--
-- Indexes for table `selling_product_category`
--
ALTER TABLE `selling_product_category`
  ADD PRIMARY KEY (`selling_product_category_id`),
  ADD UNIQUE KEY `selling_product_category_name_en` (`selling_product_category_name_en`),
  ADD UNIQUE KEY `selling_product_category_name_bd` (`selling_product_category_name_bd`);

--
-- Indexes for table `service_type`
--
ALTER TABLE `service_type`
  ADD PRIMARY KEY (`service_type_id`),
  ADD UNIQUE KEY `service_type_name_en` (`service_type_name_en`),
  ADD UNIQUE KEY `service_type_name_bd` (`service_type_name_bd`);

--
-- Indexes for table `sub_district_or_ps`
--
ALTER TABLE `sub_district_or_ps`
  ADD PRIMARY KEY (`sub_district_or_ps_id`),
  ADD UNIQUE KEY `ref_sub_district_or_ps_district_id` (`ref_sub_district_or_ps_district_id`,`sub_district_or_ps_name_en`),
  ADD UNIQUE KEY `ref_sub_district_or_ps_distric_2` (`ref_sub_district_or_ps_district_id`,`sub_district_or_ps_name_bd`);

--
-- Indexes for table `swapping_by`
--
ALTER TABLE `swapping_by`
  ADD PRIMARY KEY (`swapping_by_id`),
  ADD UNIQUE KEY `swapping_by_name_en` (`swapping_by_name_en`),
  ADD UNIQUE KEY `swapping_by_name_bd` (`swapping_by_name_bd`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ad_category`
--
ALTER TABLE `ad_category`
  MODIFY `ad_category_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_version_android`
--
ALTER TABLE `app_version_android`
  MODIFY `app_version_android_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_version_ios`
--
ALTER TABLE `app_version_ios`
  MODIFY `app_version_ios_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `car_type`
--
ALTER TABLE `car_type`
  MODIFY `car_type_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `device_type`
--
ALTER TABLE `device_type`
  MODIFY `device_type_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `district_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `division`
--
ALTER TABLE `division`
  MODIFY `division_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food_business_type`
--
ALTER TABLE `food_business_type`
  MODIFY `food_business_type_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_category`
--
ALTER TABLE `job_category`
  MODIFY `job_category_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marital_status`
--
ALTER TABLE `marital_status`
  MODIFY `marital_status_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `occupation`
--
ALTER TABLE `occupation`
  MODIFY `occupation_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_condition`
--
ALTER TABLE `product_condition`
  MODIFY `product_condition_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rent_a_car`
--
ALTER TABLE `rent_a_car`
  MODIFY `rent_a_car_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rent_a_service`
--
ALTER TABLE `rent_a_service`
  MODIFY `rent_a_service_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `selling_product_category`
--
ALTER TABLE `selling_product_category`
  MODIFY `selling_product_category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_type`
--
ALTER TABLE `service_type`
  MODIFY `service_type_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_district_or_ps`
--
ALTER TABLE `sub_district_or_ps`
  MODIFY `sub_district_or_ps_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `swapping_by`
--
ALTER TABLE `swapping_by`
  MODIFY `swapping_by_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `current_android_version`
--
ALTER TABLE `current_android_version`
  ADD CONSTRAINT `current_android_version_ibfk_1` FOREIGN KEY (`ref_app_version_android_id`) REFERENCES `app_version_android` (`app_version_android_id`);

--
-- Constraints for table `current_ios_version`
--
ALTER TABLE `current_ios_version`
  ADD CONSTRAINT `current_ios_version_ibfk_1` FOREIGN KEY (`ref_app_version_ios_id`) REFERENCES `app_version_ios` (`app_version_ios_id`);

--
-- Constraints for table `district`
--
ALTER TABLE `district`
  ADD CONSTRAINT `district_ibfk_1` FOREIGN KEY (`ref_district_division_id`) REFERENCES `division` (`division_id`);

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`ref_login_division_id`) REFERENCES `division` (`division_id`),
  ADD CONSTRAINT `login_ibfk_2` FOREIGN KEY (`ref_login_district_id`) REFERENCES `district` (`district_id`),
  ADD CONSTRAINT `login_ibfk_3` FOREIGN KEY (`ref_login_sub_district_or_ps_id`) REFERENCES `sub_district_or_ps` (`sub_district_or_ps_id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`ref_post_login_id`) REFERENCES `login` (`login_id`),
  ADD CONSTRAINT `post_ibfk_10` FOREIGN KEY (`ref_post_bride_groom_occupation_id`) REFERENCES `occupation` (`occupation_id`),
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`ref_post_ad_category_id`) REFERENCES `ad_category` (`ad_category_id`),
  ADD CONSTRAINT `post_ibfk_3` FOREIGN KEY (`ref_post_division_id`) REFERENCES `division` (`division_id`),
  ADD CONSTRAINT `post_ibfk_4` FOREIGN KEY (`ref_post_district_id`) REFERENCES `district` (`district_id`),
  ADD CONSTRAINT `post_ibfk_5` FOREIGN KEY (`ref_post_sub_district_or_ps_id`) REFERENCES `sub_district_or_ps` (`sub_district_or_ps_id`),
  ADD CONSTRAINT `post_ibfk_6` FOREIGN KEY (`ref_post_swapping_by_id`) REFERENCES `swapping_by` (`swapping_by_id`),
  ADD CONSTRAINT `post_ibfk_7` FOREIGN KEY (`ref_post_selling_product_category_id`) REFERENCES `selling_product_category` (`selling_product_category_id`),
  ADD CONSTRAINT `post_ibfk_8` FOREIGN KEY (`ref_post_job_category_id`) REFERENCES `job_category` (`job_category_id`),
  ADD CONSTRAINT `post_ibfk_9` FOREIGN KEY (`ref_post_food_business_type_id`) REFERENCES `food_business_type` (`food_business_type_id`);

--
-- Constraints for table `rent_a_car`
--
ALTER TABLE `rent_a_car`
  ADD CONSTRAINT `rent_a_car_ibfk_1` FOREIGN KEY (`ref_rent_a_car_login_id`) REFERENCES `login` (`login_id`),
  ADD CONSTRAINT `rent_a_car_ibfk_2` FOREIGN KEY (`ref_rent_a_car_division_id`) REFERENCES `division` (`division_id`),
  ADD CONSTRAINT `rent_a_car_ibfk_3` FOREIGN KEY (`ref_rent_a_car_district_id`) REFERENCES `district` (`district_id`),
  ADD CONSTRAINT `rent_a_car_ibfk_4` FOREIGN KEY (`ref_rent_a_car_sub_district_or_pos_id`) REFERENCES `sub_district_or_ps` (`sub_district_or_ps_id`);

--
-- Constraints for table `rent_a_service`
--
ALTER TABLE `rent_a_service`
  ADD CONSTRAINT `rent_a_service_ibfk_1` FOREIGN KEY (`ref_rent_a_service_division_id`) REFERENCES `division` (`division_id`),
  ADD CONSTRAINT `rent_a_service_ibfk_2` FOREIGN KEY (`ref_rent_a_service_district_id`) REFERENCES `district` (`district_id`),
  ADD CONSTRAINT `rent_a_service_ibfk_3` FOREIGN KEY (`ref_rent_a_service_sub_district_or_ps_id`) REFERENCES `sub_district_or_ps` (`sub_district_or_ps_id`);

--
-- Constraints for table `sub_district_or_ps`
--
ALTER TABLE `sub_district_or_ps`
  ADD CONSTRAINT `sub_district_or_ps_ibfk_1` FOREIGN KEY (`ref_sub_district_or_ps_district_id`) REFERENCES `district` (`district_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
