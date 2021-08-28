import { IInterest } from '../models/interest.model';

export const interestTitleListMap = (interests: IInterest[]) => {
  return interests.map((interest, idx) => {
    if (interests[idx + 1]) {
      return `${interest.title}, `;
    }
    return `${interest.title}.`;
  });
};
