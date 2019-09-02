import { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/authContext';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};
export default ResolveAuthScreen;
