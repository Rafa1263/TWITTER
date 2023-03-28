import { Component } from '@angular/core';

@Component({
  selector: 'app-show-view',
  templateUrl: './show-view.component.html',
  styleUrls: ['./show-view.component.scss']
})
export class ShowViewComponent {
  public readonly POSTS = [


  ];

  public log(event: string): void {
    console.log(event)
  }
}
