export const personalEmailRegex =
  /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com|aol\.com|zoho\.com|yandex\.com|mail\.com)$/;

export const checkEmail = (email) => {
  return personalEmailRegex.test(email);
};
