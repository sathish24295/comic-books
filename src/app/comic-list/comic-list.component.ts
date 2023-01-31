import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { comicList } from './state/comic-list.selector';
import {
  deleteComicBook,
  startEdit,
  stopEdit,
} from './state/comic-list.action';
import { Subscription } from 'rxjs';
import { ComicBookListElement } from '../model/comic-data.model';

@Component({
  selector: 'comic-books-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ComicListComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Comic Books';
  dataSource = new MatTableDataSource<ComicBookListElement>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columnsToDisplay = [
    'ID',
    'Name',
    'Written By',
    'Genre',
    'Publisher',
    'Publication Date',
    'edit',
    'delete',
    'expand',
  ];
  expandedElement: ComicBookListElement = {};
  subscription: Subscription | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.subscription = this.store.pipe(select(comicList)).subscribe((data) => {
      this.dataSource.data = data;
    });

    this.sortDataSource();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  addComicBook() {
    this.store.dispatch(stopEdit());
    this.router.navigate(['add-comic'], { relativeTo: this.route });
  }

  editComicBook(index: string) {
    this.store.dispatch(startEdit({ id: index }));
    this.router.navigate(['edit-comic'], {
      relativeTo: this.route,
    });
  }

  deleteComicBook(index: string) {
    this.store.dispatch(deleteComicBook({ id: index }));
  }

  setHeader(column: string) {
    return column === 'expand' || column === 'edit' || column === 'delete'
      ? ''
      : column;
  }

  sortDataSource(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.dataSource.sortingDataAccessor = (item: any, property) => {
      switch (property) {
        case 'ID':
          return parseInt(item.id);
        case 'Name':
          return item.name?.toLowerCase();
        case 'Publication Date':
          return new Date(item.publicationdate);
        case 'Genre':
          return item.genre?.toLowerCase();
        case 'Written By':
          return item.writtenby[0]?.toLowerCase();
        case 'Publisher':
          return item.publisher?.toLowerCase();
      }
    };
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
