import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-6 absolute bottom-0">
      <section className="w-3/5 mx-auto flex justify-between items-end">
        <div className="flex items-center">
          <small className="text-2xl mr-4">
            FreeGames<span className="text-red-600">Watcher</span>
          </small>
          <ul className="border-l border-gray-300 p-4">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <small className="opacity-70 text-sm mb-2">Created By: Juan Monasterio</small>
      </section>
    </footer>
  );
};

export default Footer;
