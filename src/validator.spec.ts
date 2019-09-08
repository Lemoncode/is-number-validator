import { validator, setErrorMessage } from './validator';

describe('isNumber validator', () => {
  it('should return failed validation when it feeds value equals undefined', () => {
    // Arrange
    const value = void 0;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals null', () => {
    // Arrange
    const value = null;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals empty string', () => {
    // Arrange
    const value = '';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals string with value', () => {
    // Arrange
    const value = 'test';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals false', () => {
    // Arrange
    const value = false;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals true', () => {
    // Arrange
    const value = true;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals empty object', () => {
    // Arrange
    const value = {};

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals object with values', () => {
    // Arrange
    const value = { test: 1 };

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals empty array', () => {
    // Arrange
    const value = [];

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals array with values', () => {
    // Arrange
    const value = [1];

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return failed validation when it feeds value equals a number inside a string', () => {
    // Arrange
    const value = '1';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Must be a number',
      type: 'IS_NUMBER',
    });
  });

  it('should return succeeded validation when it feeds value equals 0', () => {
    // Arrange
    const value = 0;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_NUMBER',
    });
  });

  it('should return succeeded validation when it feeds value equals negative number', () => {
    // Arrange
    const value = -20;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_NUMBER',
    });
  });

  it('should return succeeded validation when it feeds value equals positive number', () => {
    // Arrange
    const value = 100;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_NUMBER',
    });
  });
});