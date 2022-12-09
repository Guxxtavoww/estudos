import { IsNotEmpty } from 'class-validator';

export class BookDto {
  id?: string;
  @IsNotEmpty({
    message: 'Por favor insira um título',
  })
  title: string;
  description: string;
  bar_code: string;
}
