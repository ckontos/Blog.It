import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter } from '../actions/filters';


export class EntryListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    render() {
        return (
            <div className='inner-content-container'>
                <div className = 'filter__and__add'>
                    <div className='input-group'>
                        <div className='input-group__item'>
                            <input type='text' className='text-input' placeholder='Search Entries' value={this.props.filters.text} onChange= {this.onTextChange} />
                        </div>
                    </div>
                    <div>
                        <Link to='/create'><button className='roundButton'><i className="fa fa-plus roundButton--icon" aria-hidden="true"></i></button></Link>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryListFilters);