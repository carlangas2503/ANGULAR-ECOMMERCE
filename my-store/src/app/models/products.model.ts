export interface Product{
  id:number;
  title: string;
  images: string[];
  price:number;
  description:string;
  category:Category;
  categoryId:number
}
export interface Category{
  id:number,
  name:string,
  typeImg:string
}

export interface ProductDTO extends Omit<Product,'id' | 'category'>{}
