import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  addComicBook,
  editComicBook,
} from '../comic-list/state/comic-list.action';
import { editedComic } from '../comic-list/state/comic-list.selector';
import {
  Authors,
  Publishers,
  ComicBookListElement,
} from '../model/comic-data.model';

@Component({
  selector: 'comic-books-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.scss'],
})
export class AddComicComponent implements OnInit, OnDestroy {
  title = 'Add Comic Book';
  comicForm!: FormGroup;
  subscription: Subscription | undefined;
  publishers = Publishers;
  authorsList = Authors;
  editingData: ComicBookListElement = {};
  initialData = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private store: Store
  ) {
    this.comicForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      coverimageurl: new FormControl('', [
        Validators.required,
        Validators.pattern('(https:|assets)([/|.|\\w|\\s|-])*\\.(?:jpg|png)'),
      ]),
      publicationdate: new FormControl('', Validators.required),
      genre: new FormControl(''),
      excerpt: new FormControl(''),
      writtenby: new FormControl('', Validators.required),
      publisher: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(select(editedComic))
      .subscribe((data) => {
        if (Object.keys(data).length) {
          this.title = 'Edit Comic Book';
          this.editingData = data;
          this.configComicDetails('Edit', data);
          const selectedValue = Publishers.find(
            (obj) => obj.label === data.publisher
          );
          this.comicForm.patchValue(data);
          this.initialData = this.comicForm.getRawValue();
          this.comicForm.controls['publisher'].setValue(
            selectedValue ? selectedValue.value : ''
          );
        } else {
          this.configComicDetails('Add', {});
        }
      });
  }

  submitComicForm() {
    const formValue = this.comicForm.getRawValue();
    const selectedValue = this.getPublisher(formValue['publisher']);
    formValue['publisher'] = selectedValue?.label;

    if (JSON.stringify(this.initialData) === JSON.stringify(formValue)) {
      this.showSnackBar('No Changes');
    } else if (this.comicForm.valid) {
      if (Object.keys(this.editingData).length) {
        const editedComic = { ...this.editingData, ...formValue };
        this.store.dispatch(editComicBook({ comic: editedComic }));
        this.showSnackBar('Updated Successfully');
      } else {
        this.store.dispatch(addComicBook({ comic: formValue }));
        this.showSnackBar('Added Successfully');
      }
      this.loadComicList();
    }
  }
  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  getPublisher(value: string) {
    return value ? Publishers.find((obj) => obj.value === value) : null;
  }

  loadComicList() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  configComicDetails(type: string, data: ComicBookListElement) {
    this.title = type + ' Comic Book';
    this.editingData = data;
  }

  validateRequired(field: string) {
    return this.comicForm.get(field)?.hasError('required');
  }

  validateMinLength(field: string) {
    return (
      this.comicForm.get(field)?.touched &&
      this.comicForm.get(field)?.hasError('minlength')
    );
  }

  validateIfInvalid(field: string) {
    return (
      this.comicForm.get(field)?.touched && this.comicForm.get(field)?.invalid
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
