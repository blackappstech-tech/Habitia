import { useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Download from "./pages/Download";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/download" element={<Download />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </HashRouter>
    </div>
  );
}

export default App;
