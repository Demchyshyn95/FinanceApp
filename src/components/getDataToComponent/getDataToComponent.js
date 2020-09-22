
export const getDataToComponent = (xxx,act='') => {

    const input = document.getElementById('inVal')
    const input2 = document.getElementById('inVal2')
    const input3 = document.getElementById('inVal3')
    const input4 = document.getElementById('inVal4')
    const input5 = document.getElementById('inVal5')
    const input6 = document.getElementById('inVal6')
    const input7 = document.getElementById('inVal7')
    const input8 = document.getElementById('inVal8')
    const input9 = document.getElementById('inVal9')
    const input10 = document.getElementById('inVal10')
    const input11 = document.getElementById('inVal11')
    const input12 = document.getElementById('inVal12')

    if(act === "!cheaked"){
    switch (xxx){
        case 'today':
            input.value = ''
            input2.value = ''
            input3.value = ''
            break;
        case 'yesterday':
            input4.value = ''
            input5.value =''
            input6.value = ''
            break;
        case 'week':
            input7.value = ''
            input8.value = ''
            input9.value = ''
            break;
        case 'month':
            input10.value = ''
            input11.value = ''
            input12.value =''
            break;
        default:''
    }
    return
    }

    for (let key of xxx.keys()) {
        if (key === 'today') {
            for (let el of xxx.values()) {
                input.value = '1 - ' + el[0].cc.toString()
                input2.value = el[0].rate.toString()
                input3.value = el[0].exchangedate.toString()
            }
        } else if (key === 'yesterday') {
            for (let el of xxx.values()) {
                input4.value = '1 - ' + el[0]?.cc.toString()
                input5.value = el[0].rate.toString()
                input6.value = el[0].exchangedate.toString()
            }
        } else if (key === 'week') {
            for (let el of xxx.values()) {
                input7.value = '1 - ' + el[0]?.cc.toString()
                input8.value = el[0].rate.toString()
                input9.value = el[0].exchangedate.toString()
            }
        } else if (key === 'month') {
            for (let el of xxx.values()) {
                input10.value = '1 - ' + el[0].cc.toString()
                input11.value = el[0].rate.toString()
                input12.value = el[0].exchangedate.toString()
            }
        }
    }
}





