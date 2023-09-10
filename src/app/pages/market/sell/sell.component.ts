import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellModalComponent} from "./sell-modal/sell-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export default class SellComponent {


  constructor(
    private modalService: NgbModal
  ) {
  }

  showSellModal(){
    let callback = (reason: any) => {
      if (reason == "SUCCESS") {

      }
    }

    let modalRef = this.modalService.open(SellModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });

    modalRef.shown.subscribe(_ => {
      //modalRef.componentInstance.form.patchValue(con)
    })

    modalRef.result.then(callback, callback);
  }
}
