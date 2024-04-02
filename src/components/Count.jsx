export default function Count({ count }) {
  return (
    <div>
      Add Count:
      <div>{count.addCount}</div>
      Update Count:
      <div>{count.updateCount}</div>
    </div>
  );
}
