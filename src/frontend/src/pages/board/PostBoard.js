import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PostCreate from './PostCreate';
import PostList from './PostList';
import NavigationBar from "../../components/layout/NavigationBar";

const PostBoard = () => {
	const pageSize = 10;
	const [searchParams, setSearchParams] = useSearchParams();
	const pageNum = searchParams.get("pageNum") || 1

	return (
		<div>
			<NavigationBar />
			<div className="container">
				<PostList pageNum={pageNum} pageSize={pageSize} />
				<hr/>
				<h2>Create a post</h2>
				<PostCreate />
			</div>
		</div>
	);
}

export default PostBoard;
