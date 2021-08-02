import { Chip } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genra = ({
    genra,
    setgenra,
    selectgenra,
    setselectgenra,
    setPage,
    type
}) => {
    useEffect(() => {
        const fectchgenradata = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=72f75a773ed8f6ecafa0d7ccc88e68f9&language=en-US`)
            console.log(result.data.genres)
            setgenra(result.data.genres)
        }
        fectchgenradata()
    }, [])

    const handleAdd = (gen) => {
        setselectgenra([...selectgenra, gen])
        setgenra(genra.filter((itm) => itm.id != gen.id))
    }
    const handleRemove = (gen) => {
        setselectgenra(selectgenra.filter((itm) => itm.id != gen.id))
        setgenra([...genra, gen])
    }
    return (
        <>
            <div
                className='my-2'
            >
                {
                    selectgenra.map((gen) =>
                        <Chip
                            className='mx-1 my-1'
                            size='small'
                            label={gen.name}
                            key={gen.id}
                            clickable
                            color='primary'
                            onDelete={() => handleRemove(gen)}
                        />
                    )
                }
                {
                    genra.map((gen) =>
                        <Chip
                            className='mx-1 my-1'
                            size='small'
                            label={gen.name}
                            key={gen.id}
                            clickable
                            onClick={() => handleAdd(gen)}
                        />
                    )
                }

            </div>
        </>
    )
}

export default Genra
