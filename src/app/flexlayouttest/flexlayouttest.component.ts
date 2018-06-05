import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-flexlayouttest',
  templateUrl: './flexlayouttest.component.html',
  styleUrls: ['./flexlayouttest.component.css']
})
export class FlexlayouttestComponent implements OnInit {

  test: any = 2;

  Items: any = [
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' },
    {title: 'title', img_src: '../../../assets/img/-samples/raketa.png', description: 'Description' }
  ];


  constructor() { }

  ngOnInit() {

  }


  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);


    if (element < 950) {
      this.test = 2;
    }

    if (element > 950) {
      this.test = 3;
    }

    if (element < 750) {
      this.test = 1;
    }
  }
}
