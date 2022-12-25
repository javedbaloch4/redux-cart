export const Items = ({ item }) => {
  return (
    <div style={{ display: "flex", border: "1px solid blue", width: "25%" }}>
      <h3>{item.title}</h3>
      <img src={item.image} alt="" />
      <strong>Price: {item.price}</strong>
    </div>
  )
}
