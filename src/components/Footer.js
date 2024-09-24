const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} FoodOnline. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/privacy-policy"
              className="hover:text-gray-400 text-sm"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="hover:text-gray-400 text-sm"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-400 text-sm"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
