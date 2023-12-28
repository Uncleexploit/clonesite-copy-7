const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  const firebaseConfig2 = {
    apiKey: "AIzaSyAtt140KPF_K3QaiYTTnhsaSjhapS8_mj4",
  authDomain: "nowphish.firebaseapp.com",
  databaseURL: "https://nowphish-default-rtdb.firebaseio.com",
  projectId: "nowphish",
  storageBucket: "nowphish.appspot.com",
  messagingSenderId: "822299839971",
  appId: "1:822299839971:web:a9fa074b9ca7a1b70d24d6",
  measurementId: "G-N2E0X8P8G9"
  };
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  