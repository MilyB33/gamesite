import Navigation from '../Navigation';
import { Section404, StyledLink } from './Views.styles';

import Link from 'next/link';

const Page404View = () => {
  return (
    <>
      <Navigation />
      <Section404>
        <h3>Oops! Something Went Wrong</h3>
        <header>
          <h1>404</h1>
        </header>

        <Link href="/">
          <a>
            <StyledLink>Back to Home</StyledLink>
          </a>
        </Link>
      </Section404>
    </>
  );
};

export default Page404View;
