export default function ensureEnv(keys) {
  if (!Array.isArray(keys)) {
    keys = [keys]
  }

  const missing = keys.filter((key) => !process.env[key])

  if (missing.length && !/test/.test(process.env.NODE_ENV)) {
    const msg = `missing required environment variables: ${missing.join(', ')}`
    console.log('utils.ensure-env', msg)
    process.exit(1)
  }
}
