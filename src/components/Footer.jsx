import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-blue-300 text-white p-4">
      <p className="mb-2">Connect with me:</p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/mLek10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/emily-caton-48124a27a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        </a>
        <a
          href="https://stackoverflow.com/users/21502627/mlek10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'stack-overflow']} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
