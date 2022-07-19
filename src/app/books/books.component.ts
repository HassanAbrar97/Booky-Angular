import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../sdk/custom/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  loading = false;
  books: Books[] = [];
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.loading = true;

    this.booksService.getAllBooks().subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        this.books = data.data.docs;
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }    
}
// Intefacing is Optional

interface Books {
  name: string;
  ibn: string;
  image_url: string;
  author: string;
  is_deleted: boolean;
}

