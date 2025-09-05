function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 py-8 text-sm text-gray-400">
      <a
        className="hover:underline"
        href="https://github.com/emmanuel-cruz-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <span className="text-gray-500">&middot;</span>
      <a
        className="hover:underline"
        href="https://www.linkedin.com/in/emmanuel-cruz-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
    </footer>
  );
}

export default Footer;
