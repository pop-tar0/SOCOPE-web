import React, { useEffect, useState } from 'react';

import Article from './main/Article/Article';
import Aside from './main/Aside/Aside';
import Nav from './main/Nav/Nav';
import { UserInterface, UserResponse } from './interface/User';
import { fetchUserInfo, fetchWebAssets } from './service/PostService';
import { SystemLoading, WebAssets } from './interface/system';

const App: React.FC = () => {
  const [webAssets, setWebAssets] = useState<WebAssets | null>(null);
  const [userInfo, setUserInfo] = useState<UserInterface | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setIcon();
  }, [webAssets]);

  const fetchData = async (): Promise<void> => {
    await getWebAssets();
    await login();
  };
  
  const getWebAssets = async (): Promise<void> => {
    try {
      const resp: SystemLoading = await fetchWebAssets();
      setWebAssets(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (): Promise<void> => {
    try {
      const resp: UserResponse = await fetchUserInfo();
      setUserInfo(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const setIcon: any = () => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    link.href = link.href && webAssets ? webAssets.logoIconUrl : '';
  }

  return (
    <>
      {
        userInfo &&
        webAssets &&
        <Nav
          logoIconUrl={ webAssets.logoIconUrl }
          logoTitleUrl={ webAssets.logoTitleUrl }
          profilePhotoUrl={ userInfo.profilePhotoUrl }
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
