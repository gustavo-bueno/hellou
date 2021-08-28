import { IInterest } from './interest.model';

export interface IUser {
  id: string;
  name: string;
  photo: string;
  description: string;
  englishLevel: string;
  interests: IInterest[];
}
