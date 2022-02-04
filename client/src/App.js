import './styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import { 
  Home, 
  Login, 
  Signup,
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
} from "react";


const Header = () => {
  const authContext = useContext(AuthContext);
  return (
    <header className="App-header">
      <div>Logo</div>
      <Link to="/">About Us</Link>
      <Link to="/howto">How To</Link>

      {!authContext.state.token ? (
        <div className="App-header-Login">
          <Link to="/login">Login</Link>
          <Link to="/choosetype">Sign Up</Link>
        </div>
      ) : (
        <div>
          {authContext.state.userType === 'CAFE' ? (
          <div>
            <Link to="/maincafe">Main</Link>
            <Link to="/mypagecafe">Cafe Owner</Link>
          </div>
          ) : (
          <div>
            <Link to="/mainfarmer">Main</Link>
            <Link to="/mypagefarmer">Farmer</Link>
          </div>
          )}
        </div>
      )}
    </header>
  );
}

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
  }
};

function App() {
  
  const [state, dispatch] = useReducer(reducer, {
    token: null,
    userName: null,
    userType: null,
    userSeq: null,
  });

  return (
    <div className="App">
      <AuthContext.Provider value={{ state, dispatch }}>
        <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
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
