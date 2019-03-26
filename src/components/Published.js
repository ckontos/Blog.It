import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export const PublishedEntry = (props) => (
    <div>
        <h1>{props.entry.title}</h1>
        <h4>{moment(props.entry.createdAt).format('MMMM Do, YYYY')}</h4>
        <p>{props.entry.body}</p>
    </div>   
);


const mapStateToProps = (state, props) => {
 return {
     entry: state.entries.find((entry) => entry.id === props.match.params.id)
 };
};


export default connect(mapStateToProps)(PublishedEntry);

