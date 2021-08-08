import styled from 'styled-components';
import { getColor } from '../styles/utils';

import Link from 'next/link';
import PlatformIcon from './PlatformIcon';

const Card = styled.div`
  display: flex;
  min-width: 25em;
  background: ${getColor('clr-additional-200')};
  padding: 2em;
  gap: 2em;

  box-shadow: -4px 4px 0px 2px ${getColor('clr-purple-100')};
`;

const Icon = styled(PlatformIcon)``;

const Header = styled.header``;

const Platform = ({ platform }) => {
  return (
    <Card>
      <Icon icon={platform.slug} />
      <Header>
        <h3>{platform.slug}</h3>
        <Link href="#">
          <a>
            <h5>More...</h5>
          </a>
        </Link>
      </Header>
    </Card>
  );
};

export default Platform;
