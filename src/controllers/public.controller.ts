import { Router, Request, Response } from "express";
import { join } from 'path';

const publicPath = join(__dirname, '../../public/');

export class PublicController {
  sendErrorPage(req: Request, res: Response) {
    res.sendFile(publicPath + 'error404.html');
  }

  sendContactPage(req: Request, res: Response) {
    res.sendFile(publicPath + 'contact.html');
  }
}