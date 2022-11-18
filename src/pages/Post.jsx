import React from "react";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="post">
            <div className="content">
                <img src="https://via.placeholder.com/300.png/09f/fff" alt="" />
                <div className="user">
                    <img
                        src="https://via.placeholder.com/300.png/09f/fff"
                        alt=""
                    />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to="/write?edit=2">
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, assumenda dolorum. Recusandae obcaecati hic
                    itaque quidem laudantium cum quaerat nulla nobis, magni
                    exercitationem eaque cumque perspiciatis ratione dicta quam!
                    Fugiat. Eligendi esse nemo ut suscipit, praesentium
                    repellendus doloremque nostrum quos illum minus eaque quasi
                    aperiam id aut, facilis molestias dolores ad totam
                    voluptates distinctio! Adipisci fugit vel veritatis
                    praesentium illum! Error commodi, itaque doloribus ad
                    reprehenderit nisi suscipit necessitatibus, voluptatibus
                    vitae, minima maxime iste quas? Rem a nam error ea repellat
                    aspernatur, nulla blanditiis incidunt distinctio magni
                    corrupti nobis voluptates.
                </p>
            </div>
            <Menu />
        </div>
    );
};

export default Single;
