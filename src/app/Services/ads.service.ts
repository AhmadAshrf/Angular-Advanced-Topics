import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private ads: string[]
  constructor() {
    this.ads = ["Big Discounts",
      "Sale up to 50%",
      "Watch our Friday Offers",
      // "",
      "Specail offers up to 70%",
      "Specail offers up to 70% White Friday"
    ]
  }

  getSchaduleAds(interval: number): Observable<string> {
    return new Observable((observer) => {
      let counter: number = 0
      let adsTimer = setInterval(() => {
        if (counter == this.ads.length) {
          observer.complete()
        }
        if (this.ads[counter] == "") {
          observer.error('Error, Empty Ads')
        }
        observer.next(this.ads[counter])
        counter++

      }, interval * 1000)
      return ({unsubscribe(){clearInterval(adsTimer)}})


      //  observer.next()
      //  observer.error()
      //  observer.complete()

    })


  }

  getSerialAds() :Observable<string>{
    return from(this.ads)
  }
}
