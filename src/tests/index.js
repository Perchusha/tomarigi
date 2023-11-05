export const solution_1 = strs => {
  const anagramGroups = {};

  for (let word of strs) {
    const sortedWord = word.split('').sort().join('');

    if (!(sortedWord in anagramGroups)) {
      anagramGroups[sortedWord] = [];
    }

    anagramGroups[sortedWord].push(word);
  }

  return Object.values(anagramGroups);
};
export const solution_2 = nums => {
  const n = nums.length;
  if (n <= 2) {
    return n;
  }

  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Map();
  }

  let maxLength = 2;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const len = dp[j].get(diff) || 1;

      const currLen = len + 1;
      maxLength = Math.max(maxLength, currLen);

      dp[i].set(diff, currLen);
    }
  }

  return maxLength;
};
export const solution_3 = digits => {
  return Array.from((BigInt(digits.join('')) + BigInt(1)).toString());
};
export const solution_4 = (nums1, nums2) => {
  // FASTER but HEAVIER
  // const combinedArray = nums1.concat(nums2).sort(function(a, b) {
  // 	return a - b;
  // });
  //
  // let median;
  // if (combinedArray.length % 2 === 0) {
  // 	const midIndex = combinedArray.length / 2;
  // 	median = (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2;
  // } else {
  // 	const midIndex = Math.floor(combinedArray.length / 2);
  // 	median = combinedArray[midIndex];
  // }
  //
  // return median;

  const totalLength = nums1.length + nums2.length;
  const combinedArray = new Array(totalLength);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      combinedArray[k++] = nums1[i++];
    } else {
      combinedArray[k++] = nums2[j++];
    }
  }

  while (i < nums1.length) {
    combinedArray[k++] = nums1[i++];
  }

  while (j < nums2.length) {
    combinedArray[k++] = nums2[j++];
  }

  const midIndex = totalLength >> 1;

  return totalLength % 2 === 0 ? (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2 : combinedArray[midIndex];
};
export const solution_5 = (x, n) => {
  if (n === 0) return 1;

  if (Math.abs(x) === 1 || x === 0) {
    if (Math.sign(x) === -1 && n < 1) {
      return 1;
    }
    return x;
  }

  let result = x;

  for (let i = 1; i < Math.abs(n); i++) {
    result *= x;
  }

  if (Math.sign(n) === -1) {
    result = 1 / result;
  }

  return result;
};
export const solution_6 = intervals => {
  if (!intervals.length) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
};
export const solution_7 = (s, t) => {
  if (t.length < s.length) return false;

  let i = 0;
  let counter = 0;

  while (i < t.length && counter < s.length) {
    if (t[i] === s[counter]) {
      counter++;
    }
    i++;
  }

  return counter === s.length;
};
export const solution_8 = (fn, args, t) => {
  let cancelled = false;

  const timer = setTimeout(() => {
    if (!cancelled) {
      fn(...args);
    }
  }, t);

  return () => {
    cancelled = true;
    clearTimeout(timer);
  };
};
export const solution_9 = async (promise1, promise2) => {
  return Promise.all([promise1, promise2]).then(([num1, num2]) => {
    return num1 + num2;
  });
};
export const solution_10 = (arr, fn) => {
  const compareFn = (a, b) => {
    return fn(a) - fn(b);
  };

  return arr.sort(compareFn);
};
export const solution_11 = (fn, args, t) => {
  let canceled = false;

  fn(...args);
  const interval = setInterval(
    () => {
      fn(...args);
    },
    t,
    true
  );

  return () => {
    canceled = true;
    clearInterval(interval);
  };
};
export class solution_12 {
  constructor(value) {
    this.initResult = value || 0;
  }

  add(value) {
    this.initResult += value;
    return this;
  }

  subtract(value) {
    this.initResult -= value;
    return this;
  }

