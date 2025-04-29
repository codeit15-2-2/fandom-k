import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import useElementHeight from '@hooks/useElementHeight';
import DonationInfo from '@pages/detail-page/components/DonationInfo';
import MainTitle from '@pages/detail-page/components/MainTitle';
import Button from '@components/common/Button';
import DetailTitle from '@pages/detail-page/components/DetailTitle';
import DetailContent from '@pages/detail-page/components/DetailContent';
import useModal from '@hooks/useModal';
import DonateModal from '@pages/detail-page/components/DonateModal';
import ViewDetailButton from '@pages/detail-page/components/ViewDetailButton';

const MainSection = ({
  id,
  title,
  subtitle,
  targetDonation,
  createdAt,
  deadline,
  receivedDonations,
  contents,
  englishName,
  idol,
  isDonationOpen,
}) => {
  const { isOpen: isModalOpen, open, close } = useModal();
  const [isHovered, setIsHovered] = useState(false);

  // ref를 통해 제목이 브라우저 가장 바닥에 위치한다. (absolute를 사용하면 제목 아래 본문과 이어지지 않는다.)
  const [titleRef, titleHeight] = useElementHeight();

  // 후원하기 버튼이 후원 정보 컴포넌트 아래까지만 위치하도록 계산
  const [infoSectionRef, infoSectionHeight] = useElementHeight();
  const infoSectionStart = infoSectionRef.current?.offsetTop || 0;
  const infoSectionEnd = infoSectionStart + infoSectionHeight;

  const moveTargetY = -window.innerHeight + infoSectionEnd + 200;
  const { scrollY: donationButtonScroll } = useScroll();
  const donationButtonY = useTransform(
    donationButtonScroll,
    [0, infoSectionEnd],
    ['0%', `${moveTargetY}px`],
  );

  return (
    <div className='relative flex h-fit w-full justify-center'>
      <div className='grid h-fit w-[90vw] grid-cols-3 grid-rows-4 gap-10'>
        <section
          className='relative col-start-1 col-end-3 row-start-1 row-end-5'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className='relative h-fit w-full'
            style={{ marginTop: `calc(100vh - 8rem - ${titleHeight}px)` }}
          >
            <div className='absolute top-[-5rem] left-1/2'>
              <ViewDetailButton isVisible={isHovered} />
            </div>

            <div ref={titleRef}>
              <MainTitle title={title} name={englishName} size='l' />
            </div>

            <div className='my-20'>
              <DetailTitle
                name={`${idol.group} ${idol.name}`}
                title={title}
                location={subtitle}
                size='s'
              />
            </div>

            <div className='pb-10'>
              <DetailContent contents={contents} />
            </div>
          </div>
        </section>

        <section className='relative col-start-3 col-end-4 row-start-1 row-end-5'>
          <div className='sticky top-[5rem] flex h-[calc(100vh-8rem)] flex-col justify-between py-15'>
            <div className='flex flex-col gap-10' ref={infoSectionRef}>
              <DonationInfo
                title='모인 금액'
                subTitle='크레딧'
                credit={receivedDonations}
                targetAmount={targetDonation}
                size='m'
                isDonationOpen={isDonationOpen}
              >
                <DonationInfo.InfoCredit />
                <DonationInfo.InfoTargetAmount />
              </DonationInfo>

              <DonationInfo
                title='모집 기간'
                subTitle='남은 시간'
                createdAt={createdAt}
                deadline={deadline}
                size='m'
                isDonationOpen={isDonationOpen}
              >
                <DonationInfo.InfoTimer />
                <DonationInfo.InfoDeadline />
              </DonationInfo>
            </div>

            <motion.div style={{ y: donationButtonY }}>
              {isDonationOpen ? (
                <Button
                  color='pink'
                  size='full'
                  className='rounded hover:bg-black'
                  onClick={open}
                >
                  후원하기
                </Button>
              ) : (
                <Button
                  color='gray'
                  size='full'
                  className='rounded hover:bg-black'
                  disabled
                >
                  모집 종료
                </Button>
              )}
            </motion.div>

            <DonateModal
              isOpen={isModalOpen}
              close={close}
              donateId={id}
              cardItem={{
                id: idol.id,
                title: title,
                subtitle: subtitle,
                profilePicture: idol.profilePicture,
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
