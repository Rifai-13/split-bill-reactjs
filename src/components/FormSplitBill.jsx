
import { useState } from "react";

export default function FormSplitBill({selectedFriend, onSplitBill}) {

    const [amount, setAmount] = useState("");
    const [mybill, setMyBill] = useState("");
    const friendBill = amount ? amount - mybill : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {

        e.preventDefault();
        if(!amount || !mybill) return;

        onSplitBill(whoIsPaying === "user" ? friendBill : -mybill);
    }

    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
           <h2>Split Bill {selectedFriend.name}</h2>

           <label htmlFor="">Total Biaya</label>
           <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>

           <label htmlFor="">Tagihan Kamu</label>
           <input type="text" value={mybill} onChange={(e) => setMyBill(e.target.value)}/>

           <label htmlFor="">Tagihan {selectedFriend.name}</label>
           <input type="text" value={friendBill} disabled/>

           <label htmlFor="">Di bayarkan Oleh</label>
           <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">kamu</option>
            <option value="friend">{selectedFriend.name}</option>
           </select>
           
           <button className="button">Submit</button>
        </form>
    );
}