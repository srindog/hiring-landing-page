import { auth } from './firebase';
import { signInAnonymously } from "firebase/auth";

class AuthService {

  // save a new document in the database
  signInAnonymously = async () => {
    return await signInAnonymously(auth).catch((e) => console.log(e))
  };

}

// Create services for each entity type
export const AnonymousAuthService = new AuthService();