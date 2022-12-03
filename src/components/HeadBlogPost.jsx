import React from "react";
import { Link } from "react-router-dom";
import { getText } from "../util";

const HeadBlogPost = ({ post }) => {
    return (
        <div className="xl:flex bg-white w-full my-10">
            <div className="w-full xl:max-w-[600px] object-contain">
                <img
                    className="w-full"
                    src={`http://localhost:8800/uploads/${post?.img}`}
                    alt=""
                />
            </div>
            <div className="py-5 px-3 w-full lg:h-[250px] rounded-b-xl  text-med-blue">
                {/* <p className="mb-5 inline-block   py-1 px-5 rounded-2xl text-sm text-white bg-med-blue">
        	{post.cat}
        </p> */}
                <Link className="link" to={`/post/${post.id}`}>
                    <h1 className="leading-10 font-montserrat uppercase text-xl tracking-wider lg:text-[2rem] lg:tracking-widest">
                        {post.title}
                    </h1>
                </Link>

                <p className="mt-5 font-montserrat">
                    {getText(post.desc).slice(0, 250) + "..."}
                </p>
            </div>
        </div>
    );
};

export default HeadBlogPost;
