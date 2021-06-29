import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBBjZ95PZAyRpT73Mm7ebiHPJ1whsjaQqw",
    authDomain: "pokemons-game-b6cab.firebaseapp.com",
    databaseURL: "https://pokemons-game-b6cab-default-rtdb.firebaseio.com",
    projectId: "pokemons-game-b6cab",
    storageBucket: "pokemons-game-b6cab.appspot.com",
    messagingSenderId: "533724199022",
    appId: "1:533724199022:web:ffe59787aa4fd0dc254e7f"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = firebase.database();


export default database;