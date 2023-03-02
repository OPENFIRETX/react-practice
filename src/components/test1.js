import { useState } from "react";

let arr = ["a", "b", "c"]
const arrDOM = arr.map(item => <div key={item} style={{ color: "blue" }}>{item}</div>)

const click = (e) => {
    console.log(e);
    console.log("点击了");
}


const Test1 = () => {


    const numArr = useState(1);
    // const num = numArr[0]
    // const setNum = numArr[1]
    //简写
    const [number, setNumber] = numArr

    const clickAdd = () => {
        setTimeout(() => {
            // setNumber(number + 1)
            setNumber(prevState => prevState + 1)
        }, 1000);

    }
    const clickSub = () => {
        setNumber(number - 1)
    }




    return <div>
        <h1>数字{number}</h1>
        <h1>{arrDOM}</h1>
        <h1 style={{ color: "red" }}>列表组件</h1>
        <button onClick={clickAdd}>点击按钮++++</button>
        <button onClick={clickSub}>点击按钮-----</button>
    </div>

}

export default Test1