import { First } from "react-bootstrap/esm/PageItem";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const solution: number[] = numbers.map((num: number): number => num * 3);
    return solution;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number => parseInt(num) || 0);
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((num: string): string =>
        num.startsWith("$") ? num.slice(1) : num,
    );
    const ints = noDollar.map((num: string): number => parseInt(num) || 0);
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return shout.filter((message) => !message.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const RGB = colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green",
        );
        return RGB;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const total: number = addends.reduce(
        (sum: number, num: number) => sum + num,
        0,
    );
    const addition: string = addends.length > 0 ? addends.join("+") : "0";
    return `${total}=${addition}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeIndex: number = values.findIndex((num: number) => num < 0);
    const sumBeforeNegative: number = values
        .slice(0, negativeIndex >= 0 ? negativeIndex : values.length)
        .reduce((sum: number, num: number) => sum + num, 0);

    if (negativeIndex >= 0) {
        return [
            ...values.slice(0, negativeIndex + 1),
            sumBeforeNegative,
            ...values.slice(negativeIndex + 1),
        ];
    } else {
        return [...values, sumBeforeNegative];
    }
}
