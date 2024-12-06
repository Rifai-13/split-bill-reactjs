

export default function FormSplitBill() {
    return (
        <form action="" className="form-split-bill">
           <h2>Split Bill X</h2>

           <label htmlFor="">Total Biaya</label>
           <input type="text" name="" id="" />

           <label htmlFor="">Tagihan Kamu</label>
           <input type="text" name="" id="" />

           <label htmlFor="">Tagihan x</label>
           <input type="text" name="" id="" disabled/>

           <label htmlFor="">Di bayarkan Oleh</label>
           <select name="" id="">
            <option value="user">kamu</option>
            <option value="friend">x</option>
           </select>
           
           <button className="button">Submit</button>
        </form>
    );
}