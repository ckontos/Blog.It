import React from 'react';
import { connect } from 'react-redux';
import EntryListItem from './EntryListItem';
import selectExpenses from '../selectors/entries';

export const EntryList = (props) => (
    <div className='inner-content-container'>
        
        <div className='list-body'>
            {
                props.entries.length === 0 ? ( 
                    <div className='list-item list-item--message'>
                        <span>No Entries</span>
                    </div>
                ) : (
                    props.entries.map((entry) => {
                    return <EntryListItem key= {entry.title} {...entry} />;
                    })
                )
            }
        </div>
    </div>  
);

const mapStateToProps = (state) => {
    return {
        entries: selectExpenses(state.entries, state.filters)
    };
};

export default connect(mapStateToProps)(EntryList);