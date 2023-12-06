import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyVideos from "./components/MyVideos";
import Home from "./components/Home";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar"
import Header from "./Header"
import "./App.css"
import Search from "./components/Search";
import Subscription from "./components/Subscription";
import Library from "./components/Library";
import History from "./components/History";
import Trending from "./components/Trending";
import WatchLater from "./components/WatchLater";
import LikedVideos from "./components/LikedVideos";
import ShowMore from "./components/ShowMore";

const WithSidebar = ({children}) => {
    return (<div className="app_container">
    <Header/>
    <div className='app_page'>
    <Sidebar />
    {children}
    </div>
    </div>)
}

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/my-videos" element={<WithSidebar><MyVideos /></WithSidebar>} />
                <Route path="/recommended" element = {<WithSidebar><RecommendedVideos /></WithSidebar>} />
                <Route path="/home" element={<WithSidebar><Home /></WithSidebar>} />
                <Route path="/search" element={<WithSidebar><Search /></WithSidebar>} />
                <Route path="/subscription" element={<WithSidebar><Subscription/></WithSidebar>} />
                <Route path="/library" element={<WithSidebar><Library /></WithSidebar>} />
                <Route path="/history" element={<WithSidebar><History /></WithSidebar>} />
                <Route path="/trending" element={<WithSidebar><Trending /></WithSidebar>} />
                <Route path="/watch-later" element={<WithSidebar><WatchLater /></WithSidebar>} />
                <Route path="/liked-videos" element={<WithSidebar><LikedVideos /></WithSidebar>} />
                <Route path="/show-more" element={<WithSidebar><ShowMore /></WithSidebar>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<Welcome/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;