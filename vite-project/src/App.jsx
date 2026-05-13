import React, { Suspense } from "react"; // Suspense qo'shildi
import './App.css'; 
import Header from "./Cmpanents/Header/Header";

const App = () => {
  return (
    // Suspense tarjimalar yuklanguncha "Yuklanmoqda..." yozuvini ko'rsatib turadi
    // Bu Header ichidagi hook xato bermasligi uchun juda muhim
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <div>
        <Header />
      </div>
    </Suspense>
  );
};

export default App;