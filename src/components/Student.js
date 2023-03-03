import { useRef, useState } from "react"
import Action from "./Action"
// 子组件
const Student = (props) => {

    const [info, setInfo] = useState({
        team: "rma",
        num: 7
    })

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


    const [actions, setActions] = useState(["射门", "过人", "传球", "解围"])

    const [newAction, setNewAction] = useState("")



    const changeNewAction = (e) => {
        setNewAction(e.target.value)
    }

    const clickAdd = () => {
        console.log(newAction);
        setActions([...actions, newAction])
    }

    const getAction = (value) => {
        console.log(value);

    }
    const handleDelete = () => {
        console.log("删除");
        const arr = [...actions]
        arr.pop()
        console.log(arr);
        setActions(arr)

    }



    return <div ref={h1Ref}>名字是 {props.name} ---  年龄是 {props.age} -----队伍是 {info.team}------ 号码是 {info.num}

        <div>
            <h3>行为：</h3>
            {actions.length==0?<div>无数据！！！！</div>:actions.map(item => <Action getAction={getAction} key={item} action={item} />)}

        </div>

        <div><h3>添加 行为：</h3>
            <input type="text" value={newAction} onChange={changeNewAction}></input>
            <button onClick={clickAdd}>添加</button>
        </div>

        <div >
            <button onClick={handleDelete}>删除</button>
        </div>
    </div>

}

export default Student