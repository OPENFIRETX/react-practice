import { useRef, useState } from "react"

// 子组件
const Student = (props) => {

    const [info, setInfo] = useState({
        team: "rma",
        num: 7
    })
    console.log("进入");

    const handleClick = () => {
        // const newInfo = Object.assign({}, info);
        // newInfo.team = "liyade"
        // newInfo.num = 8
        // setInfo(newInfo)
        //简写
        setInfo({ ...info, team: "liyade" })
        console.log(h1Ref.current);
    }

    
    const h1Ref = useRef();




    return     <div ref={h1Ref}>名字是 {props.name} ---  年龄是 {props.age} -----队伍是 {info.team}------ 号码是 {info.num}

        <div >
            <button onClick={handleClick}>点击</button>
        </div>
    </div>

}

export default Student