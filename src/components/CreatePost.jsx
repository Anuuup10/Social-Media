
const CreatePost = () => {
  return (
    <form
      className="create-post"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    > 
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>

        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>

        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>

        <textarea
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>

        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>

        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags using space"
          autoComplete="off"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
