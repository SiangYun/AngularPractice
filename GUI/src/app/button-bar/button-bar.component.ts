import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ButtonBar } from '../models/button-bar.model';
import { ButtonBarService } from '../service/button-bar.service';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit {

  dataButton: ButtonBar[];

  inputString: string;
  inputMode: string;
  inputLang: string;

  inputStringSplit: string[];

  constructor(private btnService: ButtonBarService) { }

  ngOnInit() {
    this.btnService.getContent()
    .subscribe( data => {
      this.dataButton = data;
    });
  }

  showlog() {
    console.log(this.dataButton);
  }

  showInput() {
    console.log(this.inputString, this.inputMode, this.inputLang);
    this.inputStringSplit = this.inputString.split('');
    console.log(this.inputStringSplit);
  }

}
