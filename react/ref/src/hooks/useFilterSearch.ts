import { useState, useMemo, useCallback } from 'react';

interface iInputSearch<T> {
  name: keyof T;
  value: string;
}

function useFilterSearch<T, P extends Record<keyof T, string>>(
  data: T[],
  initialSearchInputFields: P
) {
  const [inputSearchFieldsData, setInputSearchFieldsData] = useState<P>(
    initialSearchInputFields
  );

  const handleUpdateInputSearch = useCallback((props: iInputSearch<T>) => {
    const { name, value } = props;

    setInputSearchFieldsData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const filteredResults = useMemo(() => {
    let filters: { [K in keyof T]?: string } = {};

    Object.keys(inputSearchFieldsData).forEach((key) => {
      if (inputSearchFieldsData[key as keyof T] === '') return;

      filters[key as keyof T] = inputSearchFieldsData[key as keyof T];
    });

    return { filters };
  }, [data, inputSearchFieldsData]);

  return { handleUpdateInputSearch, filteredResults };
}

export default useFilterSearch;
