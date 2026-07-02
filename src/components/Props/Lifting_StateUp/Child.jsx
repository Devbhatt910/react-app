const Child = ({text}) => {
  return <div>
    input: <input type="text" onChange={(e)=>text(e.target.value)}/>
  </div>;
};

export default Child;
