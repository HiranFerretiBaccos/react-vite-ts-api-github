import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import classesUser from "./User.module.css";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classesUser.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classesUser.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classesUser.stats}>
        <div>
          <p>Seguidores</p>
          <p className={classesUser.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo</p>
          <p className={classesUser.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
};

export default User;
