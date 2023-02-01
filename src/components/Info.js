import { FaTimes } from "react-icons/FaTimes";

const Info = ({ info }) => {
  return (
    <div className="task">
      <h3>
        {info.name}
        <FaTimes />
      </h3>
      <p>{info.email}</p>
      <p>{info.phone}</p>
      <p>{info.birthdate}</p>
    </div>
  );
};

export default Info;
