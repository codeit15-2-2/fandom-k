import { lazy } from 'react';

const IdolSelectList = lazy(() => import('../components/SelectIdolList'));

//화면하단 아이돌들을 선택하는 섹션
//SelectIdolList 컴포넌트를 렌더링함

const IdolSelectSection = ({
  idols,
  handleMoreIdols,
  hasMore,
  isError,
  handleSelect,
  selectedIdols,
  isLoading,
}) => {
  return (
    <div className='relative'>
      <h2 className='mb-20 text-[1.8rem] font-bold md:text-[2.4rem]'>
        관심 있는 아이돌을 추가해보세요.
      </h2>

      <div className='min-h-[40rem]'>
        <IdolSelectList
          idols={idols}
          handleSelect={handleSelect}
          selectedIdols={selectedIdols}
          handleMoreIdols={handleMoreIdols}
          hasMore={hasMore}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default IdolSelectSection;
