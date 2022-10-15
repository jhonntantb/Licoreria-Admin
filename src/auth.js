import { useState, useEffect, useContext, createContext } from 'react';
import { supabase } from './supabase';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  // eslint-disable-next-line react/react-in-jsx-scope
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const email = 'jhonntantb@gmail.com';
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = async () => {
    // eslint-disable-next-line no-shadow
    const { error, user } = await supabase.auth.signIn({ email });

    if (error) {
      console.log(error);
    }

    return { error, user };
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }

    setUser(null);
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const user = supabase.auth.user();
    setUser(user);

    const auth = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') setUser(null);
      if (event === 'SIGNED_IN') setUser(session.user);
    });

    return () => auth.unsubscribe();
  }, []);

  return {
    user,
    login,
    logout,
  };
}

export const useAuth = () => useContext(authContext);
