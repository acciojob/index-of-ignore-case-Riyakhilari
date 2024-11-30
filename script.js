function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use the built-in indexOf method to find the index of the substring
  return lowerStr.indexOf(lowerSubStr);
}

// Example usage
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
