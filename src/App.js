import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";
import ProtectedRoute from "./helpers/protected-route";
import IsUserLoggedIn from "./helpers/is-user-logged-in";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Sign-up"));
const NotFound = lazy(() => import("./pages/Not-found"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />

            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user} exact>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.LOGIN}
              element={
                <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}>
                  <Login />
                </IsUserLoggedIn>
              }
            />
            <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}>
                  <SignUp />
                </IsUserLoggedIn>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
