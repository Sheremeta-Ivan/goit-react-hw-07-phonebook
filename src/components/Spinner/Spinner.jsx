import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
const Spinner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#80b0f0"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: '0 auto' }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Spinner;
