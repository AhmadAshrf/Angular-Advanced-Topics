import { ICategory } from './../../../Models/icategory';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  cateList:ICategory[]
  selectedID:number = 0
  selectedMaxPrice:number = 0
  orderTotalPrice:number = 0

  @ViewChild('viewChildTest') elementRef!:ElementRef


  constructor() { 
    this.cateList = [
      {id:1,Name:'Laptop',Desciption:''},
      {id:2,Name:'Phones',Desciption:''},
      {id:3,Name:'Tablet',Desciption:''}
    ]
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.value = 'Assigned Value From ViewChild Decorator'
  }
  onTotalPriceChanged(total:number){
    this.orderTotalPrice = total 
  }

}
