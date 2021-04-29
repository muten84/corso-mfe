import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  homeItems = [
    [{
      "title": "Title",
      "link": "./pages/card_detail.html",
      "desc": "Description",
      "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fe22b3b30-272b-4cd2-92d3-2ab4f79ba7da%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
    },
    {
      "title": "Title",
      "link": "./pages/card_detail.html",
      "desc": "Description",
      "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F0e8d44fd-42ee-4f55-8142-fc2c9e934944%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
    },
    {
      "title": "Title",
      "link": "./pages/card_detail.html",
      "desc": "Description",
      "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fa700d2ec-08da-4e7e-addb-779d86d1a1ba%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
    }],
    [{
      "title": "Title",
      "link": "./pages/card_detail.html",
      "desc": "Description",
      "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fcbf49434-6c68-4947-862a-99b66fb2a01b%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
    },
    {
      "title": "Title",
      "link": "./pages/card_detail.html",
      "desc": "Description",
      "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F11412514-4003-4b63-af71-ba69fdfdc148%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
    },
    {
      "title": "Title",
      "link": "./pages/card_detail.html",
      "desc": "Description",
      "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F4b7f26df-966e-49b3-b483-a643816b70ea%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
    }]
    
  ]

  
 menuItems = [
  {
    "value": "Food",
    "href": "#"
  },
  {
    "value": "Fresh",
    "href": "#"
  },
  {
    "value": "Drinks",
    "href": "#"
  },
  {
    "value": "Convenience",
    "href": "#"
  }
]

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.handleRestaurants();
  }

  private handleRestaurants() {
    this.spinner.show();
    this.apiService.fetchRestaurants().pipe(map((arr: any)=>{
      return arr.map((e: any) => { return {
        "title": e.name || '',
        "link": "./pages/card_detail.html",
        "desc": e.app_infos.about || '',
        "image": 'https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fcbf49434-6c68-4947-862a-99b66fb2a01b%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4'
      };
      });
    })).subscribe((m) => {
      const l = m as any;
      const size = 3;
      const result = [];
      for (let i = 0; i < l.length; i += size) {
        result.push(l.slice(i, i + size));
      }
      this.homeItems = result;
      this.spinner.hide();
    });
  }

}
