export default function ItemDetailApp({ item }) {
  return (
    <div>
      <img src={item.icon} alt="" />
      <h1>{item.title}</h1>
      <ul></ul>
    </div>
  );
}
