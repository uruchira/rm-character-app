import React, { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Loading from '../components/Loading';

const CharacterPage = lazy(() => import('../pages/Character'));
const CharactersPage = lazy(() => import('../pages/Characters'));
const NoMatchPage = lazy(() => import('../pages/NoMatchPage'));

const Layout = () => {
  return <Outlet />;
};

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CharactersPage />} />
          <Route path="/" element={<CharactersPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:characterId" element={<CharacterPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
