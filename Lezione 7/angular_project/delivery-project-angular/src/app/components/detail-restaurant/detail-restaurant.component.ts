import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.scss'],
})
export class DetailRestaurantComponent implements OnInit {
  homeItems = [
    [
      {
        title: 'Title',
        link: './pages/card_detail.html',
        desc: 'Description',
        image:
          'https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fe22b3b30-272b-4cd2-92d3-2ab4f79ba7da%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4',
      },
      {
        title: 'Title',
        link: './pages/card_detail.html',
        desc: 'Description',
        image:
          'https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F0e8d44fd-42ee-4f55-8142-fc2c9e934944%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4',
      },
      {
        title: 'Title',
        link: './pages/card_detail.html',
        desc: 'Description',
        image:
          'https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fa700d2ec-08da-4e7e-addb-779d86d1a1ba%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4',
      },
    ],
    [
      {
        title: 'Title',
        link: './pages/card_detail.html',
        desc: 'Description',
        image:
          'https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fcbf49434-6c68-4947-862a-99b66fb2a01b%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4',
      },
      {
        title: 'Title',
        link: './pages/card_detail.html',
        desc: 'Description',
        image:
          'https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F11412514-4003-4b63-af71-ba69fdfdc148%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4',
      },
      {
        title: 'Title',
        link: './pages/card_detail.html',
        desc: 'Description',
        image:
          'https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F4b7f26df-966e-49b3-b483-a643816b70ea%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4',
      },
    ],
  ];

  id: any = undefined;

  categories: Array<any> = [];

  current: any = undefined;

  products: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('params: ', this.id);
      this.api.fetchRestaurantCategories(this.id).subscribe((response) => {
        //console.log(response);
        this.categories = response as Array<any>;
        this.current = this.categories[0] as any;
        const l = this.current.byname_products;
        const size = 2;
        const result = [];
        for (let i = 0; i < l.length; i += size) {
          result.push(l.slice(i, i + size));
        }
        this.products = result;
        this.spinner.hide();
      });
    });
  }
}
