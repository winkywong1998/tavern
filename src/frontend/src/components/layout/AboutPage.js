import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import background from "../../assets/images/629055.png";

export class AboutPage extends Component {
    render() {
        return (
            <div style={{height: 'auto', minHeight:'100vh', width:'100%', position: "absolute", }}>
                <NavigationBar/>

                <div className="row py-4" style={{justifyContent:'center'}}>
                    <div className="col-3">
                        <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link" href="#item-1">Problem Statement</a>
                                <a className="nav-link" href="#item-2">Potential Clients</a>
                                <a className="nav-link" href="#item-3">Solution to Solve</a>
                            </nav>
                        </nav>
                    </div>

                    <div className="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
                             className="scrollspy-example-2" tabIndex="0">
                            <div id="item-1">
                                <h4>Problem Statement</h4>
                                <p>People with no experience or less experience usually have trouble and confusion getting
                                    understanding about how to find a job and which company should be looked for.
                                    Specifically, activities like giving mock interviews, reviewing resumes or sharing
                                    interview experience will be extremely valuable but hard to access sometimes,
                                    especially discuss with people with similar background.</p>
                            </div>
                            <div id="item-2">
                                <h4>Potential Clients</h4>
                                <p>Students who are trying to find a job in position like Software Development Engineer.

                                    Students who are trying to build a network.</p>
                            </div>
                            <div id="item-3">
                                <h4>Solution to Solve</h4>
                                <p>The software provides a matching system that can match students in a group based on
                                    the information they provided. In this case, people from different locations can
                                    communicate to each other, exchange information, and improve together. This matching
                                    system will allow users to form a group of three(or two) to discuss their resume or
                                    interview skill. The user can send request to join a group forming recurrently. The
                                    user can not join multiple group though. The group will only exist for a while.
                                </p>
                                <p>In the matching system, each individual in one matching process will have multiple
                                    attributes which will be assigned to different weights. Note that there will be
                                    attributes that is combination of multiple original attribute. Based on those
                                    attributes, individuals will have a total score for each other. The score for the
                                    group should be the global optimum in that matching round. In this case, the groups
                                    will be formed, and the system will make sure that the members of a group will have
                                    the highest similar interests and technical backgrounds.
                                </p>
                                <p>The software provides a message board for the user to share information or leave
                                    comments on it. The comments are allowed to post anonymously for personal information
                                    protection.
                                </p>
                                <p>The software provides a list of company, it allows user to rate each company
                                    according to their interview feedback, working style, etc. They can also review the
                                    scores about the company for their potential future selection. Also, posts on the
                                    message board can be assigned to a specific company tag so that users can find posts
                                    of related topics much easier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;