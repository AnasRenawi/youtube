import { TuneOutlined } from '@mui/icons-material';
import './Search.css'
import { useSearchParams } from "react-router-dom";
import ChannelRow from '../ChannelRow';
import VideoRow from './VideoRow';


const Search = () => {
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("value")


    return (
    <div className='searchPage'>
            <h2>Searched for {searchValue}</h2>
        <div className='searchPage_filter'>
            <TuneOutlined/>
            <h2>FILTER</h2>
        </div>

        <hr/>

        <ChannelRow 
        image='https://yt3.googleusercontent.com/ytc/APkrFKZffQLw2Cqp2yh5r_URmGxvsUDvhy3XlT6Hmq4U5Q=s176-c-k-c0x00ffffff-no-rj'
        channel='Anas Renawi'
        verified
        subs='658K'
        noOfVideos={29}
        description='Welcome to my channel'
        />

        <hr/>
        <VideoRow
        views='1.2M'
        subs='943K'
        description='Do you want to learn from my channel'
        timestamp='59 seconds ago'
        channel='anas renawi'
        title='lets Build a Youtube Clone with REACT JS'
        image='https://i.ytimg.com/vi/iGNq_poNvf8/hqdefault.jpg'
        />
        <VideoRow
        views='1.2M'
        subs='943K'
        description='Do you want to learn from my channel'
        timestamp='59 seconds ago'
        channel='anas renawi'
        title='lets Build a Youtube Clone with REACT JS'
        image='https://i.ytimg.com/vi/iGNq_poNvf8/hqdefault.jpg'
        />
        <VideoRow
        views='1.2M'
        subs='943K'
        description='Do you want to learn from my channel'
        timestamp='59 seconds ago'
        channel='anas renawi'
        title='lets Build a Youtube Clone with REACT JS'
        image='https://i.ytimg.com/vi/iGNq_poNvf8/hqdefault.jpg'
        />
        <VideoRow
        views='1.2M'
        subs='943K'
        description='Do you want to learn from my channel'
        timestamp='59 seconds ago'
        channel='anas renawi'
        title='lets Build a Youtube Clone with REACT JS'
        image='https://i.ytimg.com/vi/iGNq_poNvf8/hqdefault.jpg'
        />
        <VideoRow
        views='1.2M'
        subs='943K'
        description='Do you want to learn from my channel'
        timestamp='59 seconds ago'
        channel='anas renawi'
        title='lets Build a Youtube Clone with REACT JS'
        image='https://i.ytimg.com/vi/iGNq_poNvf8/hqdefault.jpg'
        />
        <VideoRow
        views='1.2M'
        subs='943K'
        description='Do you want to learn from my channel'
        timestamp='59 seconds ago'
        channel='anas renawi'
        title='lets Build a Youtube Clone with REACT JS'
        image='https://i.ytimg.com/vi/iGNq_poNvf8/hqdefault.jpg'
        />
        <VideoRow
        views='1.2M'
        subs='943K'
        description='Do you want to learn from my channel'
        timestamp='59 seconds ago'
        channel='anas renawi'
        title='lets Build a Youtube Clone with REACT JS'
        image='https://i.ytimg.com/vi/iGNq_poNvf8/hqdefault.jpg'
        />

    </div>
    )
}

export default Search;