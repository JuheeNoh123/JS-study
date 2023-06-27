/*
var factorial = function(number) {
  if (number > 0) {
    return number * factorial(number - 1);
  } else {
    return 1;
  }
};
factorial(3); // 6
factorial(4); // 24



function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    if (!(n in factorial)) {
    factorial[n] = n * factorial(n - 1);
    }
    console.log(factorial[n]);
    return factorial[n];
    } else {
    return '잘못된 숫자가 입력되었습니다.';
    }
  }

factorial[1] = 1; // 캐시를 초기화합니다.
factorial(6); // => 720
factorial(5); // => 120 / 이 값은 이미 캐시에 존재합니다.


const myName = 'YJOO';
function getName() {
  return myName;
}
//myName Global Scope



function getName() {
    const myName = "DragonCastle";
    return myName;
    }
    //myName Function Local Scope
    function showLastName() {
    const lastName = 'Sofela';
    return lastName;
    }
    //lastName showLastName의 Function Local Scope
    //showLastName은 Global Scope
    function displayFullName() {
    const fullName = 'Oluwatobi ' + lastName;
    return fullName;
    }
    //displayFullName도 Global Scope
    console.log(displayFullName()); // => ReferenceError: lastName is not define
*/

  function init() {
  var name = "JUHEE"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() { // displayName() 은 내부 함수이며, 클로저다.
    console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();