declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'test' | 'development' | 'staging' | 'production'
    readonly PORT: string

    readonly DB_HOST: string
    readonly DB_USER: string
    readonly DB_PASSWORD: string
    readonly DB_NAME: string
    readonly DB_PORT: string
  }
}
