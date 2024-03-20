export type TopArtitstsResType = {
  href?: string;
  limit?: number;
  next?: any | null;
  offset?: number;
  previous?: any;
  total?: number;
  items: TopArtistItems[];
};
export type TopArtistItems = {
  external_urls: {
    spotify?: string;
  };
  followers: {
    href?: any;
    total?: number;
  };
  genres?: string[];
  href?: string;
  id: string;
  images: TopArtistImages[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
};

export type TopArtistImages = {
  url?: string;
  height?: number;
  width?: number;
};
