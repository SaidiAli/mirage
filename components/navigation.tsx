'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imageLoader from '@/lib/imageLoader';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Collections',
      href: '#',
      dropdown: [
        {
          label: 'Tiles',
          href: '/products/tiles',
          nestedDropdown: [
            { label: 'Ceramic Tiles', href: '/collection/ceramic-tiles' },
            { label: 'Porcelain Tiles', href: '/collection/porcelain-tiles' },
            { label: 'Natural Stone', href: '/collection/natural-stone' },
            { label: 'Mosaic Tiles', href: '/collection/mosaic-tiles' },
          ]
        },
        {
          label: 'Bathroom Fixtures',
          href: '/products/fixtures',
          nestedDropdown: [
            { label: 'Shower Heads', href: '/products/fixtures#shower-heads' },
            { label: 'Faucets', href: '/products/fixtures#faucets' },
            { label: 'Toilet Seats', href: '/products/fixtures#toilet-seats' },
          ]
        },
        { 
          label: 'Accessories', 
          href: '/products/accessories',
          nestedDropdown: [
            { label: 'Tile Grouts & Sealants', href: '/products/accessories#tile-grouts' },
            { label: 'Edge Trims & Profiles', href: '/products/accessories#edge-trims' },
            { label: 'Waterproofing Solutions', href: '/products/accessories#waterproofing-solutions' },
          ]
        },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const [mobileNestedOpen, setMobileNestedOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background md:bg-gradient-to-b md:from-background md:to-transparent border-border-subtle">
      <div className="container-luxury">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="bg-white p-2 relative overflow-hidden w-12 h-12 md:w-20 md:h-20">
              <img
                src={imageLoader({ src: '/v1755855865/mirage/knkjjmaqwzpix9ghn3ma.png', width: 100 })}
                alt="Logo"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </Link>
            <Link href="/" className="text-xl font-bold">
              Mirage Tiles Uganda
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-lg font-bold transition-colors duration-300 hover:underline cursor-pointer flex items-center"
                    // Prevent default for '#' links
                    onClick={(e) => item.href === '#' && e.preventDefault()}
                  >
                    {item.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </a>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-surface shadow-luxury rounded-lg p-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <motion.div
                            key={subItem.label}
                            variants={dropdownItemVariants}
                            className="relative" // Add relative positioning for nested dropdown
                            onMouseEnter={() => subItem.nestedDropdown && setOpenNestedDropdown(subItem.label)}
                            onMouseLeave={() => subItem.nestedDropdown && setOpenNestedDropdown(null)}
                          >
                            {/* Replaced Link with <a> */}
                            <a
                              href={subItem.href}
                              className="flex justify-between items-center px-4 py-2 text-text-secondary hover:text-foreground rounded-md transition-colors duration-200"
                              // Prevent default for '#' links
                              onClick={(e) => subItem.href === '#' && e.preventDefault()}
                            >
                              {subItem.label}
                              {/* Arrow for nested dropdown */}
                              {subItem.nestedDropdown && (
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                              )}
                            </a>
                            {/* Nested Dropdown */}
                            <AnimatePresence>
                              {subItem.nestedDropdown && openNestedDropdown === subItem.label && (
                                <motion.div
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  variants={dropdownVariants}
                                  className="absolute top-0 left-full ml-2 w-56 bg-surface shadow-luxury rounded-lg p-2"
                                >
                                  {subItem.nestedDropdown.map((nestedItem) => (
                                    <motion.div key={nestedItem.label} variants={dropdownItemVariants}>
                                      {/* Replaced Link with <a> */}
                                      <a
                                        href={nestedItem.href}
                                        className="block px-4 py-2 text-text-secondary hover:text-foreground rounded-md transition-colors duration-200"
                                      >
                                        {nestedItem.label}
                                      </a>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // Replaced Link with <a>
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold transition-colors duration-300 hover:underline"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border-subtle">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <div key={item.label}>
                      <span className="block py-2 text-white font-bold">{item.label}</span>
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          subItem.nestedDropdown ? (
                            // Mobile Nested Dropdown
                            <div key={subItem.label}>
                              <button
                                className="flex justify-between items-center w-full py-2 hover:text-white transition-colors duration-300"
                                onClick={() => setMobileNestedOpen(!mobileNestedOpen)}
                              >
                                {subItem.label}
                                <svg
                                  className={`w-4 h-4 ml-1 transition-transform ${mobileNestedOpen ? 'rotate-90' : ''}`}
                                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                              <AnimatePresence>
                                {mobileNestedOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="pl-4 overflow-hidden"
                                  >
                                    {subItem.nestedDropdown.map((nestedItem) => (
                                      // Replaced Link with <a>
                                      <a
                                        key={nestedItem.label}
                                        href={nestedItem.href}
                                        className="block py-2 hover:text-white transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {nestedItem.label}
                                      </a>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            // Regular mobile dropdown item
                            // Replaced Link with <a>
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-2 hover:text-white transition-colors duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Regular mobile nav item
                    // Replaced Link with <a>
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-2 hover:text-white transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;