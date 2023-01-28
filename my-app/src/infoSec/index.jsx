import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import './index.scss'
function Detail() {
    const [post, setPost] = useState([]);
    let {id} = useParams()
    const allData = () => {
        axios.get(`http://localhost:2023/users/${id}`).then((res) => {
            setPost(res.data);
        });
    }
    useEffect(() => {
        allData()
    }, []);


    return (
        <div className="cardd">
            <div>
                <img src={post.headImage} alt="FOTO" />
            </div>
            <div>
                <h3>{post.courses}</h3>
                <p>{post.items}</p>
            </div>
            <div className='flexx'>
                <div className='MAN'>
                    <img src={post.HumanImage} alt="FOTO" />
                    <h4>{post.username}</h4>
                    <h5>{post.job}</h5>
                </div>
                <div className='priceDIV'>
                    <h3>{post.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default Detail