export function generateList(itemList) 
{  
    return (
        <ul>
            {itemList.map((item, index) => 
                <li key={'l-' + index.toString()}>{item}</li>
            )}
        </ul>  
    );
}