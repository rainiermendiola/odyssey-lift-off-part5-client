import React from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
const PhishPrank = () => {

  return (
    <>
      <Div>You've been phished!</Div>
      <HomeLink to={`/home`}>Go To Home</HomeLink>
    </>
    );
};

export default PhishPrank;

/** Layout styled components */
const Div = styled.div((props) => ({
  textAlign: 'center',
  color:'darkblue',
  fontSize: '48px'
}));
const HomeLink = styled(Link)((props) => ({
  textAlign: 'center',
  color:'darkblue',
  fontSize: '12px'
}));
