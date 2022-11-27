import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../axios/config";

import "./Post.css";

export const Post = () => {
  const [post, setPost] = useState({});
  const [coments, setComents] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  async function deletePost() {
    await api.delete(`posts/${id}`);
    navigate("/");
    alert("Post excluido com sucesso!");
  }

  useEffect(() => {
    Promise.all([
      api.get(`/posts/${id}`),
      api.get(`/posts/${id}/comments`),
    ]).then(([postReponse, comentsResponse]) => {
      setPost(postReponse.data);
      setComents(comentsResponse.data);
    });
  }, []);
  return (
    <>
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <button onClick={deletePost} className="btn-delete">
        Excluir
      </button>
      <div className="comments">
        <h1>Comentarios: </h1>
        {coments.map((comment) => (
          <div key={comment.id} className="comment">
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};
