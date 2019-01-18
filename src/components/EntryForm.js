import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class EntryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.entry ? props.entry.title : '',
            createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
            body: props.entry ? props.entry.body : '',
            calendarFocused: false,
            error: ''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({ body }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.title || !this.state.createdAt || !this.state.body) {
            this.setState(() => ({ error: 'Please fill in all the fields to post this blog entry!'}))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                createdAt: this.state.createdAt.valueOf(),
                body: this.state.body
            });
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input 
                    className='text-input'                        
                    type='text'
                    placeholder='Title'
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <SingleDatePicker 
                    date = {this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea className='textarea' placeholder='Entry Contents' value={this.state.body}
                    onChange={this.onBodyChange}></textarea>
                <div>
                    <button className='button'>Save Entry</button>
                </div>
            </form>
        );
    }
}

