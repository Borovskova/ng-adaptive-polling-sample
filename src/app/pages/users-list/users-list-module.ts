import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing-module';
import { UsersList } from './users-list';

@NgModule({
  declarations: [UsersList],
  imports: [CommonModule, UsersListRoutingModule],
})
export class UsersListModule {}
