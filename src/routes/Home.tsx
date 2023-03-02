import Search from "../components/Search";
import { useState } from "react";
import { UserProps } from "../types/user";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null); //<UserProps | null>
  const [error, setError] = useState(false);

  const loadUser = async (username: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data; //Desestruturando tudo que tem no "type"
    //Reduzindo o objeto do "data" (dados) a apenas essas propriedades.

    //Criando um novo objeto do tipo ":UserProps" com apenas essas variáveis.
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUserProps={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
  //3ª
};

export default Home;
