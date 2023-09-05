import {
  FacebookLogo,
  IconProps,
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
} from '@phosphor-icons/react';
import { ForwardRefExoticComponent } from 'react';

interface Icon {
  Icon: ForwardRefExoticComponent<IconProps>;
  weight: IconProps['weight'];
  'data-testid': string;
}

interface Icons {
  [key: string]: Icon;
}

const icons: Icons = {
  facebook: {
    Icon: FacebookLogo,
    weight: 'fill',
    'data-testid': 'facebook-icon',
  },

  instagram: {
    Icon: InstagramLogo,
    weight: 'regular',
    'data-testid': 'instagram-icon',
  },

  twitter: {
    Icon: TwitterLogo,
    weight: 'fill',
    'data-testid': 'twitter-icon',
  },

  pinterest: {
    Icon: PinterestLogo,
    weight: 'fill',
    'data-testid': 'pinterest-icon',
  },
};

export default icons;
