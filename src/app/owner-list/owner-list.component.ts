import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/car/owner.service'
import { OwnerComponent } from '../owner/owner.component';


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;
  constructor(private ownerService: OwnerService) { }

  ngOnInit() {

    this.ownerService.getAll().subscribe(data => {
      console.log(data._embedded.owners);
      this.owners = data._embedded.owners;
     
    });


  }

}
