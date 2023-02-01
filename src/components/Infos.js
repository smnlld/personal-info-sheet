import Info from "./Info";
const Infos = ({ infos}) => {
  return (
    <>
      {infos.map((info) => (
        <Info key={info.id} info={info}/>
      ))}
    </>
  );
};

export default Infos;
