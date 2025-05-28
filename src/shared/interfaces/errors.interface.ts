export interface ErrorEntity {
  id: string;
  file: string;
  line: number;
  message: string;
  stacktrace: string;
  time: number;
  method?: string;
  url?: string;
  ip?: string;
  context?: Record<string, any>;
  cookies?: Record<string, any>;
  env?: Record<string, any>;
  files?: Record<string, any>;
  headers?: Record<string, any>;
  session?: Record<string, any>;
  queryParams?: Record<string, any>;
  bodyParams?: Record<string, any>;
}

export interface ErrorGroupEntity {
  id: string;
  file: string;
  line: number;
  message: string;
  counter: number;
  firstSeenAt: number;
  lastSeenAt: number;
}

export interface ErrorStats {
  last24h: number;
  last7d: number;
  last30d: number;
}
