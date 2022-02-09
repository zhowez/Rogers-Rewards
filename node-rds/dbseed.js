const mysql = require('mysql');

// Connects to RDS Database
const con = mysql.createConnection({
    host: "database-1.cy0nrpgxkpzk.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "test1337froggang"
});

//Creates Database and Tables
con.connect(function(err) {
    if(err) throw err;

    //Creates Schema and uses it
    con.query('CREATE DATABASE IF NOT EXISTS CPSC4910;');
    con.query('USE CPSC4910;');

    //Creates SPONSORORG Table
    con.query('CREATE TABLE IF NOT EXISTS SPONSORORG (SID int auto_increment NOT NULL unique,name varchar(20) NOT NULL,Driver_rules varchar(20) NOT NULL,primary key (SID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates CATALOG Table
    con.query('CREATE TABLE IF NOT EXISTS CATALOG (CatID int auto_increment NOT NULL unique,SID int NOT NULL,primary key (CatID),foreign key (SID) references SPONSORORG(SID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates DRIVER Table
    con.query('CREATE TABLE IF NOT EXISTS DRIVER (UID int auto_increment NOT NULL unique,First_name varchar(20) NOT NULL,Last_name varchar(20) NOT NULL,Email varchar(20) NOT NULL,Password_hash varchar(60) NOT NULL,Password_salt varchar(60) NOT NULL,Address varchar(20) NOT NULL,Phone_number char(12) NOT NULL,VisibleFlag BIT NOT NULL,SID int NOT NULL,primary key (UID),foreign key (SID) references SPONSORORG(SID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates DRIVERWISHLIST Table
    con.query('CREATE TABLE IF NOT EXISTS DRIVERWISHLIST (WishlistID int auto_increment NOT NULL unique,UID int NOT NULL,primary key (WishlistID),foreign key (UID) references DRIVER(UID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates WISHLISTITEM Table
    con.query('CREATE TABLE IF NOT EXISTS WISHLISTITEM (ItemID int auto_increment NOT NULL unique,WishlistID int NOT NULL,primary key (ItemID),foreign key (WishlistID) references DRIVERWISHLIST(WishlistID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates SPONSORACCT Table
    con.query('CREATE TABLE IF NOT EXISTS SPONSORACCT (SUID int auto_increment NOT NULL unique,First_name varchar(20) NOT NULL,Last_name varchar(20) NOT NULL,Email varchar(20) NOT NULL,Password_hash varchar(60) NOT NULL,Password_salt varchar(60) NOT NULL,Address varchar(20) NOT NULL,Phone_number char(12) NOT NULL,VisibleFlag BIT NOT NULL,SID int NOT NULL,primary key (SUID),foreign key (SID) references SPONSORORG(SID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates POINTBALANCE Table
    con.query('CREATE TABLE IF NOT EXISTS POINTBALANCE (PointID int auto_increment NOT NULL unique,Conversion_scale FLOAT NOT NULL,Amount int NOT NULL,UID int NOT NULL,primary key (PointID),foreign key (UID) references DRIVER(UID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates POINTBALANCELOG Table
    con.query('CREATE TABLE IF NOT EXISTS POINTBALANCELOG (PlogID int auto_increment NOT NULL unique,Point_Update int NOT NULL, Update_Status varchar(20) NOT NULL,PointDate DATETIME NOT NULL,PointID int NOT NULL,SUID int NOT NULL,primary key (PlogID),foreign key (PointID) references POINTBALANCE(PointID),foreign key (SUID) references SPONSORACCT(SUID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates APPLICATION Table
    con.query('CREATE TABLE IF NOT EXISTS APPLICATION (AppID int auto_increment NOT NULL unique,AppStatus int NOT NULL,AppDate DATETIME NOT NULL,UID int NOT NULL,SID int NOT NULL,primary key (AppID),foreign key (UID) references DRIVER(UID),foreign key (SID) references SPONSORORG(SID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates ORDERS Table
    con.query('CREATE TABLE IF NOT EXISTS ORDERS (OrderID int auto_increment NOT NULL unique,OrderDate DATETIME NOT NULL,Address varchar(20) NOT NULL,UID int NOT NULL,primary key (OrderID),foreign key (UID) references DRIVER(UID));', function(error, result, fields) {
        console.log(result);
    });

    //Creates ITEM Table
    con.query('CREATE TABLE IF NOT EXISTS ITEM (ItemID int auto_increment NOT NULL unique,Quantity int NOT NULL,Price float NOT NULL,OrderID int NOT NULL,primary key (ItemID),foreign key (OrderID) references ORDERS(OrderID));', function(error, result, fields) {
        console.log(result);
    });


    con.end();
});