import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../axios/config";
import "./Home.css";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      <h1>Ultimos Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler Mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
