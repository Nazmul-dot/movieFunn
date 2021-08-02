import React from 'react'
import Card from './Card'
import CusModal from '../contModel.js/CusModal'
const SingleContant = ({ id, title, poster, imdb, type, date }) => {

    return (
        <>
            <Card
                id={id}
                title={title}
                poster={poster}
                imdb={imdb}
                type={type}
                date={date}
            />

        </>
    )
}

export default SingleContant
