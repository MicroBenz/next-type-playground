import React, { SFC } from 'react';
import styled from 'styled-components';

type Props = {

};

const Container = styled.div`
  padding-bottom: 40px;
`;

const BrandingImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  padding-top: 40px;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 16px;
`;

const Layout: SFC<Props> = ({ children }) => (
  <>
    <Container className="container">
      <BrandingImage
        src="https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png"
        alt="chuck-norris"
      />
      <Title className="title">Explore who is Chuck Norris here!</Title>
      {children}
    </Container>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Chuck Norris</strong> using API from <a href="https://api.chucknorris.io/">ChuckNorris.IO</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  </>
);

export default Layout;
