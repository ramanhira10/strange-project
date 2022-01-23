
var obj1 = [{
    firstColumn: 'small data',
    secondColumn: 'long long text long long text long long text long long text'
}, {
    firstColumn: 'small data',
    secondColumn: 'long long text long long text long long text long long text'
}];

var obj_headings = ['First Column', 'Second Column', 'Third Column', 'Fourth Column', 'Fifth Column', 'Sixth Column'];

var obj2 = [{
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'long long text long long text long long text'
}, {
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'long long text long long text long long text'
}];

var obj3 = [{
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'small data',
    fourthColumn: 'long long text long long text long long text'
}, {
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'small data',
    fourthColumn: 'long long text long long text long long text'
}];

var obj4 = [{
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'small data',
    fourthColumn: 'small data',
    fifthColumn: 'long long text long long text long long text'
}, {
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'small data',
    fourthColumn: 'small data',
    fifthColumn: 'long long text long long text long long text'
}];

var obj5 = [{
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'small data',
    fourthColumn: 'small data',
    fifthColumn: 'small data',
    sixthColumn: 'long long text long long text long long text'
}, {
    firstColumn: 'small data',
    secondColumn: 'small data',
    thirdColumn: 'small data',
    fourthColumn: 'small data',
    fifthColumn: 'small data',
    sixthColumn: 'long long text long long text long long text'
}];

function getData () {

    return obj5;
}

function _addClass (nodeId, className) {
    let classNameToAdd = className;
    let tag = document.getElementById(nodeId);
    let classAttribute = tag.getAttribute('class');
    

    if(classAttribute) {
        classNameToAdd = classAttribute + ' ' + classNameToAdd;
    }

    tag.setAttribute('class', classNameToAdd);
}

function getColumnClass (columns) {
    let columnCount = columns.length;
    console.log(columnCount)
    let columnClass = '';

    switch (columnCount) {
        case 1:
            columnClass = 'one-column';
            break;
        case 2:
            columnClass = 'two-columns';
            break;
            
        case 3:
            columnClass = 'three-columns';
            break;
        case 4:
            columnClass = 'four-columns';
            break;
        case 5:
            columnClass = 'five-columns';
            break;
        case 6:
            columnClass = 'six-columns';
            break;
        
        default:
            columnClass = 'two-columns';
    }
    return columnClass;
}

function loadData () {
    
    var data = getData();
    var dataHeadings = obj_headings;

    var columns = Object.keys(data[0]);
    var classNames = ['first-column', 'second-column', 'third-column', 'fourth-column', 'fifth-column', 'sixth-column'];

    var dataTable = document.getElementById('dataTable');

    _addClass('dataTable', getColumnClass(columns));

    // create headings
    let headingsDiv = document.createElement('div');
    headingsDiv.setAttribute('class', 'headings');
    dataTable.appendChild(headingsDiv);

    for (let i=0;i<columns.length;i++) {
        let headingColumnDiv = document.createElement('div');
        headingColumnDiv.setAttribute('class', classNames[i])
        headingColumnDiv.innerText = dataHeadings[i];

        headingsDiv.appendChild(headingColumnDiv);
    }

    //create data rows
    let dataRowsDiv = document.createElement('div');
    dataRowsDiv.setAttribute('class', 'data-rows');
    dataTable.appendChild(dataRowsDiv);

    for (let d=0;d<data.length;d++) {
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        let currentObj = data[d];
        let columnKeys = Object.keys(currentObj);
        
        for(let ck=0;ck<columnKeys.length;ck++) {
            let dataDiv = document.createElement('div');
            dataDiv.setAttribute('class', classNames[ck]);
            
            dataDiv.innerText = currentObj[columnKeys[ck]];
            rowDiv.appendChild(dataDiv);
        }

        dataRowsDiv.appendChild(rowDiv);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    loadData();
});