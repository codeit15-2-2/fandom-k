import { useContext, createContext, memo } from 'react';
import { useCountdownTimer } from '@hooks/useCountdownTimer';

const getElapsedProgress = (createdAt, deadline, now) => {
  const createdAtTime = new Date(createdAt).getTime();
  const deadlineTime = new Date(deadline).getTime();

  const totalDuration = deadlineTime - createdAtTime;
  const elapsedTime = now - createdAtTime;
  const progress = (elapsedTime / totalDuration) * 100;
  const clampedProgress = Math.max(0, Math.min(progress, 100));

  return clampedProgress;
};

const formatDate = (deadline) => {
  const dateObj = new Date(deadline);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  return { year, month, day };
};

const DonationContext = createContext({
  title: '',
  subTitle: '',
  credit: '',
  targetAmount: '',
  createdAt: '',
  deadline: '',
  isOpen: null,
});

const DonationInfo = ({
  title,
  subTitle,
  credit,
  targetAmount,
  createdAt,
  deadline,
  isOpen,
  children,
}) => {
  const contextValue = {
    title,
    subTitle,
    credit,
    targetAmount,
    createdAt,
    deadline,
    isOpen,
  };

  return (
    <DonationContext.Provider value={contextValue}>
      <div className='relative flex w-[50rem] flex-col gap-3 text-white'>
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
  const { credit, targetAmount, isOpen } = useContext(DonationContext);
  const progress = Math.min((credit / targetAmount) * 100, 100);

  return (
    <>
      {isOpen ? (
        <p className='ml-auto text-8xl font-extralight'>
          {credit.toLocaleString()}
        </p>
      ) : (
        <p className='ml-auto text-8xl font-extralight'>모집 종료</p>
      )}

      <InfoProgressBar progress={progress}>
        <div className='bg-brand-2 z-100 ml-auto h-fit w-fit rounded-full px-3 py-1 text-[1rem] whitespace-nowrap'>
          {progress.toFixed(1)} %
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
  const { createdAt, deadline, isOpen } = useContext(DonationContext);
  const now = Date.now();
  const { days, hours, minutes, seconds } = useCountdownTimer(
    deadline,
    now,
    isOpen,
  );
  const progress = getElapsedProgress(createdAt, deadline, now);

  const isClosedText = (
    <span className='ml-auto text-8xl font-extralight'>모집 종료</span>
  );

  const timerText = (
    <p className='ml-auto text-8xl font-extralight'>
      {days}
      <span className='mr-5 text-6xl text-white'>일</span>
      {hours}
      <span className='mr-5 text-6xl text-white'>시</span>
      {minutes}
      <span className='mr-5 text-6xl text-white'>분</span>
      {seconds}
      <span className='text-6xl text-white'>초</span>
    </p>
  );

  return (
    <>
      {isOpen ? timerText : isClosedText}
      <InfoProgressBar progress={progress} />
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
        className='bg-gradient-brand absolute z-1 flex h-4 items-center rounded-full'
        style={{ width: `${progress}%` }} // tailwindcss는 동적으로 스타일을 줄 수 없습니다.
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

// * todo : 사이즈
