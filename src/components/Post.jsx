const Post = ({ post }) => {
  return (
    <section className="card post-card" style={{ maxWidth: "320px" }}>
      <div className="card-body">
        <h4 className="card-title">
          {post.title}{" "}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
          </span>
        </h4>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag">{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default Post;
