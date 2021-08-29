import { FlatListProps } from 'react-native';
import { IUser } from '../../models/user.model';

export interface UserCardListProps
  extends Omit<FlatListProps<IUser>, 'renderItem'> {
  onPressUserCard: (item: IUser) => any | void;
}
