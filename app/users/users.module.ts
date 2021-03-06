import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule,
    ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { User }                from './user';
import { UserFormComponent }   from './user-form.component';
import { UsersComponent }      from './users.component';
import { UsersService }         from './users.service';
import { PreventUnsavedChangesGuard } from '../can-deactivate-on-dirty';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule],
    exports: [UsersComponent, UserFormComponent],
    declarations: [UsersComponent, UserFormComponent],
    providers: [UsersService, PreventUnsavedChangesGuard],
})
export class UsersModule { }
