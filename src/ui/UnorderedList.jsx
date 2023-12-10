function UnorderedList({ lists }) {
  return (
    <ul className="list-disc list-inside">
      {lists.map((list, i) => (
        <li key={i}>{list.content}</li>
      ))}
    </ul>
  );
}

export default UnorderedList;
