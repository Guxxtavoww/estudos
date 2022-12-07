import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { IBookDto } from './book.dto';
import { PrismaService } from 'src/config/PrismaService';

@Injectable()
export class BookService extends PrismaClient {
  constructor(private prisma: PrismaService) {
    super();
  }

  async createBook(bookData: IBookDto) {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: bookData.bar_code,
      },
    });

    if (bookExists) throw new Error('Livro já existe');

    const newBook = await this.prisma.book.create({
      data: bookData,
    });

    return newBook;
  }
}
