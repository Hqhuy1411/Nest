export class CreateCatDto {
  content: string;
  title: string;
}

export class UpdateCatDto {
  id: number;
  content: string;
  title: string;
}