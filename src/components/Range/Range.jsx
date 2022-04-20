import "./index.css";

const Range = ({
  value = 0,
  onChange = () => {},
  min = 0,
  max = 100,
  className = "",
}) => {
  return (
    <input
      style={{
        background: `linear-gradient(to right, #06f5f5 0%, #06f5f5 ${value}%, #182334 ${value}%, #182334 100%`,
      }}
      type="range"
      name=""
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`range-slider ${className}`.trim()}
      id="mySlider"
    />
  );
};

export default Range;
