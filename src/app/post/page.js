
const PostPage = async () => {

    const res = await fetch('http://localhost:8005/posts',{
        cache:'force-cache'
    });
    const posts = await res.json();
    // console.log(posts)

    return (
        <div>
            <h1 className="text-4xl text-center font-bold">Total post: {posts?.length}</h1>

            <div className="w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                {
                    posts.map(post => <div key={post?.id}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{post?.title}</h2>
                                <p>{post?.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">{post?.likeCount}</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostPage
    ;