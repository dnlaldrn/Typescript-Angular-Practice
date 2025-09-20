import { Component } from '@angular/core';
import { Room, RoomList } from './room'
//import { NgIf } from '@angular/common';


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
  //imports: [NgIf],

})
export class Rooms {

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  room: Room = {
    totalRoom: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomNumber:1,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner",
    price: 500,
    photos: "Image 1",
    checkInTime: new Date('20-July-2025'),
    checkOutTime: new Date('21-July-2025'),
  },
  {
    roomNumber:2,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner, Banyo",
    price: 600,
    photos: "Image 2",
    checkInTime: new Date('20-July-2025'),
    checkOutTime: new Date('21-July-2025'),
  },{
    roomNumber:3,
    roomType: "Private Suite",
    amenities: "Air Conditioner",
    price: 1500,
    photos: "Image 3",
    checkInTime: new Date('20-July-2025'),
    checkOutTime: new Date('21-July-2025'),
  }]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }


}
