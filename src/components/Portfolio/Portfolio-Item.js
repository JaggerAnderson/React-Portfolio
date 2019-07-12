import React from 'react';
import {Link} from 'react-router-dom';

export default function(props) {
        // background image: thumb_image_url
        // logo:
        // description: description
        // id: id

        const {id, description, thumb_image_url, logo } = props.item;
    return (
        <div>
            <img src={thumb_image_url} />
            <img src={logo} />
            <div>{description}</div>
            <Link to={`/Portfolio/${id}`}>Link</Link>

        </div>
    )
}