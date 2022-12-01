import React from "react";
import { Link } from "react-router-dom";
import { getText } from "../util";

const BlogCard = ({ post }) => {
    console.log(post);
    return (
        <div className="bg-white md:max-w-[300px] my-2">
            <div className="w-full h-[250px] object-contain">
                <img
                    className="w-full h-full"
                    src={`http://localhost:8800/uploads/${post?.img}`}
                    alt=""
                />
            </div>
            <div className="py-5 px-3 w-full h-[175px] text-med-blue">
                {/* <p className="mb-5 inline-block   py-1 px-5 rounded-2xl text-sm text-white bg-med-blue">
                    {post.cat}
                </p> */}
                <Link className="link" to={`/post/${post.id}`}>
                    <h1 className="font-montserrat uppercase text-xl tracking-wider">
                        {post.title}
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
