import Info from "./Info";
const Infos = ({ info, onDelete}) => {
  return (
    <>
      {info.map((info) => (
        <Info key={info.id} info={info} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Infos;
