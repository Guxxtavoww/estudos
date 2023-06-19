import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { iRepo } from './types';

const getReposRequest = async () => {
  return axios.get<iRepo[]>('https://api.github.com/users/Guxxtavoww/repos');
};

const GitRepos: React.FC = () => {
  const { isLoading, data: res } = useQuery({
    queryKey: ['repos'],
    queryFn: getReposRequest,
  });

  if (isLoading) return 'Loading...';

  return (
    <div style={{ width: '100vw' }}>
      <pre>{JSON.stringify(res?.data, null, 2)}</pre>
    </div>
  );
};

function App() {
  return (
    <>
      <GitRepos />
    </>
  );
}

export default App;
