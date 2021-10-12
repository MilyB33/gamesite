import { PlatformCard } from './Platforms.styles';
import Link from 'next/link';

const Platform = ({ platform }) => {
  return (
    <PlatformCard>
      <Link
        href={{
          pathname: '/games',
          query: { platform: platform.id },
        }}
        as="/games"
      >
        <a>
          <h5>{platform.name}</h5>
        </a>
      </Link>
    </PlatformCard>
  );
};

export default Platform;
