import React, {Component} from 'react';

export class FooterBar extends Component {
    render() {
        return (
            <footer className="py-5 bg-primary" style={{'height':'0px'}}>
                <div style={{marginTop:'-20%'}} className="container px-3 px-lg-5">
                    <p className="m-0 text-center text-white">Copyright &copy; Tavern 2022</p>
                </div>
            </footer>
        );
    }
}

export default FooterBar;