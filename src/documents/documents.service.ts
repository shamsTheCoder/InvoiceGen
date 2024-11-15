import { Injectable } from '@nestjs/common';
import { CarboneService } from './carbone.service';
import { CreateInvoiceDto } from 'src/common/dto/create-invoice.dto';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class DocumentService {
  constructor(private readonly carboneService: CarboneService) {}

  async generateInvoice(data: CreateInvoiceDto): Promise<any> {
    const templatePath = path.join(
      __dirname,
      'templates',
      'invoice-template.odt',
    );

    const outputFolder = path.join(__dirname, '../../output');
    const outputPath = path.join(
      outputFolder,
      `invoice-output-${Date.now()}.pdf`,
    );

    await fs.mkdir(outputFolder, { recursive: true });

    await this.carboneService.renderTemplate(templatePath, data, outputPath);

    return { message: 'Invoice generated successfully', filePath: outputPath };
  }
}
