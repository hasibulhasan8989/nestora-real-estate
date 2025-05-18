import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20 mt-20">
  <div className="  grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Brand and Description */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Nestora</h2>
      <p>Find your perfect home with us. Buy, sell, or rent with confidence.</p>
    </div>

    {/* Buy */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Buy</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Homes for Sale</a></li>
        <li><a href="#" className="hover:text-white">Apartments</a></li>
        <li><a href="#" className="hover:text-white">Luxury Homes</a></li>
        <li><a href="#" className="hover:text-white">Open Houses</a></li>
      </ul>
    </div>

    {/* Sell */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Sell</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">List Your Property</a></li>
        <li><a href="#" className="hover:text-white">Pricing Guide</a></li>
        <li><a href="#" className="hover:text-white">Agent Support</a></li>
        <li><a href="#" className="hover:text-white">Market Insights</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
      <p className="mb-2">123 Real Street, Homesville, CA</p>
      <p className="mb-2">Email: support@nestora.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} DreamEstate. All rights reserved.
  </div>
</footer>

    );
};

export default Footer;