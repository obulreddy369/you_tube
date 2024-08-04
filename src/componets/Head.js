import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector} from "react-redux";
import { toggleMenu} from "../utils/appSlice";
import { cacheResult } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {

  // const isSuggestions=useSelector((store)=>store.app.isSuggestions);
  const searchCache=useSelector((store)=>store.search);

  const [searchQuery,setSearchQuery]=useState();
  const [searchSuggestion,setSearchSuggestion]=useState([]);
  const [openSuggestion,setOpenSuggestion]=useState([false]);


  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSearchSuggestion(searchCache[searchQuery]);
      }
      else{
        getSearchSuggest();
      }
    },200);
    return ()=>clearTimeout(timer);
  },[searchQuery]);

const getSearchSuggest=async()=>{
  const data=await fetch('/api'+YOUTUBE_SEARCH_API + searchQuery);
  const json=await data.json();
  setSearchSuggestion(json[1]);
  dispatch(
    cacheResult({
      [searchQuery]:json[1]
})
  );
};

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // const toggleSearchSuggestionHandler = () => {
  //   dispatch(isSuggestionsOpen());
  // };

  return (
    <div>
      <div className="grid grid-flow-col p-3 m-1 shadow-lg">
        <div className="flex col-span-1">
          <img
            onClick={toggleMenuHandler}
            className="h-10 px-2 pb-2 mb-1 cursor-pointer"
            alt="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEXz9fQzMzMqKir3+fixs7J+fn76/Ps2Njbq6uogIiEgICD19/by9PP7/fwlJSXu8O9pamqeoJ+Tk5PLzcxcXFwYFxgMDg1CQ0Ld3d2kpqVLTUw1ODcYGhkODw8+TbZ+AAABM0lEQVR4nO3bWW7DMAwFQNtqUydK4ux773/N5gj9oQkoMwcw8CDJBCSy6wAAAAAAAAAAAAAAAAAAAAAAmF8t0WpywPXxK9ZxnRtxPJ1Xsc6nMTFi3ey2fbTtbpOXsJsu4QH7/jLlLWIdZ0mYuU031yE84HDN3KXlOGyHWNvhWBITduV2+I51uJV1ZsKuLqIlV3wAAACgFTX0lqHGfv4/FtMYa0p+min3x/Mn0PP5uGdGXC/25/Ab4dc+8b60llV4wL5fZiZs/t1irjVMPIhllnO4yAv4Llf3R+Sv9O1xzy2JtbReD+O1ng8AAACYSd003l86S49wasDm+7yb79X/gHeL6XeOhIkzM137c091PL2WsV6ps2vzzB8mP1w0P0MKAAAAAAAAAAAAAAAAAAAAAPCh/gCmZy+HEE0S5QAAAABJRU5ErkJggg=="
          />
          <a href="/">
            <img
              alt="youtube"
              className="h-7"
              src="data:image/png;base64,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"
            />
          </a>
        </div>
        <div className="flex col-span-10 px-10 ml-10">
          <input
            type="text"
            placeholder="Search"
            className="pl-5  w-1/2 border border-gray-400 rounded-l-full"
            value={searchQuery}
            // onClick={toggleSearchSuggestionHandler}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setOpenSuggestion(true)}
            onBlur={()=>setOpenSuggestion(false)}
          />
          <button className="px-2 border border-gray-400 rounded-r-full bg-gray-300">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="col-span-1">
          <FontAwesomeIcon className="h-6" icon={faUser} />
        </div>
        {openSuggestion && (
            <div className="fixed mt-11 py-4 px-2 ml-[20rem] bg-white w-[26rem] border border-gray-200 shadow-lg rounded-lg">
              {searchSuggestion.map((s, index) => (
                <h1 key={index} className="p-2 hover:bg-gray-100 shadow-sm">
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> {s}
                </h1>
              ))}
            </div>
          )}
        </div>
    </div>
  );
};

export default Head;
