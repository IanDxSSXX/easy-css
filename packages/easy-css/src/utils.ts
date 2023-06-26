export const rand = {
  a: 1103515245,
  c: 12345,
  m: Math.pow(2, 32),
  seed: 123456789,
  rand() {
    rand.seed = (rand.a * rand.seed + rand.c) % rand.m
    return rand.seed / rand.m
  },
  randStr() {
    return rand.rand().toString(32).slice(2, 8)
  }
}

export function generateUUIDFromString(inputString: string) {
  let hash = 0
  if (inputString.length === 0) {
    return hash
  }
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  let uuid = ""
  for (let i = 0; i < 32; i++) {
    const index = hash & 0xf
    uuid += (i === 8 || i === 12 || i === 16 || i === 20 ? "-" : "") + (i === 12 ? 4 : (i === 16 ? (index & 0x3 | 0x8) : index)).toString(16)
    hash >>= 4
  }
  return uuid
}
