
import Friend from "./Friend";

export default function FriendList({friends}){
    return (
        <ul>
            {friends.map((friend, index) => (
               <friend friend={friend} key={index}/>
            ))}
        </ul>
    );
}