import { motion, useScroll, useTransform } from 'motion/react';
import useElementHeight from '@hooks/useElementHeight';
import DonationInfo from '@components/DonationInfo';
import MainTitle from '../../components/MainTitle';
import Button from '@components/common/Button';
import DetailTitle from '@pages/detail-page/components/DetailTitle';
import DetailContent from '@pages/detail-page/components/DetailContent';

const MainSection = () => {
  // ref를 통해 제목이 브라우저 가장 바닥에 위치한다. (absolute를 사용하면 제목 아래 본문과 이어지지 않는다.)
  const [titleRef, titleHeight] = useElementHeight();

  const { scrollYProgress: donationButtonScroll } = useScroll();
  const donationButtonY = useTransform(
    donationButtonScroll,
    [0, 1],
    ['0%', '-450%'],
  );

  return (
    <div className='relative flex h-fit w-full justify-center'>
      <div className='grid h-fit w-[90vw] grid-cols-3 grid-rows-4 gap-10'>
        <section className='relative col-start-1 col-end-3 row-start-1 row-end-5'>
          <div
            className='h-fit w-full'
            style={{ marginTop: `calc(100vh - 8rem - ${titleHeight}px)` }}
          >
            <div ref={titleRef}>
              <MainTitle title='1주년 기념 팝업 카페' name='KARINA' size='l' />
            </div>

            <div className='my-20'>
              <DetailTitle
                name='에스파 카리나'
                title='1주년 기념 팝업 카페'
                location='홍대 AK 플라자'
                size='s'
              />
            </div>

            <div className='pb-10'>
              <DetailContent />
            </div>
          </div>
        </section>

        <section className='relative col-start-3 col-end-4 row-start-1 row-end-5'>
          <div className='sticky top-[5rem] flex h-[calc(100vh-8rem)] flex-col justify-between py-15'>
            <div className='flex flex-col gap-10'>
              <DonationInfo
                title='모인 금액'
                subTitle='크레딧'
                credit={200000}
                targetAmount={300000}
                size='m'
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
                size='m'
                isOpen={true}
              >
                <DonationInfo.InfoTimer />
                <DonationInfo.InfoDeadline />
              </DonationInfo>
            </div>

            <motion.div style={{ y: donationButtonY }}>
              <Button
                color='pink'
                size='full'
                className='rounded hover:bg-black'
              >
                후원하기
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
