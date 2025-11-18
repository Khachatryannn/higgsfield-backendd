import { ApiProperty, ApiResponse } from "@nestjs/swagger";

export class CreateCardDto {

  id: number;

  videoImageSrc: string; 

  autoplay: boolean;  
  
}
