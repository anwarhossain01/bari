CREATE TABLE division (
  division_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  division_name TEXT NOT NULL UNIQUE,
  division_bn_name TEXT NOT NULL UNIQUE,
  division_url TEXT NOT NULL
) ;

INSERT INTO division (division_id, division_name, division_bn_name, division_url) VALUES
(1, 'Chattagram', 'চট্টগ্রাম', 'www.chittagongdiv.gov.bd'),
(2, 'Rajshahi', 'রাজশাহী', 'www.rajshahidiv.gov.bd'),
(3, 'Khulna', 'খুলনা', 'www.khulnadiv.gov.bd'),
(4, 'Barisal', 'বরিশাল', 'www.barisaldiv.gov.bd'),
(5, 'Sylhet', 'সিলেট', 'www.sylhetdiv.gov.bd'),
(6, 'Dhaka', 'ঢাকা', 'www.dhakadiv.gov.bd'),
(7, 'Rangpur', 'রংপুর', 'www.rangpurdiv.gov.bd'),
(8, 'Mymensingh', 'ময়মনসিংহ', 'www.mymensinghdiv.gov.bd');

CREATE TABLE district (
  district_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  ref_district_division_id INTEGER NOT NULL,
  district_name TEXT NOT NULL,
  district_bn_name TEXT NOT NULL,
  district_lat TEXT DEFAULT NULL,
  district_lon TEXT DEFAULT NULL,
  district_url TEXT NOT NULL,
  FOREIGN KEY(ref_district_division_id) REFERENCES division(division_id),
  UNIQUE (district_name,ref_district_division_id),
  UNIQUE (district_bn_name,ref_district_division_id)
) ;
INSERT INTO district (district_id, ref_district_division_id, district_name, district_bn_name, district_lat, district_lon, district_url) VALUES
(1, 3, 'Dhaka', 'ঢাকা', 23.7115253, 90.4111451, 'www.dhaka.gov.bd' ),
(2, 3, 'Faridpur', 'ফরিদপুর', 23.6070822, 89.8429406, 'www.faridpur.gov.bd' ),
(3, 3, 'Gazipur', 'গাজীপুর', 24.0022858, 90.4264283, 'www.gazipur.gov.bd'),
(4, 3, 'Gopalganj', 'গোপালগঞ্জ', 23.0050857, 89.8266059, 'www.gopalganj.gov.bd'),
(5, 8, 'Jamalpur', 'জামালপুর', 24.937533, 89.937775, 'www.jamalpur.gov.bd'),
(6, 3, 'Kishoreganj', 'কিশোরগঞ্জ', 24.444937, 90.776575, 'www.kishoreganj.gov.bd'),
(7, 3, 'Madaripur', 'মাদারীপুর', 23.164102, 90.1896805, 'www.madaripur.gov.bd'),
(8, 3, 'Manikganj', 'মানিকগঞ্জ', 0, 0, 'www.manikganj.gov.bd'),
(9, 3, 'Munshiganj', 'মুন্সিগঞ্জ', 0, 0, 'www.munshiganj.gov.bd'),
(10, 8, 'Mymensingh', 'ময়মনসিং', 0, 0, 'www.mymensingh.gov.bd'),
(11, 3, 'Narayanganj', 'নারায়াণগঞ্জ', 23.63366, 90.496482, 'www.narayanganj.gov.bd'),
(12, 3, 'Narsingdi', 'নরসিংদী', 23.932233, 90.71541, 'www.narsingdi.gov.bd'),
(13, 8, 'Netrokona', 'নেত্রকোনা', 24.870955, 90.727887, 'www.netrokona.gov.bd'),
(14, 3, 'Rajbari', 'রাজবাড়ি', 23.7574305, 89.6444665, 'www.rajbari.gov.bd'),
(15, 3, 'Shariatpur', 'শরীয়তপুর', 0, 0, 'www.shariatpur.gov.bd'),
(16, 8, 'Sherpur', 'শেরপুর', 25.0204933, 90.0152966, 'www.sherpur.gov.bd'),
(17, 3, 'Tangail', 'টাঙ্গাইল', 0, 0, 'www.tangail.gov.bd'),
(18, 5, 'Bogra', 'বগুড়া', 24.8465228, 89.377755, 'www.bogra.gov.bd'),
(19, 5, 'Joypurhat', 'জয়পুরহাট', 0, 0, 'www.joypurhat.gov.bd'),
(20, 5, 'Naogaon', 'নওগাঁ', 0, 0, 'www.naogaon.gov.bd'),
(21, 5, 'Natore', 'নাটোর', 24.420556, 89.000282, 'www.natore.gov.bd'),
(22, 5, 'Nawabganj', 'নবাবগঞ্জ', 24.5965034, 88.2775122, 'www.chapainawabganj.gov.bd'),
(23, 5, 'Pabna', 'পাবনা', 23.998524, 89.233645, 'www.pabna.gov.bd'),
(24, 5, 'Rajshahi', 'রাজশাহী', 0, 0, 'www.rajshahi.gov.bd'),
(25, 5, 'Sirajgonj', 'সিরাজগঞ্জ', 24.4533978, 89.7006815, 'www.sirajganj.gov.bd'),
(26, 6, 'Dinajpur', 'দিনাজপুর', 25.6217061, 88.6354504, 'www.dinajpur.gov.bd'),
(27, 6, 'Gaibandha', 'গাইবান্ধা', 25.328751, 89.528088, 'www.gaibandha.gov.bd'),
(28, 6, 'Kurigram', 'কুড়িগ্রাম', 25.805445, 89.636174, 'www.kurigram.gov.bd'),
(29, 6, 'Lalmonirhat', 'লালমনিরহাট', 0, 0, 'www.lalmonirhat.gov.bd'),
(30, 6, 'Nilphamari', 'নীলফামারী', 25.931794, 88.856006, 'www.nilphamari.gov.bd'),
(31, 6, 'Panchagarh', 'পঞ্চগড়', 26.3411, 88.5541606, 'www.panchagarh.gov.bd'),
(32, 6, 'Rangpur', 'রংপুর', 25.7558096, 89.244462, 'www.rangpur.gov.bd'),
(33, 6, 'Thakurgaon', 'ঠাকুরগাঁও', 26.0336945, 88.4616834, 'www.thakurgaon.gov.bd'),
(34, 1, 'Barguna', 'বরগুনা', 0, 0, 'www.barguna.gov.bd'),
(35, 1, 'Barisal', 'বরিশাল', 0, 0, 'www.barisal.gov.bd'),
(36, 1, 'Bhola', 'ভোলা', 22.685923, 90.648179, 'www.bhola.gov.bd'),
(37, 1, 'Jhalokati', 'ঝালকাঠি', 0, 0, 'www.jhalakathi.gov.bd'),
(38, 1, 'Patuakhali', 'পটুয়াখালী', 22.3596316, 90.3298712, 'www.patuakhali.gov.bd'),
(39, 1, 'Pirojpur', 'পিরোজপুর', 0, 0, 'www.pirojpur.gov.bd'),
(40, 2, 'Bandarban', 'বান্দরবান', 22.1953275, 92.2183773, 'www.bandarban.gov.bd'),
(41, 2, 'Brahmanbaria', 'ব্রাহ্মণবাড়িয়া', 23.9570904, 91.1119286, 'www.brahmanbaria.gov.bd'),
(42, 2, 'Chandpur', 'চাঁদপুর', 23.2332585, 90.6712912, 'www.chandpur.gov.bd'),
(43, 2, 'Chittagong', 'চট্টগ্রাম', 22.335109, 91.834073, 'www.chittagong.gov.bd'),
(44, 2, 'Comilla', 'কুমিল্লা', 23.4682747, 91.1788135, 'www.comilla.gov.bd'),
(45, 2, 'Cox''s Bazar', 'কক্স বাজার', 0, 0, 'www.coxsbazar.gov.bd'),
(46, 2, 'Feni', 'ফেনী', 23.023231, 91.3840844, 'www.feni.gov.bd'),
(47, 2, 'Khagrachari', 'খাগড়াছড়ি', 23.119285, 91.984663, 'www.khagrachhari.gov.bd'),
(48, 2, 'Lakshmipur', 'লক্ষ্মীপুর', 22.942477, 90.841184, 'www.lakshmipur.gov.bd'),
(49, 2, 'Noakhali', 'নোয়াখালী', 22.869563, 91.099398, 'www.noakhali.gov.bd'),
(50, 2, 'Rangamati', 'রাঙ্গামাটি', 0, 0, 'www.rangamati.gov.bd'),
(51, 7, 'Habiganj', 'হবিগঞ্জ', 24.374945, 91.41553, 'www.habiganj.gov.bd'),
(52, 7, 'Maulvibazar', 'মৌলভীবাজার', 24.482934, 91.777417, 'www.moulvibazar.gov.bd'),
(53, 7, 'Sunamganj', 'সুনামগঞ্জ', 25.0658042, 91.3950115, 'www.sunamganj.gov.bd'),
(54, 7, 'Sylhet', 'সিলেট', 24.8897956, 91.8697894, 'www.sylhet.gov.bd'),
(55, 4, 'Bagerhat', 'বাগেরহাট', 22.651568, 89.785938, 'www.bagerhat.gov.bd'),
(56, 4, 'Chuadanga', 'চুয়াডাঙ্গা', 23.6401961, 88.841841, 'www.chuadanga.gov.bd'),
(57, 4, 'Jessore', 'যশোর', 23.16643, 89.2081126, 'www.jessore.gov.bd'),
(58, 4, 'Jhenaidah', 'ঝিনাইদহ', 23.5448176, 89.1539213, 'www.jhenaidah.gov.bd'),
(59, 4, 'Khulna', 'খুলনা', 22.815774, 89.568679, 'www.khulna.gov.bd'),
(60, 4, 'Kushtia', 'কুষ্টিয়া', 23.901258, 89.120482, 'www.kushtia.gov.bd'),
(61, 4, 'Magura', 'মাগুরা', 23.487337, 89.419956, 'www.magura.gov.bd'),
(62, 4, 'Meherpur', 'মেহেরপুর', 23.762213, 88.631821, 'www.meherpur.gov.bd'),
(63, 4, 'Narail', 'নড়াইল', 23.172534, 89.512672, 'www.narail.gov.bd'),
(64, 4, 'Satkhira', 'সাতক্ষীরা', 0, 0, 'www.satkhira.gov.bd');

