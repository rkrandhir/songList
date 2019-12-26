import { combineReducers } from 'redux';  //named exports 

const songsReducer = () => {
    return [
        {title: 'Mohabbatein', duration: '4:05'},
        {title: 'Dil to pagal hai', duration: '4:05'},
        {title: 'Dil Se', duration: '4:05'},
        {title: 'DDLG', duration: '4:05'},
        {title: 'Baazigar', duration: '4:05'},
        {title: 'Kuch Kuch hota hai', duration: '4:05'}
    ];
};

//initially selectedSong will be NULL
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    //if you have song selected action then return the above otherwise return -> default song selected below
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})