import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent
{
  arrayProducts = [];
  constructor(private productsService : ProductsService ,
              private sharedServices : SharedService)
  {

  }

  ngOnInit()
  {
    console.log(this.productsService.getProducts());
    this.sharedServices.runSpinner(true);
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
          this.sharedServices.runSpinner(false);
        },
        error : (error) =>
        {
          console.log("Error: " + error);
        },

      }
    );
  }
}
