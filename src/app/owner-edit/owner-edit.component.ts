import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../shared/car/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {

  owner: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,private router: Router,private ownerService: OwnerService,private giphyService: GiphyService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.ownerService.get(id).subscribe((owner: any) => {
          if (owner) {
            this.owner = owner;
            console.log(this.owner);
          } else {
            console.log(`Owner with dni '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });

  

  }

  save(form: NgForm) {
    this.ownerService.save(form).subscribe(result => {
      this.gotoList();
    },  error => console.error(error));
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }





}
