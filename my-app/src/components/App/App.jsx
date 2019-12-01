import React from 'react';

import Profile from '../Profile/Profile';
import userData from '../../JSON/user';

import Statistics from '../Statistics/Statistics';
import statisticalData from '../../JSON/statistical-data';

import FriendList from '../FriendList/FriendList';
import friendsData from '../../JSON/friends';

import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactionHistoryData from '../../JSON/transactions.json';

const App = () => (
  <>
    <Profile {...userData} />
    <Statistics title="File upload" stats={statisticalData} />
    <FriendList friends={friendsData} />
    <TransactionHistory transactions={transactionHistoryData} />
  </>
);

export default App;
