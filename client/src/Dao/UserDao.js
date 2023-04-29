import {firestore} from "../firebase/firebase";
import {getDocs, collection, addDoc} from "firebase/firestore";

  const createUserDocument = async (inputs , uid) => {
  if(!inputs) return;

  const userRef = collection(firestore, "users");

    try {
      await addDoc(userRef, {
        username: inputs.username, 
        email: inputs.email,
        level: 0,
        points: 0,
        created_at: new Date,});
    } catch (error) {
      console.error("error in creating user",error);
    }
}

export {createUserDocument};