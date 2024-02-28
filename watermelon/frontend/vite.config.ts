import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // Environment Variable
    define: {
      'process.env.CLIENT_ID': JSON.stringify(env.Watermelon_SPA_CLIENT_ID || ''),
      'process.env.ISSUER': JSON.stringify(env.Watermelon_SPA_ISSUER || ''),
    },

    // Plugin
    plugins: [react()],
  }
})
