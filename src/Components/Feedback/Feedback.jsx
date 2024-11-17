import FeedCard from "./FeedCard";

const Feedback = ({ feedData }) => {
    return (
        <>
         <h1 className="text-center font-bold my-3 text-xl">Happy Clients</h1>
            <div className="grid grid-cols-3 gap-2">
                {
                    feedData.map(feeds => <FeedCard key={feeds.id} feeds={feeds}></FeedCard>)
                }
            </div>
        </>
    );
};

export default Feedback;