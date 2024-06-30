import Link from "next/link";
import style from './Post.module.css'


const PostPage = async () => {

    const res = await fetch('http://localhost:8005/posts',
        // { cache:'force-cache'}



        //for e-comerce website
        // {
        //     next:{
        //         revalidate:1,
        //     }
        // }


        //for news portal-social media type website.
        {cache:"no-store"}
    
    );
    const posts = await res.json();
    // console.log(posts)

    return (
        <div>

            <h1 className="text-4xl text-center font-bold">Total posted: {posts?.length}</h1>

                   <h1 className={style.header_text}>This is row CSS modules</h1>

            <div className="w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                {
                    posts.map(post => <div key={post?.id}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{post?.title}</h2>
                                <p>{post?.description}</p>
                                <p>Total Likes: {post?.likeCount}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`post/${post?.id}`}>
                                    <button className="btn btn-primary">see more</button>
                                    </Link>
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