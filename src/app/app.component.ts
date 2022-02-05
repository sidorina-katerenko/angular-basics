import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title'
  number = 42
  arr = [1,2,3]

  obj = {a: 1, b: {c: 2}}

  inputValue = ''

  // img = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over')
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
    // }, 5000)
  }

  onInput(event: any) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onButtonClick() {
    console.log('Click!')
  }

  onBlur(val: any) {
    console.log('Blur', val)
  }
}
