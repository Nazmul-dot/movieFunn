import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
const CustomPagination = ({ setPage, numOfPag = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };
    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    color: '#fff',
                    marginTop: 15
                }}

            >
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numOfPag}
                    color='primary'
                    hideNextButton
                    hidePrevButton
                />
            </div>
        </>
    )
}

export default CustomPagination
