import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface LoginContextType {
  getLoginStatus: boolean;
  chLogin: () => void;
  chLogout: () => void;
}

// 초기값 설정
const defaultLoginContext: LoginContextType = {
  getLoginStatus: false,
  chLogin: () => {}, // 비어 있는 함수
  chLogout: () => {}, // 비어 있는 함수
};

const LoginContext = createContext<LoginContextType>(defaultLoginContext);

// Context를 사용하기 쉽게 하는 Hook
export const useLogin = () => useContext(LoginContext);

// Provider 컴포넌트
export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [getLoginStatus, setLoginStatus] = useState(false);

  const chLogin = () => setLoginStatus(true);
  const chLogout = () => setLoginStatus(false);

  useEffect(() => {
    const useremail = sessionStorage.getItem("email");
    if (useremail != null) {
      chLogin();
    }
  }, []);

  return (
    <LoginContext.Provider value={{ getLoginStatus, chLogin, chLogout }}>
      {children}
    </LoginContext.Provider>
  );
};
