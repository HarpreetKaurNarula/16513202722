import axios from 'axios';

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXJ1bGFoYXJwcmVldDkwQGdtYWlsLmNvbSIsImV4cCI6MTc1MTk1Mjg4NSwiaWF0IjoxNzUxOTUxOTg1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNTJkYWEwMzctM2Y1ZS00Yjg5LThjZWYtOTM1ODc5YjJjNWY3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaGFycHJlZXQga2F1ciIsInN1YiI6IjUxZjY5ZDE0LWRjMjgtNGNhNi05YjdlLWMxN2MyM2Q1ODg1ZSJ9LCJlbWFpbCI6Im5hcnVsYWhhcnByZWV0OTBAZ21haWwuY29tIiwibmFtZSI6ImhhcnByZWV0IGthdXIiLCJyb2xsTm8iOiIxNjUxMzIwMjcyMiIsImFjY2Vzc0NvZGUiOiJWUHBzbVQiLCJjbGllbnRJRCI6IjUxZjY5ZDE0LWRjMjgtNGNhNi05YjdlLWMxN2MyM2Q1ODg1ZSIsImNsaWVudFNlY3JldCI6InJXdmF3UmVNRUt3cUpLQXUifQ.7m_lcyx2yLuLAz49I0f3H-0RGldyTd4jgNnJW0NJrbY";
const LOGGING_URL = "http://20.244.56.144/evaluation-service/logs";

/**
 * @param {string} stack - "frontend"
 * @param {string} level - one of: "debug", "info", "warn", "error", "fatal"
 * @param {string} logPackage - one of the allowed packages (e.g., "page", "api", "component")
 * @param {string} message - description of what's happening
 */
export const logEvent = async (stack, level, logPackage, message) => {
  try {
    const response = await axios.post(
      LOGGING_URL,
      {
        stack,
        level,
        package: logPackage,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log created:", response.data.message);
  } catch (error) {
    console.error("Failed to send log:", error?.response?.data || error.message);
  }
};
