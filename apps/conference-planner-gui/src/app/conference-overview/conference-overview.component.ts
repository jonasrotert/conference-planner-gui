import {Component, OnInit} from '@angular/core';
import {ConferenceService} from "../conference.service";
import {Observable} from "rxjs";
import {Conference} from "../model";

@Component({
  selector: 'conference-overview',
  templateUrl: './conference-overview.component.html',
  styleUrls: ['./conference-overview.component.scss'],
})
export class ConferenceOverviewComponent implements OnInit {

  conferences!: Observable<Conference[]>;

  ngOnInit(): void {
    this.conferences = this.conferenceService.load();
  }


  constructor(private conferenceService: ConferenceService) {
  }

}
