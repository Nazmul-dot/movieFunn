import React from 'react'
import { img_300 } from '../../config/config'
import { unavailable } from '../../config/config'
import { makeStyles } from '@material-ui/core/styles'
import './card.css'
import CusModal from '../contModel.js/CusModal'
const useStyle = makeStyles((theme) => ({
    img: {
        borderRadius: 10
    }
}))
const Card = ({ id, title, date, poster, imdb, type }) => {
    const classes = useStyle()
    console.log(id, title, date, poster, imdb, type)
    return (
        <>
            {/* <CusModal type={type} id={id}>
            </CusModal> */}
            <div className='card_box card-body'>
                <img
                    className={`img-fluid ${classes.img}`}
                    src={poster ? `${img_300}${poster}` : unavailable}
                    alt={title}
                    alt="" />
                <h4 className='text-center'>{title}</h4>
                <div className='d-flex justify-content-between'>
                    <h5>{type}</h5>
                    <h5>{date}</h5>
                </div>
            </div>





        </>
    )
}

export default Card
