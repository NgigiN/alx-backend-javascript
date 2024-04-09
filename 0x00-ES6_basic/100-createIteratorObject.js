export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const departments = Object.values(reportWithIterator.allEmployees);
      let currentEmployeeIndex = 0;
      let currentDepartmentIndex = 0;
      return {
        next() {
          if (currentEmployeeIndex >= departments[currentDepartmentIndex].length) {
            currentDepartmentIndex += 1;
            currentEmployeeIndex = 0;
          }
          if (currentDepartmentIndex >= departments.length) {
            return {
              value: undefined,
              done: true,
            };
          }
          const value = departments[currentDepartmentIndex][currentEmployeeIndex];
          currentEmployeeIndex += 1;
          return {
            value,
            done: false,
          };
        },
      };
    },
  };
}