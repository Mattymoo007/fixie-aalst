-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 28 nov. 2019 à 14:03
-- Version du serveur :  10.3.16-MariaDB
-- Version de PHP :  7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bikerepair`
--

CREATE DATABASE IF NOT EXISTS `bikerepair` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `bikerepair`;

-- --------------------------------------------------------

--
-- Structure de la table `bookcal`
--

CREATE TABLE `bookcal` (
  `bookingID` mediumint(8) UNSIGNED NOT NULL,
  `dday` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `event` varchar(85) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `custID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--


CREATE TABLE `customer` (
  `custID` int(11) NOT NULL,
  `lastname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postalcode` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creatDate` date NOT NULL ,
  `creatTime` time NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONS POUR LA TABLE `customer`:
--

--
-- Déchargement des données de la table `customer`
--

INSERT INTO `customer` (`custID`, `lastname`, `name`, `address`, `postalcode`, `email`, `password`, `phone`, `status`) VALUES
(1, 'GINNEBERGE', 'Peter', 'Dendermonde Steenweg', '9200', 'p.ginneberge@gmail.com', '123456', '0465846878', 1),
(2, 'Bracke', 'Matthew', 'Gent', '9000', 'matthew@gmail.com', '123456', '0465846878', 1);

-- --------------------------------------------------------

--
-- Structure de la table `invoice`
--


CREATE TABLE `invoice` (
  `invID` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amountHT` decimal(10,0) NOT NULL,
  `vat` decimal(10,0) NOT NULL,
  `amountVat` decimal(10,0) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONS POUR LA TABLE `invoice`:
--

-- --------------------------------------------------------

--
-- Structure de la table `issue`
--


CREATE TABLE `issue` (
  `issueID` int(11) NOT NULL,
  `description` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `basicTime` int(11) NOT NULL,
  `basicCost` decimal(11,0) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONS POUR LA TABLE `issue`:
--

--
-- Déchargement des données de la table `issue`
--

INSERT INTO `issue` (`issueID`, `description`, `basicTime`, `basicCost`, `status`) VALUES
(1, 'Tyre change', 0, '0', 1),
(2, 'Brake change', 0, '0', 1);

-- --------------------------------------------------------

--
-- Structure de la table `typebike`
--

DROP TABLE IF EXISTS `typebike`;
CREATE TABLE `typebike` (
  `tbikeID` int(11) NOT NULL,
  `description` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONS POUR LA TABLE `typebike`:
--

--
-- Déchargement des données de la table `typebike`
--

INSERT INTO `typebike` (`tbikeID`, `description`) VALUES
(1, 'city bike'),
(2, 'sport'),
(3, 'Mountain bike');

-- --------------------------------------------------------

--
-- Structure de la table `workprocess`
--


CREATE TABLE `workprocess` (
  `workID` int(11) NOT NULL,
  `bookingID` int(11) NOT NULL,
  `custID` int(11) NOT NULL,
  `bikeID` int(11) NOT NULL,
  `issueID` int(11) NOT NULL,
  `jobDone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `howLong` int(11) NOT NULL,
  `submitedDate` date NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `tobeInvoiced` tinyint(1) NOT NULL DEFAULT 0,
  `technician` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Index pour les tables déchargées
--

--
-- Index pour la table `bookcal`
--
ALTER TABLE `bookcal`
  ADD PRIMARY KEY (`bookingID`),
  ADD KEY `cust_id` (`custID`);

--
-- Index pour la table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`custID`),
  ADD KEY `ilastname` (`lastname`);

--
-- Index pour la table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invID`);

--
-- Index pour la table `issue`
--
ALTER TABLE `issue`
  ADD PRIMARY KEY (`issueID`);

--
-- Index pour la table `typebike`
--
ALTER TABLE `typebike`
  ADD PRIMARY KEY (`tbikeID`);

--
-- Index pour la table `workprocess`
--
ALTER TABLE `workprocess`
  ADD PRIMARY KEY (`workID`),
  ADD KEY `custID` (`custID`),
  ADD KEY `workprocess_ibfk_1` (`bikeID`),
  ADD KEY `issueID` (`issueID`),
  ADD KEY `bookingID` (`bookingID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--



--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `custID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `issue`
--
ALTER TABLE `issue`
  MODIFY `issueID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `typebike`
--
ALTER TABLE `typebike`
  MODIFY `tbikeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `workprocess`
--
ALTER TABLE `workprocess`
  MODIFY `workID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `bookcal`
--
ALTER TABLE `bookcal`
  ADD CONSTRAINT `bookcal_ibfk_1` FOREIGN KEY (`custID`) REFERENCES `customer` (`custID`);

--
-- Contraintes pour la table `workprocess`
--
ALTER TABLE `workprocess`
  ADD CONSTRAINT `workprocess_ibfk_1` FOREIGN KEY (`issueID`) REFERENCES `issue` (`issueID`);
COMMIT;


