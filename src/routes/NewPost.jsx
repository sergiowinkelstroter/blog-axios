import { useNavigate } from "react-router-dom";
import "./NewPost.css";
import { api } from "../axios/config";
import { useState } from "react";

export const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  async function createPost(e) {
    e.preventDefault();
    const post = { title, body, userId: 1 };

    await api.post("/posts", { body: post });
    navigate("/");
    alert("Post criado com sucesso!");
  }

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteudo"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar post" className="btn" />
      </form>
    </div>
  );
};