  multiply(value) {
    this.initResult *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      return 'Division by zero is not allowed';
    }
    this.initResult /= value;
    return this;
  }

  power(value) {
    this.initResult = Math.pow(this.initResult, value);
    return this;
  }

  getResult() {
    return this.initResult;
  }
}
export const solution_13 = (nums1, m, nums2, n) => {
  for (let i = 0; i < n; i++) {
    nums1.pop();
    nums1.unshift(nums2[i]);
  }
  return nums1.sort((a, b) => a - b);
};
export const solution_14 = (nums, val) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[count++] = nums[i];
  }
  return count;
};
export const solution_15 = nums => {
  let count = 0;
  const uniq = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!uniq.has(nums[i])) {
      uniq.add(nums[i]);
      nums[count++] = nums[i];
    }
  }
  return count;
};
export const solution_16 = nums => {
  const counters = nums.reduce((acc, el) => {
    if (!acc.hasOwnProperty(el)) acc[el] = 0;
    return acc;
  }, {});
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (counters[nums[i]] < 2) {
      counters[nums[i]] += 1;
      nums[count++] = nums[i];
    }
  }
  return count;
};
export const solution_17 = nums => {
  const counters = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    counters[num] = (counters[num] || 0) + 1;
  }

  let majorityNum;
  let majorityCount = 0;

  for (const num in counters) {
    if (counters[num] > majorityCount) {
      majorityNum = num;
      majorityCount = counters[num];
    }
  }

  return majorityNum;
};
export const solution_18 = (nums, k) => {
  const len = nums.length;
  if (len === 0 || k % len === 0) {
    return nums;
  }

  const shift = k % len;
  if (shift > 0) {
    const sliced = nums.splice(len - shift);
    nums.unshift(...sliced);
  } else {
    const sliced = nums.splice(0, -shift);
    nums.push(...sliced);
  }

  return nums;
};
export const solution_19 = prices => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};
export const solution_20 = prices => {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const priceDifference = prices[i] - prices[i - 1];
    if (priceDifference > 0) {
      maxProfit += priceDifference;
    }
  }

  return maxProfit;
};
export const solution_21 = nums => {
  let lastPosition = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= lastPosition) {
      lastPosition = i;
    }
  }

  return lastPosition === 0;
};
export const solution_22 = nums => {
  const n = nums.length;
  let jumps = 0;
  let currJumpEnd = 0;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currJumpEnd) {
      jumps++;
      currJumpEnd = farthest;
    }
  }

  return jumps;
};

export const solution_23 = () => {
  Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : -1;
  };

  const arr = [1, 2, 3, 4];
  console.log(arr.last());
};

export const solution_24 = n => {
  let last = n - 1;

  return function () {
    last = last + 1;
    return last;
  };
};

export const solution_25 = async millis => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), [millis]);
  });
};

export const solution_26 = () => {
  const TimeLimitedCache = function () {
    this.keys = {};
  };

  TimeLimitedCache.prototype.set = function (key, value, duration) {
    let found = this.keys[key];
    if (found) clearTimeout(this.keys[key].ref);

    this.keys[key] = {
      value,
      ref: setTimeout(() => {
        delete this.keys[key];
      }, duration),
    };

    return !!found;
  };

  TimeLimitedCache.prototype.get = function (key) {
    const result = this.keys[key];
    return result && result.value !== undefined ? result.value : -1;
  };

  TimeLimitedCache.prototype.count = function () {
    return Object.values(this.keys).reduce(acc => (acc += 1), 0);
  };

  return new TimeLimitedCache();
};

export const solution_27 = fn => {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const solution_28 = fn => {
  Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
      return [];
    }

    const result = new Array(rowsCount);
    for (let i = 0; i < rowsCount; i++) {
      result[i] = new Array(colsCount);
    }

    let rowIndex = 0;
    let colIndex = 0;
    let direction = 1;

    for (let i = 0; i < this.length; i++) {
      result[rowIndex][colIndex] = this[i];

      if (direction === 1) {
        if (rowIndex === rowsCount - 1) {
          direction = -1;
          colIndex++;
        } else {
          rowIndex++;
        }
      } else {
        if (rowIndex === 0) {
          direction = 1;
          colIndex++;
        } else {
          rowIndex--;
        }
      }
    }

    return result;
  };

  const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
  arr.snail(5, 4);
};
