import { useCreditForm } from '@hooks/useCreditForm';
import Input from '../common/Input';
import CreditController from './CreditController';
import CreditIcon from '@assets/icons/icon_credit';
import { cn } from '@utils/cn';
import Button from '@components/common/Button';

/**
 * @component
 *
 * @param {number} credit 사용자의 현재 보유크레딧 ex)이 컴포넌트를 사용할 최상위 컴포넌트 DonateMordal,ChargeMordal컴포넌트에서 내려받음
 * @param {Function} [onClick] 상위 컴포넌트에서 내려올 후원/충전관련 로직메소드
 * @param {boolean} isDonate 후원모드여부 -> 후원모드일시 전액버튼 활성화 && 버튼텍스트 '후원하기'로 변경
 * @param {string} [className] - 추가적으로 적용할 className
 *
 * @example
 *
 * //사용법
 *
 * 추후 개발할 후원/충전모달에서 로컬스토리지에서 credit을 가져온뒤
 * credit과 inputValue로 수행할 후원/충전 로직메소드를구현한뒤(ex:handleDonateCredit)
 * CreditForm에 credit과 로직메소드를 props로 내려줌
 * ex) <CreditForm isDonate  onClick={handleDonateCredit} credit={credit} />
 *
 *
 *
 *  //ChargeCreditMordal컴포넌트라고 가정
 *   const [credit, setCredit] = useState(10000); //로컬스토리지에서 꺼내왔다 가정
 *
 *
 *  //예시 충전 메소드
 *  const handleCharge = (inputValue) => { //CreditForm의 handleClick메소드를 통해 inputValue를 파라미터로 건네받음
 *  console.log(inputValue);
 *     setCredit(credit + inputValue);//로컬스토리지에 적용하는 로직이라 가정
 *  };
 *
 * return(
 * <div>
 *
 * <CreditForm  onClick={handleCharge} credit={credit} />
 * </div>
 * )
 *
 *
 * @returns {JSX.Element}
 */

const CreditForm = ({ isDonate = false, onClick, credit, className = '' }) => {
  const {
    input,
    error,
    errMsg,
    handleInputChange,
    handleAddAmount,
    handleAddAll,
    handleReset,
  } = useCreditForm(credit, isDonate);

  //충전/후원하기 버튼에 들어가는 메소드
  const handleClick = () => {
    if (error || input === '') {
      return null;
    }
    const inputValue = Number(input);
    onClick?.(inputValue); //상위 컴포넌트에서의 충전/후원 로직메소드에 inputValue값을 파라미터로 전달
    handleReset();
  };

  return (
    <div className={cn('w-full max-w-[43rem] text-left text-white', className)}>
      <p className='text-[1.4rem] md:text-[1.6rem]'>
        내 크레딧: {credit.toLocaleString()}
      </p>
      <Input
        value={input}
        type='text'
        placeholder='크레딧 입력'
        onChange={handleInputChange}
        isError={error}
        errMsg={errMsg}
        icon={
          <CreditIcon className='absolute top-1/2 right-8 h-10 w-10 -translate-y-1/2 object-contain' />
        }
      />
      <CreditController
        handleAddAmount={handleAddAmount}
        handleAddAll={handleAddAll}
        isDonate={isDonate}
      />

      <Button
        color='pink'
        onClick={handleClick}
        disabled={error || input === ''}
        className='w-full'
      >
        {isDonate ? '후원하기' : '충전하기'}
      </Button>
    </div>
  );
};

export default CreditForm;
