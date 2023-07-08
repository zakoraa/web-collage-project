-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Jul 2023 pada 11.35
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_shop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id_product` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` bigint(20) DEFAULT 0,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id_product`, `name`, `price`, `image`) VALUES
('B101', 'ASUS ZenFone 9', 7999000, 'https://dlcdnwebimgs.asus.com/gain/6ce90258-b6bd-46dc-8e5c-573217dffbf9/'),
('B103', 'ASUS ZenWatch 3', 4499000, 'https://www.petunjuk.co.id/thumbs/products/l/780299-asus-zenwatch-3.jpg'),
('B104', 'ASUS ROG Phone 7 Ultimate', 13999000, 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/05/25/FotoJet-Asus-ROG-Phone-7-Ultimate-774291106.jpg'),
('B106', 'ASUS ZenFone 8 Flip', 11726000, 'https://cdn.medcom.id/images/content/2021/05/14/1276896/EPjNFYzRZU.jpg'),
('B107', 'ASUS ROG Zephyrus Duo 16', 46999000, 'https://media.pricebook.co.id/article/5994fc57150ba03705fea5a5/5994fc57150ba03705fea5a5_1687771527.jpg'),
('B108', 'ASUS ZenBook 14 OLED', 15299000, 'https://media.pricebook.co.id/article/5994fc57150ba03705fea5a5/5994fc57150ba03705fea5a5_1674042248.jpg'),
('B110', 'ASUS ROG Phone 5', 8015000, 'https://s1.bukalapak.com/bukalapak-kontenz-production/content_attachments/69126/original/Asus_ROG_Phone_5.jpg'),
('B111', 'ROG Strix G15', 12999999, 'https://dlcdnwebimgs.asus.com/files/media/8B74E7EE-B66A-4420-894E-3C3B980312EE/v1/img/design/color/strix-g-2022-pink.png'),
('B112', 'Asus ROG X16', 9999999, 'https://media.suara.com/pictures/653x366/2022/08/15/86887-asus-rog-flow-x16.jpg'),
('B113', 'TUF Gaming VG279QM', 6070000, 'https://www.asus.com/media/global/gallery/em6dcl4vfdnv4lds_setting_xxx_0_90_end_2000.png'),
('B114', 'Vivobook 14 Flip OLED (TP3402)', 9999999, 'https://dlcdnwebimgs.asus.com/gain/146928b0-def8-4f03-8d79-43bf6cb8bab5/'),
('B1234', 'Asus Vivobook 2', 12999999, 'https://plazait.co.id/wp-content/uploads/2022/08/asus-vivobook-14x-oled-a1403za-i5-km065w-3-2.jpg'),
('Ba2382b43-', 'ROG Strix', 13999999, 'https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120842.jpg?webp');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction`
--

CREATE TABLE `transaction` (
  `transaction_id` bigint(20) UNSIGNED NOT NULL,
  `id_userFK` varchar(10) DEFAULT NULL,
  `id_productFK` varchar(10) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `total_price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `transaction`
--

INSERT INTO `transaction` (`transaction_id`, `id_userFK`, `id_productFK`, `date`, `total_price`) VALUES
(1, 'P100', 'B104', '2023-07-03 18:50:49', 13999000),
(2, 'P100', 'B110', '2023-07-03 18:50:52', 8015000),
(3, 'P103', 'B101', '2023-07-03 18:51:00', 7999000),
(4, 'P104', 'B110', '2023-07-03 18:51:10', 8015000),
(8, 'P106', 'B105', '2023-07-04 00:29:51', 11299000),
(9, 'P100', 'B103', '2023-07-04 01:41:23', 4499000),
(12, 'P108', 'B113', '2023-07-06 18:17:18', 6070000),
(13, 'P108', 'B106', '2023-07-06 18:23:40', 11726000),
(14, 'P108', 'B114', '2023-07-06 18:24:01', 9999999),
(15, 'P105', 'B108', '2023-07-06 18:26:33', 15299000),
(16, 'P105', 'B106', '2023-07-06 18:27:10', 11726000),
(17, 'P104', 'B101', '2023-07-06 18:28:09', 7999000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `name`, `address`, `phone_number`, `email`, `password`, `role`) VALUES
('P001', 'Rafli Silehu', 'Jl. Solo No. 8', '0818293716718', 'raflis08@gmail.com', 'rfli123', 'admin'),
('P002', 'Abdullah Tsaqif', 'Jl. Solo No. 10', '081720364719', 'tsaqif10@gmail.com', 'tsqif123', 'admin'),
('P003', 'Satria Bintang', 'Jl. Solo No. 7', '089201748367', 'satria08@gmail.com', 'stria123', 'admin'),
('P004', 'xx', 'Jl. XSENGGOLX', '08xxxxxxxxxx', 'xx@gmail.com', 'xxx', 'admin'),
('P0fc3b06df', 'aa', NULL, NULL, 'aa@gmail.com', 'aaa', 'admin'),
('P100', 'hh', 'Jl. Ada Indonesia Cuyy', '080808080808', 'yy@gmail.com', 'yyy', 'user'),
('P101', 'Cristiano Ronaldo', 'Jl. Portugal No. 7', '081234567891', 'cristronald7@gmail.com', 'PortugalCR7', 'user'),
('P102', 'Gyan Subian', 'Jl. Ahmad No. 9', '082167301547', 'gyanian21@gmail.com', 'Gyanegi01', 'user'),
('P103', 'Bimo Pratama', 'Jl. Apple No. 51', '089516211085', 'bimodarkside@gmail.com', 'Bimabimo', 'user'),
('P104', 'Elma Hanifah', 'Jl. Kolang No. 1', '081529304211', 'qwertyplm19@gmail.com', 'Elma0000', 'user'),
('P105', 'Ahmad Subagyo', 'Jl. Tanugeran No 29', '082173016211', 'ahdsubgyo78@gmail.com', 'Subaguyon', 'user');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_has_product`
--

CREATE TABLE `user_has_product` (
  `id_userFK` varchar(10) DEFAULT NULL,
  `id_productFK` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user_has_product`
--

INSERT INTO `user_has_product` (`id_userFK`, `id_productFK`) VALUES
('P100', 'B110'),
('P103', 'B101'),
('P104', 'B110'),
('P106', 'B105'),
('P100', 'B103'),
('P108', 'B113'),
('P108', 'B106'),
('P108', 'B114'),
('P105', 'B108'),
('P105', 'B106'),
('P104', 'B101');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indeks untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `password` (`password`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transaction_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
