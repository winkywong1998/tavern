import React from 'react';
import { useSearchParams } from 'react-router-dom';

import TeamList from './TeamList'
import NavigationBar from "../../components/layout/NavigationBar";

const MatchBoard = () => {
    const pageSize = 3;
	const [searchParams] = useSearchParams();
	const pageNum = searchParams.get("pageNum") || 1

    return (
        <div>
            <NavigationBar/>
			<TeamList pageNum={pageNum} pageSize={pageSize} />
        </div>
    );
}

export default MatchBoard;