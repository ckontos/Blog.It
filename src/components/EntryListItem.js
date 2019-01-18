import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EntryListItem = ( { id, title, createdAt } ) => (
    
        <Link className='list-item' to={`/edit/${id}`}>
            <div>
                <h2 className='list-item__title'>{title}</h2>
                <span className='list-item__sub-title'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
        </Link>
);

export default EntryListItem;