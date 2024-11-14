import Usercard from "../Usercard";


function UserInfo() {
    return (
        <div className="my-10 " >
            <h1 className="mb-8 text-2xl font-serif text-center" >User Info</h1>
            <div className="flex justify-between gap-5" >
                <Usercard></Usercard>
                <Usercard></Usercard>
                <Usercard></Usercard>
                <Usercard></Usercard>
            </div>
        </div>
    );
}

export default UserInfo;