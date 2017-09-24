import { NgModule } from '@angular/core';
import { ConvertActivePipe } from './convertActive.pipe';

@NgModule({
    declarations: [ConvertActivePipe],
    exports: [ConvertActivePipe]
})

export class PipesModule{}