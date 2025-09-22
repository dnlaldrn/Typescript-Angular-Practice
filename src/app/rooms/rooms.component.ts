import { Component } from '@angular/core';
import { Room, RoomList } from './room';
import { RoomListComponent } from './room-list/room-list'; 
import { NgClass ,NgStyle , DatePipe , LowerCasePipe , CurrencyPipe, PercentPipe, SlicePipe, DecimalPipe, JsonPipe} from  '@angular/common';



@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
  imports: [ RoomListComponent, JsonPipe],
 

})
export class Rooms {

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom !: RoomList;
  room: Room = {
    totalRoom: 20,
    availableRooms: 1,
    bookedRooms: 5
  }
  
  title = "Room List";

  roomList: RoomList[] = [];
  constructor() {}

  ngOnInit() : void{
    this.roomList = [
      {
    roomNumber: 1,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner",
    price: 500,
    photos: "Image 1",
    checkInTime: new Date('2025-09-21T13:45:00Z'),
    checkOutTime: new Date('21-July-2025'),
    rating:4.6,
  },
  {
    roomNumber:2,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner, Banyo",
    price: 600,
    photos: "Image 2",
    checkInTime: new Date('20-July-2025'),
    checkOutTime: new Date('21-July-2025'),
     rating:4.1,
  },{
    roomNumber:3,
    roomType: "Private Suite",
    amenities: "Air Conditioner",
    price: 1500,
    photos: "Image 3",
    checkInTime: new Date('20-July-2025'),
    checkOutTime: new Date('21-July-2025'),
     rating:4.3,
  }
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room :RoomList){
    this.selectedRoom = room;
  }

    addRoom() {
    const room: RoomList = {
      roomNumber:4,
      roomType: " Room",
      amenities: "Electric Fan",
      price: 700,
      photos: "Image 1",
      checkInTime: new Date('2025-09-21T13:45:00Z'),
      checkOutTime: new Date('21-July-2025'),
      rating: 4.6,


    };
    this.roomList = [...this.roomList, room]
  }




}
