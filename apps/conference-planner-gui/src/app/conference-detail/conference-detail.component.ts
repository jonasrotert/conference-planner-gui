import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ConferenceService} from "../conference.service";
import {Observable} from "rxjs";
import {Conference} from "../model";

@Component({
  selector: 'conference-detail',
  templateUrl: './conference-detail.component.html',
  styleUrls: ['./conference-detail.component.scss'],
})
export class ConferenceDetailComponent implements OnInit {

  conference: Conference| undefined;

  constructor(private route: ActivatedRoute, private conferenceService: ConferenceService) {
  }

  ngOnInit() {
    this.getConference();
  }

  private getConference(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.conferenceService.loadById(id).subscribe(c => this.conference = c );
  }
}
