// Create JavaScript Object with Constructor : Hotel

function Rooms(numberOfRooms, numberOfBookedRooms) {
    this.numberOfRooms = numberOfRooms;
    this.numberOfBookedRooms = numberOfBookedRooms;
    this.freeRooms = function () {
        return this.numberOfRooms - this.numberOfBookedRooms;
    }
}

var rooms1 = new Rooms(90, 50);
var rooms2 = new Rooms(20, 10);

function Parking(numOfParkingSpace, numOfTakenPlaces) {
    this.numOfParkingSpace = numOfParkingSpace;
    this.numOfTakenPlaces = numOfTakenPlaces;
    this.freePlaces = function () {
        return this.numOfParkingSpace - this.numOfTakenPlaces;
    }
}

var Parking1 = new Parking(180, 80);
var Parking2 = new Parking(50, 25);


function Restaurant(numOfTables, numOfTakenTables) {
    this.numOfTables = numOfTables;
    this.numOfTakenTables = numOfTakenTables;
    this.freeTables = function () {

        return this.numOfTables - this.numOfTakenTables;
    }
}

var Restaurant1 = new Restaurant(180, 80);
var Restaurant2 = new Restaurant(50, 25);

function Hotel( rooms, parking, restaurant) {
    this.rooms = rooms;
    this.parking = parking;
    this.restaurant = restaurant;
    this.freeSomething = function () {
        return this.rooms.freeRooms(), this.parking.freePlaces(), this.restaurant.freeTables();
    }

}

var hotel1 = new Hotel(rooms1, Parking1, Restaurant1);

var hotel2 = new Hotel(rooms2, Parking2, Restaurant2);



// compareFreeRooms(hotel1.rooms1.freeRooms(), hotel2.rooms2.freeRooms());

// function compareFreeRooms(freeRooms1, freeRooms2) {
//     return freeRooms1 - freeRooms2;
// }