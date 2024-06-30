import Link from "next/link";

const DetailsPage = async({params}) => {
     const {id}=params;
     console.log(id)
         const res=await fetch (`http://localhost:8005/posts/${id}`)
         const post= await res.json()
         console.log(post)
       

    return (
        <div>
             <div className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{post?.title}</h2>
                                <p>{post?.description}</p>
                                <p>Total Likes: {post?.likeCount}</p>
                                <div className="card-actions justify-end">
                                    <Link href='/post'>
                                    <button className="btn btn-primary">Go  back</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default DetailsPage;