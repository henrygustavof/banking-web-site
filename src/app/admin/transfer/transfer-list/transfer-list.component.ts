import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('editTmplRow') editTmplRow: TemplateRef<any>;
  rows = new Array<any>();
  columns: Array<any> = [];

  constructor(private _menuService: MenuService) { }

  ngOnInit() {
    this._menuService.selectMenuItem('transfers');

    this. columns = [
      { prop: 'accountNumber' , name: 'Account Number' },
      { prop: 'balance' , name: 'Balance'  },
      { prop: '', name: '', cellTemplate: this.editTmplRow}];

    this. rows = [
                { accountNumber: '001104860195023275', balance: '100'},
                { accountNumber: '001104860195023276', balance: '200'},
                { accountNumber: '001104860195023277', balance: '300'},
                { accountNumber: '001104860195023278', balance: '400'}];
  }
}
