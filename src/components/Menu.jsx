import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Menu({ cat }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className="">
      <h1 className="text-xl text-med-blue capitalize xl:text-2xl">
        Other posts you may like
      </h1>
      <div className="md:flex md:flex-wrap md:w-full">
        {posts.map((post) => (
          <div
            className="my-3 relative bg-zinc-600 max-w-[300px] m-2"
            key={post.id}
          >
            <div className="mix-blend-overlay">
              <img
                className=""
                src={`http://localhost:8800/uploads/${post?.img}`}
                alt=""
              />
            </div>
            <div className="absolute bottom-0 py-2 ml-3 text-white ">
              <Link className="link" to={`/post/${post.id}`}>
                <h1 className=" capitalize text-2xl">{post.title}</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
