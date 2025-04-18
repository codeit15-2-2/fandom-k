import { useContext, createContext } from 'react';
import { cn } from '@/utils/cn';
import CardImg from '@components/common/CardImg';

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
  daysLeft: 0,
  onClick: () => {},
  isHover: false,
  size: 'm',
});

/**
 * 아이돌 카드 전체 컴포넌트 (기본카드와 후원카드를 함께 사용한 합성 컴포넌트입니다.)
 * @component
 * @param {Object} props
 * @param {number} props.id - [기본카드 | 후원카드]]아이돌 ID
 * @param {string} props.src - [기본카드 | 후원카드] 카드 이미지 URL
 * @param {string} props.location - [기본카드 | 후원카드] 후원 장소
 * @param {string} props.title - [기본카드 | 후원카드] 후원 제목
 * @param {number} props.credit - [후원카드] 모인 후원 금액
 * @param {number} props.daysLeft - [후원카드] 마감까지 남은 일수
 * @param {Function} props.onClick - [후원카드] 상세 이동용 클릭 핸들러
 * @param {boolean} props.isHover - [후원카드] 이미지 위 그라데이션 오버레이 여부
 * @param {'s'|'m'} [props.size='m'] - [후원카드] 카드 사이즈
 * @param {React.ReactNode} props.children - Slot으로 footer 추가
 *
 * @example
 * 1. 기본카드 사용법 예시
 * <IdolCardList
 *   id={10}
 *   src={'~'}
 *   location={'강남역 광고'}
 *   title={'민지 2025 첫 광고'}
 * ></IdolCardList>
 *
 * @example
 * 2. 후원카드 사용법 예시
 * <IdolCardList
 *   id={10}
 *   src={'~'}
 *   location={'강남역 광고'}
 *   title={'민지 2025 첫 광고'}
 *   credit={6000}
 *   daysLeft={4}
 *   size={'s'} - 기본형 'm'
 *   isHover={true}
 *   onClick={onClickDonate}
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
  daysLeft,
  onClick,
  isHover = false,
  size = 'm',
  children,
}) => {
  const contextValue = {
    id,
    src,
    location,
    title,
    credit,
    daysLeft,
    onClick,
    isHover,
    size,
  };

  const IdolCardWrapClassName = cn(
    'w-full max-w-md overflow-hidden bg-[var(--color-black)] text-[var(--color-white)]',
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
    'mb-2 text-[var(--color-gray-300)]',
    size === 's' ? 'caption-text' : 'content-text',
  );

  const titleClassName = cn(
    size === 's' ? 'sub-content-text' : 'text-[1.8rem]',
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
 * - context로부터 `src`, `title`, `isHover` 값을 받아 렌더링
 * - `isHover` 여부에 따라 후원 카드가 결정되면서 버튼 영역도 추가(버튼 컴포넌트로 변경 필요)
 */
const IdolCardImg = () => {
  const { src, title, isHover, onClick } = useContext(IdolCardContext);

  return (
    <div className='relative w-full'>
      <CardImg
        className='rounded-2xl object-contain'
        src={src}
        alt={title}
        isHover={isHover}
      />
      {isHover && (
        <button
          onClick={onClick}
          className='absolute bottom-[1rem] left-[50%] z-10 -translate-x-1/2 cursor-pointer bg-gradient-to-t from-[#F96D69] to-[#FF9D95] px-6 py-2 text-sm font-semibold text-white'
        >
          후원하기
        </button>
      )}
    </div>
  );
};

/**
 * 카드 하단의 진행률 바 및 후원 금액 정보
 * - 후원 금액, 남은 일수, 진행률 표시
 */
const IdolCardFooter = () => {
  const { credit, daysLeft, progress = 15 } = useContext(IdolCardContext);

  return (
    <>
      <div className='caption-text flex items-center justify-between pb-4'>
        <span className='text-[var(--color-brand-1)]'>₩ {credit}</span>

        <span className='text-[var(--color-gray-300)]'>{daysLeft}일 남음</span>
      </div>

      <div className='h-1 w-full overflow-hidden bg-[var(--color-white)]'>
        <div
          className='h-full bg-[var(--color-brand-1)]'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

IdolCardList.IdolCardImg = IdolCardImg;
IdolCardList.IdolCardText = IdolCardText;
IdolCardList.IdolCardFooter = IdolCardFooter;

export default IdolCardList;
