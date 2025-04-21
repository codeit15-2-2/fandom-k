import { useState } from 'react';

const AddFavorite = ({ idol, setIdol, setFavorite }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds(
      (prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
      console.log(selectedIds),
    );
  };

  const handleAddFavorites = () => {
    const selectedIdols = idol.filter((idol) => selectedIds.includes(idol.id));
    setFavorite((prev) => [...prev, ...selectedIdols]);
    setIdol((prev) => prev.filter((idol) => !selectedIds.includes(idol.id)));
    setSelectedIds([]);
  };

  return (
    <div className='mt-6 w-full bg-amber-900'>
      {idol.map((idolItem) => (
        <div
          className='mb-2 flex h-20 w-20 border border-amber-400'
          key={idolItem.id}
        >
          <div
            onClick={() => toggleSelect(idolItem.id)}
            className='flex flex-col'
          >
            <span>{idolItem.name}</span>
            <span>{idolItem.group}</span>
            <span>{idolItem.id}</span>
          </div>
        </div>
      ))}

      <button onClick={handleAddFavorites}>눌러</button>
    </div>
  );
};

export default AddFavorite;
