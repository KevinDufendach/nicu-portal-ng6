import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';



// Add Angular material component imports here
const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
];
@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialImportsModule { }
