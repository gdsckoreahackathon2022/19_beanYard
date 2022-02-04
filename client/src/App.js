import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import {
  Home,
  Login,
  Signup,
=======
import { 
  Home, 
  Login, 
  SignupCafe,
  SignupFarmer,
>>>>>>> 95b937465597d79e4a08d1feb33bbfeaf97cc85d
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
import { useReducer, createContext, useContext } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

const Header = () => {
  const authContext = useContext(AuthContext);
  return (
    <header className="App-header">

      <Logo width={60} height={60} />
      <div className="header-links">
        {!authContext.state.token ? (
          <div className="App-header-Login">
            <Link to="/">About Us</Link>
            <Link to="/howto">How To</Link>
<<<<<<< HEAD
            <Link to="/login" className="my-page-plain">
              Login
            </Link>
            <Link to="/signup" className="my-page-plain">
              Sign Up
            </Link>
=======
            <Link to="/login" className='my-page-plain'>Login</Link>
            <Link to="/choosetype" className='my-page-plain'>Sign Up</Link>
>>>>>>> 95b937465597d79e4a08d1feb33bbfeaf97cc85d
          </div>
        ) : (
          <>
            {authContext.state.userType === "C" ? (
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
            {authContext.state.userType === "C" ? (
              <div>
                <Link to="/" className="my-page-plain">
                  Logout
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
<<<<<<< HEAD
    // userType : cafe or farmer 구분. 'C', 'F'
    case "CafeLogin":
      return {
        token: action.token,
        userName: action.userName,
        userType: action.userType,
        userSeq: action.userSeq,
      };
    case "FarmerLogin":
      return {
        token: action.token,
        userName: action.userName,
        userType: action.userType,
        userSeq: action.userSeq,
      };
    case "logout":
      return { token: null, userName: null, userType: null };
    default:
      return state;
=======
    // userType : cafe or farmer 구분
      case "login":
          return { 
            token: action.token, 
            userName: action.userName, 
            userType: action.userType, 
            userSeq: action.userSeq 
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
>>>>>>> 95b937465597d79e4a08d1feb33bbfeaf97cc85d
  }
};

function App() {
  
  const [state, dispatch] = useReducer(reducer, {
<<<<<<< HEAD
    token: "tmp",
    userName: null,
    userType: "F",
    userSeq: 1,
=======
    token: null,
    userName: null,
    userType: null,
    userSeq: null,
>>>>>>> 95b937465597d79e4a08d1feb33bbfeaf97cc85d
  });

  return (
    <div className="App">
      <AuthContext.Provider value={{ state, dispatch }}>
        <Header />
<<<<<<< HEAD
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cafedetail/:postSeq" element={<CafeDetail />} />
          <Route path="/maincafe" element={<MainCafe />} />
          <Route path="/maincafe/apply" element={<CafeApply />} />
          <Route path="/mainfarmer" element={<MainFarmer />} />
          <Route path="/mypagecafe" element={<MyPageCafe />} />
          <Route path="/mypagefarmer" element={<MyPageFarmer />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
=======
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path='/login' element={<Login />} />
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
>>>>>>> 95b937465597d79e4a08d1feb33bbfeaf97cc85d
      </AuthContext.Provider>
    </div>
  );
}

export default App;
