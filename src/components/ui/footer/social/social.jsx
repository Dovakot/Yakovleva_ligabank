import React from 'react';

import SocialItem from './social-item/social-item';

const SOCIAL_LIST = [
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/',
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/',
  },
  {
    name: 'YouTube',
    path: 'https://www.youtube.com/',
  },
];

const getSocialItem = ({name, path}) => (
  <SocialItem
    key={name}
    name={name}
    currentLink={path}
  />
);

function Social() {
  return (
    <ul className="social page-footer__social">
      {SOCIAL_LIST.map(getSocialItem)}
    </ul>
  );
}

export default Social;
