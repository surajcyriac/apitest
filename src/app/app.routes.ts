import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';

export const routes: Routes = [
    {
        path:'',component:TableComponent,title:"table"
    },
      {
        path:'add',component:AddempComponent,title:"add"
    },
    {
        path:'edit/:item',component:EditempComponent,title:"edit"
    },
];
