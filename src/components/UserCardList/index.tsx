import React from 'react';
import { FlatList } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { metrics } from '../../styles';
import { Divider } from '../Divider';
import UserCard from '../UserCard';

import { IUser } from '../../models/user.model';
import { UserCardListProps } from './interfaces';

const UserCardList = ({ onPressUserCard, ...rest }: UserCardListProps) => {
  const renderItem = ({ item }: { item: IUser }) => {
    return (
      <Ripple
        onPress={() => onPressUserCard(item)}
        rippleContainerBorderRadius={metrics.borderRadius / 2}
      >
        <UserCard name={item.name} photo={item.photo} />
      </Ripple>
    );
  };

  return (
    <FlatList
      keyExtractor={(user) => user.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Divider small />}
      {...rest}
    />
  );
};

export default UserCardList;
