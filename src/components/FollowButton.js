import React from "react";

function FollowButton(){

    const [follow, setFollow] = React.useState(false);
    return (
        <P>
            {follow ? "FOLLOW" : "UN"}
        </P>
    );
}

export default FollowButton;