CREATE TABLE upazila (
  upazila_id INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
  ref_upazila_district_id INTEGER  NOT NULL,
  upazila_name TEXT NOT NULL,
  upazila_bn_name TEXT NOT NULL,
  upazila_url TEXT DEFAULT NULL,
  FOREIGN KEY(ref_upazila_district_id) REFERENCES district(district_id),
  UNIQUE (upazila_name,ref_upazila_district_id),
  UNIQUE (upazila_bn_name,ref_upazila_district_id)
  
) ;




INSERT INTO upazila (upazila_id, ref_upazila_district_id, upazila_name, upazila_bn_name, upazila_url) VALUES
(1, 34, 'Amtali', 'আমতলী', NULL),
(2, 34, 'Bamna ', 'বামনা', NULL),
(3, 34, 'Barguna Sadar ', 'বরগুনা সদর', NULL),
(4, 34, 'Betagi ', 'বেতাগি', NULL),
(5, 34, 'Patharghata ', 'পাথরঘাটা', NULL),
(6, 34, 'Taltali ', 'তালতলী', NULL),
(7, 35, 'Muladi ', 'মুলাদি', NULL),
(8, 35, 'Babuganj ', 'বাবুগঞ্জ', NULL),
(9, 35, 'Agailjhara ', 'আগাইলঝরা', NULL),
(10, 35, 'Barisal Sadar ', 'বরিশাল সদর', NULL),
(11, 35, 'Bakerganj ', 'বাকেরগঞ্জ', NULL),
(12, 35, 'Banaripara ', 'বানাড়িপারা', NULL),
(13, 35, 'Gaurnadi ', 'গৌরনদী', NULL),
(14, 35, 'Hizla ', 'হিজলা', NULL),
(15, 35, 'Mehendiganj ', 'মেহেদিগঞ্জ ', NULL),
(16, 35, 'Wazirpur ', 'ওয়াজিরপুর', NULL),
(17, 36, 'Bhola Sadar ', 'ভোলা সদর', NULL),
(18, 36, 'Burhanuddin ', 'বুরহানউদ্দিন', NULL),
(19, 36, 'Char Fasson ', 'চর ফ্যাশন', NULL),
(20, 36, 'Daulatkhan ', 'দৌলতখান', NULL),
(21, 36, 'Lalmohan ', 'লালমোহন', NULL),
(22, 36, 'Manpura ', 'মনপুরা', NULL),
(23, 36, 'Tazumuddin ', 'তাজুমুদ্দিন', NULL),
(24, 37, 'Jhalokati Sadar ', 'ঝালকাঠি সদর', NULL),
(25, 37, 'Kathalia ', 'কাঁঠালিয়া', NULL),
(26, 37, 'Nalchity ', 'নালচিতি', NULL),
(27, 37, 'Rajapur ', 'রাজাপুর', NULL),
(28, 38, 'Bauphal ', 'বাউফল', NULL),
(29, 38, 'Dashmina ', 'দশমিনা', NULL),
(30, 38, 'Galachipa ', 'গলাচিপা', NULL),
(31, 38, 'Kalapara ', 'কালাপারা', NULL),
(32, 38, 'Mirzaganj ', 'মির্জাগঞ্জ ', NULL),
(33, 38, 'Patuakhali Sadar ', 'পটুয়াখালী সদর', NULL),
(34, 38, 'Dumki ', 'ডুমকি', NULL),
(35, 38, 'Rangabali ', 'রাঙ্গাবালি', NULL),
(36, 39, 'Bhandaria', 'ভ্যান্ডারিয়া', NULL),
(37, 39, 'Kaukhali', 'কাউখালি', NULL),
(38, 39, 'Mathbaria', 'মাঠবাড়িয়া', NULL),
(39, 39, 'Nazirpur', 'নাজিরপুর', NULL),
(40, 39, 'Nesarabad', 'নেসারাবাদ', NULL),
(41, 39, 'Pirojpur Sadar', 'পিরোজপুর সদর', NULL),
(42, 39, 'Zianagar', 'জিয়ানগর', NULL),
(43, 40, 'Bandarban Sadar', 'বান্দরবন সদর', NULL),
(44, 40, 'Thanchi', 'থানচি', NULL),
(45, 40, 'Lama', 'লামা', NULL),
(46, 40, 'Naikhongchhari', 'নাইখংছড়ি ', NULL),
(47, 40, 'Ali kadam', 'আলী কদম', NULL),
(48, 40, 'Rowangchhari', 'রউয়াংছড়ি ', NULL),
(49, 40, 'Ruma', 'রুমা', NULL),
(50, 41, 'Brahmanbaria Sadar ', 'ব্রাহ্মণবাড়িয়া সদর', NULL),
(51, 41, 'Ashuganj ', 'আশুগঞ্জ', NULL),
(52, 41, 'Nasirnagar ', 'নাসির নগর', NULL),
(53, 41, 'Nabinagar ', 'নবীনগর', NULL),
(54, 41, 'Sarail ', 'সরাইল', NULL),
(55, 41, 'Shahbazpur Town', 'শাহবাজপুর টাউন', NULL),
(56, 41, 'Kasba ', 'কসবা', NULL),
(57, 41, 'Akhaura ', 'আখাউরা', NULL),
(58, 41, 'Bancharampur ', 'বাঞ্ছারামপুর', NULL),
(59, 41, 'Bijoynagar ', 'বিজয় নগর', NULL),
(60, 42, 'Chandpur Sadar', 'চাঁদপুর সদর', NULL),
(61, 42, 'Faridganj', 'ফরিদগঞ্জ', NULL),
(62, 42, 'Haimchar', 'হাইমচর', NULL),
(63, 42, 'Haziganj', 'হাজীগঞ্জ', NULL),
(64, 42, 'Kachua', 'কচুয়া', NULL),
(65, 42, 'Matlab Uttar', 'মতলব উত্তর', NULL),
(66, 42, 'Matlab Dakkhin', 'মতলব দক্ষিণ', NULL),
(67, 42, 'Shahrasti', 'শাহরাস্তি', NULL),
(68, 43, 'Anwara ', 'আনোয়ারা', NULL),
(69, 43, 'Banshkhali ', 'বাশখালি', NULL),
(70, 43, 'Boalkhali ', 'বোয়ালখালি', NULL),
(71, 43, 'Chandanaish ', 'চন্দনাইশ', NULL),
(72, 43, 'Fatikchhari ', 'ফটিকছড়ি', NULL),
(73, 43, 'Hathazari ', 'হাঠহাজারী', NULL),
(74, 43, 'Lohagara ', 'লোহাগারা', NULL),
(75, 43, 'Mirsharai ', 'মিরসরাই', NULL),
(76, 43, 'Patiya ', 'পটিয়া', NULL),
(77, 43, 'Rangunia ', 'রাঙ্গুনিয়া', NULL),
(78, 43, 'Raozan ', 'রাউজান', NULL),
(79, 43, 'Sandwip ', 'সন্দ্বীপ', NULL),
(80, 43, 'Satkania ', 'সাতকানিয়া', NULL),
(81, 43, 'Sitakunda ', 'সীতাকুণ্ড', NULL),
(82, 44, 'Barura ', 'বড়ুরা', NULL),
(83, 44, 'Brahmanpara ', 'ব্রাহ্মণপাড়া', NULL),
(84, 44, 'Burichong ', 'বুড়িচং', NULL),
(85, 44, 'Chandina ', 'চান্দিনা', NULL),
(86, 44, 'Chauddagram ', 'চৌদ্দগ্রাম', NULL),
(87, 44, 'Daudkandi ', 'দাউদকান্দি', NULL),
(88, 44, 'Debidwar ', 'দেবীদ্বার', NULL),
(89, 44, 'Homna ', 'হোমনা', NULL),
(90, 44, 'Comilla Sadar ', 'কুমিল্লা সদর', NULL),
(91, 44, 'Laksam ', 'লাকসাম', NULL),
(92, 44, 'Monohorgonj ', 'মনোহরগঞ্জ', NULL),
(93, 44, 'Meghna ', 'মেঘনা', NULL),
(94, 44, 'Muradnagar ', 'মুরাদনগর', NULL),
(95, 44, 'Nangalkot ', 'নাঙ্গালকোট', NULL),
(96, 44, 'Comilla Sadar South ', 'কুমিল্লা সদর দক্ষিণ', NULL),
(97, 44, 'Titas ', 'তিতাস', NULL),
(98, 45, 'Chakaria ', 'চকরিয়া', NULL),
(100, 45, 'Cox''s Bazar Sadar ', 'কক্স বাজার সদর', NULL),
(101, 45, 'Kutubdia ', 'কুতুবদিয়া', NULL),
(102, 45, 'Maheshkhali ', 'মহেশখালী', NULL),
(103, 45, 'Ramu ', 'রামু', NULL),
(104, 45, 'Teknaf ', 'টেকনাফ', NULL),
(105, 45, 'Ukhia ', 'উখিয়া', NULL),
(106, 45, 'Pekua ', 'পেকুয়া', NULL),
(107, 46, 'Feni Sadar', 'ফেনী সদর', NULL),
(108, 46, 'Chagalnaiya', 'ছাগল নাইয়া', NULL),
(109, 46, 'Daganbhyan', 'দাগানভিয়া', NULL),
(110, 46, 'Parshuram', 'পরশুরাম', NULL),
(111, 46, 'Fhulgazi', 'ফুলগাজি', NULL),
(112, 46, 'Sonagazi', 'সোনাগাজি', NULL),
(113, 47, 'Dighinala ', 'দিঘিনালা ', NULL),
(114, 47, 'Khagrachhari ', 'খাগড়াছড়ি', NULL),
(115, 47, 'Lakshmichhari ', 'লক্ষ্মীছড়ি', NULL),
(116, 47, 'Mahalchhari ', 'মহলছড়ি', NULL),
(117, 47, 'Manikchhari ', 'মানিকছড়ি', NULL),
(118, 47, 'Matiranga ', 'মাটিরাঙ্গা', NULL),
(119, 47, 'Panchhari ', 'পানছড়ি', NULL),
(120, 47, 'Ramgarh ', 'রামগড়', NULL),
(121, 48, 'Lakshmipur Sadar ', 'লক্ষ্মীপুর সদর', NULL),
(122, 48, 'Raipur ', 'রায়পুর', NULL),
(123, 48, 'Ramganj ', 'রামগঞ্জ', NULL),
(124, 48, 'Ramgati ', 'রামগতি', NULL),
(125, 48, 'Komol Nagar ', 'কমল নগর', NULL),
(126, 49, 'Noakhali Sadar ', 'নোয়াখালী সদর', NULL),
(127, 49, 'Begumganj ', 'বেগমগঞ্জ', NULL),
(128, 49, 'Chatkhil ', 'চাটখিল', NULL),
(129, 49, 'Companyganj ', 'কোম্পানীগঞ্জ', NULL),
(130, 49, 'Shenbag ', 'শেনবাগ', NULL),
(131, 49, 'Hatia ', 'হাতিয়া', NULL),
(132, 49, 'Kobirhat ', 'কবিরহাট ', NULL),
(133, 49, 'Sonaimuri ', 'সোনাইমুরি', NULL),
(134, 49, 'Suborno Char ', 'সুবর্ণ চর ', NULL),
(135, 50, 'Rangamati Sadar ', 'রাঙ্গামাটি সদর', NULL),
(136, 50, 'Belaichhari ', 'বেলাইছড়ি', NULL),
(137, 50, 'Bagaichhari ', 'বাঘাইছড়ি', NULL),
(138, 50, 'Barkal ', 'বরকল', NULL),
(139, 50, 'Juraichhari ', 'জুরাইছড়ি', NULL),
(140, 50, 'Rajasthali ', 'রাজাস্থলি', NULL),
(141, 50, 'Kaptai ', 'কাপ্তাই', NULL),
(142, 50, 'Langadu ', 'লাঙ্গাডু', NULL),
(143, 50, 'Nannerchar ', 'নান্নেরচর ', NULL),
(144, 50, 'Kaukhali ', 'কাউখালি', NULL),
(150, 2, 'Faridpur Sadar ', 'ফরিদপুর সদর', NULL),
(151, 2, 'Boalmari ', 'বোয়ালমারী', NULL),
(152, 2, 'Alfadanga ', 'আলফাডাঙ্গা', NULL),
(153, 2, 'Madhukhali ', 'মধুখালি', NULL),
(154, 2, 'Bhanga ', 'ভাঙ্গা', NULL),
(155, 2, 'Nagarkanda ', 'নগরকান্ড', NULL),
(156, 2, 'Charbhadrasan ', 'চরভদ্রাসন ', NULL),
(157, 2, 'Sadarpur ', 'সদরপুর', NULL),
(158, 2, 'Shaltha ', 'শালথা', NULL),
(159, 3, 'Gazipur Sadar-Joydebpur', 'গাজীপুর সদর', NULL),
(160, 3, 'Kaliakior', 'কালিয়াকৈর', NULL),
(161, 3, 'Kapasia', 'কাপাসিয়া', NULL),
(162, 3, 'Sripur', 'শ্রীপুর', NULL),
(163, 3, 'Kaliganj', 'কালীগঞ্জ', NULL),
(164, 3, 'Tongi', 'টঙ্গি', NULL),
(165, 4, 'Gopalganj Sadar ', 'গোপালগঞ্জ সদর', NULL),
(166, 4, 'Kashiani ', 'কাশিয়ানি', NULL),
(167, 4, 'Kotalipara ', 'কোটালিপাড়া', NULL),
(168, 4, 'Muksudpur ', 'মুকসুদপুর', NULL),
(169, 4, 'Tungipara ', 'টুঙ্গিপাড়া', NULL),
(170, 5, 'Dewanganj ', 'দেওয়ানগঞ্জ', NULL),
(171, 5, 'Baksiganj ', 'বকসিগঞ্জ', NULL),
(172, 5, 'Islampur ', 'ইসলামপুর', NULL),
(173, 5, 'Jamalpur Sadar ', 'জামালপুর সদর', NULL),
(174, 5, 'Madarganj ', 'মাদারগঞ্জ', NULL),
(175, 5, 'Melandaha ', 'মেলানদাহা', NULL),
(176, 5, 'Sarishabari ', 'সরিষাবাড়ি ', NULL),
(177, 5, 'Narundi Police I.C', 'নারুন্দি', NULL),
(178, 6, 'Astagram ', 'অষ্টগ্রাম', NULL),
(179, 6, 'Bajitpur ', 'বাজিতপুর', NULL),
(180, 6, 'Bhairab ', 'ভৈরব', NULL),
(181, 6, 'Hossainpur ', 'হোসেনপুর ', NULL),
(182, 6, 'Itna ', 'ইটনা', NULL),
(183, 6, 'Karimganj ', 'করিমগঞ্জ', NULL),
(184, 6, 'Katiadi ', 'কতিয়াদি', NULL),
(185, 6, 'Kishoreganj Sadar ', 'কিশোরগঞ্জ সদর', NULL),
(186, 6, 'Kuliarchar ', 'কুলিয়ারচর', NULL),
(187, 6, 'Mithamain ', 'মিঠামাইন', NULL),
(188, 6, 'Nikli ', 'নিকলি', NULL),
(189, 6, 'Pakundia ', 'পাকুন্ডা', NULL),
(190, 6, 'Tarail ', 'তাড়াইল', NULL),
(191, 7, 'Madaripur Sadar', 'মাদারীপুর সদর', NULL),
(192, 7, 'Kalkini', 'কালকিনি', NULL),
(193, 7, 'Rajoir', 'রাজইর', NULL),
(194, 7, 'Shibchar', 'শিবচর', NULL),
(195, 8, 'Manikganj Sadar ', 'মানিকগঞ্জ সদর', NULL),
(196, 8, 'Singair ', 'সিঙ্গাইর', NULL),
(197, 8, 'Shibalaya ', 'শিবালয়', NULL),
(198, 8, 'Saturia ', 'সাঠুরিয়া', NULL),
(199, 8, 'Harirampur ', 'হরিরামপুর', NULL),
(200, 8, 'Ghior ', 'ঘিওর', NULL),
(201, 8, 'Daulatpur ', 'দৌলতপুর', NULL),
(202, 9, 'Lohajang ', 'লোহাজং', NULL),
(203, 9, 'Sreenagar ', 'শ্রীনগর', NULL),
(204, 9, 'Munshiganj Sadar ', 'মুন্সিগঞ্জ সদর', NULL),
(205, 9, 'Sirajdikhan ', 'সিরাজদিখান', NULL),
(206, 9, 'Tongibari ', 'টঙ্গিবাড়ি', NULL),
(207, 9, 'Gazaria ', 'গজারিয়া', NULL),
(208, 10, 'Bhaluka', 'ভালুকা', NULL),
(209, 10, 'Trishal', 'ত্রিশাল', NULL),
(210, 10, 'Haluaghat', 'হালুয়াঘাট', NULL),
(211, 10, 'Muktagachha', 'মুক্তাগাছা', NULL),
(212, 10, 'Dhobaura', 'ধবারুয়া', NULL),
(213, 10, 'Fulbaria', 'ফুলবাড়িয়া', NULL),
(214, 10, 'Gaffargaon', 'গফরগাঁও', NULL),
(215, 10, 'Gauripur', 'গৌরিপুর', NULL),
(216, 10, 'Ishwarganj', 'ঈশ্বরগঞ্জ', NULL),
(217, 10, 'Mymensingh Sadar', 'ময়মনসিং সদর', NULL),
(218, 10, 'Nandail', 'নন্দাইল', NULL),
(219, 10, 'Phulpur', 'ফুলপুর', NULL),
(220, 11, 'Araihazar ', 'আড়াইহাজার', NULL),
(221, 11, 'Sonargaon ', 'সোনারগাঁও', NULL),
(222, 11, 'Bandar', 'বান্দার', NULL),
(223, 11, 'Naryanganj Sadar ', 'নারায়ানগঞ্জ সদর', NULL),
(224, 11, 'Rupganj ', 'রূপগঞ্জ', NULL),
(225, 11, 'Siddirgonj ', 'সিদ্ধিরগঞ্জ', NULL),
(226, 12, 'Belabo ', 'বেলাবো', NULL),
(227, 12, 'Monohardi ', 'মনোহরদি', NULL),
(228, 12, 'Narsingdi Sadar ', 'নরসিংদী সদর', NULL),
(229, 12, 'Palash ', 'পলাশ', NULL),
(230, 12, 'Raipura , Narsingdi', 'রায়পুর', NULL),
(231, 12, 'Shibpur ', 'শিবপুর', NULL),
(232, 13, 'Kendua Upazilla', 'কেন্দুয়া', NULL),
(233, 13, 'Atpara Upazilla', 'আটপাড়া', NULL),
(234, 13, 'Barhatta Upazilla', 'বরহাট্টা', NULL),
(235, 13, 'Durgapur Upazilla', 'দুর্গাপুর', NULL),
(236, 13, 'Kalmakanda Upazilla', 'কলমাকান্দা', NULL),
(237, 13, 'Madan Upazilla', 'মদন', NULL),
(238, 13, 'Mohanganj Upazilla', 'মোহনগঞ্জ', NULL),
(239, 13, 'Netrakona-S Upazilla', 'নেত্রকোনা সদর', NULL),
(240, 13, 'Purbadhala Upazilla', 'পূর্বধলা', NULL),
(241, 13, 'Khaliajuri Upazilla', 'খালিয়াজুরি', NULL),
(242, 14, 'Baliakandi ', 'বালিয়াকান্দি', NULL),
(243, 14, 'Goalandaghat ', 'গোয়ালন্দ ঘাট', NULL),
(244, 14, 'Pangsha ', 'পাংশা', NULL),
(245, 14, 'Kalukhali ', 'কালুখালি', NULL),
(246, 14, 'Rajbari Sadar ', 'রাজবাড়ি সদর', NULL),
(247, 15, 'Shariatpur Sadar -Palong', 'শরীয়তপুর সদর ', NULL),
(248, 15, 'Damudya ', 'দামুদিয়া', NULL),
(249, 15, 'Naria ', 'নড়িয়া', NULL),
(250, 15, 'Jajira ', 'জাজিরা', NULL),
(251, 15, 'Bhedarganj ', 'ভেদারগঞ্জ', NULL),
(252, 15, 'Gosairhat ', 'গোসাইর হাট ', NULL),
(253, 16, 'Jhenaigati ', 'ঝিনাইগাতি', NULL),
(254, 16, 'Nakla ', 'নাকলা', NULL),
(255, 16, 'Nalitabari ', 'নালিতাবাড়ি', NULL),
(256, 16, 'Sherpur Sadar ', 'শেরপুর সদর', NULL),
(257, 16, 'Sreebardi ', 'শ্রীবরদি', NULL),
(258, 17, 'Tangail Sadar ', 'টাঙ্গাইল সদর', NULL),
(259, 17, 'Sakhipur ', 'সখিপুর', NULL),
(260, 17, 'Basail ', 'বসাইল', NULL),
(261, 17, 'Madhupur ', 'মধুপুর', NULL),
(262, 17, 'Ghatail ', 'ঘাটাইল', NULL),
(263, 17, 'Kalihati ', 'কালিহাতি', NULL),
(264, 17, 'Nagarpur ', 'নগরপুর', NULL),
(265, 17, 'Mirzapur ', 'মির্জাপুর', NULL),
(266, 17, 'Gopalpur ', 'গোপালপুর', NULL),
(267, 17, 'Delduar ', 'দেলদুয়ার', NULL),
(268, 17, 'Bhuapur ', 'ভুয়াপুর', NULL),
(269, 17, 'Dhanbari ', 'ধানবাড়ি', NULL),
(270, 55, 'Bagerhat Sadar ', 'বাগেরহাট সদর', NULL),
(271, 55, 'Chitalmari ', 'চিতলমাড়ি', NULL),
(272, 55, 'Fakirhat ', 'ফকিরহাট', NULL),
(273, 55, 'Kachua ', 'কচুয়া', NULL),
(274, 55, 'Mollahat ', 'মোল্লাহাট ', NULL),
(275, 55, 'Mongla ', 'মংলা', NULL),
(276, 55, 'Morrelganj ', 'মরেলগঞ্জ', NULL),
(277, 55, 'Rampal ', 'রামপাল', NULL),
(278, 55, 'Sarankhola ', 'স্মরণখোলা', NULL),
(279, 56, 'Damurhuda ', 'দামুরহুদা', NULL),
(280, 56, 'Chuadanga-S ', 'চুয়াডাঙ্গা সদর', NULL),
(281, 56, 'Jibannagar ', 'জীবন নগর ', NULL),
(282, 56, 'Alamdanga ', 'আলমডাঙ্গা', NULL),
(283, 57, 'Abhaynagar ', 'অভয়নগর', NULL),
(284, 57, 'Keshabpur ', 'কেশবপুর', NULL),
(285, 57, 'Bagherpara ', 'বাঘের পাড়া ', NULL),
(286, 57, 'Jessore Sadar ', 'যশোর সদর', NULL),
(287, 57, 'Chaugachha ', 'চৌগাছা', NULL),
(288, 57, 'Manirampur ', 'মনিরামপুর ', NULL),
(289, 57, 'Jhikargachha ', 'ঝিকরগাছা', NULL),
(290, 57, 'Sharsha ', 'সারশা', NULL),
(291, 58, 'Jhenaidah Sadar ', 'ঝিনাইদহ সদর', NULL),
(292, 58, 'Maheshpur ', 'মহেশপুর', NULL),
(293, 58, 'Kaliganj ', 'কালীগঞ্জ', NULL),
(294, 58, 'Kotchandpur ', 'কোট চাঁদপুর ', NULL),
(295, 58, 'Shailkupa ', 'শৈলকুপা', NULL),
(296, 58, 'Harinakunda ', 'হাড়িনাকুন্দা', NULL),
(297, 59, 'Terokhada ', 'তেরোখাদা', NULL),
(298, 59, 'Batiaghata ', 'বাটিয়াঘাটা ', NULL),
(299, 59, 'Dacope ', 'ডাকপে', NULL),
(300, 59, 'Dumuria ', 'ডুমুরিয়া', NULL),
(301, 59, 'Dighalia ', 'দিঘলিয়া', NULL),
(302, 59, 'Koyra ', 'কয়ড়া', NULL),
(303, 59, 'Paikgachha ', 'পাইকগাছা', NULL),
(304, 59, 'Phultala ', 'ফুলতলা', NULL),
(305, 59, 'Rupsa ', 'রূপসা', NULL),
(306, 60, 'Kushtia Sadar', 'কুষ্টিয়া সদর', NULL),
(307, 60, 'Kumarkhali', 'কুমারখালি', NULL),
(308, 60, 'Daulatpur', 'দৌলতপুর', NULL),
(309, 60, 'Mirpur', 'মিরপুর', NULL),
(310, 60, 'Bheramara', 'ভেরামারা', NULL),
(311, 60, 'Khoksa', 'খোকসা', NULL),
(312, 61, 'Magura Sadar ', 'মাগুরা সদর', NULL),
(313, 61, 'Mohammadpur ', 'মহাম্মাদপুর', NULL),
(314, 61, 'Shalikha ', 'শালিখা', NULL),
(315, 61, 'Sreepur ', 'শ্রীপুর', NULL),
(316, 62, 'angni ', 'আংনি', NULL),
(317, 62, 'Mujib Nagar ', 'মুজিব নগর', NULL),
(318, 62, 'Meherpur-S ', 'মেহেরপুর সদর', NULL),
(319, 63, 'Narail-S Upazilla', 'নড়াইল সদর', NULL),
(320, 63, 'Lohagara Upazilla', 'লোহাগাড়া', NULL),
(321, 63, 'Kalia Upazilla', 'কালিয়া', NULL),
(322, 64, 'Satkhira Sadar ', 'সাতক্ষীরা সদর', NULL),
(323, 64, 'Assasuni ', 'আসসাশুনি ', NULL),
(324, 64, 'Debhata ', 'দেভাটা', NULL),
(325, 64, 'Tala ', 'তালা', NULL),
(326, 64, 'Kalaroa ', 'কলরোয়া', NULL),
(327, 64, 'Kaliganj ', 'কালীগঞ্জ', NULL),
(328, 64, 'Shyamnagar ', 'শ্যামনগর', NULL),
(329, 18, 'Adamdighi', 'আদমদিঘী', NULL),
(330, 18, 'Bogra Sadar', 'বগুড়া সদর', NULL),
(331, 18, 'Sherpur', 'শেরপুর', NULL),
(332, 18, 'Dhunat', 'ধুনট', NULL),
(333, 18, 'Dhupchanchia', 'দুপচাচিয়া', NULL),
(334, 18, 'Gabtali', 'গাবতলি', NULL),
(335, 18, 'Kahaloo', 'কাহালু', NULL),
(336, 18, 'Nandigram', 'নন্দিগ্রাম', NULL),
(337, 18, 'Sahajanpur', 'শাহজাহানপুর', NULL),
(338, 18, 'Sariakandi', 'সারিয়াকান্দি', NULL),
(339, 18, 'Shibganj', 'শিবগঞ্জ', 'shibganj.chapainawabganj.gov.bd'),
(340, 18, 'Sonatala', 'সোনাতলা', NULL),
(341, 19, 'Joypurhat S', 'জয়পুরহাট সদর', NULL),
(342, 19, 'Akkelpur', 'আক্কেলপুর', NULL),
(343, 19, 'Kalai', 'কালাই', NULL),
(344, 19, 'Khetlal', 'খেতলাল', NULL),
(345, 19, 'Panchbibi', 'পাঁচবিবি', NULL),
(346, 20, 'Naogaon Sadar ', 'নওগাঁ সদর', NULL),
(347, 20, 'Mohadevpur ', 'মহাদেবপুর', NULL),
(348, 20, 'Manda ', 'মান্দা', NULL),
(349, 20, 'Niamatpur ', 'নিয়ামতপুর', NULL),
(350, 20, 'Atrai ', 'আত্রাই', NULL),
(351, 20, 'Raninagar ', 'রাণীনগর', NULL),
(352, 20, 'Patnitala ', 'পত্নীতলা', NULL),
(353, 20, 'Dhamoirhat ', 'ধামইরহাট ', NULL),
(354, 20, 'Sapahar ', 'সাপাহার', NULL),
(355, 20, 'Porsha ', 'পোরশা', NULL),
(356, 20, 'Badalgachhi ', 'বদলগাছি', NULL),
(357, 21, 'Natore Sadar ', 'নাটোর সদর', NULL),
(358, 21, 'Baraigram ', 'বড়াইগ্রাম', NULL),
(359, 21, 'Bagatipara ', 'বাগাতিপাড়া', NULL),
(360, 21, 'Lalpur ', 'লালপুর', NULL),
(363, 22, 'Bholahat ', 'ভোলাহাট', NULL),
(364, 22, 'Gomastapur ', 'গোমস্তাপুর', NULL),
(365, 22, 'Nachole ', 'নাচোল', NULL),
(366, 22, 'Nawabganj Sadar ', 'নবাবগঞ্জ সদর', NULL),
(367, 22, 'Shibganj ', 'শিবগঞ্জ', NULL),
(368, 23, 'Atgharia ', 'আটঘরিয়া', NULL),
(369, 23, 'Bera ', 'বেড়া', NULL),
(370, 23, 'Bhangura ', 'ভাঙ্গুরা', NULL),
(371, 23, 'Chatmohar ', 'চাটমোহর', NULL),
(372, 23, 'Faridpur ', 'ফরিদপুর', NULL),
(373, 23, 'Ishwardi ', 'ঈশ্বরদী', NULL),
(374, 23, 'Pabna Sadar ', 'পাবনা সদর', NULL),
(375, 23, 'Santhia ', 'সাথিয়া', NULL),
(376, 23, 'Sujanagar ', 'সুজানগর', NULL),
(377, 24, 'Bagha', 'বাঘা', NULL),
(378, 24, 'Bagmara', 'বাগমারা', NULL),
(379, 24, 'Charghat', 'চারঘাট', NULL),
(380, 24, 'Durgapur', 'দুর্গাপুর', NULL),
(381, 24, 'Godagari', 'গোদাগারি', NULL),
(382, 24, 'Mohanpur', 'মোহনপুর', NULL),
(383, 24, 'Paba', 'পবা', NULL),
(384, 24, 'Puthia', 'পুঠিয়া', NULL),
(385, 24, 'Tanore', 'তানোর', NULL),
(386, 25, 'Sirajganj Sadar ', 'সিরাজগঞ্জ সদর', NULL),
(387, 25, 'Belkuchi ', 'বেলকুচি', NULL),
(388, 25, 'Chauhali ', 'চৌহালি', NULL),
(389, 25, 'Kamarkhanda ', 'কামারখান্দা', NULL),
(390, 25, 'Kazipur ', 'কাজীপুর', NULL),
(391, 25, 'Raiganj ', 'রায়গঞ্জ', NULL),
(392, 25, 'Shahjadpur ', 'শাহজাদপুর', NULL),
(393, 25, 'Tarash ', 'তারাশ', NULL),
(394, 25, 'Ullahpara ', 'উল্লাপাড়া', NULL),
(395, 26, 'Birampur ', 'বিরামপুর', NULL),
(396, 26, 'Birganj', 'বীরগঞ্জ', NULL),
(397, 26, 'Biral ', 'বিড়াল', NULL),
(398, 26, 'Bochaganj ', 'বোচাগঞ্জ', NULL),
(399, 26, 'Chirirbandar ', 'চিরিরবন্দর', NULL),
(400, 26, 'Phulbari ', 'ফুলবাড়ি', NULL),
(401, 26, 'Ghoraghat ', 'ঘোড়াঘাট', NULL),
(402, 26, 'Hakimpur ', 'হাকিমপুর', NULL),
(403, 26, 'Kaharole ', 'কাহারোল', NULL),
(404, 26, 'Khansama ', 'খানসামা', NULL),
(405, 26, 'Dinajpur Sadar ', 'দিনাজপুর সদর', NULL),
(406, 26, 'Nawabganj', 'নবাবগঞ্জ', NULL),
(407, 26, 'Parbatipur ', 'পার্বতীপুর', NULL),
(408, 27, 'Fulchhari', 'ফুলছড়ি', NULL),
(409, 27, 'Gaibandha sadar', 'গাইবান্ধা সদর', NULL),
(410, 27, 'Gobindaganj', 'গোবিন্দগঞ্জ', NULL),
(411, 27, 'Palashbari', 'পলাশবাড়ী', NULL),
(412, 27, 'Sadullapur', 'সাদুল্যাপুর', NULL),
(413, 27, 'Saghata', 'সাঘাটা', NULL),
(414, 27, 'Sundarganj', 'সুন্দরগঞ্জ', NULL),
(415, 28, 'Kurigram Sadar', 'কুড়িগ্রাম সদর', NULL),
(416, 28, 'Nageshwari', 'নাগেশ্বরী', NULL),
(417, 28, 'Bhurungamari', 'ভুরুঙ্গামারি', NULL),
(418, 28, 'Phulbari', 'ফুলবাড়ি', NULL),
(419, 28, 'Rajarhat', 'রাজারহাট', NULL),
(420, 28, 'Ulipur', 'উলিপুর', NULL),
(421, 28, 'Chilmari', 'চিলমারি', NULL),
(422, 28, 'Rowmari', 'রউমারি', NULL),
(423, 28, 'Char Rajibpur', 'চর রাজিবপুর', NULL),
(424, 29, 'Lalmanirhat Sadar', 'লালমনিরহাট সদর', NULL),
(425, 29, 'Aditmari', 'আদিতমারি', NULL),
(426, 29, 'Kaliganj', 'কালীগঞ্জ', 'kaliganj.jhenaidah.gov.bd'),
(427, 29, 'Hatibandha', 'হাতিবান্ধা', NULL),
(428, 29, 'Patgram', 'পাটগ্রাম', NULL),
(429, 30, 'Nilphamari Sadar', 'নীলফামারী সদর', NULL),
(430, 30, 'Saidpur', 'সৈয়দপুর', NULL),
(431, 30, 'Jaldhaka', 'জলঢাকা', NULL),
(432, 30, 'Kishoreganj', 'কিশোরগঞ্জ', NULL),
(433, 30, 'Domar', 'ডোমার', NULL),
(434, 30, 'Dimla', 'ডিমলা', NULL),
(435, 31, 'Panchagarh Sadar', 'পঞ্চগড় সদর', NULL),
(436, 31, 'Debiganj', 'দেবীগঞ্জ', NULL),
(437, 31, 'Boda', 'বোদা', NULL),
(438, 31, 'Atwari', 'আটোয়ারি', NULL),
(439, 31, 'Tetulia', 'তেতুলিয়া', NULL),
(440, 32, 'Badarganj', 'বদরগঞ্জ', NULL),
(441, 32, 'Mithapukur', 'মিঠাপুকুর', NULL),
(442, 32, 'Gangachara', 'গঙ্গাচরা', NULL),
(443, 32, 'Kaunia', 'কাউনিয়া', NULL),
(444, 32, 'Rangpur Sadar', 'রংপুর সদর', NULL),
(445, 32, 'Pirgachha', 'পীরগাছা', NULL),
(446, 32, 'Pirganj', 'পীরগঞ্জ', NULL),
(447, 32, 'Taraganj', 'তারাগঞ্জ', NULL),
(448, 33, 'Thakurgaon Sadar ', 'ঠাকুরগাঁও সদর', NULL),
(449, 33, 'Pirganj ', 'পীরগঞ্জ', NULL),
(450, 33, 'Baliadangi ', 'বালিয়াডাঙ্গি', NULL),
(451, 33, 'Haripur ', 'হরিপুর', NULL),
(452, 33, 'Ranisankail ', 'রাণীসংকইল', NULL),
(453, 51, 'Ajmiriganj', 'আজমিরিগঞ্জ', NULL),
(454, 51, 'Baniachang', 'বানিয়াচং', NULL),
(455, 51, 'Bahubal', 'বাহুবল', NULL),
(456, 51, 'Chunarughat', 'চুনারুঘাট', NULL),
(457, 51, 'Habiganj Sadar', 'হবিগঞ্জ সদর', NULL),
(458, 51, 'Lakhai', 'লাক্ষাই', NULL),
(459, 51, 'Madhabpur', 'মাধবপুর', NULL),
(460, 51, 'Nabiganj', 'নবীগঞ্জ', NULL),
(461, 51, 'Shaistagonj ', 'শায়েস্তাগঞ্জ', NULL),
(462, 52, 'Moulvibazar Sadar', 'মৌলভীবাজার', NULL),
(463, 52, 'Barlekha', 'বড়লেখা', NULL),
(464, 52, 'Juri', 'জুড়ি', NULL),
(465, 52, 'Kamalganj', 'কামালগঞ্জ', NULL),
(466, 52, 'Kulaura', 'কুলাউরা', NULL),
(467, 52, 'Rajnagar', 'রাজনগর', NULL),
(468, 52, 'Sreemangal', 'শ্রীমঙ্গল', NULL),
(469, 53, 'Bishwamvarpur', 'বিসশম্ভারপুর', NULL),
(470, 53, 'Chhatak', 'ছাতক', NULL),
(471, 53, 'Derai', 'দেড়াই', NULL),
(472, 53, 'Dharampasha', 'ধরমপাশা', NULL),
(473, 53, 'Dowarabazar', 'দোয়ারাবাজার', NULL),
(474, 53, 'Jagannathpur', 'জগন্নাথপুর', NULL),
(475, 53, 'Jamalganj', 'জামালগঞ্জ', NULL),
(476, 53, 'Sulla', 'সুল্লা', NULL),
(477, 53, 'Sunamganj Sadar', 'সুনামগঞ্জ সদর', NULL),
(478, 53, 'Shanthiganj', 'শান্তিগঞ্জ', NULL),
(479, 53, 'Tahirpur', 'তাহিরপুর', NULL),
(480, 54, 'Sylhet Sadar', 'সিলেট সদর', NULL),
(481, 54, 'Beanibazar', 'বেয়ানিবাজার', NULL),
(482, 54, 'Bishwanath', 'বিশ্বনাথ', NULL),
(483, 54, 'Dakshin Surma/South Surma ', 'দক্ষিণ সুরমা', NULL),
(484, 54, 'Balaganj', 'বালাগঞ্জ', NULL),
(485, 54, 'Companiganj', 'কোম্পানিগঞ্জ', NULL),
(486, 54, 'Fenchuganj', 'ফেঞ্চুগঞ্জ', NULL),
(487, 54, 'Golapganj', 'গোলাপগঞ্জ', NULL),
(488, 54, 'Gowainghat', 'গোয়াইনঘাট', NULL),
(489, 54, 'Jaintiapur', 'জয়ন্তপুর', NULL),
(490, 54, 'Kanaighat', 'কানাইঘাট', NULL),
(491, 54, 'Zakiganj', 'জাকিগঞ্জ', NULL),
(492, 54, 'Nobigonj', 'নবীগঞ্জ', NULL),
(493, 1, 'Adabor', 'আদাবর', NULL),
(494, 1, 'Airport', 'বিমানবন্দর', NULL),
(495, 1, 'Badda', 'বাড্ডা', NULL),
(496, 1, 'Banani', 'বনানী', NULL),
(497, 1, 'Bangshal', 'বংশাল', NULL),
(498, 1, 'Bhashantek', 'ভাষানটেক', NULL),
(499, 1, 'Cantonment', 'সেনানিবাস (ক্যান্টনমেন্ট)', NULL),
(500, 1, 'Chackbazar', 'চকবাজার', NULL),
(501, 1, 'Darussalam', 'দারুস সালাম', NULL),
(502, 1, 'Daskhinkhan', 'দক্ষিণ খান', NULL),
(503, 1, 'Demra', 'ডেমরা', NULL),
(504, 1, 'Dhamrai', 'ধামরাই', NULL),
(505, 1, 'Dhanmondi', 'ধানমন্ডি', NULL),
(506, 1, 'Dohar', 'দোহার', NULL),
(507, 1, 'Gandaria', 'গেন্ডারিয়া', NULL),
(508, 1, 'Gulshan', 'গুলশান', NULL),
(509, 1, 'Hazaribag', 'হাজারীবাগ', NULL),
(510, 1, 'Jatrabari', 'যাত্রাবাড়ী', NULL),
(511, 1, 'Kafrul', 'কাফরুল', NULL),
(512, 1, 'Kalabagan', 'কলাবাগান', NULL),
(513, 1, 'Kamrangirchar', 'কামরাঙ্গীরচর', NULL),
(514, 1, 'Keraniganj', 'কেরানীগঞ্জ', NULL),
(515, 1, 'Khilgaon', 'খিলগাঁও', NULL),
(516, 1, 'Khilkhet', 'খিলক্ষেত', NULL),
(517, 1, 'Kotwali', 'কোতোয়ালি', NULL),
(518, 1, 'Lalbag', 'লালবাগ', NULL),
(519, 1, 'Mirpur Model', 'মিরপুর মডেল', NULL),
(520, 1, 'Mohammadpur', 'মোহাম্মদপুর', NULL),
(521, 1, 'Motijheel', 'মতিঝিল', NULL),
(522, 1, 'Mugda', 'মুগদা', NULL),
(523, 1, 'Nawabganj', 'নবাবগঞ্জ', NULL),
(524, 1, 'New Market', 'নিউ মার্কেট', NULL),
(525, 1, 'Pallabi', 'পল্লবী', NULL),
(526, 1, 'Paltan Model', 'পল্টন মডেল', NULL),
(527, 1, 'Ramna Model', 'রমনা মডেল', NULL),
(528, 1, 'Rampura', 'রামপুরা', NULL),
(529, 1, 'Rupnagar', 'রূপনগর', NULL),
(530, 1, 'Sabujbag', 'সবুজবাগ', NULL),
(531, 1, 'Savar', 'সাভার', NULL),
(532, 1, 'Shah Ali', 'শাহ্ আলী', NULL),
(533, 1, 'Shahbag', 'শাহবাগ', NULL),
(534, 1, 'Shahjahanpur', 'শাহজাহানপুর', NULL),
(535, 1, 'Sherebanglanagar', 'শের ই বাংলা নগর', NULL),
(536, 1, 'Shyampur', 'শ্যামপুর', NULL),
(537, 1, 'Sutrapur', 'সূত্রাপুর', NULL),
(538, 1, 'Tejgaon', 'তেজগাঁও', NULL),
(539, 1, 'Tejgaon Industrial', 'তেজগাঁও শিল্প', NULL),
(540, 1, 'Turag', 'তুরাগ', NULL),
(541, 1, 'Uttara', 'উত্তরা', NULL),
(542, 1, 'Uttara West', 'উত্তরা পশ্চিম', NULL),
(543, 1, 'Uttarkhan', 'উত্তর খান', NULL),
(544, 1, 'Vatara', 'ভাটারা', NULL),
(545, 1, 'Wari', 'ওয়ারী', NULL),
(546, 1, 'Others', 'অন্যান্য', NULL),
(547, 35, 'Airport', 'এয়ারপোর্ট', NULL),
(548, 35, 'Kawnia', 'কাউনিয়া', NULL),
(549, 35, 'Bondor', 'বন্দর', NULL),
(550, 35, 'Others', 'অন্যান্য', NULL),
(551, 24, 'Boalia', 'বোয়ালিয়া', NULL),
(552, 24, 'Motihar', 'মতিহার', NULL),
(553, 24, 'Shahmokhdum', 'শাহ্ মকখদুম ', NULL),
(554, 24, 'Rajpara', 'রাজপারা ', NULL),
(555, 24, 'Others', 'অন্যান্য', NULL),
(556, 43, 'Akborsha', 'Akborsha', NULL),
(557, 43, 'Baijid bostami', 'বাইজিদ বোস্তামী', NULL),
(558, 43, 'Bakolia', 'বাকোলিয়া', NULL),
(559, 43, 'Bandar', 'বন্দর', 'bandar.narayanganj.gov.bd'),
(560, 43, 'Chandgaon', 'চাঁদগাও', NULL),
(561, 43, 'Chokbazar', 'চকবাজার', NULL),
(562, 43, 'Doublemooring', 'ডাবল মুরিং', NULL),
(563, 43, 'EPZ', 'ইপিজেড', NULL),
(564, 43, 'Hali Shohor', 'হলী শহর', NULL),
(565, 43, 'Kornafuli', 'কর্ণফুলি', NULL),
(566, 43, 'Kotwali', 'কোতোয়ালী', NULL),
(567, 43, 'Kulshi', 'কুলশি', NULL),
(568, 43, 'Pahartali', 'পাহাড়তলী', NULL),
(569, 43, 'Panchlaish', 'পাঁচলাইশ', NULL),
(570, 43, 'Potenga', 'পতেঙ্গা', NULL),
(571, 43, 'Shodhorgat', 'সদরঘাট', NULL),
(572, 43, 'Others', 'অন্যান্য', NULL),
(573, 44, 'Others', 'অন্যান্য', NULL),
(574, 59, 'Aranghata', 'আড়াংঘাটা', NULL),
(575, 59, 'Daulatpur', 'দৌলতপুর', NULL),
(576, 59, 'Harintana', 'হারিন্তানা ', NULL),
(577, 59, 'Horintana', 'হরিণতানা ', NULL),
(578, 59, 'Khalishpur', 'খালিশপুর', NULL),
(579, 59, 'Khanjahan Ali', 'খানজাহান আলী', NULL),
(580, 59, 'Khulna Sadar', 'খুলনা সদর', NULL),
(581, 59, 'Labanchora', 'লাবানছোরা', NULL),
(582, 59, 'Sonadanga', 'সোনাডাঙ্গা', NULL),
(583, 59, 'Others', 'অন্যান্য', NULL),
(584, 2, 'Others', 'অন্যান্য', NULL),
(585, 4, 'Others', 'অন্যান্য', NULL),
(586, 5, 'Others', 'অন্যান্য', NULL),
(587, 54, 'Airport', 'বিমানবন্দর', NULL),
(588, 54, 'Hazrat Shah Paran', 'হযরত শাহ পরাণ', NULL),
(589, 54, 'Jalalabad', 'জালালাবাদ', NULL),
(590, 54, 'Kowtali', 'কোতোয়ালী', NULL),
(591, 54, 'Moglabazar', 'মোগলাবাজার', NULL),
(592, 54, 'Osmani Nagar', 'ওসমানী নগর', NULL),
(594, 54, 'Others', 'অন্যান্য', NULL);

