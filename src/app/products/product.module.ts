import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import ConvertToSpaces from '../shared/convertToSpaces.js';
import { RouterModule } from '@angular/router';
import { ProductDetailGuardService } from './product-detail/product.detail.guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, ConvertToSpaces],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuardService],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
