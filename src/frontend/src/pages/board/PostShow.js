import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from "../../components/layout/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import useRequest from '../../hooks/UseRequest';
import background from "../../assets/images/629055.png";

import './PostShow.css'

const ProgressBar = (props) => {
    const { completed } = props;

    return (
        <div className='bar-container'>
            <div className='bar-fill' style={{width: `${completed}%`}}>
                <span className='bar-label'>{`${completed}%`}</span>
            </div>
        </div>
    );
  };

const PostShow = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [content, setContent] = useState('');

    const authorization = useSelector(state => state.authorize);
    const logged = authorization.isLogin;
    const userId = authorization.id;
    const utype = authorization.utype;
    const fname = authorization.fname
    const lname = authorization.lname

    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/post/${postId}`);
            setPost(response.data);
        }
        getPost();
    }, []);

    const deletePost = async (e) => {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/board/${postId}`);
        navigate("/board");
    }

    const { doRequest, errors } = useRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/comment/save`,
        method: 'post',
        body: {
            content: content,
            postId: postId,
            creator: {
                id: userId
            }
        },
        onSuccess: () => navigate(0)
    })

    const postComment = async (e) => {
        await doRequest();
    }

    const likeClick = async (e, commentId) => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/comment/like/${commentId}`);
        navigate(0);
    }

    const dislikeClick = async (e, commentId) => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/comment/dislike/${commentId}`);
        navigate(0);
    }

    return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh',width:'100%', position: "absolute"}}>
            <NavigationBar />
            <div className='container w-75 my-5 px-5 py-4 post-detail-card'>
                <div className='post-header'>
                    <div className='post-header-vlist1 fs-1'>
                        {post.title}
                    </div>
                    <div className='post-header-vlist2'>
                        <div className='row fs-4'>
                            {post.creator && (post.creator.fname + " " + post.creator.lname)}
                        </div>
                        <div className='row'>
                            {post.time}
                        </div>
                    </div>
                </div>
                <p>{post.content}</p>
                {(utype == 'a' || (post.creator && post.creator.id == userId)) &&
                    <button type="submit" className="btn btn-primary" onClick={(e) => deletePost(e)}>Delete</button>}
                <hr/>
                <div className='row px-3'>
                    {logged ? "Comment as " + fname + " " + lname : 'Login to leave a comment'}
                </div>
                <div className="row px-3 post-comment-input">
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="form-control post-user-comment"
                        placeholder="What are your thoughts?"
                    >
                    </textarea>
                    <div className='post-user-comment-submit'>
                        {content !== '' && logged &&
                            <button type="submit" className="btn btn-primary post-user-comment-submit-button" onClick={(e) => postComment(e)}>Publish</button>
                        }
                        {(content === '' || !logged) &&
                            <button type="submit" className="btn btn-primary post-user-comment-submit-button" disabled>Publish</button>
                        }
                    </div>
                </div>
                <hr/>
                <ul className='list-group'>
                    {post.comments && post.comments.map(comment => {
                        return (
                            <li key={comment.id} className='list-group-item comment-li comment-list-group-item py-3'>
                                <div className='comment-vlist1'>
                                    <div className='comment-header'>
                                        {comment.creator.fname} {comment.creator.lname}
                                    </div>
                                    <div className='comment-content py-2'>
                                        {comment.content}
                                    </div>
                                    <div className='comment-time'>
                                       {comment.time}
                                    </div>
                                </div>
                                <div className='comment-vlist2'>
                                    <div className='comment-rate pb-2'>
                                        <button className='comment-rate-button px-1' onClick={(e) => likeClick(e, comment.id)}>
                                            &#x1F44D;
                                        </button>
                                        {comment.likeCount}
                                        &nbsp;&nbsp;
                                        <ProgressBar completed={comment.dislikeCount === 0 ? 100 : Math.round(100 * (comment.likeCount/(comment.likeCount + comment.dislikeCount)))}/>
                                        &nbsp;&nbsp;
                                        {comment.dislikeCount}
                                        <button className='comment-rate-button px-1' onClick={(e) => dislikeClick(e, comment.id)}>
                                            &#x1F44E;
                                        </button>
                                    </div>
                                    <div className='py-3'></div>
                                    <div className='py-3'></div>
                                </div>
                            </li>
                        );
                    })}
                </ul>        
            </div>
        </div>
    );
}

export default PostShow;
