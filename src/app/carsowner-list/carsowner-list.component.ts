import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-carsowner-list',
  templateUrl: './carsowner-list.component.html',
  styleUrls: ['./carsowner-list.component.css']
})
export class CarsownerListComponent implements OnInit {
  carsowners: Array<any>;
  constructor(private carService: CarService, private giphyService: GiphyService) { }

  ngOnInit() {
    
    this.carService.getAll().subscribe(data => {
      this.carsowners = data;
      console.log(this.carsowners);
      for (const car of this.carsowners) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });

  }

}
