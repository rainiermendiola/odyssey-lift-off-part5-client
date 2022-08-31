import React from 'react';
import styled from '@emotion/styled';
const PhishPrank = () => {

  return (
      <Div>You've been phished!</Div>
    );
};

export default PhishPrank;

/** Layout styled components */
const Div = styled.div((props) => ({
  textAlign: 'center',
  color:'darkblue',
  fontSize: '48px'
}));
