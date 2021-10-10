import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';
import { useRouter } from 'next/router';

import Link from 'next/link';
import PlatformIcon from './PlatformIcon';

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  background: ${getColor('clr-additional-200')};
  padding: 2em;
  gap: 2em;
  box-shadow: -4px 4px 0px 2px ${getColor('clr-glitch-200')};

  @media (max-width: ${getMedias('tablet')}) {
    width: 45%;
    gap: 0;
    padding: 2em 1.5em;
  }

  @media (max-width: ${getMedias('mobile')}) {
    width: 100%;
    margin: 0 4em;
  }
`;

const Icon = styled(PlatformIcon)``;

const Header = styled.header`
  width: 100%;
  text-align: center;

  & > h5 {
    margin-bottom: 1em;
  }

  & p {
    transition: 0.3s;
  }

  & a:hover > p {
    color: ${getColor('clr-dark-100')};
  }
`;

const Platform = ({ platform }) => {
  const router = useRouter();

  return (
    <Card>
      {/* <Icon icon={platform.slug} /> */}
      <Header>
        <h5>{platform.name}</h5>
        <Link
          href={{
            pathname: '/games',
            query: { platform: platform.id },
          }}
          as="/games"
        >
          <a>
            <p>More...</p>
          </a>
        </Link>
      </Header>
    </Card>
  );
};

export default Platform;
