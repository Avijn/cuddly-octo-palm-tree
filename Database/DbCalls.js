import { getDatabase, ref, set, push, update } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import app from "./DbConnect.js"

export default function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase(app);
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email
    });
  }

export function writeBrowserData(userId, data)
{
    const db = getDatabase(app);
    update(ref(db, 'users/' + userId + "/browser_data"), data)
}