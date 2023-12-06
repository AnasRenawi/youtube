import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon} path='/' title='Home' />
        <SidebarRow Icon={WhatshotIcon} path='/trending' title='Trending' />
        <SidebarRow Icon={WhatshotIcon} path="/recommended" title='Recommended Videos' />
        <SidebarRow Icon={SubscriptionsIcon} path='/subscription' title='Subscription' />
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} path='/library' title='Library' />
        <SidebarRow Icon={HistoryIcon} path='/history' title='History' />
        <SidebarRow Icon={OndemandVideoIcon} path='/my-videos' title='Your videos' />        
        <SidebarRow Icon={WatchLaterIcon} path='/watch-later' title='Watch Later' />
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} path='/liked-videos' title='Liked videos' />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} path='/show-more' title='Show more' />
        <hr />
    </div>
  )
}

export default Sidebar