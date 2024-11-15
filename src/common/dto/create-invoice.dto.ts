import { IsArray, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsString()
  invoiceNumber: string;

  @IsDateString()
  date: string;

  @IsString()
  customerName: string;

  @IsArray()
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  };

  @IsNumber()
  subtotal: number;

  @IsNumber()
  tax: number;

  @IsNumber()
  total: number;
}
