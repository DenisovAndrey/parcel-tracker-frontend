import { isValidEmail } from './validators';

describe('isValidEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
    expect(isValidEmail('test.user@subdomain.example.co.uk')).toBe(true);
    expect(isValidEmail('user12345@my-domain123.com')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('user@')).toBe(false);
    expect(isValidEmail('@domain.com')).toBe(false);
    expect(isValidEmail('user@domain')).toBe(false);
    expect(isValidEmail('user@.com')).toBe(false);
    expect(isValidEmail('user@domain.')).toBe(false);
  });

  it('should handle empty input', () => {
    expect(isValidEmail('')).toBe(false);
  });
});
