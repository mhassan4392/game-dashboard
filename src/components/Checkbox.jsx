import { useRef } from "react";
const Checkbox = ({ value = false, onChange = () => {} }) => {
  const input = useRef(null);
  return (
    <>
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(!value)}
        ref={input}
      />
      <div
        onClick={() => input.current?.click()}
        className={`w-7 h-4 rounded-full relative flex items-center transition-all duration-500 cursor-pointer ${
          value ? "bg-gradient-to-r from-primary to-secondary" : "bg-[#182334]"
        }`}
      >
        <div
          className={`rounded-full w-3 h-3 absolute transition-all duration-500 ${
            value ? "bg-dark right-0.5" : "bg-white left-0.5"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Checkbox;
