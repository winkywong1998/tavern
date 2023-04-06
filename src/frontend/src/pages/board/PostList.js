import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

import Rating from 'react-rating';
import StarGrey from '../../assets/images/star-grey.png'
import StarYellow from '../../assets/images/star-yellow.png'

import { Pagination } from '../../components/Pagination';

import './PostList.css';

const PostList = ({ pageNum, pageSize }) => {
    const navigate = useNavigate();
    const [pages, setPages] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/page`, {
                params: {
                    pageNum,
                    pageSize
                }
            });
            setPosts(response.data.data);

            const len = response.data.total / pageSize;
            if (len % 1 === 0) {
                setPages(Math.round(len));
            } else {
                setPages(Math.ceil(len));
            }
        }
        getAllPosts();
    }, []);

    return (
        <div className='container py-4'>
            <ul className='list-group'>
                {posts.map(post => {
                    return (
                        <li key={post.id} className='list-group-item post-li py-3'>
                            <div className='post-vlist1'>
                                <div>
                                    <Link className='post-title' to={{ pathname: `/board/${post.id}` }}>
                                        {post.title}
                                    </Link>
                                </div>
                                <div>
                                    {post.content.substring(0, post.content.indexOf('.'))}
                                </div>
                            </div>
                            <div className='post-vlist2'>
                                <div className='row'>
                                    {post.company && (
                                        <div>
                                            <Link to={{ pathname: `/company/${post.company.id}` }}>
                                                {post.company.name}
                                            </Link>&nbsp;&nbsp;
                                            <Rating
                                                emptySymbol={<img src={StarGrey} className="icon" />}
                                                fullSymbol={<img src={StarYellow} className="icon" />}
                                                fractions={0.1}
                                                initialRating={post.company.score}
                                                readonly={true}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className='row'>
                                    <div>
                                        {post.creator.fname} {post.creator.lname}&nbsp;&nbsp;{post.time.substring(0, post.time.indexOf(' '))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <br />
            <Pagination params={{ pageNum: pageNum, maxPage: pages }} baseUrl={'/board'} />
        </div>
    );
}

export default PostList;