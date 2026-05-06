import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState(true);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => {
      //clean up
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setStatus("loading");

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=15",
          { signal: controller.signal },
        );

        const data = await res.json();
        setPost(data);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setStatus("errors");
        }
      }
    }

    loadPost()

    return () => {
      controller.abort()
    }

  },[]);

  return (
    <div className="container">
      <h1 className="title">useEffect Demo</h1>

      {/* Timer */}
      <div className="timer">
        <p>Countdown</p>
        <h2>{seconds}</h2>
      </div>

      {/* Status */}
      {status === "loading" && <p className="status">Loading posts...</p>}
      {status === "error" && <p className="status error">Something went wrong</p>}

      {/* Posts */}
      <div className="grid">
        {post.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
