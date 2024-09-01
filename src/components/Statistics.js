export function Statistics({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items your packing list!
      </footer>
    );
  const totalItemsCount = items.length;
  const packedItemsCount = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItemsCount / totalItemsCount) * 100);
  return (
    <>
      <footer className="stats">
        {percentage === 100
          ? "You've got everything packed, Let's go!"
          : `You've packed ${packedItemsCount} items from ${totalItemsCount} items (${percentage}%)`}
      </footer>
    </>
  );
}
