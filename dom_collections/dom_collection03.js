function myFunction() {
    const myCollection = 
    document.getElementsByTagName("p");
    for (let i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "blue";
    }
}