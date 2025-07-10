export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

export const addLocalStorage = (key: string, value: string) => {
    const currentValue = getLocalStorage(key);

    if (currentValue) {
        let parsedValue;
        try {
            parsedValue = JSON.parse(currentValue);
            // 만약 배열이 아니면 배열로 변환
            if (!Array.isArray(parsedValue)) {
                parsedValue = [parsedValue];
            }
        } catch {
            // 파싱 실패(완전한 string 등)면 배열로 감싸기
            parsedValue = [currentValue];
        }
        parsedValue.push(value);
        setLocalStorage(key, JSON.stringify(parsedValue));
    } else {
        setLocalStorage(key, JSON.stringify([value]));
    }
};


