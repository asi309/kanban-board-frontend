import { FC, useState } from 'react';

const ContentWrapper = (Content: FC, props: object) => {
  return function HOC(props: object) {
    return (
      <div className="app__container">
        <Content {...props} />
      </div>
    );
  };
};

export default ContentWrapper;
