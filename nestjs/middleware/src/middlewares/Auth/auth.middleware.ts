import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { headers } = req;

    if (!headers.authorization)
      return res.status(401).json({
        message: 'Você deve estar autorizado para fazer essa requisição',
      });

    console.log(headers.authorization);

    next();
  }
}
