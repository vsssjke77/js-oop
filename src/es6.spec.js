const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });
        it('попытка добавить некорректный ключ', () => {
            const dic = new core.Dictionary();
            assert.throws(() => {
                dic.addWord(0, 'роутер');
            }, Error);

        });
        it('попытка добавить некорректное значение', () => {
            const dic = new core.Dictionary();
            assert.throws(() => {
                dic.addWord('роутер', 0);
            }, Error);

        });
        it('попытка добавить некорректный ключ и значение', () => {
            const dic = new core.Dictionary();
            assert.throws(() => {
                dic.addWord(0, 0);
            }, Error);

        });
        it('Добавление слова', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.addWord('роутер', 'router'), 0);
            
        });
        it('Получение значения слова, которое есть в словаре', () => {
            const dic = new core.Dictionary();
            dic.addWord('роутер', 'router');
            assert.strictEqual(dic.getWord('роутер'), 'router');

        });
        it('Получение значения слова, которого нет в словаре', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.getWord('router'), undefined);

        });
        it('Удаление слова, которое есть в словаре', () => {
            const dic = new core.Dictionary();
            dic.addWord('роутер', 'router');
            assert.strictEqual(dic.delWord('router'), undefined);

        });
        it('Получение значения слова, которого нет в словаре', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.getWord('router'), undefined);

        });
    });

});