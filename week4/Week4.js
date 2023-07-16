/*
class Juhee {
    constructor(age){
        this.age = age;
    }

    sayAGE(){
        console.log("My age is " + this.age);
    }
}

// 인스턴스 객체 생성
const me = new Juhee('21');
me.sayAGE();


var Juhee = (function(){
    
    function Juhee(number){
        // 생성자 함수 정의
        this.age = number  
    }

    //Juhee라는 함수에 sayAGE라는 메소드 정의
    Juhee.prototype.sayAGE = function(){
        console.log('My age is '+ this.age);    
    }

    return Juhee;
}());

//인스턴스 생성
var me = new Juhee('21');   
//메소드 호출
me.sayAGE();


class NJH{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
}



let Juhee = class {
    constructor(height, weight) {
      this.height = height;
      this.weight = weight;
    }
  };

  console.log(Juhee.name);
  //output : Juhee
  
  
const f1 = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res("1번 함수 호출 완료");
		}, 1000);
	});
};

const f2 = (message) => {
	console.log(message)
	return new Promise((res, rej) => {
		setTimeout(() => {
			res("2번 함수 호출 완료");
		}, 2000);
	});
};

const f3 = (message) => {
	console.log(message)
	return new Promise((res, rej) => {
		setTimeout(() => {
			res("3번 함수 호출 완료");
		}, 3000);
	});
};

(async ()=>{
    const res = await f1();
    const rst1 = await f2(res);
    const rst2 = await f3(rst1);
    console.log(rst2);
})();



//1. 반죽 만들기 - 3초
const L1 = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("반죽 만들기");
        },3000);
        rej = randomFail();
        });
};

//2. 1차 발효 - 5초
const L2 = (message) =>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("1차 발효");
        },5000);
        rej = randomFail();
        });
};
//3. 성형 하기 - 4.2초
const L3 = (message) =>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("성형 하기");
        },4200);
        rej = randomFail();
        });
};

//4. 2차 발효 - 2초
const L4 = (message) =>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("2차 발효");
        },2000);
        rej = randomFail();
        });
};

//5. 튀기기 - 5초
const L5 = (message) =>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("튀기기");
        },5000);
        rej = randomFail();
        });
};

function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}

(async ()=>{
    try{
        const rst1 = await L1();
        const rst2 = await L2(rst1);
        const rst3 = await L3(rst2);
        const rst4 = await L4(rst3);
        const rst5 = await L5(rst4);
        console.log(rst5);
    }
    catch(error){
        console.log(error);
    }
    
})();
*/


//A. 면 삶기 - 10초
const A = () =>{
    return new Promise(()=>{
        setTimeout(()=>{
            console.log("면 삶기");
        },10000);
        
    });
};

//B1. 브로콜리 대치기 - 1초
const B1 = () =>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res("브로콜리 대치기");
        },1000);
    });
};
//B2. 마늘과 양파 볶기 - 2초
const B2 = (message) =>{
    console.log(message);
    return new Promise((res)=>{
        setTimeout(()=>{
            res("마늘과 양파 볶기"); 
        },2000);
    });
};

//B3. 배이컨과 햄 볶기 - 2초
const B3 = (message) =>{
    console.log(message);
    return new Promise((res)=>{
        setTimeout(()=>{
            res("베이컨과 햄 볶기");
        },2000);
    });
};

//B4. 소스, 남은 야채 넣고 다같이 볶기 - 3초
const B4 = (message) =>{
    console.log(message);
    return new Promise((rst)=>{
        setTimeout(()=>{
            rst("소스, 남은 야채 넣고 다같이 볶기");
        },3000);
    });
};
 
//C. 면까지 넣고 다 같이 볶기 - 3초
const C = () =>{
    return new Promise(()=>{
        setTimeout(()=>{
            console.log("면까지 넣고 다 같이 볶기");
        },3000);
    });
};
 

async function B(){
    const rst1 = await B1();
    const rst2 = await B2(rst1);
    const rst3 = await B3(rst2);
    const rst4 = await B4(rst3);
    console.log(rst4)
}

async function ABC(){
    await Promise.all([A(),B()]);
    await C();
}

ABC();