import React, {createContext, useState} from 'react';
export const userStoreContext = createContext();
const UserStoreProvider = ({children}) => {
  const [profile, setProfile] = useState(null);
  // dictionary to store all data
  const userStore = {
    profile: profile,
    updateProfile: profile => {
      setProfile(profile);
    },
  };
  return (
    <userStoreContext.Provider value={userStore}>
      {children}
    </userStoreContext.Provider>
  );
};

export default UserStoreProvider;
