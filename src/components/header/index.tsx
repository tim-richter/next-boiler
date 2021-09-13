import React from 'react';

import Logo from '@components/logo';

const Header: React.FC = () => {
  return (
    <div className="text-center bg-gray-800" data-testid="container">
      <Logo />
    </div>
  );
};

export default Header;
