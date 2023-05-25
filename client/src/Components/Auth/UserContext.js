import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserById } from "../../Dao/UserDao";
import { auth } from "../../firebase/firebase";
import { useAuthState} from "react-firebase-hooks/auth";

const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [user] = useAuthState(auth);  
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const userInfo = await getUserById(user.uid);
          setUserData(userInfo); // Aggiorna lo stato con i dati ottenuti
        } catch (error) {
          console.error(
            "Errore durante il recupero delle informazioni utente:",
            error
          );
        }
      }
    };

    fetchData();
  }, [user]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
