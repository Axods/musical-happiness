export interface SearchResult {
  email: string;
  full_name: string;
  hash: string;
  ip_address: string;
  other_fields?: {
    address?: string;
    city?: string;
    county_name?: string;
    dob?: string;
    middlename?: string;
    st?: string;
    zip?: string;
    aka1fullname?: string;
    StartDat?: string;
  };
  password: string;
  phone_number: string;
  sensitive_fields?: {
    ssn: string;
  };
  username: string;
}

export interface SearchResponse {
  data: {
    name_data?: {
      found: number;
      results: SearchResult[];
    };
    phone_data?: {
      found: number;
      results: SearchResult[];
    };
  };
  message: string;
  searches_remaining: number;
}