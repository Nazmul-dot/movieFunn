import { Container, TextField, IconButton, createMuiTheme, ThemeProvider, Tabs, Tab } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';
import SingleContant from '../../components/singleContent/SingleContant'
import CustomPagination from '../../components/customPagination/CustomPagination'
const Search = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [tandingData, settandingData] = useState([])
    let [page, setPage] = useState(1);
    const [numOfpage, setnumOfpage] = useState(0)
    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
        },
    });
    const fatchSearchData = async () => {
        // alert(type, page)
        console.log(type, page)
        // page = page.parsInt;
        // console.log(type, page)
        const media = type ? "tv" : "movie"
        console.log(media)
        try {
            const result = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=72f75a773ed8f6ecafa0d7ccc88e68f9&language=en-US&query=${searchText}&page=${page}`)
            console.log(result.data.results)
            settandingData(result.data.results)
            setnumOfpage(result.data.total_pages)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fatchSearchData()
    }, [type, page, searchText])
    return (
        <>
            <Container className='pt-4 pb-5 ' style={{}}>
                <ThemeProvider theme={darkTheme}>
                    <div className='d-flex  gap-2 align-items-center'>
                        <TextField
                            variant='filled'
                            style={{ flex: 1 }}
                            label='Search'
                            color='secondary'
                            size='medium'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        {/* <div className='bg-white p-1 rounded-3'>
                            <IconButton onClick={fatchSearchData}>
                                <SearchIcon
                                    className=' text-dark'
                                />
                            </IconButton>

                        </div> */}
                    </div>
                    <div>
                        <Tabs
                            value={type}
                            onChange={(event, newValue) => {
                                setType(newValue);
                                setPage(1);
                            }}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab style={{ width: "50%" }} label="Search Movies" />
                            <Tab style={{ width: "50%" }} label="Search TV Series" />
                        </Tabs>
                    </div>
                    <div className='d-flex flex-wrap mb-5'>
                        {
                            tandingData && tandingData.map((item) =>
                                <SingleContant
                                    key={item.id}

                                    id={item.id}
                                    title={item.title || item.name}
                                    date={item.first_air_date || item.release_date}
                                    type={type ? 'Tv Serise' : "Movie"}
                                    poster={item.poster_path}
                                    imdb={item.vote_average}

                                />)
                        }
                        {
                            numOfpage > 1 &&
                            <CustomPagination
                                setPage={setPage}
                                numOfPag={numOfpage}
                            />
                        }

                    </div>
                </ThemeProvider>
            </Container>
        </>
    )
}

export default Search
