import React, { useEffect, useState } from 'react';

import Article from './main/Article/Article';
import Aside from './main/Aside/Aside';
import Nav from './main/Nav/Nav';
import { UserInterface } from './interface/User';
import { fetchUserInfo } from './service/PostService';

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInterface | undefined>(undefined);

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    try {
      const resp = await fetchUserInfo();
      setUserInfo(resp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {
        userInfo && 
        <Nav
          profilePhotoUrl= { userInfo.profilePhotoUrl }
          firstName={ userInfo.firstName }
          lastName={ userInfo.lastName }
        />
      }
      <div className='container md:flex justify-between mx-auto mt-[1vw]'>
        {
          userInfo &&
          <Article profilePhotoUrl={ userInfo.profilePhotoUrl } />
        }
        <Aside />
      </div>
    </>
  );
}

export default App;
