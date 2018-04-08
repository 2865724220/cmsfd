
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BankListService } from './banklist.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './banklist.html',
})
export class BankListComponent implements OnInit {
  bankListData: any = [];
  bankSelect = {
    bankName: '',
    status: ''
};
  options: Array<object>;

  constructor(
    private router: Router,
    private bankListService: BankListService
    ) {
  }

  ngOnInit() {
    this.bankListInfo();
    this.options = [{id: '0', name: '未生效'}, {id: '1', name: '已生效'}]
  }

  bankListInfo () {
    this.bankListService.getBankList(this.bankSelect).subscribe((res: any) => {
      if (res.success) {
        this.bankListData = res.data;
      }
    })
  }
}

