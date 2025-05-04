import React, { useContext, createContext } from 'react';
import { cn } from '@/utils/cn';
import CardImg from '@components/common/CardImg';
import Credit from '@assets/icons/icon_credit';
import { getDonationProgress, getDDayText } from '@utils/donationCardUtils';

/**
 * 카드 사이즈별 Tailwind 클래스 매핑
 * - 's' : 소형 카드
 * - 'm' : 중형 카드 (기본값)
 */
const CARD_SIZE_STYLE = {
  s: 'w-[15.8rem]',
  m: 'w-[28rem]',
};

/**
 * IdolCardList 전체에서 공유되는 context 값
 */
const IdolCardContext = createContext({
  id: null,
  src: '',
  location: '',
  title: '',
  credit: 0,
  targetCredit: 0,
  deadline: '',
  onClick: () => {},
  size: 'm',
  button: null,
});

/**
 * 아이돌 카드의 최상위 컴포넌트입니다.
 * - 기본 카드 및 후원 카드 구성을 하나로 합성한 재사용 가능한 카드 컴포넌트입니다.
 * - 내부적으로 context를 통해 하위 컴포넌트에 데이터를 공유합니다.
 * @component
 *
 * @param {Object} props
 * @param {number} props.id - [기본카드 | 후원카드] 아이돌 ID
 * @param {string} props.src - [기본카드 | 후원카드] 카드 이미지 URL
 * @param {string} props.location - [기본카드 | 후원카드] 후원 장소
 * @param {string} props.title - [기본카드 | 후원카드] 후원 제목
 * @param {number} props.credit - [후원카드] 모인 후원 금액
 * @param {number} props.targetCredit - [후원카드] 목표 후원 금액
 * @param {string} props.deadline - [후원카드] 후원 마감 날짜
 * @param {Function} props.onClick - [후원카드] 버튼 클릭 시 실행되는 핸들러
 * @param {'s'|'m'} props.size - [후원카드] 카드 크기 (기본값 'm')
 * @param {() => JSX.Element} props.button - [후원카드] 이미지 위에 띄울 버튼 컴포넌트
 * @param {React.ReactNode} props.children - [후원카드] 하단 푸터 등 커스텀 콘텐츠 영역
 *
 * @example
 * 1. 기본카드 사용법 예시
 * <IdolCardList
 *  id={10}
 *  src={'~'}
 *  location={'강남역 광고'}
 *  title={'민지 2025 첫 광고'}
 * ></IdolCardList>
 *
 * @example
 * 2. 후원카드 사용법 예시
 * <IdolCardList
 *  id={10}
 *  src={'~'}
 *  location={'강남역 광고'}
 *  title={'민지 2025 첫 광고'}
 *  credit={6000}
 *  targetCredit={12000}
 *  deadline={'2025-07-21T23:59:59.000Z'}
 *  size={'s'} - 기본형 'm'
 *  button={button}
 * >
 *  <IdolCardList.IdolCardFooter />
 * </IdolCardList>
 *
 */
const IdolCardList = ({
  id,
  src,
  location,
  title,
  credit,
  targetCredit,
  deadline,
  onClick,
  size = 'm',
  button = null,
  children,
  status,
}) => {
  const contextValue = {
    id,
    src,
    location,
    title,
    credit,
    targetCredit,
    deadline,
    onClick,
    size,
    button,
    status,
  };

  const IdolCardWrapClassName = cn(
    'w-1/2 max-w-md overflow-hidden text-[var(--color-white)]',
    CARD_SIZE_STYLE[size],
  );

  return (
    <IdolCardContext.Provider value={contextValue}>
      <div className={IdolCardWrapClassName}>
        <IdolCardImg />
        <IdolCardText />
        {children}
      </div>
    </IdolCardContext.Provider>
  );
};

/**
 * 카드 내부의 텍스트 영역
 * - 후원 장소(location) 및 제목(title) 표시
 * - 카드 크기(size)에 따라 폰트 스타일이 달라짐
 */
const IdolCardText = () => {
  const { location, title, size } = useContext(IdolCardContext);

  const locationClassName = cn(
    'mb-2 text-[var(--color-gray-300)] truncate',
    size === 's' ? 'caption-text' : 'content-text',
  );

  const titleClassName = cn(
    size === 's' ? 'sub-content-text truncate' : 'text-[1.8rem] truncate',
  );

  return (
    <div className='pt-2 pb-6'>
      <p className={locationClassName}>{location}</p>
      <p className={titleClassName}>{title}</p>
    </div>
  );
};

/**
 * 카드 내부의 이미지 영역
 * - context로부터 `src`, `title`, `button`, `onClick` 값을 받아 이미지와 오버레이 버튼을 렌더링합니다.
 * - 버튼이 존재할 경우, 이미지 위에 그라디언트 레이어와 함께 버튼이 오버레이됩니다.
 * - 버튼은 외부에서 JSX 컴포넌트로 전달되며, 클릭 핸들러(onClick)도 함께 전달됩니다.
 */
const IdolCardImg = () => {
  const { src, title, button, onClick, status } = useContext(IdolCardContext);

  // 버튼에 onClick 핸들러 연결
  const buttonWithHandler = button
    ? React.cloneElement(button, {
        onClick,
        color: !status ? 'gray' : button.props.color, // status가 false면 color를 gray로
        children: !status ? '상세 페이지 보기' : button.props.children, // 텍스트도 바꿔
      })
    : null;

  return (
    <div className='relative'>
      <CardImg src={src} title={title}>
        {button && (
          <div className='absolute bottom-[1rem] left-1/2 z-10 -translate-x-1/2'>
            {buttonWithHandler}
          </div>
        )}
      </CardImg>
    </div>
  );
};

/**
 * 카드 하단의 진행률 바 및 후원 금액 정보
 * - 후원 금액, 남은 일수, 진행률 표시
 */
const IdolCardFooter = () => {
  const { credit, targetCredit, deadline } = useContext(IdolCardContext);
  // 음수일 경우 0으로 처리
  const safeCredit = Math.max(credit, 0);

  return (
    <>
      <div className='caption-text flex items-center justify-between pb-4'>
        <span className='flex items-center text-[var(--color-brand-1)]'>
          <Credit />
          <p className='pl-2'>{safeCredit}</p>
        </span>
        <span className='text-[var(--color-gray-300)]'>
          {getDDayText(deadline)}
        </span>
      </div>
      <div className='h-1 w-full overflow-hidden bg-[var(--color-white)]'>
        <div
          className='h-full bg-[var(--color-brand-1)]'
          style={{ width: `${getDonationProgress(safeCredit, targetCredit)}%` }}
        ></div>
      </div>
    </>
  );
};

IdolCardList.IdolCardImg = IdolCardImg;
IdolCardList.IdolCardText = IdolCardText;
IdolCardList.IdolCardFooter = IdolCardFooter;

export default IdolCardList;
