import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { MapComponent } from './views/map/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductCrudComponent },
  { path: 'location', component: MapComponent},
  { path: 'products/create', component: ProductCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }