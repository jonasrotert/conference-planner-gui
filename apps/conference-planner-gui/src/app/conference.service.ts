import { Injectable } from '@angular/core';
import { Conference } from './model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  items: Conference[] = [];

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Conference[]>('http://localhost:8080/api/conferences');
  }

  addToList(item: Conference) {
    this.items.push(item);
  }

  getConferences() {
    return this.items;
  }

  clearConferences() {
    this.items = [];
    return this.items;
  }
}
