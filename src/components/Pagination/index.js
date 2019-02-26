import React from 'react';
import './index.css';

export default (props) => {
    let {page, limits, count} = props;
    const pagCount = Math.ceil(count / limits);

    let pageNumbers = [];
    for (let i = 1; i <= pagCount; i++) {
        pageNumbers.push(i)
    }

    const firstPage = pageNumbers[0];
    const lastPage = pageNumbers[pageNumbers.length - 1];

    if (!page) {
        page++;
        props.chngePage(page, limits)
    }

    const showFirstPage = () => props.chngePage(firstPage, limits);
    const showLastPage = () => props.chngePage(lastPage, limits);

    const setPage = (e) => {
        const page = e.target.value;
        props.chngePage(page, limits)
    };



    const showNextPage = () => {
        page++;
        if (page > lastPage)
            page = lastPage;
        props.chngePage(page, limits)
    };

    const showPreviousPage = () => {
        page--;
        if (page < firstPage)
            page = lastPage;
        props.chngePage(page, limits)
    };


    return (

        pagCount && <ul className="pagination" type="none">
                <li>
                    <div onClick={showFirstPage}> {"<<"} </div>
                </li>
                <li>
                    <div onClick={showPreviousPage}> {"<"} </div>
                </li>
                {
                    pageNumbers.map(item => {
                        if (item === page) {
                            return <button className="selected" value={item} onClick={setPage}
                                           key={item}>{item}</button>
                        }
                        return <button value={item} onClick={setPage} key={item}>{item}</button>
                    })
                }

                <li>
                    <div onClick={showNextPage}> {">"} </div>
                </li>
                <li>
                    <div onClick={showLastPage}> {">>"} </div>
                </li>
            </ul>
    )
}