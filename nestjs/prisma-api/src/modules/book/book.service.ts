import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { BookDto } from './book.dto';
import { PrismaService } from 'src/config/PrismaService';

@Injectable()
export class BookService extends PrismaClient {
  constructor(private prisma: PrismaService) {
    super();
  }

  async getBooks() {
    const books = await this.prisma.book.findMany();

    return books;
  }

  async getBook(id: string) {
    const book = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!book) throw new Error('Livro inexistente');

    return book;
  }

  async createBook(bookData: BookDto) {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: bookData.bar_code,
      },
    });

    if (bookExists) {
      throw new Error('Livro já existe');
    }

    const newBook = await this.prisma.book.create({
      data: bookData,
    });

    return newBook;
  }

  async updateBook(id: string, bookData: BookDto) {
    const currentBook = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!currentBook) throw new Error('Livro inexistente');

    const updatedBook = await this.prisma.book.update({
      data: bookData,
      where: {
        id,
      },
    });

    return updatedBook;
  }

  async deleteBook(id: string) {
    const deletedBook = await this.prisma.book.delete({
      where: {
        id,
      },
    });

    return deletedBook;
  }
}
