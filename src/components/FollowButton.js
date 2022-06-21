
function FollowButton(){

    const [follow, setFollow] = React.useState(false);
    return (
        <div>{follow ? "FOLLOW" : "UN"}</div>
    );
}