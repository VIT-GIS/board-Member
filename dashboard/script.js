import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8",
  authDomain: "vitgis-ba14f.firebaseapp.com",
  projectId: "vitgis-ba14f",
  storageBucket: "vitgis-ba14f.appspot.com",
  messagingSenderId: "759209581914",
  appId: "1:759209581914:web:3432c0511eba57eca66763",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Reference to the club_enrollment collection
const enrollmentCollection = collection(db, "club_enrollement");

// Allowed emails
const allowedEmails = [
  "sahildinesh.zambre2023@vitstudent.ac.in",
  "ajitesh.sharma2023@vitstudent.ac.in",
  "raybanpranav.mahesh2023@vitstudent.ac.in",
  "rohit.lalbahadur2023@vitstudent.ac.in",
];

// Check if the user is allowed
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (allowedEmails.includes(user.email)) {
      // User is allowed, fetch and display data
      fetchData();
    } else {
      // User is not allowed, redirect to login page
      window.location.href = "../Login Page/index.html";
    }
  } else {
    // User is not logged in, redirect to login page
    window.location.href = "../Login Page/index.html";
  }
});

// Fetch and display data in real-time
function fetchData() {
  const q = query(enrollmentCollection, orderBy("name")); // Sort by 'name' alphabetically
  onSnapshot(q, (querySnapshot) => {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Clear previous data

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const row = document.createElement("tr");

      row.innerHTML = `
        <td data-label="Name">${data.name}</td>
        <td data-label="Registration No.">${data.regNumber}</td>
        <td data-label="Email">${data.email}</td>
        <td data-label="Phone">${data.phone}</td>
        <td data-label="Preference 1">${data.preference1}</td>
        <td data-label="Preference 2">${data.preference2}</td>
        <td data-label="Submitted At">${data.timestamp.toDate().toLocaleString()}</td>
      `;
      tableBody.appendChild(row);
    });
  });
}

// Search function
document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const rows = document.querySelectorAll("#tableBody tr");

  rows.forEach((row) => {
    const regNumber = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
    row.style.display = regNumber.includes(searchTerm) ? "" : "none";
  });
});

// Logout function
function logout() {
  signOut(auth).then(() => {
    // Redirect to login page and prevent back navigation
    window.location.replace("../Login Page/index.html");  // Use replace() to prevent going back
  }).catch((error) => {
    console.error("Error signing out: ", error);
  });
}

// Attach logout function to the logout button
document.getElementById("logoutBtn").addEventListener("click", logout);
