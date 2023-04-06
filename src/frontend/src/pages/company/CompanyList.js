import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Rating from 'react-rating';
import StarGrey from '../../assets/images/star-grey.png'
import StarYellow from '../../assets/images/star-yellow.png'

import {Pagination} from '../../components/Pagination';
import {Grow} from "@mui/material";

const CompanyList = ({ pageNum, pageSize }) => {
    const [pages, setPages] = useState(0);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getAllCompanies = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/companies/page`, {
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

    const read = (e) => {
        if (e.target.textContent === "More") {
            e.target.textContent = "Less"
        } else {
            e.target.textContent = "More"
        }
    }


    return (
        <div>
            <div className="row" style={{marginLeft: '11%',marginRight: '10%', marginBottom: '2%'}}>
                {companies.map((company,index) => {
                    return (
                        <Grow in={true} style={{transformOrigin: '0 0 0'}} timeout={800*(index+1)} key={company.id}>
                            <div className="col-4" style={{width: '24%'}}>
                                <div className="card h-100" style={{textAlign: 'center', padding:'10px', borderRadius:'25px',
                                    marginRight:'1%', boxShadow: '10px 10px 10px rgba(30,30,30,0.5)'}}>
                                    <div className="card-body" >
                                        <img src={company.logo_url} className="card-img-top" alt="logo" align= "center" style={{maxWidth: "100%", height: "10%", width: "auto"}}/>
                                        <br/>
                                        <br/>
                                        <ul className="list-group list-group-flush" style={{padding:'3px'}}>
                                            <a href={company.web_url}><h5 className="card-title" style={{padding:'10px'}}><b>{company.name}</b></h5>
                                            </a>
                                            <li className="list-group-item" style={{textAlign: 'center',padding:'10px'}}>
                                                <Rating
                                                    emptySymbol={<img src={StarGrey} className="icon" />}
                                                    fullSymbol={<img src={StarYellow} className="icon" />}
                                                    fractions={0.1}
                                                    initialRating={company.score}
                                                    readonly={true}
                                                />
                                                ({company.num_review} reviews)
                                            </li>
                                            <li className="list-group-item"style={{textAlign: 'left',padding:'5px'}}>
                                                <b>Num of Posts:</b>&nbsp;&nbsp;{company.num_post}
                                            </li>
                                            <li className="list-group-item"style={{textAlign: 'left',padding:'5px'}}>
                                                <b>Latest post: </b>&nbsp;&nbsp;{company.time_latest_post == null ? "None" : company.time_latest_post}
                                            </li>
                                            <div className="accordion-item" style={{textAlign: 'left', height: '10%',padding:'5px'}}>
                                                <p className="accordion-header" id={"heading"+company.name}>
                                                    <b>Description:&nbsp;</b>
                                                </p>
                                                <div id={"collapse"+company.name} className="accordion-collapse collapse"
                                                     aria-labelledby={"heading"+company.name}>
                                                    <div className="accordion-body">
                                                        {company.description}
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target={"#collapse"+company.name}
                                                    aria-expanded="false" aria-controls={"collapse"+company.name}
                                                    id = {index.toString()}
                                                    onClick={(e) => read(e)} style={{textAlign: 'left', height: '10%',padding:'5px', color: '#158CBA', fontWeight:'bold'}}>
                                                    More
                                            </button>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={{ pathname: `/company/${company.id}` }}>
                                        <button className='btn btn-primary'> Company Posts </button></Link>
                                    </div>
                                </div>
                            </div>
                        </Grow>


                    );
                })}
            </div>
            <Pagination params = {{pageNum: pageNum, maxPage: pages}}  baseUrl={'/company'} />
        </div>


    );
}
export default CompanyList;