function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 px-4 py-2">
      <a
        className="text-xl font-semibold"
        href="https://task-organizer.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Task Organizer
      </a>
      <div className="flex items-center gap-4">
        <a
          className="hover:text-gray-900"
          href="https://github.com/joaocarmo/task-organizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093
              1.037-2.552 1.693-3.786-.575-.355-.816-.566-.816-.566-.711 0-1.338.634-1.338 1.546 0 1.034.38
              (2.393 1.304) 1.194.82.471 2.218 1.694 2.218 2.733 0 1.13-.762 1.69-1.386 2.652.92
              .332 1.98.212 2.863.094 1.481-.5 2.218-1.386 2.218-2.5 0-1.037-.635-2.177-1.194-2.728
              1.683.24 2.48.094 3.286-.594.332-.97.223-1.664.223-2.644 0-1.515-.878-2.675-1.694-3.786z"
            />
          </svg>
        </a>
        <a
          className="hover:text-gray-900"
          href="https://twitter.com/joaocarmo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M19.364 18.364a9.3 9.3 0 00-6.717 0 9.3 9.3 0 106.717 8.486c-4.595-.68-8.687-1.322-12.388-2.108V5.277a4.548 4.548 0 00-3.53-3.53 4.548 4.548 0 00-7.07 3.819c0 0 3.53 5.898 3.53 5.898a4.548 4.548 0 007.07
              3.819 4.548 4.548 0 003.53-3.53 4.548 4.548 0 00-3.53-3.53v.277c7.323 1.388 12.696 3.176 16.028 5.884a18.686 18.686 0 00-7.82-5.884 18.686 18.686 0 00-6.717 0c0 0 6.717 8.486 6.717 8.486z"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
