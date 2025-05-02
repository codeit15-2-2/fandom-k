import { useContext, createContext } from 'react';
import { cn } from '@/utils/cn';
import { useCountdownTimer } from '@hooks/useCountdownTimer';
import {
  DONATION_INFO_CONTENT_SIZE_STYLES,
  DONATION_INFO_SUB_CONTENT_SIZE_STYLES,
  MAX_PROGRESS_PERCENT,
} from '@constants/donationConstants';
import { getElapsedProgress, formatDate } from '@utils/donationInfoUtils';

const safeNumber = (value) => {
  const num = Number(value);
  return Number.isNaN(num) ? 0 : num;
};

const DonationContext = createContext({
  title: '',
  subTitle: '',
  credit: 0,
  targetAmount: 0,
  createdAt: '',
  deadline: '',
  size: 'l',
  isDonationOpen: null,
});

/* 후원 정보 컴포넌트 사용법
- 소개
후원 정보 컴포넌트는 후원 상세 페이지에 쓰이는 컴포넌트입니다.
모인 금액 타입과 모집 기간 타입을 지원합니다.
1) 모집 금액 : 후원에 필요한 총 크레딧 수와 현재 모금 금액을 확인할 수 있고, 어느 정도 달성했는지 progress bar를 통해 직관적으로 확인합니다.
2) 모집 기간 : 후원 마감 날짜와 현재 시점에서 기간이 얼마나 남았는지 타이머로 확인할 수 있습니다. 모집 시작부터 마감까지의 기간에서 지나온 시간을 progress bar로 확인합니다. 
            (색이 채워진 부분이 지난 기간이고, 색이 모두 칠해지면 기간이 종료됨을 뜻합니다.)

- 반응형 사용법
s, m, l로 size를 설정해 사용할 수 있습니다. 기본 사이즈는 'l' 입니다. 

*/

/** 후원 정보 컴포넌트 props
 *
 * @typedef {Object} DonationInfoProps
 * @property {string} props.title - [모집 금액 | 모집 기간] 후원 정보 제목 (ex. 모인 금액, 모집 기간)
 * @property {string} props.subTitle - [모집 금액 | 모집 기간] 후원 정보 부제목 (ex. 크레딧, 남은 시간)
 * @property {number} props.credit - [모집 금액] 모금액
 * @property {number} props.targetAmount - [모집 금액]
 * @property {string} props.createdAt - [모집 기간] 모집 시작 날짜 문자열 (ex. ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ)
 * @property {string} props.deadline - [모집 기간] 모집 마감 날짜 문자열 (ex. ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ)
 * @property {'s' | 'm' | 'l'} [size] - [모집 금액 | 모집 기간] 사이즈 (default size: l)
 * @property {boolean} props.isDonationOpen - [모집 금액 | 모집 기간] 후원 진행 여부
 */

/**
 * @example
 * 모집 종료 문구가 뜨는 시점은 isOpen이 false 상태일 때입니다.
 * 1. 모집 금액
 * <DonationInfo
 *   title='모인 금액'
 *   subTitle='크레딧'
 *   credit={200000}
 *   targetAmount={300000}
 *   size='s'
 *   isDonationOpen={true}>
 *   <DonationInfo.InfoCredit />
 *   <DonationInfo.InfoTargetAmount />
 * </DonationInfo>
 *
 * 2. 모집 기간
 * 내부에서 deadline과 현시점을 계산하지 않습니다.
 * 따라서 모집이 조기 종료될 경우엔 모집 기간의 isOpen도 false로 전달 받아야 합니다.
 * <DonationInfo
 *   title='모집 기간'
 *   subTitle='남은 시간'
 *   createdAt={'2025-03-19T00:00:00.891Z'}
 *   deadline={'2025-05-22T23:59:59.000Z'}
 *   size='l'
 *   isDonationOpen={true}>
 *   <DonationInfo.InfoTimer />
 *   <DonationInfo.InfoDeadline />
 * </DonationInfo>
 */
const DonationInfo = ({
  title,
  subTitle,
  credit,
  targetAmount,
  createdAt,
  deadline,
  size = 'l',
  isDonationOpen,
  children,
}) => {
  credit = safeNumber(credit);
  targetAmount = safeNumber(targetAmount);
  const contextValue = {
    title,
    subTitle,
    credit,
    targetAmount,
    createdAt,
    deadline,
    size,
    isDonationOpen,
  };

  return (
    <DonationContext.Provider value={contextValue}>
      <div className='relative flex w-full flex-col gap-3 text-white'>
        <InfoTitle />
        <InfoSubTitle />
        {children}
      </div>
    </DonationContext.Provider>
  );
};

