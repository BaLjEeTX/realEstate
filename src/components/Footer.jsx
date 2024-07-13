import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a leading real estate company committed to providing high-quality services and helping our clients find their dream homes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Website Link: <a href="www.realtorai4u.com/">RealTor</a></li>
              <li>Email: realtorai4u@gmail.com</li>
              <li>Phone: +61481317704</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;