import React from 'react';
import EntryList from './EntryList';
import EntryListFilters from './EntryFilters';

const DashboardPage = () => (
    
  <div>
    <h1>Dashboard page content</h1>
    <div className='content-container'>
      <EntryListFilters />
      <EntryList />
    </div>
  </div>  
);

export default DashboardPage;