const fetchTimeout = async (url: string) => {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 1000)
    const response = await fetch(url, { signal: controller.signal })
    const data = await response.json()
    clearTimeout(timeoutId)
    return data
  } catch (error) {
    throw Error(error)
  }
}

export default fetchTimeout
