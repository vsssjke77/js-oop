"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const countofnames = fio.split(' ');
    if (countofnames.length > 1) {
        const [lastName, firstName] = countofnames;
        return `${firstName} ${lastName}`;
    }
    else {
        return "Некорректное ФИО";
    }
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    if (array.length === 0) {
        return 0;
    }

    const { maxSalary, minSalary } = array.reduce(
        (acc, currentSalary) => ({
            maxSalary: Math.max(acc.maxSalary, currentSalary),
            minSalary: Math.min(acc.minSalary, currentSalary),
        }),
        { maxSalary: -Infinity, minSalary: Infinity }
    );

    if (minSalary === 0) {
        return 'Человек бесплатно работает. Хаха';
    }

    return maxSalary / minSalary;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.wordsMap = new Map();
    }

    addWord(key, value) {
        if (typeof(key) == 'string' && typeof(value) == 'string') {
            this.wordsMap.set(key, value);
            return 0;
        }
        else {
            throw new Error( 'Ключ и значение должны быть строками!!!');
        }
    }

    getWord(key) {
        return this.wordsMap.get(key);
    }

    delWord(key) {
        this.wordsMap.delete(key);
    }

}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
