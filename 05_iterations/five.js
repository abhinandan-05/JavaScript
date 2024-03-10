const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// }  )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe())

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const mycoding = [
    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]

mycoding.forEach( (item) => {

    console.log(item.languageName);
} )