import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products';

const routes: Routes = [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: ProductsComponent, data: {
        title: 'Danh sách sản phẩm'
      } }
];

@NgModule({
    declarations: [ProductsComponent],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})


export class ProductRoutingModule {

}