import React, { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

const CharacterPage = lazy(() => import('../pages/Character'));
const CharactersPage = lazy(() => import('../pages/Characters'));
const NoMatchPage = lazy(() => import('../pages/NoMatchPage'));

const Loading = () => {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CharactersPage />} />
          <Route path="/" element={<CharactersPage />} />
          <Route path="/:id" element={<CharacterPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
