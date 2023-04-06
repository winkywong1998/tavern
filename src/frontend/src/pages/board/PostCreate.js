import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useRequest from '../../hooks/UseRequest';
import NavigationBar from "../../components/layout/NavigationBar";
import { useDispatch, useSelector } from "react-redux";

import './PostCreate.css'

const PostCreate = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [companyId, setCompanyId] = useState(-1);
    const [companyName, setCompanyName] = useState('Select Company');
    const [companies, setCompanies] = useState([]);
    const authorization = useSelector(state => state.authorize)
    const creatorId = authorization.id;

    const { doRequest, errors } = useRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/board/save`,
        method: 'post',
        body: {
            title: title,
            content: content,
            company: {
                id: companyId
            },
            creator: {
                id: creatorId
            }
        },
        onSuccess: () => navigate(0)
    })

    useEffect(() => {
        const getCompanyDetails = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/companies`);
            setCompanies(response.data);
        }
        getCompanyDetails();
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
    }

    const selectCompany = (event, company) => {
        event.preventDefault();
        setCompanyId(company.id);
        setCompanyName(company.name)
    }

    return (
        <form onSubmit={onSubmit} className='container post-create-form'>
            <div className="row">
                <div className='col-6 px-0'>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-control post-user-input"
                        placeholder="Please enter a title"
                    />
                </div>
                <div className="dropdown col-6">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        {companyName}
                    </button>
                    <ul className="dropdown-menu">
                        {companies.map(company => {
                            return (
                                <li key={company.id}>
                                    <button className="dropdown-item" onClick={(e) => selectCompany(e, company)}>{company.name}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <br/>
            <div className="row">
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="form-control post-form-content post-user-input"
                    placeholder="Enter something..."
                >
                </textarea>
            </div>
            <div className="row my-4 col-3">
                {title !== '' && content !== '' &&
                    <button type="submit" className="btn btn-primary">Publish</button>
                }
                {(title === '' || content === '') &&
                    <button type="submit" className="btn btn-primary" disabled>Publish</button>
                }
            </div>
        </form>
    );
}

export default PostCreate;