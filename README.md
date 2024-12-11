# Netflix Clone (React + Firebase)

## Overview
A full-stack Netflix clone application built using React.js, Firebase, and TailwindCSS. This project demonstrates authentication, Firestore integration, and a responsive UI styled with TailwindCSS.

## Features
- User Authentication (Sign Up, Login, Logout)
- Firestore database integration
- Toast notifications for error handling
- Responsive design using TailwindCSS

## Tech Stack
- **Frontend:** React.js, TailwindCSS
- **Backend:** Firebase Authentication, Firestore Database
- **Tools:** Vite, ESLint, React Router DOM, React Toastify

## Folder Structure
```plaintext
public
src
├── assets              # Images and static assets
├── components          # Reusable components (Footer, Navbar, etc.)
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── TitleCards.jsx
├── pages               # Application pages
│   ├── App.jsx
│   ├── firebase.js     # Firebase configuration and helper functions
│   └── main.jsx
├── index.css           # TailwindCSS styles
.gitignore              # Files and folders to ignore in version control
package.json            # Project dependencies and scripts
postcss.config.js       # PostCSS configuration
README.md               # Project documentation
vite.config.js          # Vite configuration
```

## Firebase Configuration
```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, name);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

export { auth, db, login, signup, logout };
```

## Scripts
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

## Dependencies
```json
"dependencies": {
  "@tailwindcss/aspect-ratio": "^0.4.2",
  "firebase": "^10.12.4",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-firebase-hooks": "^5.1.1",
  "react-responsive": "^10.0.0",
  "react-router-dom": "^6.25.1",
  "react-toastify": "^10.0.5"
}
```

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dilrukshitha/Full-Stack-Netflix-Clone-using-React-JS-_-Firebase.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root and add your Firebase configuration.

### Running the Project
To run the application locally:
```bash
npm run dev
```

To build the application for production:
```bash
npm run build
```

## Deployment
This project uses `gh-pages` for deployment. To deploy:
```bash
npm run deploy
```

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

