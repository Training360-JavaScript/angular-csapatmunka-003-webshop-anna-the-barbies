import { Category } from './../../model/category';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product = new Product();


  categories$: Observable<Category[]> = this.productService.getAllCategories();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onAddProduct(product: Product): void {
    this.productService.addProduct(product).subscribe(
      product => this.router.navigate(['/admin']),
      err => console.error(err)
    );
  }

}
