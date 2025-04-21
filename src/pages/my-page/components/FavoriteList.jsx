import AvatarProfile from '@components/favorites/AvatarProfile';

const FavoriteList = ({ favorite, idol, setFavorite, setIdol }) => {
  const handleRemoveFavorite = (favoriteItem) => {
    console.log('삭제:', favoriteItem);

    setFavorite((prev) => prev.filter((i) => i.id !== favoriteItem.id));
    setIdol((prev) => [...prev, favoriteItem]);
  };

  return (
    <div className='flex flex-wrap gap-6'>
      {favorite && favorite.length > 0 ? (
        favorite.map((item) => (
          <AvatarProfile
            key={item.id}
            id={item.id}
            src={item.imageUrl}
            name={item.name}
            group={item.group}
            size='l'
            onItemClick={() => handleRemoveFavorite(item)}
          >
            <AvatarProfile.IdolRemoveButton />
          </AvatarProfile>
        ))
      ) : (
        <span className='text-white'>없음</span>
      )}
    </div>
  );
};

export default FavoriteList;
