import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const getAllProblems = async () => {
  const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);
  const tmp = [];
  querySnapshot.forEach((doc) => {
    tmp.push({ id: doc.id, ...doc.data() });
  });
  return tmp;
};

export default getAllProblems;
