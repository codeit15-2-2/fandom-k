import ScrollUpArrowIcon from '@assets/icons/icon_scroll-up-arrow';

const ViewDetailButton = ({ isVisible }) => {
  return (
    <>
      {isVisible && (
        <div className='content-text flex animate-bounce flex-col items-center gap-5 text-center font-thin text-white opacity-50'>
          <ScrollUpArrowIcon />
          스크롤하여 상세 내용 확인
        </div>
      )}
    </>
  );
};

export default ViewDetailButton;
