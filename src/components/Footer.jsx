// components/Footer.jsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4 mt-10">
        <div className="container mx-auto text-center sticky">
          <div className="text-white text-sm mb-2">
            &copy; {new Date().getFullYear()} TuhinBlog. All rights reserved.
          </div>
          <div className="text-gray-300 text-sm">
            1234 Blog Street, Blog City, BL 56789
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  