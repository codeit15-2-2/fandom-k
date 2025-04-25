import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import DonationInfo from '@components/DonationInfo';
import MainTitle from '../../components/MainTitle';
import Button from '@components/common/Button';
import DetailTitle from '@pages/detail-page/components/DetailTitle';
import BackgroundIdolImage from '@pages/detail-page/components/BackgroundIdolImage';
import DetailContent from '@pages/detail-page/components/DetailContent';

const MainSection = () => {
  // ref를 통해 제목이 브라우저 가장 바닥에 위치한다. (absolute를 사용하면 제목 아래 본문과 이어지지 않는다.)
  const titleRef = useRef(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      const height = titleRef.current.offsetHeight;
      setTop(height);
    }
  }, []);

  const scrollAreaRef = useRef(null);

  // detail title 애니메이션
  const detailTitleRef = useRef(null);
  const { scrollYProgress: detailTitleScroll } = useScroll({
    container: scrollAreaRef,
    target: detailTitleRef,
    offset: ['start end', 'start start'],
  });
  const detailTitleY = useTransform(
    detailTitleScroll,
    [0, 1],
    ['-1000%', '0%'],
  );
  const detailTitleOpacity = useTransform(detailTitleScroll, [0, 0.2], [0, 1]);

  // donation info 애니메이션
  const donationInfoRef = useRef(null);
  const { scrollYProgress: donationInfoScroll } = useScroll({
    container: scrollAreaRef,
    target: donationInfoRef,
    offset: ['start end', 'start start'],
  });
  const donationInfoY = useTransform(
    donationInfoScroll,
    [0, 1],
    ['-150%', '0%'],
  );
  const donationInfoOpacity = useTransform(
    donationInfoScroll,
    [0, 0.2],
    [0, 1],
  );

  // background 애니메이션
  const { scrollYProgress: backgroundScroll } = useScroll({
    container: scrollAreaRef,
    target: donationInfoRef,
    offset: ['start end', 'start start'],
  });
  const backgroundY = useTransform(backgroundScroll, [0, 1], ['-300%', '0%']);
  const backgroundOpacity = useTransform(backgroundScroll, [0, 0.2], [0, 1]);

  return (
    <>
      {/* 아이돌 배경 사진 */}
      <BackgroundIdolImage
        imgSrc={
          'https://img.news-wa.com/img/upload/2025/02/09/NWC_20250209182654.png.webp'
        }
      />

      {/* 스크롤시 배경 흐리게 */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-t from-transparent to-black backdrop-blur'
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        ref={donationInfoRef}
      ></motion.div>

      <div className='flex h-fit w-full justify-center'>
        <div className='grid h-[calc(100vh-8rem)] w-[95vw] grid-cols-3 grid-rows-4 gap-10'>
          {/* 제목 + 본문 영역 */}
          <section
            className='relative col-start-1 col-end-3 row-start-1 row-end-5 overflow-y-scroll'
            ref={scrollAreaRef}
          >
            <div
              className='absolute w-[100%]'
              style={{ top: `calc(100vh - 8rem - ${top}px)` }}
            >
              <div className='h-fit' ref={titleRef}>
                <MainTitle
                  title='1주년 기념 팝업 카페'
                  name='KARINA'
                  size='l'
                />
              </div>

              <DetailContent />
            </div>
          </section>

          {/* 후원 정보, 버튼 영역 */}
          <section className='relative col-start-3 col-end-4 row-start-1 row-end-5 flex flex-col justify-between py-20'>
            <motion.div
              className='sticky top-0 z-10 w-full'
              style={{ y: detailTitleY, opacity: detailTitleOpacity }}
              ref={detailTitleRef}
            >
              <DetailTitle
                name='에스파 카리나'
                title='1주년 기념 팝업 카페'
                location='홍대 AK 플라자'
                size='l'
              />
            </motion.div>

            <motion.div
              className='sticky top-0 z-10 flex w-full flex-col gap-10'
              style={{ y: donationInfoY, opacity: donationInfoOpacity }}
              ref={donationInfoRef}
            >
              <DonationInfo
                title='모인 금액'
                subTitle='크레딧'
                credit={200000}
                targetAmount={300000}
                size='l'
                isOpen={true}
              >
                <DonationInfo.InfoCredit />
                <DonationInfo.InfoTargetAmount />
              </DonationInfo>

              <DonationInfo
                title='모집 기간'
                subTitle='남은 시간'
                createdAt={'2025-03-19T00:00:00.891Z'}
                deadline={'2025-05-22T23:59:59.000Z'}
                size='l'
                isOpen={true}
              >
                <DonationInfo.InfoTimer />
                <DonationInfo.InfoDeadline />
              </DonationInfo>
            </motion.div>

            <div>
              <Button
                color='pink'
                size='full'
                className='isLoading={isLoading} rounded hover:bg-black'
              >
                후원하기
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainSection;
