import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';

// Add Angular material component imports here
const materialModules = [
  MatToolbarModule
];
@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialImportsModule { }
