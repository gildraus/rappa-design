export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <div>fb</div>
          <div>ig</div>
          <div>tw</div>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Nikola Rapaić</div>
          <div>{` • `}</div>
          <div>{`© 2024`}</div>
          <div>{` • `}</div>
          <a href="/">Rappa Design Studio</a>
        </div>
      </div>
    </footer>
  );
}
