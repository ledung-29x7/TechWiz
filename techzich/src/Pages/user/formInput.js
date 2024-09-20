import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormInputUser({
  icon,
  titleInput,
  type,
  nameInput,
  value,
  placeholder,
  onChange,
  afocus
}) {
  return (
    <div className="mb-4 relative w-full outline-none">
      <label
        for="email-address-icon"
        class="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
      >
        {titleInput}
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <FontAwesomeIcon style={{ color: "#a4adbc" }} icon={icon} />
        </div>
        <input
            id="email-address-icon"
            class="bg-gray-50 border border-gray-300  text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type={type}
            name={nameInput}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
            autoFocus={afocus}
        />
      </div>
    </div>
  );
}
export default FormInputUser;
