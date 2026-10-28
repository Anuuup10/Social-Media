import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } 

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going Brt",
    body: "Hi friends, i am going to Biratnagar for study purpose. Hope to learn so many things.",
    reactions: "2",
    userId: "user-10",
    tags: ["Study", "Biratnagar"],
  },
  {
    id: "2",
    title: "Bhedetar",
    body: "It was great experience at Bhedetar. Peace...",
    reactions: "5",
    userId: "user-09",
    tags: ["Peace", "Bhedetar", "Travel"],
  },
];

export default PostListProvider;
