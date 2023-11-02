declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'test' | 'development' | 'staging' | 'production'
    readonly PORT: number
  }
}