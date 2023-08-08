const reverseString = require('./task/task_01')

test(
    'проверяем реверс строки',
    () => {
        expect(reverseString('hello www')).toBe('www olleh')
    }
)
