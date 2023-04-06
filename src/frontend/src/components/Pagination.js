import React from 'react';


const buildRequestUrl = (baseUrl, params) => {
    let url = baseUrl + '?';
    for (let k in params) {
        if (url.slice(-1) !== '?') {
            url += '&'
        }
        url += k + '=' + params[k]
    }
    return url;
}

export const Pagination = ({ baseUrl, params }) => {
    const maxPage = params.maxPage
    const pageNum = params.pageNum
    delete params['maxPage']
    delete params['pageNum']
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    Number(pageNum) !== 1 && (
                        <li className="page-item">
                            <a  className="page-link"
                                href={
                                    buildRequestUrl(baseUrl, {
                                        pageNum: Number(pageNum)-1,
                                        ...params
                                    })
                                } 
                                aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    ) 
                }
                {
                    Array.from(Array(Number(maxPage)), (e, i) => {
                        return (
                            <li className="page-item" key={i}>
                                <a  className="page-link"
                                    href={
                                        buildRequestUrl(baseUrl, {
                                            pageNum: i+1,
                                            ...params
                                        })
                                    }>
                                    {i+1}
                                </a>
                            </li>
                        )
                    })
                }
                {
                    Number(pageNum) !== Number(maxPage) && (
                        <li className="page-item">
                            <a  className="page-link"
                                href={
                                    buildRequestUrl(baseUrl, {
                                        pageNum: Number(pageNum)+1,
                                        ...params
                                    })
                                } 
                                aria-label="Latter">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    ) 
                }
            </ul>
        </nav>
    )
}

export default Pagination;

