const ArrayPropEx = ({arr}) => {
  return (
    <div>
      <h3>ArrayPropEx</h3>
      <ul>
        {arr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayPropEx