import * as firebase from 'firebase';
import config from '../config';

export default firebase.initializeApp(config);

// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");
