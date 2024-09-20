import MenuItem from "./menuIteam";

function SiderbarDriver({title,icon,to}) {
  return (
    <div className="  font-medium">
      <div className=" flex flex-col gap-10 pt-10  w-full ">
        <MenuItem
          title={"Emergency"}
          icon={"fa-solid fa-users"}
          to={"/driver"}
        />
        <MenuItem
          title={"History"}
          icon={"fa-solid fa-hotel"}
          to={"/driver"}
        />
        <MenuItem
          title={"Danh sách bookings"}
          icon={"fa-solid fa-clipboard-list"}
          to={"/driver/driver"}
        />
      </div>
    </div>
  );
}

export default SiderbarDriver
