import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EntryListItem = ({ id, title, createdAt }) => (
    
        <div className='list-item'>
            <div className='list-item__content'>
                <h2 className='list-item__title'>{title}</h2>
                <span className='list-item__sub-title'>{moment(createdAt).format('MMMM Do, YYYY')}</span>        
            </div>
            <div className='list-item__actions'>
                <Link className='list-item--action' to={`/edit/${id}`}><i className="fas fa-pen fa-lg"></i></Link>
                <Link className='list-item--action' to={`/view/${id}`}><i className="fas fa-eye fa-lg"></i></Link>
            </div> 
        </div>
);

export default EntryListItem;