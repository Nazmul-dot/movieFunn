import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContant from '../../components/singleContent/SingleContant'
import { Container } from '@material-ui/core'
import CustomPagination from '../../components/customPagination/CustomPagination'
const Tanding = () => {
    const [tandingData, settandingData] = useState([])
    const [page, setPage] = useState(2);
    useEffect(() => {
        const fetchTandingData = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=72f75a773ed8f6ecafa0d7ccc88e68f9&page=${page}`)

            // console.log(result.data.results);
            settandingData(result.data.results)
        }
        fetchTandingData()
    }, [page])
    return (
        <div className="">
            <h1 className='text-center text-capitalize py-3'>tanding</h1>
            <Container className='d-flex flex-wrap mb-5 pb-5'>
                {
                    tandingData && tandingData.map((item) =>
                        <SingleContant
                            key={item.id}

                            id={item.id}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            type={item.media_type}
                            poster={item.poster_path}
                            imdb={item.vote_average}

                        />)
                }
                <CustomPagination setPage={setPage} />
            </Container>

        </div>
    )
}

export default Tanding
