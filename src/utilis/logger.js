const accessToken = '';
const LOGGING_URL = 'http://20.244.56.144/evaluation-service/logs';

/**
 * Logs an event to the Affordmed logging server.
 *
 * @param {string} stack - "frontend"
 * @param {string} level - "debug" | "info" | "warn" | "error" | "fatal"
 * @param {string} logPackage - "page" | "api" | "component"
 * @param {string} message - Description of the event
 */
export const logEvent = async (stack, level, logPackage, message) => {
  try {
    await fetch(LOGGING_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stack,
        level,
        package: logPackage,
        message
      })
    });
    // No console.log allowed
  } catch (error) {
    // Silently fail — DO NOT use console.log
  }
};
