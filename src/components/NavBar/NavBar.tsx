import { Link} from "react-router-dom";
import { Typographi } from "../../design/Typographi/Typographi";
import { RiArrowDropDownLine } from "react-icons/ri";


export const NavBar = () => {

  return (
      <nav className="w-full h-[58px] bg-background-800 rounded-md flex">
        
          <div className="flex  justify-start items-center ">
            <Link to="/">
            <Typographi variant="body-base" className="flex items-center gap-2 w-full h-full p-4 hover:bg-background-700 rounded-l-md">Home <RiArrowDropDownLine /></Typographi>
            </Link>
            <Link to="/warcraft">
              <Typographi variant="body-base" className="flex items-center gap-2 p-4 hover:bg-background-700">Warcraft <RiArrowDropDownLine /></Typographi>
            </Link>        
            <Link to="/call/of/duty">
              <Typographi variant="body-base" className=" flex items-center gap-2 whitespace-nowrap p-4 hover:bg-background-700" >Call Of Duty<RiArrowDropDownLine /></Typographi>
            </Link>
            <Link to="/diablo">
              <Typographi variant="body-base" className=" flex items-center gap-2 whitespace-nowrap p-4 hover:bg-background-700">Diablo<RiArrowDropDownLine /></Typographi>
            </Link>
            <Link to="/overwatch">
              <Typographi variant="body-base"className=" flex items-center gap-2 whitespace-nowrap p-4 hover:bg-background-700">Overwatch<RiArrowDropDownLine /></Typographi>
            </Link>
            <Link to="/starcraft">
              <Typographi variant="body-base"className=" flex items-center gap-2 whitespace-nowrap p-4 hover:bg-background-700"  >StatCraft<RiArrowDropDownLine /></Typographi>
            </Link>
            <Link to="/plus">
              <Typographi variant="body-base"className=" flex items-center gap-2 whitespace-nowrap p-4 hover:bg-background-700" >Plus<RiArrowDropDownLine /></Typographi>
            </Link>
            <Link to="/design/system">
              <Typographi color="secondary" className=" flex items-center gap-2 whitespace-nowrap p-4 hover:bg-background-700">Design-System<RiArrowDropDownLine /></Typographi>
            </Link>
          </div>

      </nav>
  );
};
