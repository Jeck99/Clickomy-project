import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tvShow: string;
  constructor(private router: Router, private appService: AppService, private spinner: NgxSpinnerService) { }
  ngOnInit() {}

  tvShowsList: string[] = ['The Mandalorian', 'The Boys', 'The Umbrella Academy', 'The Witcher', 'Westworld']
  showSeasonList: number[] = [];

  selectSeason(value: any): void {
    this.router.navigate(['/episodes', this.tvShow, value]);
  }
  public selectionChange(value: any): void {
    this.tvShow = value;
    this.appService.getTvShowApi(value).subscribe(data => {
      for (let i = 0; i < Number(data.totalSeasons); i++) {
        this.showSeasonList.push(i + 1)
      }
    })
  }
}