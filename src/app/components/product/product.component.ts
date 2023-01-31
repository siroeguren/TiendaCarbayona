import { Component, Input } from '@angular/core';

interface Product
{
  name: String;
  desc : String;
  price : String;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent
{
  @Input() product : Product ;
}
