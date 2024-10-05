function Stats({ totalItems, packedItems }) {
  return (
    <div className='stats'>
      {totalItems > 0 ? (
        <p>
          👜 You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} ({Math.floor((packedItems / totalItems) * 100)}%)
        </p>
      ) : (
        "Start adding travel items! 👜"
      )}
    </div>
  );
}

export default Stats;
