import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-receipt',
  templateUrl: './print-receipt.component.html',
  styleUrls: ['./print-receipt.component.css']
})
export class PrintReceiptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    const printContent = document.getElementById('container-fluid ');
    const WindowPrt = window.open('http://localhost:4200/admin/payments', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}