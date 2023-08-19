// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  deleteDoc,
  collection,
  addDoc,
  setDoc,
  Firestore,
  query,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import {
  Auth,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  Unsubscribe,
  signOut,
} from "firebase/auth";

import { getDatabase, Database } from "firebase/database";

export class FireBase {
  private firebaseApp: FirebaseApp;
  private fireStoreDb: Firestore;
  private auth: Auth;
  private provider: GoogleAuthProvider;
  private database: Database;
  public user: User | undefined;

  private static service: FireBase | undefined;
  public static get(): FireBase {
    if (!this.service) this.service = new FireBase();
    return this.service;
  }

  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyD3q5YmI9vdofcP_h6e8DJ_wmoxDtOFJ9Y",
      authDomain: "herexstudent-b5ffa.firebaseapp.com",
      projectId: "herexstudent-b5ffa",
      storageBucket: "herexstudent-b5ffa.appspot.com",
      messagingSenderId: "745786810918",
      appId: "1:745786810918:web:9b4960191e64d436bc3ce7",
    };

    // Initialize Firebase
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth(this.firebaseApp);
    this.provider = new GoogleAuthProvider();
    this.database = getDatabase(this.firebaseApp);
    this.fireStoreDb = getFirestore(this.firebaseApp);
  }

  public signupEmailPasswoord(
    email: string,
    password: string,
    naam: string,
    achternaam: string,
    cb: () => void
  ) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.user = userCredential.user;
        updateProfile(this.user, {
          displayName: naam + " " + achternaam,
        }).then(function () {
          // Update successful.
        });
        cb();
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public signinEmailPasswoord(email: string, password: string, cb: () => void) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.user = userCredential.user;
        cb();
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public signInGoogle(cb: () => void) {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        this.user = result.user;
        cb();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  public signOut(cb: () => void) {
    if (!this.user) {
      cb();
      return;
    }
    signOut(this.auth)
      .then(() => {
        // Sign-out successful.
        console.log("succes");
        cb();
        this.user = undefined;
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
      });
  }

  // add Projects to firestore
  public addProject = async (title: string, project: string, list:string) => {
    const cardsSnapShot = collection(this.fireStoreDb, "projects");

    const docRef = await addDoc (cardsSnapShot, {
      title,
      project,
      list,
      description: "",
    });
    return docRef.id;
  };
  // get Projects from firestore

  public getCards = async (project: string) => {
    const q = query(
      collection(this.fireStoreDb, "projects"),
      where("project", "==", project)
    );

    const querySnapshot = await getDocs(q);
    const result: {
      id: string;
      data: DocumentData;
    }[] = [];
    querySnapshot.forEach((doc) => {
      result.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    return result;
  };

  //add Todos to firestore

  public addTodo = async (text: string, todoId: string) => {
    const cardsSnapShot = collection(this.fireStoreDb, `lists/${todoId}/projects`);

    const docRef = await addDoc(cardsSnapShot, {
      title: text,
      description: "",
      comments: [],
    });
    return docRef.id;
  };

  // change Todos in firestore
  public updateTodo = async (
    todoListId: string,
    id: string,
    attribute: string,
    value: string
  ) => {
    // console.log(todoListId, id, attribute, value);
    if (attribute === "title") {
      const answer = await setDoc(
        doc(this.fireStoreDb, `lists/${todoListId}/projects`, id),
        {
          title: value,
        },
        {
          merge: true,
        }
      );

      console.log(answer);
    } else {
      const answer = await setDoc(
        doc(this.fireStoreDb, `lists/${todoListId}/projects`, id),
        {
          description: value,
        },
        {
          merge: true,
        }
      );
      console.log(answer);
    }
  };

  // DELETE
  public deleteTodoListFirebase = async (id: string) => {
    await deleteDoc(doc(this.fireStoreDb, "lists", id));
  };

  public deleteCardFromFirebase = async (todoListId: string, id: string) => {
    await deleteDoc(doc(this.fireStoreDb, `lists/${todoListId}/projects`, id));
  };
}
