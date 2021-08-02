import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContant from '../../components/singleContent/SingleContant'
import { Container } from '@material-ui/core'
import CustomPagination from '../../components/customPagination/CustomPagination'
import Genra from '../../components/genra/Genra'
import useGenra from '../../hooks/useGenra'
const Tv = () => {
    const [tandingData, settandingData] = useState([])
    const [page, setPage] = useState(1);
    const [numOfpage, setnumOfpage] = useState(0)
    const [genra, setgenra] = useState([])
    const [selectgenra, setselectgenra] = useState([])
    const genraURL = useGenra(selectgenra)
    useEffect(() => {
        const fetchTvData = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=72f75a773ed8f6ecafa0d7ccc88e68f9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genraURL}`)

            console.log(result);
            settandingData(result.data.results)
            setnumOfpage(result.data.total_pages)
        }
        fetchTvData()
    }, [page, genraURL])
    return (
        <div className="">
            <h1 className='text-center text-capitalize py-3'>Tv Serise</h1>
            <Container>
                <Genra
                    genra={genra}
                    setgenra={setgenra}
                    selectgenra={selectgenra}
                    setselectgenra={setselectgenra}
                    setPage={setPage}
                    type='tv'
                />
            </Container>
            <Container className='d-flex flex-wrap mb-5 pb-5'>
                {
                    tandingData && tandingData.map((item) =>
                        <SingleContant
                            key={item.id}

                            id={item.id}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            type={`Tv Series`}
                            poster={item.poster_path}
                            imdb={item.vote_average}

                        />)
                }
                {
                    numOfpage > 1 &&
                    (
                        <CustomPagination
                            setPage={setPage}
                            numOfPag={numOfpage}
                        />
                    )
                }

            </Container>

        </div>
    )
}

export default Tv
