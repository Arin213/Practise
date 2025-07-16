/*
    Event in JS
    The change in the state of an object is known as an Event
    Events are fired to notify code of "intersesting changes" that may affect code
    execution.

    1. Mouse events(click, double click etc.)
    2. keyboard events(keyPress, keyup, keydown)
    3. form events (submit etc.)
    4. print event and many more

    syntax:
        node.event = () => {
            // handle here    
        }
            
    for button example
*/ 
//access the id of button 
/*
    NOTE: if the event is in inline and as well as in js 
    then the js will override the inline for eg below is the 
    event for btn1 and also we have inline even for btn1 in 
    html but the js event will run instead of html one.
*/ 
let btn1 = document.querySelector("#btn1");

// make changes or interactive in btn1 like console
// if the same event is written twice then old one get 
// override and new one will run 

// btn1.onclick = () =>{
//     console.log("HANDLER1")
//     let a = 25;
//     a++;
//     console.log(a);
// } 


// btn1.onclick = () =>{
//     console.log("HANDLER2")
//     let a = 25;
//     a++;
//     console.log(a);
// } 

// make event for div as well 
// access the div first 

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are inside the div");
}


/*
    EVENT OBJECT
    It is a special object that has details about the event
    all event handlers have access to the event Object's properties
    and methods .

    syntax:
    node.event = (e) => {
        // handle here
    }
    
    e.target, e.type, e.clientX, e.clientY
    example
*/ 

// btn1.onclick = (e) => {
//     console.log(e); //pointerEvent
//     /*
//         inside the pointerEvent we can get all the properties
//         where as target will give us the information wher the event 
//         was occured.
//         type give us what trigger to it.
//         we can also print the properties
//     */ 
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX, e.clientY);
// //    console.log(e.target);

// }

/*
    1. In inline handling we use the even in html in tag or element
    which makes he html junky or bulky 

    2. second was js node.event = () =>{
        } which will only do one function one event handle 


    3. EVENT LISTENERS 
    1. node.addEventListner(event, callback)
    2. node.removeEventListener(event, callback)

    -> event listner are kine of function which will wait for the 
    event and as soon as they get the events they will be executed
    for one event we can create the multiple eventListeners

    NOTE: callback -> function which is passed as argument in 
    another function.It is also called handler which will handle the event

    NOTE: event -> onclick, ondblclick, mouseover .. etc

    NOTE: the callback refernce should be same to remove.
*/ 

/*
    For this one we can use eventListener instead of js function
     or inline. comment out 
*/ 
// btn1.onclick = (e) => {
//     console.log(e); //pointerEvent
//     /*
//         inside the pointerEvent we can get all the properties
//         where as target will give us the information wher the event 
//         was occured.
//         type give us what trigger to it.
//         we can also print the properties
//     */ 
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX, e.clientY);
// //    console.log(e.target);

// }

// eventListeners approach

// this will exectued both inline if event was apply in html and here 
// also addEventListner won't override the event i.e 
// using addEventListner we can do multiple cases for one event.
// we can pass the arg inside the callback and approach all the functionality 
// like getting event.type, target .. .etc 

btn1.addEventListener("click", (e) => {
    console.log("button one was clicked! handler 1");
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);

});

// this will executed too and won't override the above one

btn1.addEventListener("click", () => {
    console.log("button one was clicked! handler2");
});

// create the multiple handler 
// pass to the varaible hhanler3 so that we can remove the event 
// using removeEventListner
const handler3 =  () => {
    console.log("button one was clicked! handler3");
}
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button one was clicked! handler4");
});

// removeEventListener 
// this will remove the event which we don't want

/*
    now here NOTE: the callback refernce should be same to remove.
    which means when we directly pass the callback to the 
    removeEventListner. the handler3 won't get removed becasue
    for addEvent handler3 will in some part of memory 
    and when we try to remove handler3 it will be preserve
    in another some part of memory let's say addEvent handler3 is in 
    memory3 and when we try to remover the handler4 it will 
    save in some part of memory let's say memory4 
    so in order to remove the handler3 we need to pass the 
    event function in variable and let that variable to passed 
    as argument in removeEvent
    
    callback reference must be same to remove the event
*/
// this won't remove the handler3 
// btn1.removeEventListener("click", () => {
//     console.log("button one was clicked! handler3");
// })

// this will remove the handler3
btn1.removeEventListener("click", handler3);
