import { firestore, storage } from "../firebase/firebase";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  increment,
  collection,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const createUserDocument = async (inputs, uid) => {
  if (!inputs) return;

  const userRef = doc(firestore, "users", uid);

  try {
    await setDoc(userRef, {
      username: inputs.username,
      email: inputs.email,
      description: "",
      level: 1,
      exp: 0,
      coin: 0,
      img: "",
      created_at: new Date(),
      solved_problem: [],
      help_list: [],
    });
  } catch (error) {
    console.error("error in creating user", error);
  }
};

const createUserDocumentWithGoogle = async (newUser) => {
  if (!newUser) return;
  const userRef = doc(firestore, "users", newUser.user.uid);
  try {
    await setDoc(userRef, {
      img: "",
      username: "",
      email: newUser.user.email,
      description: "",
      level: 1,
      exp: 0,
      coin: 0,
      created_at: new Date(),
      solved_problem: [],
      help_list: [],
    });
  } catch (error) {
    console.error("error in creating user", error);
  }
};

const getUserById = async (id) => {
  const userInfo = {
    img: "",
    username: "",
    email: "",
    description: "",
    level: 1,
    exp: 0,
    coin: 0,
    created_at: new Date(),
    solved_problem: [],
    help_list: [],
  };

  if (!id) return;
  const docRef = doc(firestore, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    userInfo.username = docSnap.data().username;
    userInfo.img = docSnap.data().img;
    userInfo.email = docSnap.data().email;
    userInfo.description = docSnap.data().description;
    userInfo.level = docSnap.data().level;
    userInfo.exp = docSnap.data().exp;
    userInfo.coin = docSnap.data().coin;
    userInfo.created_at = docSnap.data().created_at;
    userInfo.solved_problem = docSnap.data().solved_problem;
    userInfo.help_list = docSnap.data().help_list;

    return userInfo;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

const updateUserDocument = async (id, newData) => {
  const file = newData.img;
  const storageRef = ref(storage, file.name + "_" + id);
  const uploadTask = uploadBytesResumable(storageRef, file);
  const docRef = doc(firestore, "users", id);
  try {
    const snapshot = await uploadTask;
    const downloadURL = await getDownloadURL(snapshot.ref);

    await updateDoc(docRef, {
      description: newData.description,
      username: newData.username,
      img: downloadURL,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updateUserDocumentProblemList = async (id, newData) => {
  const docRef = doc(firestore, "users", id);
  try {
    await updateDoc(docRef, {
      solved_problem: arrayUnion(newData.id),
      exp: increment(newData.exp_value),
      coin: increment(newData.coin_value),
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updateUserLevel = async (id, newLevel) => {
  const docRef = doc(firestore, "users", id);
  try {
    await updateDoc(docRef, {
      level: newLevel,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getUserLeaderBoard = async () => {
  const leaderboardRef = collection(firestore, "users");
  try {
    const leaderboardQuery = query(
      leaderboardRef,
      orderBy("exp", "desc"),
      limit(5)
    );
    const snapshot = await getDocs(leaderboardQuery);
    const leaderboard = snapshot.docs.map((doc) => doc.data());
    return leaderboard;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const helpRequest = async (uid, newData) => {
  const docRef = doc(firestore, "users", uid);
  try {
    await updateDoc(docRef, {
      coin: increment(-50),
      help_list: arrayUnion(newData.id),
    });
  } catch (error) {
    console.log(error);
    return false;
  }

};

export {
  helpRequest,
  getUserLeaderBoard,
  createUserDocument,
  createUserDocumentWithGoogle,
  getUserById,
  updateUserDocument,
  updateUserDocumentProblemList,
  updateUserLevel,
};
