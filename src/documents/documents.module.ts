import { Module } from '@nestjs/common';
import { DocumentController } from './documents.controller';
import { DocumentService } from './documents.service';
import { CarboneService } from './carbone.service';

@Module({
  imports: [],
  controllers: [DocumentController],
  providers: [DocumentService, CarboneService],
  exports: [],
})
export class DocumentModule {}
