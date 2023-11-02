declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'test' | 'development' | 'staging' | 'production'
    readonly PORT: string
    readonly  JWT_SECRET: string
    readonly JWT_TTL: string

    readonly DB_HOST: string
    readonly DB_USER: string
    readonly DB_PASSWORD: string
    readonly DB_NAME: string
    readonly DB_PORT: string
  }
}
