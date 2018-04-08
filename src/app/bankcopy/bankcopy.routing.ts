import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankCopyComponent } from './bankcopy.component';
import { BankListComponent } from './banklistcopy/banklist.component';
import { AddBankComponent } from './addbankcopy/addbank.component';
import { EditBankComponent } from './editbankcopy/editbank.component';

const routes: Routes = [
    {
        path: '',
        component: BankCopyComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: BankListComponent },
            { path: 'add', component: AddBankComponent },
            { path: 'edit/:id', component: EditBankComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BanksRoutingCopy {};
