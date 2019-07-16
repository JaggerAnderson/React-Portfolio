import React from 'react';
import {Link} from 'react-router-dom';

export default function(props) {
        // background image: thumb_image_url
        // logo:
        // description: description
        // id: id

        const {id, description, thumb_image_url, logo } = props.item;
    return (
        <div class="portfolio-item-wrapper">
        <div
            className="portfolio-img-background"
            style={{
                backgroundImage: "url(" + thumb_image_url + ")"
            }}
        />


            <img src={logo} />
            <div>{description}</div>
            <Link to={`/Portfolio/${id}`}>Link</Link>

        </div>
    )
}