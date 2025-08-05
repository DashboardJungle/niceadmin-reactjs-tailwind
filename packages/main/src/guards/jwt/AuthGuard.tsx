// import { useNavigate } from 'react-router';
// import { AuthContext } from 'src/context/AuthContext';
// import { useContext, useEffect } from 'react';

// const AuthGuard = ({ children }: any) => {
//     const { isAuthenticated, isInitialized } = useContext(AuthContext);

//     const navigate = useNavigate();

//     useEffect(() => {

//         if (!isAuthenticated) {
//             navigate('/auth/auth1/login', { replace: true });
//         }
//     }, [isAuthenticated, navigate]);

//     return children;
// };

// export default AuthGuard;


// components/AuthGuard.tsx
import { Spinner } from 'flowbite-react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from 'src/context/AuthContext';

const AuthGuard = ({ children }: { children: JSX.Element }) => {
    const { isInitialized, isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if (!isInitialized) {
        <Spinner size="md" />
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/auth1/login" replace state={{ from: location }} />;
    }

    return children;
};

export default AuthGuard;

