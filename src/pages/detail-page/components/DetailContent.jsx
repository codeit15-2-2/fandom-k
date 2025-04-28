import { memo } from 'react';

const DetailContent = ({ contents }) => {
  return (
    <div className='my-15'>
      {contents.map((item, index) => (
        <div key={`${item.contentTitle}-${index}`} className='mt-15'>
          <p className='title-text text-white'>{item.contentTitle}</p>
          <p className='content-text mt-2 leading-[1.5] text-white'>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default memo(DetailContent, (prev, next) => {
  if (prev.contents !== next.contents) return false;
  return true;
});
