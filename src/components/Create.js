import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import { startAddEntry } from '../actions/entries';

export class Create extends React.Component {

    onSubmit = (entry) => {
        this.props.onSubmit(entry);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Create Page</h1>
                <EntryForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (entry) => dispatch(startAddEntry(entry))
});

export default connect(undefined, mapDispatchToProps)(Create);