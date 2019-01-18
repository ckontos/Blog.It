import React from 'react';
import { Link } from 'react-router-dom';
import { EntryList } from './EntryList';

const DashboardPage = () => (
    
  <div>
    <h1>Dashboard page content</h1>
    <Link to='/create'><button>Add Post</button></Link>
    {/* <EntryList /> */}
  </div>  
);

export default DashboardPage;