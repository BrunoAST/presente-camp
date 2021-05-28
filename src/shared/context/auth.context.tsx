import React, {createContext, ReactNode, useContext, useState} from 'react';
import IUserData from '../interfaces/user-data.interface';

declare type UserType = 'Student' | 'Master';

type AuthContext = {
    isSigned: boolean;
    type: UserType;
    setType : (type: UserType) => void;
    userData: IUserData;
    setUserData: (userData: IUserData) => void;
}

const AuthContext = createContext<AuthContext>({
    isSigned : false,
    type: {} as UserType,
    setType: type => console.warn('no data provided'),
    userData: {} as IUserData,
    setUserData: userData => console.warn('no data provided'),
});

const AuthProvider: React.FC<ReactNode> = ({children}) => {
    const [type, setType] = useState<UserType>({} as UserType);
    const [userData, setUserData] = useState<IUserData>({} as IUserData);
    const [isSigned] = useState<boolean>(true);

    return (
        <AuthContext.Provider value={{userData, setUserData, type, setType, isSigned}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export function useAuthProvider() {
    const context = useContext(AuthContext);
    const {userData, setUserData, type, setType, isSigned} = context;

    return {type, userData, setUserData, setType, isSigned};
}

