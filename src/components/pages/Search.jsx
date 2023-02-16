import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setState } from "../reducers/Submit";
import "leaflet/dist/leaflet.css";

function Search(props) {
  const [isOpen, setIsOpen] = React.useState(true);
  const [value, setValue] = React.useState("");
  const [cities, setCities] = React.useState([]);
  // const dispatch = useDispatch();

  const { setPosition } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelect = (e) => {
    setValue(e.city);
    setIsOpen(!isOpen);
    setPosition(e);
    console.log("Hello");
  };

  const inputHandler = () => {
    setIsOpen(true);
  };

  async function getCities() {
    const response = await fetch(
      "https://63849be33fa7acb14ffa868f.mockapi.io/api/Cities"
    );
    const data = await response.json();
    setCities(data);
  }

  useEffect(() => {
    getCities();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

if(value){
  var sorted = cities.sort((a, b) => {
    if (a.city.startsWith(value) && b.city.startsWith(value)) return a.city.localeCompare(b.city);
    else if (a.city.startsWith(value)) return -1;
    else if (b.city.startsWith(value)) return 1;
      
    return a.city.localeCompare(b.city);;
  });
  console.log(sorted)
} 


  

  return (
    <div className="flex justify-between w-full">
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={handleChange}
            onClick={inputHandler}
            className="w-[90%] placeholder:text-[#C2CFE0] outline-none"
            type="text"
            placeholder="Search for a city"
          />
        </form>
        <ul className="absolute w-[30%]  max-sm:w-[80%] bg-white z-10 text-start max-h-[240px] h-auto overflow-auto">
          {value &&
            isOpen &&
            sorted
              .filter((e) => e.city.toLowerCase().includes(value.toLowerCase()))
              // .sort((a,b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0))
              .map((elem, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => handleSelect(elem)}
                    className="p-2 hover:bg-[#f1f1f1] cursor-pointer ease-in pl-[15px]"
                  >
                    {elem.city}
                  </li>
                );
              })}
        </ul>
      </div>
      <div>
        {value && (
          <div className="mx-[20px] cursor-pointer">
            <FontAwesomeIcon
              className="text-[#C2CFE0] pl-2"
              onClick={() => {
                setValue("");
              }}
              icon={faDeleteLeft}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
