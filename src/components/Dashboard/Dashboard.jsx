// import React, { useState, useEffect } from "react";
// import "./Dashboard.css";

// const Dashboard = () => {
//  const [darkMode, setDarkMode] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);
//   const [visitorCount, setVisitorCount] = useState("");
//   const [cvDownloads, setCvDownloads] = useState("");
//   const [messages, setMessages] = useState([]); 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowNotification(true);
//       setTimeout(() => setShowNotification(false), 4000);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowNotification(true);
//       setTimeout(() => setShowNotification(false), 4000);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={darkMode ? "dark-body" : ""}>
//       <header className="header">
//         <h1>Dashboard Portfolio Mayma</h1>
//       </header>

//       <button
//         className={`toggle-btn ${darkMode ? "dark" : "light"}`}
//         onClick={() => setDarkMode(!darkMode)}
//       >
//         {darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
//       </button>

//       <div className="container">
//         <Card title="Visiteurs totaux" value={visitorCount} darkMode={darkMode} />
//         <Card title="Téléchargements CV" value={cvDownloads} darkMode={darkMode} />
//         <MessagesCard messages={messages} darkMode={darkMode} />
//       </div>

//       {showNotification && <div className="notification">Nouveau message reçu !</div>}
//     </div>
//   );
// };

// function Card({ title, value, darkMode }) {
//   return (
//     <div className={`card ${darkMode ? "dark" : ""}`}>
//       <h2 className={`card-title ${darkMode ? "dark" : ""}`}>{title}</h2>
//       <div className={`stat-number ${darkMode ? "dark" : ""}`}>{value}</div>
//     </div>
//   );
// }

// function MessagesCard({ messages, darkMode }) {
//   return (
//     <div className={`card ${darkMode ? "dark" : ""}`} style={{ flexBasis: "100%" }}>
//       <h2 className={`card-title ${darkMode ? "dark" : ""}`}>Messages reçus</h2>
//       <div className={`stat-number ${darkMode ? "dark" : ""}`}>{messages.length}</div>
//       <div className={`messages-list ${darkMode ? "dark" : ""}`}>
//         {messages.map((msg) => (
//           <div key={msg.id} className={`message ${darkMode ? "dark" : ""}`}>
//             <strong>{msg.sender}:</strong> {msg.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
