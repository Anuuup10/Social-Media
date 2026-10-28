import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePost} = useContext(PostList);
  return (
    <section className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h4 className="card-title">
          {post.title}{" "}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete" onClick={() => deletePost(post.id)}>
            <MdDelete />
          </span>
        </h4>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          <p>This post has been reacted by {post.reactions} people</p>
        </div>
      </div>
    </section>
  );
};

export default Post;
