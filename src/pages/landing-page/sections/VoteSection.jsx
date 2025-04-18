import IdolList from '@pages/landing-page/components/IdolList';

const idols = [
  {
    name: '카리나',
    rank: 1,
    img: 'https://i.scdn.co/image/ab67616100005174d57cec71915fe90346a37df6',
  },
  {
    name: '윈터',
    rank: 2,
    img: 'https://i.scdn.co/image/ab67616100005174ead4ff7bc938ff56d7b532f1',
  },
  {
    name: '닝닝',
    rank: 3,
    img: 'https://i.scdn.co/image/ab6761610000e5eb359e12a444719c79f3ebabf2',
  },
  {
    name: '지젤',
    rank: 4,
    img: 'https://i.scdn.co/image/ab6761610000e5ebf05fc4f9964b81fc37cb72fd',
  },
];

const VoteSection = () => {
  return (
    <section className='flex h-screen w-screen snap-start snap-always items-center justify-center overflow-hidden text-white'>
      <div className='flex w-[110rem] items-center justify-center gap-40'>
        {/* 텍스트 영역 */}
        <div className='flex h-full flex-1 flex-col justify-center gap-12'>
          <h1 className='text-right text-7xl/20 font-bold'>
            내가 만드는
            <span className='from-brand-1 to-brand-2 bg-gradient-to-r bg-clip-text text-transparent'>
              {' '}
              1위
            </span>
            <br />
            이달의 차트
          </h1>
          <p className='text-right text-4xl leading-snug'>
            내가 사랑하는 아티스트
            <br />내 손으로 1위 만들어야죠
          </p>
        </div>

        {/* 아이돌 리스트 */}
        <div className='m-8 flex flex-2 flex-col'>
          {idols.map(({ name, img, rank }) => (
            <IdolList
              key={name}
              name={name}
              img={img}
              rank={rank}
              votes='10,000'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoteSection;
