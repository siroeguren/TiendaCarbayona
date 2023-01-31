import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent
{
  arrayProducts = [];
  constructor(private productsService : ProductsService)
  {

  }

  ngOnInit()
  {
    console.log(this.productsService.getProducts());
    this.productsService.getProducts().subscribe
    (
      {
        next : (products : Product[]) =>
        {
          console.log('next');
          this.arrayProducts = products;
          console.log(products);
        },
        complete : () =>
        {
          console.log('complete');
        },
        error : (error) =>
        {
          console.log("Error: " + error);
        },

      }
    );

  }
}
