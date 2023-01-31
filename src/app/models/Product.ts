export class Product
{
  id: number;
  name: String;
  desc : String;
  price : number;
  image : string;


  constructor (i:number , n:string, d:string, p:number, img:string)
  {
    this.id = i;
    this.name = n;
    this.desc =  d;
    this.price = p;
    this.image = img;
  }

}
