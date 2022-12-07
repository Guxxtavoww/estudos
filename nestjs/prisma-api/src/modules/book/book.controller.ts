import { Body, Controller, Post } from '@nestjs/common';

import { IBookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('server/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  createBook(@Body() bookData: IBookDto) {
    return this.bookService.createBook(bookData);
  }
}
