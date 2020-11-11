// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/entities/Person';
import { User } from 'src/app/models/entities/User';
import { COMMON_WARNING_MESSAGE, UNKNOWN_ERROR_MESSAGE } from 'src/text/messages';
import { DataManagerFormComponent } from '../../data-manager-form.acomponent';
import { UserManagerFormService } from './user-manager-form.service';

export interface UserManagerFormDialogData {
  user: User;
}

@Component({
  providers: [ UserManagerFormService ],
  selector: 'app-user-manager-form-dialog',
  templateUrl: './user-manager-form-dialog.component.html',
  styleUrls: [ './user-manager-form-dialog.component.css' ]
})
export class UserManagerFormDialogComponent
  extends DataManagerFormComponent<User>
  implements OnInit {

  protected itemId: number;

  public saving$: Observable<boolean>;
  public people$: Observable<Person[]>;

  public formGroup: FormGroup;
  public get name(): FormControl { return this.formGroup.get('name') as FormControl; }
  public get password(): FormControl { return this.formGroup.get('password') as FormControl; }
  public get person(): FormControl { return this.formGroup.get('person') as FormControl; }

  public get dialogTitle(): string { return ((this.data?.user?.id) ? 'Actualizar datos de' : 'Nuevo') + ' Usuario'; };

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: UserManagerFormDialogData,
    protected service: UserManagerFormService,
    protected dialog: MatDialogRef<UserManagerFormDialogComponent>,
    protected snackBarService: MatSnackBar,
    protected formBuilder: FormBuilder
  ) {
    super();
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      password: [''],
      person: [undefined, Validators.required]
    });

    const item: User = (this.data?.user) ? this.data.user : new User();
    this.load(item);
  }

  protected load(u: User): void {
    this.itemId = u.id ? u.id : 0;
    if (this.itemId) { this.password.setValidators(null); }

    this.name.setValue(u.name, { emitEvent: false, onlySelf: true });
    if (u.person?.id) {
      this.person.setValue(u.person.id, { emitEvent: false, onlySelf: true });
    }
  }

  ngOnInit(): void {
    this.saving$ = this.service.saving$.pipe();
    this.people$ = this.service.getPeople();
  }

  public asItem(): User {
    if (this.formGroup.invalid) {
      return undefined;
    } else {
      return Object.assign<User, Partial<User>>(
        new User(),
        {
          id: this.itemId,
          name: this.name.value,
          password: this.password.value,
          person: { id: this.person.value }
        }
      );
    }
  }

  public onSubmit(): void {
    const item = this.asItem();
    if (item) {
      this.service.submit(item).subscribe(
        success => {
          if (success) {
            if (this.itemId) {
              this.snackBarService.open(`Usuario ${item.name} actualizado/a exitosamente.`, 'OK');
            } else {
              this.snackBarService.open(`Usuario ${item.name} registrado/a exitosamente.`, 'OK');
            }
            this.dialog.close(item);
          } else {
            this.snackBarService.open(COMMON_WARNING_MESSAGE, 'OK');
          }
        },
        error => {
          this.snackBarService.open(UNKNOWN_ERROR_MESSAGE, 'OK');
        }
      );
    }
  }

  public onCancel(): void {
    this.dialog.close();
  }

}
