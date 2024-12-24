import React, { useCallback, useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  
  const deletePost = useCallback(async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    console.log(`Post with ID ${id} has been deleted`);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost, postsCollectionRef]);

 
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h5> {post.title}</h5>
              </div>
              <div className="deletePost">
                {isAuth && post.author?.id === auth.currentUser?.uid && (
                  <button
                    onClick={() => { 
                      deletePost(post?.id); 
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <p>@{post.author?.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
