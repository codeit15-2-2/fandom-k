import AvatarProfile from '@components/favorites/AvatarProfile';
import useWindowSize from '@hooks/useWindowSize';

const FavoriteList = ({ favorite, idol, setFavorite, setIdol }) => {
  const width = useWindowSize();
  const avatarSize = width < 769 ? 'm' : 'l';


  //favorite에서 삭제
  const handleRemoveFavorite = (favoriteItem) => {
    console.log('삭제:', favoriteItem);

    setFavorite((prev) => prev.filter((i) => i.id !== favoriteItem.id));
    setIdol((prev) => [...prev, favoriteItem]);
  };

  return (
    <div className='scrollbar-hide overflow-x-auto whitespace-nowrap'>
      <div className='flex gap-4 px-2'>
        {favorite && favorite.length > 0 ? (
          favorite.map((item) => (
            <div key={item.id} className='inline-flex flex-col items-center'>
              <AvatarProfile
                id={item.id}
                src={item.imageUrl}
                name={item.name}
                group={item.group}
                size={avatarSize}
                onItemClick={() => handleRemoveFavorite(item)}
              >
                <AvatarProfile.IdolRemoveButton />
              </AvatarProfile>
            </div>
          ))
        ) : (
          <div className='flex h-[160px] w-full items-center justify-center text-[2.4rem] text-gray-400'>
            아직 관심있는 아이돌이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
