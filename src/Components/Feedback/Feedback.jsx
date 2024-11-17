import FeedCard from "./FeedCard";

const Feedback = ({feedData}) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {
                feedData.map(feeds => <FeedCard key={feeds.id} feeds={feeds}></FeedCard>)
            }
        </div>
    );
};

export default Feedback;