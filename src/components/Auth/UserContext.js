import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getUserById,
  updateUserLevel,
} from "../../FirebaseDataManager/UserManager";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const UserContext = createContext();

const progressioneLivelli = [
  { livello: 2, exp_necessaria: 100 },
  { livello: 3, exp_necessaria: 150 },
  { livello: 4, exp_necessaria: 200 },
  { livello: 5, exp_necessaria: 250 },
  { livello: 6, exp_necessaria: 300 },
  { livello: 7, exp_necessaria: 350 },
  // Aggiungi altri livelli come necessario
];

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

  useEffect(() => {
    const controllaAvanzamentoLivello = () => {
      if (userData) {
        const { exp, level, expPercentuale } = userData;
        const prossimoLivello = progressioneLivelli[level - 1]; // Indicizzazione corretta
        const percentualeExp = Math.floor(
          (exp / prossimoLivello.exp_necessaria) * 100
        );

        if (percentualeExp !== expPercentuale) {
          // Aggiorna il livello nell'oggetto userData
          setUserData((prevUserData) => ({
            ...prevUserData,
            level,
            expPercentuale: percentualeExp,
          }));
        }

        if (prossimoLivello && exp >= prossimoLivello.exp_necessaria) {
          // Avanzamento di livello
          const nuovoLivello = level + 1;

          // Aggiorna il livello nel database
          updateUserLevel(user.uid, nuovoLivello);
        }
      }
    };

    controllaAvanzamentoLivello();
  }, [userData]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
