import Desktop from "../pages/Desktop/Desktop";
import FeedbackDetail from "../pages/FeedbackDetail/FeedbackDetail";
import NewFeedBack from "../pages/NewFeedBack/NewFeedBack";
import EditFeedBack from "../pages/EditFeedBack/EditFeedBack";
import RoadMap from "../pages/RoadMap/RoadMap";

export const  router = [
    {
        paths: '/',
        elements: Desktop
    },
    {
        paths: '/fedd-detail',
        elements: FeedbackDetail
    },
    {
        paths: '/new-fedd',
        elements: NewFeedBack
    },
    {
        paths: '/edit-feed',
        elements: EditFeedBack
    },
    {
        paths: '/roadmap',
        elements: RoadMap
    }
]