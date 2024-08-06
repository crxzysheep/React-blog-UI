import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8000/post/new_post";

const EmptyPage = () => {  
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`http://localhost:8080/all`).then((response) => {
            setPost(response.data);
        });
    }, []);

    function createPost() {
        axios
        .post(baseURL, {
            title: "Hello World!",
            content_box: "This is a new post."
        })
        .then((response) => {
            setPost(response.data);
        });
    }

    if (!post) return "No post!"
    return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content_box}</p>
          <button onClick={createPost}>Create Post</button>
        </div>
    );
}

export default EmptyPage;