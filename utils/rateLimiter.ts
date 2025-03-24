const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const MAX_REQUESTS = 2;
const TIME_WINDOW = 24 * 60 * 60 * 1000; // 1 hour in milliseconds

export const rateLimiter = (ip: string): boolean => {
  const currentTime = Date.now();
  const rateLimitInfo = rateLimitMap.get(ip);

  if (rateLimitInfo) {
    const { count, timestamp } = rateLimitInfo;

    if (currentTime - timestamp < TIME_WINDOW) {
      if (count >= MAX_REQUESTS) {
        return false;
      } else {
        rateLimitMap.set(ip, { count: count + 1, timestamp });
        return true;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
      return true;
    }
  } else {
    rateLimitMap.set(ip, { count: 1, timestamp: currentTime });
    return true;
  }
};
