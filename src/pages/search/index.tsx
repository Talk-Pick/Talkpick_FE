import { useState, useEffect } from "react";
import BackButton from "../../shared/ui/backButton";
import Input from "../../shared/ui/input";
import { getLocalStorage, addLocalStorage } from "../../shared/storage";
import { STORAGE_KEY } from "../../shared/constants/storage";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>(""); 
  
  useEffect(() => {
    const history = getLocalStorage(STORAGE_KEY.SEARCH_KEYWORDS);
    if (history) {
      console.log(history);
      // setSearchHistory(JSON.parse(history));
    }
    setRecommendations(["추천 검색어 1", "추천 검색어 2", "추천 검색어 3"]);
  }, []);


  const handleSearch = () => {
    addLocalStorage(STORAGE_KEY.SEARCH_KEYWORDS, searchKeyword);
    navigate(`/search/${searchKeyword}`);
  }
  


    return (
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
          <BackButton />
          <Input placeholder="검색어를 입력해주세요." className="w-full" onChange={(e) => {
            setSearchKeyword(e.target.value);
          }} onClick={handleSearch} />
          </div>
            <div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-xl font-bold">최근 검색어</span>
                <button className="text-sm text-gray-500">모두 삭제</button>
              </div>
              <div className="flex my-4">
              {searchHistory.length ? searchHistory.map((history) => (
                <span key={history} className="text-sm text-gray-500">{history}</span>
              )) : 
              <p className="text-sm text-gray-500 w-full items-center text-center">검색 기록이 없습니다.</p>}
              </div>
              <div>
                <span className="text-xl font-bold">추천 검색어</span>
                <div className="grid grid-cols-2 gap-2 my-4">
                {recommendations.map((recommendation) => (
                  <span key={recommendation} className="text-sm text-gray-500">{recommendation}</span>
                ))}
                </div>
              </div>
            </div>
        </div>
    );
  };

export default SearchPage;
