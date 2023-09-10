import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellModalComponent} from "../sell/sell-modal/sell-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export default class BuyComponent {

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
