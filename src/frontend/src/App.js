import React from 'react';
import NavigationBar from "./components/layout/NavigationBar";
import ContentPage from "./components/layout/ContentPage";
import FooterBar from "./components/layout/FooterBar";
import background from "./assets/images/629055.png";

export const App = () => {
	return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh',width:'100%', position: "absolute"}}>
			<NavigationBar/>
			<ContentPage/>
			{/*<FooterBar/>*/}
		</div>
	);

}

export default App;
