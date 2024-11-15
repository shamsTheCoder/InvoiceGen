import { Injectable } from '@nestjs/common';
import * as carbone from 'carbone';
import * as fs from 'fs';
import { Logger } from '@nestjs/common';

@Injectable()
export class CarboneService {
  private readonly logger = new Logger(CarboneService.name);

  async renderTemplate(
    templatePath: string,
    data: any,
    outputPath: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      carbone.render(
        templatePath,
        data,
        { convertTo: 'pdf' },
        async (err, result) => {
          if (err) {
            reject(err);
          } else {
            try {
              await fs.writeFileSync(outputPath, result);
              resolve();
            } catch (error) {
              reject(error);
            }
          }
        },
      );
    });
  }
}
