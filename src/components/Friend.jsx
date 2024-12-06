export default function Friend({ friend }) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && <p className="red">kamu berhutang Rp.{Math.abs(friend.balance)} ke {friend.name}</p>}
            {friend.balance > 0 && <p className="green">berhutang Rp.{Math.abs(friend.balance)} ke kamu</p>}
            {friend.balance === 0 && <p>kamu dan {friend.name} tidak ada hutang</p>}
            <button className="button">pilih</button>
        </li>
    );
}