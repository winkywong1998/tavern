import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import '../board/PostList.css';
import Rating from 'react-rating';
import StarGrey from '../../assets/images/star-grey.png'
import StarYellow from '../../assets/images/star-yellow.png'
import './CompanyShow.css';
import useRequest from '../../hooks/UseRequest';
import { Pagination } from '../../components/Pagination';
import NavigationBar from "../../components/layout/NavigationBar";
import background from "../../assets/images/629055.png";

const CompanyShow = () => {
    const navigate = useNavigate();
    const { companyId } = useParams();
    const [company, setCompany] = useState({});
    const [posts, setPosts] = useState([]);
    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);
    const [logo_url, setLogo_url] = useState('');
    const [web_url, setWeb_url] = useState('');
    const [description, setDescription] = useState('');
    const pageSize = 10;
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNum = searchParams.get("pageNum") || 1
    const [pages, setPages] = useState(0);
    const authorization = useSelector(state => state.authorize);
    const utype = authorization.utype;

    const { doRequest: req1, error: e1 } = useRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/companies/${companyId}`,
        method: 'post',
        onSuccess: () => navigate(0)
    })

    useEffect(() => {
        const getCompanyDetails = async () => {
            const companyResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/companies/${companyId}`)
            setCompany(companyResponse.data);
            setName(companyResponse.data.name);
            setWeb_url(companyResponse.data.web_url);
            setLogo_url(companyResponse.data.logo_url);
            setDescription(companyResponse.data.description);
            const postsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/company/${companyId}`, {
                params: {
                    pageNum,
                    pageSize
                }
            })
            setPosts(postsResponse.data.data);

            const len = postsResponse.data.total / pageSize;
            if (len % 1 === 0) {
                setPages(Math.round(len));
            } else {
                setPages(Math.ceil(len));
            }
        }
        getCompanyDetails();
    }, []);

    const  { doRequest: req2, error: e2} = useRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/companies/editCompany`,
        method: 'post',
        body: {
            id: company.id,
            name: name,
            logo_url: logo_url,
            description: description,
            published: true,
            web_url: web_url,
        },
        onSuccess: () => navigate("/company/newRequests")
    })

    const submitRating = async (value) => {
        setRating(value);
        await req1({ params: { score: value } })
    }

    const showRating = () => {
        // console.log(value);
    }

    const deletePublishedCompany = async (e) => {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/companies/${companyId}`);
        navigate("/company");
    }

    const deleteUnPublishedCompany = async (e) => {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/companies/${companyId}`);
        navigate("/company/newRequests");
    }

    const publishCompany = async (e) => {
        e.preventDefault();
        if (!checked) {
            setChecked(true)
        } else {
            await req2()
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/companies/publish/${companyId}`);
            navigate("/company");
        }
    }

    const unpublishCompany = async (e) => {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/companies/unPublish/${companyId}`);
        navigate("/company");
    }

    return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh',width:'100%', position: "absolute"}}>
            <NavigationBar/>
            {company.published && <div style={{marginLeft: '11%',marginRight: '10%', marginBottom: '2%'}}>
                <div className="company-info">
                    <div style={{width: '15%'}}>
                        <img className="company-icon" src={company.logo_url}/>
                    </div>
                    <div className="company-stats">
                        <div>
                            <h2>{company.name}</h2>
                            <div style={{marginTop: '10%'}}>
                                <h6><b>Score:&nbsp;</b>
                                    <Rating
                                        emptySymbol={<img src={StarGrey} className="icon" />}
                                        fullSymbol={<img src={StarYellow} className="icon" />}
                                        initialRating={company.score}
                                        fractions={0.1}
                                        readonly={true}
                                    />
                                    ({company.num_review} reviews)
                                </h6></div>
                            {utype === 'p' && <div>
                                <b>Leave your rating:&nbsp;</b>
                                <Rating
                                    emptySymbol={<img src={StarGrey} className="icon" />}
                                    fullSymbol={<img src={StarYellow} className="icon" />}
                                    initialRating={rating}
                                    onClick={value => submitRating(value)}
                                    // onHover={() => showRating()}
                                />
                            </div>}
                            <div style={{marginTop: '1%'}}><b>Posts:</b>&nbsp;&nbsp;{company.num_post}<br/>
                                <span><b>Latest post: </b>&nbsp;&nbsp;{company.time_latest_post == null ? "None" : company.time_latest_post}</span>
                            </div>
                        </div>
                        {(company.published && utype === 'a')  &&
                            <button type="submit" className="btn btn-primary" onClick={(e) => unpublishCompany(e)}>Unpublish</button>}
                        {utype === 'a'  &&
                            <button type="submit" className="btn btn-primary" onClick={(e) => deletePublishedCompany(e)}>Delete</button>}

                    </div>
                    <div className="company-description">
                        <b>Description:&nbsp;</b><br/>
                        {company.description}
                    </div>
                    <div style={{marginLeft: '5%'}}>
                        <div>
                            <Link to={{ pathname: `/board` }}>
                                <button className='btn btn-primary'> Start a discussion </button>
                            </Link>
                        </div>
                        <div style={{marginTop: '30%'}}>
                            <a href={company.web_url}>
                                <button className='btn btn-primary'> Company Website </button>
                            </a>
                        </div>
                    </div>

                </div>
                <ul className='list-group' style={{marginTop: '2%'}}>
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
                                        {post.content.substring(0, post.content.indexOf('.')+1)}
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
                                            {post.creator.fname} {post.creator.lname}&nbsp;&nbsp;{post.time.substring(0, post.time.indexOf(' ')+1)}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>}
            {!company.published &&
                <div style={{marginLeft: '11%',marginRight: '10%', marginBottom: '2%'}}>
                    <div style={{marginTop:'1%', color: 'white', textAlign: 'center'}}>
                        <h1>{company.name} </h1>
                    </div>
                    <form className="row" onSubmit={publishCompany} style={{marginTop:'1%'}}>
                        <h5 className="" style={{marginLeft: '25%',color: 'white'}}><b>Company Name:</b></h5>
                        <input
                            value={name}
                            style={{marginLeft: '25%',width: '50%'}}
                            onChange={e => setName(e.target.value)}
                            className="form-control"
                            placeholder="Please enter a company name"
                        />
                        <h5 className="" style={{marginTop:'2%',color: 'white',marginLeft: '25%'}}><b>Company Description:</b></h5>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="form-control"
                            placeholder="Description in detail will help us review"
                            id="floatingTextarea2"
                            style={{marginLeft: '25%',width: '50%',height:'200px'}}>
                            </textarea>
                        <h5 className="" style={{marginTop:'2%',color: 'white',marginLeft: '25%'}}><b>Company Logo Url:</b></h5>
                        <input
                            value={logo_url}
                            style={{marginLeft: '25%',width: '50%'}}
                            onChange={e => setLogo_url(e.target.value)}
                            className="form-control"
                            placeholder="Company logo url (Max length 200)"
                            maxLength="200"
                        />
                        <h5 className="" style={{marginTop:'2%',color: 'white',marginLeft: '25%'}}><b>Company Website Url:</b></h5>
                        <input
                            value={web_url}
                            style={{marginLeft: '25%',width: '50%'}}
                            onChange={e => setWeb_url(e.target.value)}
                            className="form-control"
                            placeholder="Company website url (Max length 200)"
                            maxLength="200"
                        />
                        <div style={{marginLeft: '25%'}}>
                            <button type="submit" style={{marginTop:'2%',width: '10%'}} className="btn btn-primary">{checked ? "Confirm" : "Publish"}</button>
                            <button style={{marginLeft: '2%',marginTop:'2%',width: '10%'}} className="btn btn-primary" onClick={(e) => deleteUnPublishedCompany(e)}>Delete</button>
                            <button className="btn btn-primary" style={{marginLeft: '2%',marginTop:'2%',width: '10%'}} onClick={() => navigate("/company/newRequests")}>Back</button>
                        </div>
                        {e1}
                        {e2}
                    </form>
                </div>}
            {posts.length > 0 && <div>
                <Pagination params = {{pageNum: pageNum, maxPage: pages}} baseUrl={`/company/${companyId}`} />
            </div>}
        </div>
    );
}
export default CompanyShow;