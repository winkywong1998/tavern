import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import background from "../../assets/images/629055.png";
import TeamList from './TeamList';
import NavigationBar from "../../components/layout/NavigationBar";

const TeamBoard = () => {
    const pageSize = 6;
	const [searchParams, setSearchParams] = useSearchParams();
	const pageNum = searchParams.get("pageNum") || 1

    return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh',width:'100%', position: "absolute"}}>
            <NavigationBar/>
            <br/>
			<TeamList pageNum={pageNum} pageSize={pageSize} />
        </div>
    );
}
export default TeamBoard;