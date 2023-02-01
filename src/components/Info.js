import { FaTimes } from "react-icons/fa";

const Info = ({ info, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {info.name}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() =>onDelete(info.id)}
        />
      </h3>
      <p>{info.email}</p>
      <p>{info.phone}</p>
      <p>{info.birthdate}</p>
    </div>
  )
}

export default Info;
