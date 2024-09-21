import { useEffect,useState } from "react";
import { useStore } from "../../Store/contexts/hook";
import { actions } from "../../Store/action";
import * as apis from "../../apis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditUser from "./editUser";
import Delete from "./delete";
import RowUser from "./rowUser";

function ListUser () {

    const [isShowEdit, setIsShowEdit] = useState(false);
    const [isShowAdd, setisShowAdd] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [isSucc,setIsSucc] = useState(false);
    const [users,setUser] = useState([]);
    const [editUs,setEditUs] = useState({});
    const [state, dispatch] = useStore();
    const { isEdit,isAdd,isDelete,idEdit,getData,isSuccessfull } = state;

    // Call apis
    const CallData = () => {
        const getData = async(host) =>{
            try {
                const response = await apis.getUser(host)
                if(response.status === 200){
                    return response
                }
                return{
                    response: []
                }
            } catch (error) {
                return{
                    response: []
                }
            }
        }
        getData("")
    }
    
    // callBack apis 
    useEffect(() => {
        CallData();
        const callBack = setInterval(CallData,5000);
        
        return()=> callBack && clearInterval(callBack)
    },[])

    // assign value to users
    useEffect(()=>{
        setUser(getData)
    },[getData])

    // get id Edit
    useEffect(() => {
        const GetEdit = (idEdit) => {
            if(idEdit !== null){
                var getIdEND = users?.find(ob => ob.id === idEdit) 
                setEditUs(getIdEND)
            }
        }
        GetEdit(idEdit)
    },[idEdit])

    // Open form Edit
    useEffect(() => {
        function OpenEdit(isEdit) {
            return (
                setIsShowEdit(isEdit)
            );
        }
        OpenEdit(isEdit)
    }, [isEdit])

    // Open form Add

    //  Open form Add
    useEffect(() => {
        function OpenAdd (isAdd) {
            return(
                setisShowAdd(isAdd)
            );
        }
        OpenAdd(isAdd)
    },[isAdd])

    useEffect(() => {
        function OpenDelete(dlete) {
            return (
                setIsShowDelete(dlete)
            );
        }
        OpenDelete(isDelete)
    }, [isDelete])

    // 
    useEffect(() => {
        setIsSucc(isSuccessfull)
        setTimeout(() => {
            setIsSucc(false)
        }, 5000);
    },[isSuccessfull])

    // When you click outside the modal, it will close all form
    const handleClickOutsideModal = (event) => {
        var overlay = document.getElementById("overlay")
        if (event.target === overlay) {
            setIsShowEdit(false)
            setisShowAdd(false)
            dispatch(actions.ModalEdit(false))
        }
    };
    useEffect(() => {
        window.addEventListener('click', handleClickOutsideModal)
    })

    return (
        <div className=" px-10 bg-gray-50 py-10 rounded-md">
            <div className=" containerr">
                <div className="  flex justify-between items-end pb-6">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-lg text-gray-600">
                            Danh sách người dùng
                        </h4>
                    </div>

                </div>
                {isSucc ?
                    <div className="">
                        <div className=" bg-green-600">
                            <h4 className=" text-white"> successfully </h4>
                        </div>
                    </div>
                :null}
                <div className=" mt-4 rounded-md bg-white">
                    <table className="  w-full ">
                        <thead className=" text-left text-sm text-gray-700  h-12">
                            <th>Email</th>
                            <th>Họ</th>
                            <th>Tên</th>
                            <th>Vai trò</th>
                            <th>Thao tác</th>
                        </thead>
                        {users?.map((us)=>(
                            <RowUser
                            key={us.id}
                            user={us}
                        />
                        ))}
                    </table>
                </div>
            </div>
            {/* modal edit */}
            {isShowEdit ?
                <div className="modal z-50">
                    <div className="flex w-full h-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <EditUser user={editUs} />
                        </div>
                    </div>
                </div>
                : null
            }

            {/* modal Delete */}
            {isShowDelete ?
                <div className="modal z-50">
                    <div className="flex w-full h-full">
                        <div id="overlay" className="modal_overlay"></div>
                        <div className="modal_body">
                            <Delete delet={editUs}/>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    );
}
export default ListUser