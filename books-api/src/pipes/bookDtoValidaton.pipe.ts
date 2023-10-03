import { BadRequestException, PipeTransform } from '@nestjs/common';

export class BookDtopValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!value.title || !value.author || !value.price || !value.rating) {
      throw new BadRequestException('All fields are mandatory');
    }
    // value.title = 'Title: ' + value.title;
    return value;
  }
}
