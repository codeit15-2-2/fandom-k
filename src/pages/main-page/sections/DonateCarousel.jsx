import IdolCardList from '@components/card/IdolCard';
import Button from '@components/common/Button';
import Carousel from '@components/common/Carousel';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { useState, useEffect } from 'react';
import { useDonation } from '@contexts/DonationContext';

// 스켈레톤 카드 컴포넌트 - width prop을 받도록 수정
const SkeletonIdolCard = ({ size = 'm' }) => {
  // width는 더 이상 고정된 값이 아니라 외부에서 결정됨
  const cardWrapClassName = cn(
    'w-full overflow-hidden text-[var(--color-white)] animate-pulse',
  );

  return (
    <div className={cardWrapClassName}>
      {/* 이미지 영역 */}
      <div className='relative'>
        <div className='aspect-[1/1] w-full rounded-2xl bg-gray-700'></div>
      </div>

      {/* 텍스트 영역 */}
      <div className='pt-2 pb-6'>
        <div
          className={cn(
            'mb-2 h-4 rounded bg-gray-700',
            size === 's' ? 'w-2/3' : 'w-3/4',
          )}
        ></div>
        <div
          className={cn(
            'h-6 rounded bg-gray-700',
            size === 's' ? 'w-full' : 'w-5/6',
          )}
        ></div>
      </div>

      {/* 푸터 영역 */}
      <div>
        <div className='caption-text flex items-center justify-between pb-4'>
          <div className='flex w-1/3 items-center'>
            <div className='h-4 w-4 rounded-full bg-gray-700'></div>
            <div className='h-4 w-12 rounded bg-gray-700 pl-2'></div>
          </div>
          <div className='h-4 w-16 rounded bg-gray-700'></div>
        </div>
        <div className='h-1 w-full overflow-hidden bg-gray-700'>
          <div className='h-full w-2/3 bg-gray-600'></div>
        </div>
      </div>
    </div>
  );
};

// 반응형 스켈레톤 캐러셀 컴포넌트
const ResponsiveSkeletonCarousel = () => {
  const GAP = 20;
  const SLIDETOSHOW = 4;
  const [responsiveOffset, setResponsiveOffset] = useState(SLIDETOSHOW);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setResponsiveOffset(4);
      } else if (window.innerWidth >= 768) {
        setResponsiveOffset(3);
      } else if (window.innerWidth >= 640) {
        setResponsiveOffset(2);
      } else {
        setResponsiveOffset(1);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 아이템 너비 계산 - 실제 Carousel 컴포넌트와 동일한 로직
  const itemWidth = `calc((100% - ${(responsiveOffset - 1) * GAP}px) / ${responsiveOffset})`;

  return (
    <div className='relative w-full'>
      <div className='overflow-hidden'>
        <div className='flex' style={{ gap: `${GAP}px` }}>
          {Array(responsiveOffset)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className='flex justify-center'
                style={{ minWidth: itemWidth, width: itemWidth }}
              >
                <SkeletonIdolCard />
              </div>
            ))}
        </div>
      </div>

      {/* 스켈레톤 버튼 */}
      <div className='absolute top-1/2 -left-15 z-10 h-8 w-8 -translate-y-1/2 transform rounded-full bg-gray-700 p-2'></div>
      <div className='absolute top-1/2 -right-15 z-10 h-8 w-8 -translate-y-1/2 transform rounded-full bg-gray-700 p-2'></div>
    </div>
  );
};

const DonateCarousel = ({ idolData, isLoading, fetchDonateData }) => {
  const navigate = useNavigate();
  const { setDonationData } = useDonation();

  return (
    <div className='mt-20 flex w-full flex-col gap-10'>
      <h1 className='title-text text-white'>후원을 기다리는 조공</h1>

      {/* 데이터 유무에 관계없이 일정한 높이를 가진 영역을 유지 */}
      <div className='min-h-[360px] w-full px-20'>
        {isLoading ? (
          <ResponsiveSkeletonCarousel />
        ) : idolData && idolData.length > 0 ? (
          <Carousel
            data={idolData}
            RenderComponent={(props) => (
              <IdolCardList
                {...props}
                onClick={() => {
                  setDonationData(props.data);
                  navigate(`/main/${props.id}`);
                }}
              />
            )}
            button={
              <Button size='card' color='pink'>
                후원하기
              </Button>
            }
          />
        ) : (
          <div className='flex h-100 w-full flex-col items-center justify-center gap-10 rounded-lg bg-gray-800/30'>
            <p className='text-3xl text-gray-400'>
              데이터를 불러오는 데 실패하였습니다.
            </p>
            <Button color='pink' size='m' onClick={fetchDonateData}>
              다시 시도하기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateCarousel;
