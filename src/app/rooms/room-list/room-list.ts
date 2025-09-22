import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';
import { NgClass, NgStyle, DatePipe, LowerCasePipe, CurrencyPipe, PercentPipe, SlicePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.html',
  imports: [NgClass, DatePipe, LowerCasePipe, CurrencyPipe, PercentPipe, DecimalPipe],
  styleUrl: './room-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RoomListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input ()title : string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { };

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
      if(changes['title']){
        this.title = changes['title'].currentValue.toLowerCase();
      }
  }

  ngOnInit(): void {

  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }


}
