const FavoriteList = ({ favorite, idol, setFavorite, setIdol }) => {
  const handleRemoveFavorite = (favoriteItem) => {
    console.log('삭제:', favoriteItem);

    setFavorite((prev) => prev.filter((i) => i.id !== favoriteItem.id));
    setIdol((prev) => [...prev, favoriteItem]);
  };

  return (
    <div className='w-full bg-black h-30'>
      <div className='flex w-full gap-6 bg-black'>
        {favorite && favorite.length > 0 ? (
          favorite.map((favoriteItem) => (
            <div
              className='mb-2 flex h-20 w-20 border border-red-400'
              key={favoriteItem.id}
            >
              <div className='flex flex-col'>
                <span className='text-red-500'>{favoriteItem.name}</span>
                <span className='text-red-500'>{favoriteItem.group}</span>
                <span className='text-red-500'>{favoriteItem.id}</span>
                <button
                  onClick={() => handleRemoveFavorite(favoriteItem)}
                  className='w-30 bg-amber-500 px-4 py-4 text-black'
                >
                  삭제
                </button>
              </div>
            </div>
          ))
        ) : (
          <span className='text-white'>입력해</span>
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