CREATE TABLE ad_category (
  ad_category_id INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
  ad_category_name TEXT NOT NULL,
  ad_category_bn_name TEXT NOT NULL,
  ad_category_position INTEGER  DEFAULT 0,
  ad_category_active INTEGER DEFAULT 1,
  UNIQUE (ad_category_name),
  UNIQUE (ad_category_bn_name)
  
) ;



INSERT INTO ad_category (ad_category_id, ad_category_name, ad_category_bn_name, ad_category_position, ad_category_active) VALUES
(1, 'Residential', 'আবাসিক', 1, 1),
(2, 'Commercial', 'বাণিজ্যিক', 2, 1),
(3, 'Garage', 'গ্যারেজ', 3, 1),
(4, 'Transport', 'পরিবহন', 4, 1),
(5, 'Lost / Found Ads', 'হারানো / পাওয়া গিয়েছে বিজ্ঞাপন', 5, 1),
(6, 'Recruitment / Job Seeking', 'চাকরির নিয়োগ/সন্ধান', 6, 1),
(7, 'Tutor Services', 'প​ড়াতে / পড়তে চাই', 7, 1),
(8, 'Business Advertising', 'ব্যবসায়িক বিজ্ঞাপন', 8, 1);

CREATE TABLE ad_sub_category (
  ad_sub_category_id INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
  ref_ad_sub_category_ad_category_id INTEGER NOT NULL,
  ad_sub_category_name TEXT NOT NULL,
  ad_sub_category_bn_name TEXT NOT NULL,
  ad_sub_category_position INTEGER DEFAULT 0,
  ad_sub_category_active INTEGER DEFAULT 1,
  FOREIGN KEY(ref_ad_sub_category_ad_category_id) REFERENCES ad_category(ad_category_id),
  UNIQUE (ad_sub_category_name),
  UNIQUE (ad_sub_category_bn_name)
  
) ;

