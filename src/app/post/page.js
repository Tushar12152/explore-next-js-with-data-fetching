
const PostPage = async() => {

      const res= await fetch('http://localhost:8005/posts');
      const posts= await res.json();
      console.log(posts)

    return (
        <div>
             <h1>Total post: {posts?.length}</h1>
        </div>
    );
};

export default PostPage
;