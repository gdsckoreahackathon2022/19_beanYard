import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import { 
  Home, 
  Login, 
  Logout,
  SignupCafe,
  SignupFarmer,
  CafeDetail,
  MainCafe,
  MainFarmer,
  MyPageCafe,
  CafeApply,
  MyPageFarmer,
  HowTo,
  ChooseType,
  NotFound,
} from "./pages";
import {
  useReducer,
  createContext,
  useContext,
  useEffect,
} from "react";
import {ReactComponent as Logo} from './assets/logo.svg';

const Header = () => {
  const authContext = useContext(AuthContext);
  return (
    <header className="App-header">
      <Logo width={60} height={60} />
      <div className="header-links">
        {!authContext.state.token ? (
          <>
            <div className="App-header-Login">
              <Link to="/">About Us</Link>
              <Link to="/howto">How To</Link>
            </div>
            <div>
              <Link to="/login" className="my-page-plain">
                Login
              </Link>
              <Link to="/choosetype" className="my-page-plain">
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          <>
<<<<<<< HEAD
            {authContext.state.userType === "CAFE" ? (
=======
            {authContext.state.userType === 'CAFE' ? (
>>>>>>> b711d23381948adc9414f3edeca5208e5051d36a
              <div>
                <Link to="/">About Us</Link>
                <Link to="/howto">How To</Link>
                <Link to="/maincafe">Main</Link>
              </div>
            ) : (
              <div>
                <Link to="/">About Us</Link>
                <Link to="/howto">How To</Link>
                <Link to="/mainfarmer">Main</Link>
              </div>
            )}
<<<<<<< HEAD
            {authContext.state.userType === "CAFE" ? (
              <div>
                <Link to="/" className="my-page-plain">
                  Log Out
                </Link>
                <Link to="/mypagecafe" className="my-page-btn">
                  My Page
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/" className="my-page-plain">
                  Log Out
                </Link>
                <Link to="/mypagefarmer" className="my-page-btn">
                  My Page
                </Link>
              </div>
            )}
            <div>{authContext.state.userType === "CAFE"}</div>
=======
            {authContext.state.userType === 'CAFE' ? (
                <div>
                  <Link to="/logout" className='my-page-plain'>Log Out</Link>
                  <Link to="/mypagecafe" className='my-page-btn'>My Page</Link>
                </div>
              ) : (
                <div>
                  <Link to="/logout" className='my-page-plain' >Log Out</Link>
                  <Link to="/mypagefarmer" className='my-page-btn'>My Page</Link>
                </div>
            )}
>>>>>>> b711d23381948adc9414f3edeca5208e5051d36a
          </>
        )}
      </div>
    </header>
  );
};

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    // userSeq : token이랑 같이 백에 넘기기
    // userType : cafe or farmer 구분
    case "login":
      return {
        token: action.token,
        userName: action.userName,
        userType: action.userType,
        userSeq: action.userSeq,
      };
    case "logout":
      return {
        token: null,
        userName: null,
        userType: null,
        userSeq: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    token: null,
    userName: null,
    userType: null,
    userSeq: null,
  });

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("loggedInfo")));

    const initUserInfo = async () => {
        const loggedInfo = await JSON.parse(
            localStorage.getItem("loggedInfo")
        );
        console.log("-------------새로 고침------------");
        console.log(loggedInfo);

        if (loggedInfo) {
            const { token, userName, userType, userSeq } = loggedInfo;
            await dispatch({
                type: "login",
                token: token,
                userName: userName,
                userType: userType,
                userSeq: userSeq,
            });
        } else {
            await dispatch({
                type: "logout",
            });
        }
    };
    initUserInfo();
  }, [state.token]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ state, dispatch }}>
        <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup/cafe' element={<SignupCafe />} />
            <Route path='/signup/farmer' element={<SignupFarmer />} />
            <Route path='/cafedetail/:postSeq' element={<CafeDetail />} />
            <Route path='/maincafe' element={<MainCafe />} />
            <Route path='/maincafe/apply' element={<CafeApply />} />
            <Route path='/mainfarmer' element={<MainFarmer />} />
            <Route path='/mypagecafe' element={<MyPageCafe />} />
            <Route path='/mypagefarmer' element={<MyPageFarmer />} />
            <Route path='/howto' element={<HowTo />} />
            <Route path='/choosetype' element={<ChooseType />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
