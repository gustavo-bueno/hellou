import React, { useState } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';
import { IUser } from '../models/user.model';

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
}

export const UserContext = createContext<UserContextProps>({
  user: {} as IUser,
  setUser: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
