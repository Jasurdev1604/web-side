console.log("hello");

/*
  HOME WORK

  register()
  1 ism 
  2 familiya
  3 random kod jonatiladi
  4 pawwword shu kod orqalo accaunt ociladi

  ism of familia bosh bosa log->xatolik 

  login()
  1 password kitritiladi true bolsa hamma malumot chiqadi
    false bolsa register();
*/


let code = "";

function randomCode (){
    let one = Math.floor(Math.random() * 9 );
    let two = Math.floor(Math.random() * 9 );
    let three = Math.floor(Math.random() * 9 );
    let four = Math.floor(Math.random() * 9 );

    code = code + one;
    code = code + two;
    code = code + three;
    code = code + four;

    return code;
}

function register() {
  let a = prompt("Name:");
  let b = prompt("Surname:");
  let c = confirm("We send code");
  let obj = {
    name:a,
    surname:b,
    kod:randomCode(),
  }

  let e = "";
  if( a == e || b == e ){
    console.log("Xatolik!");
  }
  else{
      if(c){
          console.log(obj.kod);
          var d = prompt("Password:");
              if(d == obj.kod){
                  console.log(`Sizning malumotlaringiz:\n   Name: ${obj.name} \n   Surname: ${obj.surname} \n   Code: ${obj.kod} \n \n   RO'YXATDAN O'TTINGIZ!`);
              }
              else{
                console.log("Wrong password");
              }
      }
      else{
        console.log("Xatolik!");
        return ;
      }
  }

}

function login() {
    let f = prompt("Pasword:");
    if(f == code){
      console.log("Siz royxatda borsiz!");
    }
    else{
      console.log("Iltioms royxatdan oting!!!");
      register();
    }
}

