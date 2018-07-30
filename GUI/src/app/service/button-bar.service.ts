import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { ButtonBar } from '../models/button-bar.model';

const httpOptions = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

@Injectable({
  providedIn: 'root'
})
export class ButtonBarService {

  constructor(private http: HttpClient) { }

  private dataUrl = '../assets/btnData.json';

  public getContent() {
    return this.http.get<ButtonBar[]>(this.dataUrl);
  }
}
