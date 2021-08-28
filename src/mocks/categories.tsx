import React from 'react';

import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

interface IInterestProps {
  color: string;
  icon: any;
}

const categories: Record<string, IInterestProps> = {
  'Esportes': {
    color: 'aquamarine',
    icon: <FontAwesome5 name="basketball-ball" size={35} color="white" />,
  },
  'Tecnologia': {
    color: 'cadetblue',
    icon: <MaterialIcons name="computer" size={35} color="white" />,
  },
  'Moda': {
    color: 'hotpink',
    icon: <MaterialCommunityIcons name="purse" size={35} color="white" />,
  },
  'Séries e TV': {
    color: 'crimson',
    icon: <MaterialIcons name="tv" size={35} color="white" />,
  },
  'Educação': {
    color: 'mediumspringgreen',
    icon: <FontAwesome5 name="book" size={35} color="white" />,
  },
  'Dinheiro': {
    color: 'gold',
    icon: <MaterialIcons name="attach-money" size={35} color="white" />,
  },
};

export default categories;
