// document.body.append(document.createElement('textarea'));
// const button =document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
   
    const rows = text.split('\n');
    const output=[];
    for(const word of rows){
        const [first,second] = word.toLowerCase().trim().split('_');
        const word2 = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
        const word4 = word2.padEnd(20)+'✅'.repeat(rows.indexOf(word)+1);
        console.log(word4);
        output.push(word4);
    }
    console.log(output);
})