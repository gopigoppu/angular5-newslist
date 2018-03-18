import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  newsFeed: any;
  p = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNewsFeed().subscribe((data: any) => {
      // console.log(data);
      this.newsFeed = data;

    });
  }

}
