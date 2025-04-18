/**
 * @component CreditController
 *
 * @description 크레딧을 다루는 전체 틀에서 증감 버튼의 렌더링을 담당하는 컴포넌트
 *
 *
 * @param {Function} [onAddAll] +100 +500 +1000 버튼에 들어갈 메소드
 * @param {Function} [onAddAll] 후원모드에서 전액버튼에 들어갈 메소드
 * @param {boolean} isDonate 후원모드여부
 *
 * @returns {JSX.Element}
 */

const CreditController = ({ handleAddAmount, handleAddAll, isDonate }) => {
  return (
    <div className='mt-8 mb-7.5 flex gap-3'>
      {[100, 500, 1000].map((value) => (
        <button
          className='content-text bg-navy cursor-pointer rounded-2xl px-[2rem] py-[1rem] text-xl font-bold text-white hover:opacity-50'
          key={value}
          onClick={() => handleAddAmount(value)}
        >
          +{value}
        </button>
      ))}
      {isDonate && (
        <button
          className="sub-content-text bg-navy hover:opacity-50' cursor-pointer rounded-2xl px-[2rem] py-[1rem] font-bold text-white"
          onClick={handleAddAll}
        >
          전액
        </button>
      )}
    </div>
  );
};

export default CreditController;
