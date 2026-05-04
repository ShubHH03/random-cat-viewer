import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCat = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random",
      );
      const data = await response.json();
      setImage(data.data.image);
    } catch (error) {
      console.log("Error fetching cat:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="page">
      <div className="card">
        <div className="card-header">
          <span className="paw">🐾</span>
          <h1 className="title">Random Cat</h1>
          <p className="subtitle">A new cat with every click</p>
        </div>

        <div className="image-wrapper">
          {loading ? (
            <div className="spinner-box">
              <div className="spinner" />
            </div>
          ) : (
            <img
              key={image}
              src={image}
              alt="Random cat"
              className="cat-image"
            />
          )}
        </div>

        <button className="btn" onClick={fetchCat} disabled={loading}>
          {loading ? "Loading..." : "New"}
        </button>
      </div>
    </div>
  );
}

export default App;
