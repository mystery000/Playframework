var wordCount=require('../scripts/wordCount');

describe('word count test', ()=>{
    test('to equal', ()=>{
        var result=wordCount('and and');
        expect(result).toEqual({"and":2})
    })
})