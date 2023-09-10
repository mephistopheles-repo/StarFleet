import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sell-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sell-modal.component.html',
  styleUrls: ['./sell-modal.component.css']
})
export class SellModalComponent {
  form:FormGroup

  constructor(
    public modal: NgbActiveModal,
  ) {
    this.form = new FormGroup<any>({})
  }

  submit(){
    this.form.markAllAsTouched()
    this.success()
  }

  success() {
    this.modal.close("SUCCESS")
  }

  close() {
    this.modal.close()
  }
}
