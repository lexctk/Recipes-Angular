import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor() {
    library.add(faTrashAlt);
  }
}
