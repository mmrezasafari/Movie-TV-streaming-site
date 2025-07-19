export async function getVideoData() {
  const baseUrl = 'https://ylnk.site/test/'

  try {
    return await $fetch(baseUrl, {
      query: { action: 'info', id: 2501 },
    })

  } catch (err) {
    console.error(err.message)
  }
}

export async function getVideoStreamData() {
  const baseUrl = 'https://ylnk.site/test/'

  try {
    return await $fetch(baseUrl, {
      query: { action: 'stream', id: 2501 },
    })

  } catch (err) {
    console.error(err.message)
  }
}

export async function postVideoRating(rate) {
  const baseUrl = 'https://ylnk.site/test/'
  try {
    return await $fetch(baseUrl, {
      query: { action: 'rate', id: 2501 },
      method: 'POST',
      body: { rate },
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err.message)
  }
}