INSERT INTO ad_sub_category (ad_sub_category_id, ref_ad_sub_category_ad_category_id, ad_sub_category_name, ad_sub_category_bn_name, ad_sub_category_position, ad_sub_category_active) VALUES
(1, 1, 'Apartment/Flat', 'অ্যাপার্টমেন্ট/ফ্ল্যাট', 1, 1),
(2, 1, 'Rooms', 'রুম', 2, 1),
(3, 1, 'Sublet', 'সাবলেট', 3, 1),
(4, 1, 'Hostel/Seat/Roommate/Bachelor Mess', 'হোস্টেল/সিট/রুমমেট/ব্যাচেলার মেস', 4, 1),
(5, 1, 'Plot', 'প্লট', 5, 1),
(6, 2, 'Office/Apartment', 'অফিস/অ্যাপার্টমেন্ট', 1, 1),
(7, 2, 'Sublet Office/Apartment', 'সাবলেট অফিস/অ্যাপার্টমেন্ট', 2, 1),
(8, 2, 'Floor', 'ফ্লোর', 3, 1),
(9, 2, 'Shop', 'দোকান', 4, 1),
(10, 2, 'Warehouse', 'গুদাম', 5, 1),
(11, 4, 'Car/MicroBus/MiniBus', 'গাড়ী/মাইক্রোবাস/মিনিবাস', 1, 1),
(12, 4, 'Pickup/Truck/Vans', 'পিকআপ/ট্রাক/ভ্যান', 2, 1),
(13, 5,'Lost Ads', 'হারানো গিয়েছে বিজ্ঞাপন', 1, 1),
(14, 5,'Found Ads', 'পাওয়া গিয়েছে বিজ্ঞাপন', 2, 1),
(15, 6,'Recruitment', 'চাকরির নিয়োগ', 1, 1),
(16, 6,'Job Seeking', 'চাকরির চাই', 2, 1),
(17, 7,'Tutor Seeking', 'গৃহশিক্ষক সন্ধান', 1, 1),
(18, 7,'Become A Tutor', 'প​ড়াতে চাই', 2, 1);


CREATE TABLE ad_type (
  ad_type_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  ad_type_name TEXT NOT NULL,
  ad_type_bn_name TEXT NOT NULL,
  ad_type_position INTEGER DEFAULT 0,
  ad_type_active INTEGER DEFAULT 1,
  UNIQUE (ad_type_name),
  UNIQUE (ad_type_bn_name)
  
) ;

INSERT INTO ad_type (ad_type_id, ad_type_name, ad_type_bn_name, ad_type_position, ad_type_active) VALUES
(1, 'Ads For Giving Rent', 'ভাড়া দেওয়ার জন্য বিজ্ঞাপন', 1, 1),
(2, 'Ads For Taking Rent', 'ভাড়া নেওয়ার জন্য বিজ্ঞাপন', 2, 1),
(3, 'Ads For Selling', 'বিক্রয় করার জন্য বিজ্ঞাপন', 3, 1),
(4, 'Ads For Buying', 'ক্র​য় করার জন্য বিজ্ঞাপন', 4, 1),
(5, 'Others Ads', ' অন্যান্য বিজ্ঞাপন', 5, 1);