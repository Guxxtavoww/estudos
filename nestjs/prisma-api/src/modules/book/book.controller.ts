import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { IBookDto } from './book.dto';
import { BookService } from './book.service';

@Controller('server/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post()
  createBook(@Body() bookData: IBookDto) {
    return this.bookService.createBook(bookData);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() bookData: IBookDto) {
    return this.bookService.updateBook(id, bookData);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.deleteBook(id);
  }
}
