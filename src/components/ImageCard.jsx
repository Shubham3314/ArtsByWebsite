import React from "react"
import {Link}from 'react-router-dom'

function ImageCard() {
    return(
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/arts/${props.art.id}`}>

            <div
                style ={{ 
                    'backgroundImage':`url('${props.art.images[0].imageUrl}')`,
                }}
                className="w-full h-64 bg-blue bg-cover">
            </div>

            </Link>

            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/arts/${props.product.id}`}>
                        {props.art.name}
                    </Link>
                </h3>
                <div className="font-bold mb-3">
                    $ { props.art.description }
                </div>
                <div className="mb-3">
                    { props.art.description}
                </div>

                <Link to={`/arts/${props.product.id}`} className="bg-blue-500 text-white p-2 flex justify-center w-full">

                </Link>
            </div>

        </div>
    )
}

export default ImageCard