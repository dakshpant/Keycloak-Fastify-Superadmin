import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

<Routes>

  {/* PUBLIC */}
  <Route path="/auth/signin" element={<SignIn />} />
  <Route path="/auth/signup" element={<SignUp />} />

  {/* ROOT REDIRECT */}
  <Route path="/" element={<Navigate to="/tables" />} />

  {/* PROTECTED */}
  <Route element={<ProtectedRoute />}>
    <Route element={<DefaultLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  </Route>

</Routes>
import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Profile from './pages/Profile';

import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />

      {/* ROOT REDIRECT */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* PROTECTED */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;