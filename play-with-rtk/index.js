const store = require("./app/store.js");
const { fetchVideos, fetchRelatedVideos } = require("./features/video/videoSlice.js");


// disptach actions
store.dispatch(fetchVideos())
     .then(() => {
        const {tags} = store.getState().video.videos;
        
        store.dispatch(fetchRelatedVideos(tags))
    }
    );
