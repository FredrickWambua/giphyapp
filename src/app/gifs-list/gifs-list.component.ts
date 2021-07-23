import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css']
})
export class GifsListComponent implements OnInit, OnDestroy {
  gifs:any[] =[];
  subscription = new Subscription;

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    this.subscription = this.dataService.getGifs()
    .subscribe((response: any)=>{
      this.gifs = response;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
