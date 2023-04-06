import React, {Component, useState} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Typewriter} from "react-simple-typewriter";
import {Fade} from 'react-awesome-reveal';

import './ContentPage.css';

const ContentPage = () => {
    const authorization = useSelector(state => state.authorize)
    const logged = authorization.isLogin;

    return (
        <div className="px-4 py-3 main_content">
            <div className='pb-5'>
                <h1 className='content-header'>
                    We are Tavern!
                </h1>
                <h2 className='content-header'>
                    <Typewriter words={['Here for job hunting, networking, and career improvement.']} 
                        cursor={false}
                        loop={1}
                        typeSpeed={27}/>
                </h2>
            </div>

            <div className="row content-row pb-5">
                <div className='col-6'>
                    <Fade triggerOnce={true} delay={2000}>
                        <div>
                            <h3 className='content-header content-header-h3 col-9'>ACCESS OUR FEATURES</h3>
                            <p className='col-9 content-p'>
                                People with no experience or less experience usually have trouble and confusion getting understanding about how to find a job and which company should be looked for.
                            </p>
                            <p className='col-9 content-p'>
                                Specifically, activities like giving mock interviews, reviewing resumes or sharing interview experience will be extremely valuable but hard to access sometimes, especially discuss with people with similar background.
                            </p>
                            <Link className='more_link' to={{ pathname: `/about` }}>
                                Read More
                            </Link>
                        </div>
                    </Fade>
                </div>
                <ul className='col-6 list-group content-list-group'>
                    <Fade triggerOnce={true} delay={2500} className='list-group-item content-list-group-item content-link'>
                        <Link className='link more_link' to={{ pathname: `/board` }}>
                            Post Board
                        </Link>
                    </Fade>
                    <Fade triggerOnce={true} delay={3000} className='list-group-item content-list-group-item content-link'>
                        <Link className='link more_link' to={{ pathname: `/company` }}>
                            Company List
                        </Link>
                    </Fade>
                    <Fade triggerOnce={true} delay={3500} className='list-group-item content-list-group-item content-link'>
                        <Link className='link more_link' to={logged ? { pathname: `/meetinglist` } : { pathname: '/user-auth'}}>
                            Meeting Scheduler
                        </Link>
                    </Fade>
                    <Fade triggerOnce={true} delay={4000} className='list-group-item content-list-group-item content-link'>
                        <Link className='link more_link' to={logged ? { pathname: `/user-info` } : { pathname: '/user-auth'}}>
                            Team Matcher
                        </Link>
                    </Fade>
                </ul>
            </div>
        </div>
    )
}

export default ContentPage;