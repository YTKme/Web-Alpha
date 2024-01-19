/// <reference types="vite/client" />

declare const BACKEND_HOSTNAME: string

interface ImportMetaEnv {
  readonly VITE_BACKEND_HOSTNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