// 제목 컴포넌트
const InfoTitle = () => {
  const { title } = useContext(DonationContext);

  return <p className='content-text font-bold'>{title}</p>;
};

// 소제목 컴포넌트
const InfoSubTitle = () => {
  const { subTitle } = useContext(DonationContext);

  return <p className='content-text absolute right-0 opacity-50'>{subTitle}</p>;
};

// 크레딧 정보 컴포넌트
const InfoCredit = () => {
  const { credit, targetAmount, size, isDonationOpen } =
    useContext(DonationContext);
  let progress = Math.min(
    (credit / targetAmount) * MAX_PROGRESS_PERCENT,
    MAX_PROGRESS_PERCENT,
  );

  const infoCreditClassNames = cn(
    'ml-auto font-extralight',
    DONATION_INFO_CONTENT_SIZE_STYLES[size],
  );

  return (
    <>
      {isDonationOpen ? (
        <p className={infoCreditClassNames}>{credit.toLocaleString()}</p>
      ) : (
        <p className={infoCreditClassNames}>모집 종료</p>
      )}

      <InfoProgressBar progress={progress}>
        <div className='bg-brand-2 z-100 ml-auto h-fit w-fit rounded-full px-3 py-1 text-[1rem] whitespace-nowrap'>
          {safeNumber(progress).toFixed(1)} %
        </div>
      </InfoProgressBar>
    </>
  );
};

// 목표 금액 컴포넌트
const InfoTargetAmount = () => {
  const { targetAmount } = useContext(DonationContext);

  return (
    <p className='content-text ml-auto'>
      목표 금액 {targetAmount.toLocaleString()}
    </p>
  );
};

// 타이머 컴포넌트
const InfoTimer = () => {
  const { createdAt, deadline, size, isDonationOpen } =
    useContext(DonationContext);
  const now = Date.now();
  const { days, hours, minutes, seconds } = useCountdownTimer(
    deadline,
    isDonationOpen,
  );
  const progress = getElapsedProgress(createdAt, deadline, now);

  const infoTimerContentClassNames = cn(
    'ml-auto font-extralight',
    DONATION_INFO_CONTENT_SIZE_STYLES[size],
  );

  const infoTimerSubContentClassNames = cn(
    'mr-5',
    DONATION_INFO_SUB_CONTENT_SIZE_STYLES[size],
  );

  const isClosedText = (
    <span className={infoTimerContentClassNames}>모집 종료</span>
  );

  const timerText = (
    <p className={infoTimerContentClassNames}>
      {days}
      <span className={infoTimerSubContentClassNames}>일</span>
      {hours}
      <span className={infoTimerSubContentClassNames}>시</span>
      {minutes}
      <span className={infoTimerSubContentClassNames}>분</span>
      {seconds}
      <span className={DONATION_INFO_SUB_CONTENT_SIZE_STYLES[size]}>초</span>
    </p>
  );

  return (
    <>
      {isDonationOpen ? timerText : isClosedText}
      <InfoProgressBar progress={safeNumber(progress)} />
    </>
  );
};

// 마감 날짜 컴포넌트
const InfoDeadline = () => {
  const { deadline } = useContext(DonationContext);
  const { year, month, day } = formatDate(deadline);

  return (
    <p className='content-text ml-auto'>
      마감 날짜 {`${year}.${month}.${day}`}
    </p>
  );
};

// 진행 바 컴포넌트
const InfoProgressBar = ({ progress, children }) => {
  return (
    <div className='relative mt-5 mb-1 h-4 w-full rounded-full'>
      <div
        className='bg-gradient-brand absolute z-1 flex h-4 items-center rounded-full text-black'
        style={{ width: `${progress}%` }}
      >
        {children}
      </div>
      <div className='h-4 w-full rounded-full bg-white opacity-30'></div>
    </div>
  );
};

DonationInfo.InfoTitle = InfoTitle;
DonationInfo.InfoSubTitle = InfoSubTitle;
DonationInfo.InfoCredit = InfoCredit;
DonationInfo.InfoTargetAmount = InfoTargetAmount;
DonationInfo.InfoTimer = InfoTimer;
DonationInfo.InfoDeadline = InfoDeadline;
DonationInfo.InfoProgressBar = InfoProgressBar;

export default DonationInfo;
