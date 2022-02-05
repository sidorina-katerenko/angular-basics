import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1,1,2,3,5,8,13]

  objects = [
    {
      title: 'Post 1',
      author: 'Kate',
      comments: [
        {
          name: 'Max',
          text: 'Lorem 1'
        },
        {
          name: 'Max',
          text: 'Lorem 2'
        },
        {
          name: 'Max',
          text: 'Lorem 3'
        }
      ]
    },
    {
      title: 'Post 2',
      author: 'Kate2',
      comments: [
        {
          name: 'Max2',
          text: 'Lorem 1'
        },
        {
          name: 'Max2',
          text: 'Lorem 2'
        },
        {
          name: 'Max2',
          text: 'Lorem 3'
        }
      ]
    }
  ]
}
