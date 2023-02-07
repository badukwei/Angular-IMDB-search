import { OrderByPipe } from './order-by.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const pipes = [ OrderByPipe ]

@NgModule({
  declarations: [...pipes],
  imports: [
    CommonModule
  ],
  exports: [...pipes]
})
export class PipesModule { }
