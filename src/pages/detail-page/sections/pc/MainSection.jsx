import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import useElementHeight from '@hooks/useElementHeight';
import DonationInfo from '@pages/detail-page/components/DonationInfo';
import MainTitle from '@pages/detail-page/components/MainTitle';
import Button from '@components/common/Button';
import DetailTitle from '@pages/detail-page/components/DetailTitle';
import DetailContent from '@pages/detail-page/components/DetailContent';
import useScrollAnimation from '@hooks/useScrollAnimation';
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
  const scrollAreaRef = useRef(null);
  const detailTitleRef = useRef(null);
  const [donationInfoRef, donationInfoHeight] = useElementHeight();

  const detailTitleAnimation = useScrollAnimation(
    scrollAreaRef,
    detailTitleRef,
    ['0px', '0px'],
    true,
  );
  const donationInfoAnimation = useScrollAnimation(
    scrollAreaRef,
    donationInfoRef,
    ['-150px', '0px'],
    false,
  );
  const backgroundAnimation = useScrollAnimation(
    scrollAreaRef,
    donationInfoRef,
    ['-300px', '0px'],
    true,
  );

  return (
    <>
      {/* 스크롤시 배경 흐리게 */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-t from-transparent to-black backdrop-blur'
        style={backgroundAnimation}
        ref={donationInfoRef}
      ></motion.div>

      <div className='flex h-fit w-full justify-center overflow-hidden'>
        <div className='grid h-[calc(100vh-8rem)] w-[95vw] grid-cols-3 grid-rows-4 gap-10 md:h-[calc(100vh-10rem)]'>
          {/* 제목 + 본문 영역 */}
          <section
            className='relative col-start-1 col-end-3 row-start-1 row-end-5 snap-y snap-mandatory overflow-y-scroll scroll-smooth [&::-webkit-scrollbar]:hidden'
            ref={scrollAreaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className='absolute w-full'
              style={{ top: `calc(100vh - 10rem - ${titleHeight}px)` }}
            >
              <div className='absolute top-[-5rem] left-1/2 mb-10'>
                <ViewDetailButton isVisible={isHovered} />
              </div>

              <div className='h-fit snap-end' ref={titleRef}>
                <MainTitle title={title} name={englishName} size='l' />
              </div>

              <div className='snap-start pb-10'>
                <DetailContent contents={contents} />
              </div>
            </div>
          </section>

          {/* 후원 정보, 버튼 영역 */}
          <section className='relative col-start-3 col-end-4 row-start-1 row-end-5 ml-auto flex w-full max-w-[40rem] flex-col justify-between py-20'>
            <motion.div
              className='sticky top-0 z-10 w-full'
              style={donationInfoAnimation}
              ref={donationInfoRef}
            >
              <motion.div style={detailTitleAnimation} ref={donationInfoRef}>
                <DetailTitle
                  name={`${idol.group} ${idol.name}`}
                  title={title}
                  location={subtitle}
                  size='l'
                />
              </motion.div>

              <div className='mt-20 flex flex-col gap-10'>
                <DonationInfo
                  title='모인 금액'
                  subTitle='크레딧'
                  credit={receivedDonations}
                  targetAmount={targetDonation}
                  size='l'
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
                  size='l'
                  isDonationOpen={isDonationOpen}
                >
                  <DonationInfo.InfoTimer />
                  <DonationInfo.InfoDeadline />
                </DonationInfo>
              </div>
            </motion.div>

            <div>
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
    </>
  );
};

export default MainSection;
