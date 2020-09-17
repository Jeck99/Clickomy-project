import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GridDataResult, RowArgs, SelectableSettings } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  showTitle: string;
  seasonNumber: string;
  data: any;
  windowOpened: boolean = false;
  selectedEpisode: any;
  public columns: any[] = [{ field: "Title" }, { field: "Released" }, { field: "Episode" }, { field: "imdbRating" }];
  public state: State = {
    skip: 0,
    take: 5
  };
  public view: Observable<GridDataResult>;
  public selectableSettings: SelectableSettings = {
    checkboxOnly: false,
    mode: "single",
    drag: false
  };
  constructor(private route: ActivatedRoute, private appService: AppService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.showTitle = params.get('showTitle');
      this.seasonNumber = params.get('seasonNumber');
      this.selectSeason();
    });
  }

  selectSeason() {
    this.appService.getEpisodesApi(this.showTitle, this.seasonNumber).subscribe(data => {
      this.spinner.hide();
      this.data = data.Episodes;
    })
  }
  public open(e: any) {
    this.spinner.show();
    this.appService.getEpisodesiDetailsApi(this.showTitle, this.seasonNumber, e.dataItem.Episode).subscribe(data => {
      this.spinner.hide();
      this.selectedEpisode = data;
    })
    this.windowOpened = true;
  }
  public close() {
    this.windowOpened = false;
  }
}
