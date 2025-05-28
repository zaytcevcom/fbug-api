export interface LogEntity {
  id: string;
  message: string;
  level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
  time: number;
  context?: string;
}

export interface LogGroupEntity {
  id: string;
  message: string;
  level?: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
  counter: number;
  firstSeenAt: number;
  lastSeenAt: number;
}

export interface LogStats {
  last24h: number;
  last7d: number;
  last30d: number;
}
