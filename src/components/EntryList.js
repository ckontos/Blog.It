import React from 'react';
import { connect } from 'react-redux';
import EntryListItem from './EntryListItem';
import setEntries from '../actions/entries';

export const EntryList = (props) => (
    <div className='content-container'>
        
        <div className='list-body'>
            {
                props.entries.length === 0 ? ( 
                    <div className='list-item list-item--message'>
                        <span>No Entries</span>
                    </div>
                ) : (
                    props.entries.map((entry) => {
                    return <EntryListItem key= {entry.id} {...entry} />;
                    })
                )
            }
        </div>
    </div>  
);

const mapStateToProps = (state) => {
    return {
        entries: setEntries(state.entries)
    };
};

export default connect(mapStateToProps)(EntryList);