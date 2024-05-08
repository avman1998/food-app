const Shimmer = () => {
  let shimmer = new Array(10).fill("");
  return (
    <div
      className="flex flex-wrap gap-3
    m-2
    "
    >
      {" "}
      {shimmer.map((item) => {
        return <div className="w-[200px] h-[300px] bg-[#C4CACD]">{item}</div>;
      })}
    </div>
  );
};
export default Shimmer;
