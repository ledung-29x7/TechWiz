import MenuItem from "./menuIteam";

function SiderbarManage() {
    return (
        <div className="  font-medium">
          <div className=" flex flex-col gap-10 pt-10  w-full ">
            <MenuItem
              title={"Emergency Requests"}
              icon={"fa-solid fa-clipboard-list"}
              to={"/manage"}
            />
            <MenuItem
              title={"Ambulance"}
              icon={"fa-solid fa-users"}
              to={"/manage/abulance"}
            />
            <MenuItem
              title={"Driver Profiles"}
              icon={"fa-solid fa-hotel"}
              to={"/manage/driverprofiles"}
            />
          </div>
        </div>
      );
}

export default SiderbarManage