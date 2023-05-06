import { firestore, storage } from "../firebase/firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
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
      created_at: new Date(),
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
    });
  } catch (error) {
    console.error("error in creating user", error);
  }
};

const getUserById = async (id) => {
  if (!id) return;
  const docRef = doc(firestore, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};



const updateUserDocument = async (id, newData) => {
  const file = newData.img;
  const name = new Date().getTime() + file.name;
  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);
  const docRef = doc(firestore, "users", id);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
          break;
      }
    },
    (error) => {
      console.log(error);
    },

    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        try {
          updateDoc(docRef, {
            description: newData.description,
            username: newData.username,
            img: downloadURL,
          });
        } catch (error) {
          console.error("error in creating user", error);
        }
      });
    }
  );
};
export {
  createUserDocument,
  createUserDocumentWithGoogle,
  getUserById,
  updateUserDocument,
};
