const Block = ({ input }) => {
  console.log(input);
  let messageDisplay;
  input > 35 ? (messageDisplay = "hot") : (messageDisplay = "cold");
  return (
    <>
      <div>
        <h2>{messageDisplay}</h2>
      </div>
    </>
  );
};

export default Block;
