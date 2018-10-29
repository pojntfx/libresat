interface ISearchProps {
  query: string;
  source: any;
  placeholder: string;
  linkComponent: JSX.Element;
}

interface ISearchResult {
  link: string;
  imgSrc: string;
}

export { ISearchProps, ISearchResult };
