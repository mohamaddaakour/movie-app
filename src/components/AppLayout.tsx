import { Link, Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
      <header className="border-b py-6">
        <Link
          to="/"
          className="text-xl font-bold focus-visible:outline-2"
        >
          TV Show Discovery and Watchlist
        </Link>
      </header>

      <main className="flex-1 py-8">
        <Outlet />
      </main>

      <footer className="border-t py-4 text-sm">
        Data provided by{' '}
        <a href="https://www.tvmaze.com" className="underline">
          TVmaze
        </a>
        {' '}under{' '}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          className="underline"
        >
          CC BY-SA
        </a>
        .
      </footer>
    </div>
  );
}
