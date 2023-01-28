import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import './index.scss'
function Courses() {
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState('')
    const [change, setChange] = useState(true)
    const allData = () => {
        axios.get('http://localhost:2023/users').then((res) => {
            setPost(res.data);
        });
    }


    const sortPrice = () => {
        setChange(!change)
        change ? setPost([...post.sort((a, b) => a.price - b.price)]) : allData();
    }

    const deleteCard = (_id) => {
        axios.delete(`http://localhost:2023/users/${_id}`).then(() => { allData() })
    }



    useEffect(() => {
        allData()
    }, []);
    return (
        <section className='coursesSec'>
            <div className='hr'><hr /></div>
            <div className='coursesHeader'><h2>Popular Courses</h2></div>
            <div className='inp'>
                <input placeholder='Search>>>' type="text" onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => sortPrice()}>Sort by PRICE</button>
            </div>
            <div className="AllCard">
                {
                    post.filter((data)=> data.courses.toLowerCase().includes(search.toLowerCase())).map((element) =>
                        <div className="card">
                            <div className='headImgg'>
                                <img src={element.headImage} alt="FOTO" />
                            </div>
                            <div>
                                <Link to={`/details/${element._id}`}><h3>{element.courses}</h3></Link>
                                <p>{element.items}</p>
                                <button onClick={() => deleteCard(element._id)}><i className="fa-regular fa-trash-can"></i></button>
                            </div>
                            <div className='manAbout'>
                                <div className='MAN'>
                                    <img src={element.HumanImage} alt="FOTO" />
                                    <h4>{element.username}</h4>,
                                    <h5>{element.job}</h5>
                                </div>
                                <div className='priceDIV'>
                                    <h3>{element.price}</h3>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    )
}

export default Courses