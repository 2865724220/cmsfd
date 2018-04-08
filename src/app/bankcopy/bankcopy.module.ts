import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BanksRoutingCopy } from './bankcopy.routing';
import { BankCopyComponent } from './bankcopy.component';
import { BankListComponent } from './banklistcopy/banklist.component';
import { BankListService } from './banklistcopy/banklist.service';
import { AddBankComponent } from './addbankcopy/addbank.component';
import { AddBankService } from './addbankcopy/addbank.service';
import { EditBankComponent } from './editbankcopy/editbank.component';
import { EditBankService } from './editbankcopy/editbank.service';
import { UploadFileModule } from '../../components/upload-file/upload-file.module';

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        BanksRoutingCopy,
        NgZorroAntdModule.forRoot(),
        UploadFileModule
    ],
    declarations: [
        BankCopyComponent,
        BankListComponent,
        AddBankComponent,
        EditBankComponent,
    ],
    providers: [
        BankListService,
        AddBankService,
        EditBankService,
    ]
})
export class BanksCopyModule {}
