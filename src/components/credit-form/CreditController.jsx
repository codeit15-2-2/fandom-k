const CREDIT_INCREASE = [100, 500, 1000];

/**
 * @component CreditController
 *
 * @description 크레딧을 다루는 전체 틀에서 증감 버튼의 렌더링을 담당하는 컴포넌트
 *
 * @param {Function} handleAddAmount +100 +500 +1000 버튼에 들어갈 메소드
 * @param {Function} handleAddAll 후원모드에서 전액버튼에 들어갈 메소드
 * @param {boolean} isDonate 후원모드 여부
 *
 * @returns {JSX.Element}
 */

const CreditController = ({ handleAddAmount, handleAddAll, isDonate }) => {
  return (
    <div className='mt-6 mb-6 flex gap-3'>
      {CREDIT_INCREASE.map((increasement) => (
        <button
          key={increasement}
          className='bg-navy cursor-pointer rounded-2xl px-4 py-3 text-[1.2rem] md:px-6 md:text-[1.4rem] lg:px-8 lg:py-3'
          onClick={() => handleAddAmount(increasement)}
        >
          +{increasement}
        </button>
      ))}

      {isDonate && (
        <button
          className='bg-navy cursor-pointer rounded-2xl px-4 py-3 text-[1.4rem] md:px-6 md:text-[1.6rem] lg:px-8 lg:py-3'
          onClick={handleAddAll}
        >
          전액
        </button>
      )}
    </div>
  );
};

export default CreditController;
