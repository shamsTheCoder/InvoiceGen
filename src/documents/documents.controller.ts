import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { DocumentService } from './documents.service';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { CreateInvoiceDto } from 'src/common/dto/create-invoice.dto';
import { Response } from 'express';

@Controller('documents')
@UseFilters(HttpExceptionFilter)
@UsePipes(new ValidationPipe())
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post('generate-invoice')
  async generateInvoice(@Body() data: CreateInvoiceDto, @Res() res: Response) {
    try {
      const result = await this.documentService.generateInvoice(data);
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Failed to generate document', error });
    }
  }
}
