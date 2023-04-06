import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import CompanyUnpublishedList from './CompanyUnpublishedList';
import NavigationBar from "../../components/layout/NavigationBar";

const CompanyRequest = () => {
    const pageSize = 3;
	const [searchParams, setSearchParams] = useSearchParams();
	const pageNum = searchParams.get("pageNum") || 1

    return (
        <div>
            <NavigationBar/>
            <div className="row align-items-center" style={{border: '3px solid #000',background:'#6ed7ff', padding:'20px', marginLeft: '10%', marginRight:'10%'}}>
                <div className="col-lg-5" style={{marginLeft:'5%', width:'95%'}}>
                    <h1 className="" align = "center" style={{color: 'white'}}>Here are new company requests waiting for review. </h1>
                </div>
            </div>
            <br/>
			<CompanyUnpublishedList pageNum={pageNum} pageSize={pageSize} />
        </div>
    );
}
export default CompanyRequest;