/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

// convertBytesToHuman.test.js
import convertBytesToHuman from './convertBytesToHuman'; // Убедитесь, что путь к файлу правильный




test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
  expect(convertBytesToHuman([])).toBe(false);
  expect(convertBytesToHuman(-1)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  // Пограничные случаи
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(5)).toBe('5 B');
  
  // Примеры с кратными 1024
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');

  // Большие числа
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB');
  expect(convertBytesToHuman(1125899906842624)).toBe('1 PB');
});

test('Не возвращает некорректные результаты для чисел', () => {
  expect(convertBytesToHuman(1024)).not.toBe('1 MB');
  expect(convertBytesToHuman(123123123)).not.toBe('120 MB');
  expect(convertBytesToHuman(-1)).not.toBe('1 B');
});
