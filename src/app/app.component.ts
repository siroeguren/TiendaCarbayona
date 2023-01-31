import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked
{
  show = false;
  title = 'TiendaCarbayona';
  constructor(private sharedService : SharedService,
              private cdRef : ChangeDetectorRef )
  {}


  ngAfterContentChecked() : void
  {
    this.sharedService.sharedSpinner.subscribe
    ((value) =>
    {
      console.log("Sharedspinner appComponents : " + value);
      if (value == true)
      {
        this.show = true;
      }
      else
      {
        this.show = false;
        this.cdRef.detectChanges();
      }
    }

    );
  }
}

