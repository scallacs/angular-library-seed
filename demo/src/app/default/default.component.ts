import {Component} from '@angular/core';
import { environment } from "../../environment/environment";

@Component({
  selector: 'ngbd-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  public version: string = process.env.version;
  public libraryName = environment.libraryName;
}
