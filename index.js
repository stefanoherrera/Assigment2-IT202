function formatMoney(n) {
  return "$" + n.toFixed(2);
}

document.getElementById("reverseForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var s = document.getElementById("reverseInput").value;
  var r = "";
  for (var i = s.length - 1; i >= 0; i--) {
    r += s[i];
  }
  document.getElementById("reverseOut").textContent = r;
});

document.getElementById("palForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var raw = document.getElementById("palInput").value;
  var cleaned = raw.replace(/,/g, " ").trim();
  var parts = cleaned.split(" ");
  var nums = [];
  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === "") continue;
    var n = parseFloat(parts[i]);
    if (isNaN(n)) {
      document.getElementById("palOut").textContent = "Enter only numbers separated by spaces or commas.";
      return;
    }
    nums.push(n);
  }
  if (nums.length === 0) {
    document.getElementById("palOut").textContent = "Enter a series of numbers.";
    return;
  }
  var left = 0;
  var right = nums.length - 1;
  var isPal = true;
  while (left < right) {
    if (nums[left] !== nums[right]) {
      isPal = false;
      break;
    }
    left++;
    right--;
  }
  document.getElementById("palOut").textContent = isPal ? "Palindrome" : "Not a Palindrome";
});

document.getElementById("tipForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var sub = parseFloat(document.getElementById("subtotal").value);
  var pct = parseFloat(document.getElementById("tipPercent").value);
  if (isNaN(sub) || sub < 0) {
    alert("Enter a valid subtotal.");
    return;
  }
  if (isNaN(pct) || pct < 0) {
    alert("Enter a valid tip percentage.");
    return;
  }
  var tip = sub * (pct / 100);
  var total = sub + tip;
  document.getElementById("tipAmount").textContent = formatMoney(tip);
  document.getElementById("totalAmount").textContent = formatMoney(total);
});
