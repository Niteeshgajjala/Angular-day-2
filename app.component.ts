import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DisableButtonComponent } from './disable-button/disable-button.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { TwbComponent } from './twb/twb.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { MyLibComponent } from '../../projects/my-lib/src/public-api';
import { DirComponent } from './dir/dir.component';
import { MyComponentComponent } from './my-component/my-component.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloWorldComponent,DisableButtonComponent,UserinfoComponent,TwbComponent,InterpolationComponent,MyLibComponent,DirComponent,MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p1';
}
