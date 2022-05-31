import { AdsService } from './../../Services/ads.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private adsSub:Subscription[] = []
  storeInfo:StoreData;
  isImageShown:boolean = true;
  constructor(private _ads:AdsService) { 
    this.storeInfo = new StoreData('Ahmed Ashraf','https://picsum.photos/1000/200',['Cairo','Suez'])
  }

  toggleImge(){
    this.isImageShown =! this.isImageShown 
  }
  ngOnInit(): void {
    let observ = {
      next:(data:string) => {console.log(data)},
      error:(err:string) => {console.log(err)},
      complete:() => {console.log("ads finished")}
    }
    // this._ads.getSchaduleAds(500).subscribe(observ)

    // let adsSus = this._ads.getSchaduleAds(3).subscribe({

    //   next:(data:string) => {console.log(data)},

    //   error:(err:string) => {console.log(err)},
      
    //   complete:() => {console.log("ads finished")}

    // })

    // this.adsSub.push(adsSus) 

    // let sub = this._ads.getSerialAds().subscribe((ad => {
    //   console.log(ad)
    // }))

    let filterObs = this._ads.getSerialAds().pipe(
      filter(ad => ad.includes('White Friday')),
      map(ad => "Promosion ad:" + ad))

    let subscription = filterObs.subscribe(observ)

    this.adsSub.push(subscription)

  }

  ngOnDestroy(): void {
    // this.adsSub.unsubscribe()
    for(let subscription of this.adsSub){
      subscription.unsubscribe()
    }
  }
    
}
