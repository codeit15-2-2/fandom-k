import FavoriteIdolList from '../components/FavoriteIdolList';
import MiddleDivider from '../components/MiddleDivider';

//화면상단 관심있는 아이돌로 추가된 아이돌들이 나타나는 섹션
//FavoriteIdolList 컴포넌트를 렌더링함



const FavoriteListSection = ({ favorites, setFavorites, setIdols }) => {
  return (
    <div className='flex flex-col gap-20 py-10'>
      <h2 className='text-shadow-2xl mt-20 text-[1.8rem] font-bold sm:text-[2.4rem]'>
        내가 관심있는 아이돌
      </h2>

      <FavoriteIdolList
        favorites={favorites}
        setFavorites={setFavorites}
        setIdols={setIdols}
      />

      {/* 중간 구분선 */}
      <MiddleDivider />
    </div>
  );
};

export default FavoriteListSection;
