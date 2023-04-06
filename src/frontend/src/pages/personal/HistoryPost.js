import React, {useEffect, useState} from 'react';
import {Typewriter} from "react-simple-typewriter";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import axios from "axios";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import StarGrey from "../../assets/images/star-grey.png";
import StarYellow from "../../assets/images/star-yellow.png";

const HistoryPost = () => {

    const [checked, setChecked] = useState(false);
    const handleDone = () => {
        setChecked(true)
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const authorization = useSelector(state => state.authorize)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getHistPosts = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/creator/${authorization.id}`)
            setPosts(response.data)
        }
        getHistPosts();
    }, []);

    return (
        <div>
            <div className="row align-items-center border border-5 rounded-2" style={{padding:'2px', marginLeft: '10%', marginRight:'1%'}}>
                <div className="col-lg-5" style={{marginLeft:'5%', width:'95%'}}>
                    <h1 className="" align = "center">
                        <span style={{ color: 'black', fontWeight: '10' }}>
                            <Typewriter words={['History Post Board']} cursor
                                        loop={1}
                                        typeSpeed={60}
                                        delaySpeed={800}
                                        deleteSpeed={40}
                                        onLoopDone={handleDone}/>
                        </span>
                    </h1>
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
                    </div>
                    <br/>

                </div>

            </div>

        </div>
    );
};

export default HistoryPost;