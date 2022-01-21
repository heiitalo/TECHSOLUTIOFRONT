import { Component } from '@angular/core';
import * as jquery from 'jquery';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TECH SOLUTIO';

constructor(
  public auth: AuthService
){}

}

