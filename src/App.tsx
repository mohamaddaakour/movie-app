import { Link, Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="*"
          element={
            <div>
              <h1 className="mb-4 text-2xl font-bold">Page not found</h1>
              <Link to="/" className="underline">Back to home</Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
