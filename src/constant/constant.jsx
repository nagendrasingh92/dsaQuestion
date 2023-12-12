const questionData = [
    {
        id: 1,
      question: "Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.",
      solution: `
      function theLastElement(arr) {
          if (arr.length === 0) {
            return -1;
          } else {
            return arr[arr.length - 1];
          }
        }
        let newArry = [1, 2, 3, 4];
        console.log(theLastElement(newArry));
        let emptArry = [];
        console.log(theLastElement(emptArry));
      `,
    },
    {
        id: 2,
      question: "Write a function that returns only the non-repeating numbers from an array.",
      solution: `
      const nonRepeating = (arr) => {
        const sortedArray = arr.sort((a, b) => a - b);
        const newArray = sortedArray.filter((item, index) => (
          item !== sortedArray[index - 1] &&
          item !== sortedArray[index + 1]
        ))
        return newArray;
      }
      
      console.log('array', nonRepeating(arrayData));
      `,
    },
  ];
  
  export { questionData };
  