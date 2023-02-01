import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Infos from "./components/Infos";
import { useState } from "react";

export const App = () => {
  const [infos, setInfos] = useState([
    {
      id: 1,
      name: "Simon Ullado",
      birthdate: "2000-05-10",
      email: "ulladosimon@gmaul.com",
      phone: "123456789",
    },
    {
      id: 2,
      name: "Paulo Ullado",
      birthdate: "1994-01-15",
      email: "pauloullado@gmail.com",
      phone: "987654321",
    },
    {
      id: 3,
      name: "Zaira Grace",
      birthdate: "1996-12-25",
      email: "zairagrace@gmail.com",
      phone: "123987456",
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Infos infos={infos} />
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
