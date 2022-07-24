import { db } from './firebase';
import {
  addDoc,
  collection,
  serverTimestamp,
} from '@firebase/firestore/lite'

class DatabaseService {
  collection;

  constructor(collectionName) {
    this.collection = collection(db, collectionName)
  }

  // save a new document in the database
  create = async (data) => {
    return await addDoc(this.collection, {
      ...data,
      submitted: serverTimestamp()
    }).catch((e) => console.log(e))
  };

}

// Create services for each entity type
export const EmailsService = new DatabaseService("emails");