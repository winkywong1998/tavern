import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import Rating from 'react-rating';
import StarGrey from '../../assets/images/star-grey.png'
import StarYellow from '../../assets/images/star-yellow.png'

import { Pagination } from '../../components/Pagination';

const CompanyUnpublishedList = ({ pageNum, pageSize }) => {
    const [pages, setPages] = useState(0);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getAllCompanies = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/companies/unPublished`, {
                params: {
                    pageNum,
                    pageSize
                }
            });
            setCompanies(response.data.data);


            const len = response.data.total / pageSize;
            if (len % 1 === 0) {
                setPages(Math.round(len));
            } else {
                setPages(Math.ceil(len));
            }
        }
        getAllCompanies();
    }, []);

    return (
        <div>
        {(companies == null || companies.length === 0) &&
            <div className="row" style={{marginLeft:'40%'}}><h3>No requests needed to be reviewed</h3></div>}
        {companies.length > 0 && <div className="row" style={{marginLeft: '10%', marginRight:'10%',border: '3px solid #000',background:'#6ed7ff'}}>
            {companies.map(company => {
                return (
                    <div className="col-md-4 mb-5" key={company.id} style={{textAlign: 'center', padding:'10px', marginLeft:'0.5%', marginRight:'0.5%', boxShadow: '10px 10px 10px rgba(30,30,30,0.5)', width:'23%'}}>
                        <div className="card h-100"style={{border: '3px solid #000', borderRadius:'5px'}}>
                            <div className="card-body" >
                                <img src={company.logo_url} className="card-img-top" alt="logo" align= "center" style={{maxWidth: "100%", height: "10%", width: "auto"}}/>
                                <br/>
                                <br/>
                                <ul className="list-group list-group-flush" style={{padding:'3px', border: '3px dashed #6ed7ff'}}>
                                    <a href={company.web_url}><h5 className="card-title" style={{padding:'10px',borderBottom: '3px dashed #6ed7ff'}}><b>{company.name}</b></h5></a>
                                    <li className="list-group-item" style={{textAlign: 'center',padding:'10px',borderBottom: '3px dashed #6ed7ff'}}>
                                        <Rating
                                            emptySymbol={<img src={StarGrey} className="icon" />}
                                            fullSymbol={<img src={StarYellow} className="icon" />}
                                            fractions={0.1}
                                            initialRating={company.score}
                                        />
                                        ({company.num_review} reviews)
                                    </li>
                                    <li className="list-group-item"style={{textAlign: 'left',padding:'5px',borderBottom: '3px dashed #6ed7ff'}}>
                                        <b>Num of Posts:</b>&nbsp;&nbsp;{company.num_post}
                                    </li>
                                    <li className="list-group-item"style={{textAlign: 'left',padding:'5px',borderBottom: '3px dashed #6ed7ff'}}>
                                        <b>Latest post: </b>&nbsp;&nbsp;{company.time_latest_post == null ? "None" : company.time_latest_post}
                                    </li>
                                    <p className="card-text" style={{textAlign: 'left', height: '10%',padding:'5px'}}><b>Description:&nbsp;</b>
                                        {company.description}
                                    </p>

                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to={{ pathname: `/company/${company.id}` }}>
                                    <button className='btn btn-primary'> More Info </button></Link>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Pagination params = {{pageNum: pageNum, maxPage: pages}}  baseUrl={'/company'} />
        </div>}
        </div>
    );
}
export default CompanyUnpublishedList;