import { useRef } from 'react';
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

  // ref를 통해 제목이 브라우저 가장 바닥에 위치한다. (absolute를 사용하면 제목 아래 본문과 이어지지 않는다.)
  const [titleRef, titleHeight] = useElementHeight();
  const scrollAreaRef = useRef(null);
  const detailTitleRef = useRef(null);
  const donationInfoRef = useRef(null);

  const detailTitleAnimation = useScrollAnimation(
    scrollAreaRef,
    detailTitleRef,
    ['-1000%', '0%'],
  );
  const donationInfoAnimation = useScrollAnimation(
    scrollAreaRef,
    donationInfoRef,
    ['-150%', '0%'],
  );
  const backgroundAnimation = useScrollAnimation(
    scrollAreaRef,
    donationInfoRef,
    ['-300%', '0%'],
  );

  return (
    <>
      {/* 스크롤시 배경 흐리게 */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-t from-transparent to-black backdrop-blur'
        style={backgroundAnimation}
        ref={donationInfoRef}
      ></motion.div>

      <div className='flex justify-center w-full overflow-hidden h-fit'>
        <div className='grid h-[calc(100vh-8rem)] w-[95vw] grid-cols-3 grid-rows-4 gap-10 md:h-[calc(100vh-10rem)]'>
          {/* 제목 + 본문 영역 */}
          <section
            className='relative col-start-1 col-end-3 row-start-1 row-end-5 snap-y snap-mandatory overflow-y-scroll scroll-smooth [&::-webkit-scrollbar]:hidden'
            ref={scrollAreaRef}
          >
            <div
              className='absolute w-full'
              style={{ top: `calc(100vh - 8rem - ${titleHeight}px)` }}
            >
              <div className='h-fit snap-end' ref={titleRef}>
                <MainTitle title={title} name={englishName} size='l' />
              </div>

              <div className='pb-10 snap-start'>
                <DetailContent contents={contents} />
              </div>
            </div>
          </section>

          {/* 후원 정보, 버튼 영역 */}
          <section className='relative col-start-3 col-end-4 row-start-1 row-end-5 ml-auto flex w-full max-w-[40rem] flex-col justify-between py-20'>
            <motion.div
              className='sticky top-0 z-10 w-full'
              style={detailTitleAnimation}
              ref={detailTitleRef}
            >
              <DetailTitle
                name={`${idol.group} ${idol.name}`}
                title={title}
                location={subtitle}
                size='l'
              />
            </motion.div>

            <motion.div
              className='sticky top-0 z-10 flex flex-col w-full gap-10'
              style={donationInfoAnimation}
              ref={donationInfoRef}
            >
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
