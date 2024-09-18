import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormInputUser({icon,type,nameInput,value,placeholder,onChange}) {
    return (
        <div className=" relative w-full outline-none">
            <div className=' absolute  pl-4 pb-1 '>
                <FontAwesomeIcon style={{ color: "#a4adbc" }} icon={icon} />
            </div>
            <input className=" block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                type={type}
                name={nameInput}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}
export default FormInputUser;