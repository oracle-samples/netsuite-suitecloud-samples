

function load(){ 
    return {
        setValue,
        save,
    }
}

function setValue(){console.log('set value')}
function save(){console.log('saved record')}

export{
    load,
    setValue,
    save,
};