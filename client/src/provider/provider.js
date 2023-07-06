import { createContext, useState } from "react";

const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      
    </UserIdContext.Provider>
  );
};

export default UserIdContext;